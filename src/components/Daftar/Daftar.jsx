import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './daftar.css';

const Daftar = () => {
    const [nama, setNama] = useState('');
    const [nomor, setNomor] = useState('');
    const [kelas, setKelas] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const isFormValid = nama && nomor && kelas;

    const formRef = useRef(null);

    const checkAndSubmit = async (formData) => {
        try {
            const response = await fetch(formRef.current.action + '?type=check', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            setIsLoading(false);

            if (result.result === 'not_found') {
                submitData(formData);
            } else if (result.result === 'found') {
                Swal.fire({
                    title: 'Anda Sudah Terdaftar',
                    text: 'Apakah Anda ingin mengubah informasi Anda?',
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#000000",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ya, ubah dengan yang baru",
                    cancelButtonText: "Tidak"
                }).then(async (confirmation) => {
                    if (confirmation.isConfirmed) {
                        setIsLoading(true);
                        submitData(formData, true);
                    } else {
                        resetForm();
                        setIsSubmitting(false);
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Terjadi kesalahan, silakan coba lagi.',
                icon: 'error',
                confirmButtonColor: '#000000'
            });
        }
    };

    const submitData = async (formData, isUpdate = false) => {
        try {
            const response = await fetch(formRef.current.action + (isUpdate ? '?type=update' : ''), {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            setIsLoading(false);

            if (result.result === 'success' || result.result === 'update') {
                Swal.fire({
                    title: result.result === 'success' ? 'Pendaftaran Dibuat' : 'Data Berhasil Diperbarui',
                    text: 'Harap Tunggu Informasi Selanjutnya',
                    icon: 'success',
                    confirmButtonColor: '#000000'
                });
                resetForm();
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Terjadi kesalahan, silakan coba lagi.',
                    icon: 'error',
                    confirmButtonColor: '#000000'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Terjadi kesalahan, silakan coba lagi.',
                icon: 'error',
                confirmButtonColor: '#000000'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setNama('');
        setNomor('');
        setKelas('');
        formRef.current.reset();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        await checkAndSubmit(formData);
    };

    useEffect(() => {
        isLoading || isSubmitting ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

        const form = formRef.current;
        form.addEventListener("submit", handleSubmit);

        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
    });

    return (
        <section className='daftar' id='Daftar'>
            <div className="title" data-aos="fade-up">
                <h1>Daftar</h1>
                <p>Silahkan isi form dibawah ini jika Anda berminat untuk bergabung</p>
            </div>

            <form ref={formRef} method='POST' action="https://script.google.com/macros/s/AKfycbxppzucG-idDMNHl86WdIZpEmygkL-b5PqEHEdhvOQzaNAXPI0Qk_XdNS04oKTo5Nh1/exec" data-aos="fade-up">
                <div className="nama">
                    <h3>Nama</h3>
                    <input 
                        type="text" 
                        name='Nama'
                        placeholder='Masukkan Nama Anda'
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                </div>
                <div className="kelas">
                    <h3>Kelas</h3>
                    <input 
                        type="text" 
                        name='Kelas'
                        placeholder='Masukkan Kelas Anda'
                        value={kelas}
                        onChange={(e) => setKelas(e.target.value)}
                    />
                </div>
                <div className="nomor">
                    <h3>No. WhatsApp</h3>
                    <input 
                        type="text" 
                        name='Nomor'
                        placeholder='Masukkan Nomor Anda'
                        value={nomor}
                        onChange={(e) => setNomor(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!isFormValid || isSubmitting}>Daftar</button>
            </form>

            {isLoading && <div className="load"><div className="loader"></div></div>}

            <p className='infowa' data-aos="fade-up">*Informasi selanjutnya akan dikirimkan melalui WhatsApp*</p>
        </section>
    );
};

export default Daftar;