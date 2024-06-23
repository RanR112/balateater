import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import './daftar.css';

const Daftar = () => {
    const [nama, setNama] = useState('');
    const [nomor, setNomor] = useState('');
    const [kelas, setKelas] = useState('');

    const isFormValid = nama && nomor && kelas;

    const formRef = useRef(null);

    useEffect(() => {
        const form = formRef.current;
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                Swal.fire({
                    title: "Pendaftaran Dibuat",
                    text: "Harap Tunggu Informasi Selanjutnya",
                    icon: "success",
                    confirmButtonColor: '#000000'
                });
                setNama('');
                setNomor('');
                setKelas('');
                form.reset();
            });
        };

    form.addEventListener("submit", handleSubmit);

    return () => {
        form.removeEventListener("submit", handleSubmit);
        };
    }, []);

    return (
        <section className='daftar' id='Daftar'>
            <div className="title" data-aos="fade-up">
                <h1>Daftar</h1>
                <p>Silahkan isi form dibawah ini jika Anda berminat untuk bergabung</p>
            </div>
            

            <form ref={formRef} method='POST' action="https://script.google.com/macros/s/AKfycbw-kPuVeN3LL7DjZ9wWJWXaaNedhutjACHXmsGpDVln35FRicnDV8j81OMyczQxX22p/exec" data-aos="fade-up">
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
                        value={nomor}
                        onChange={(e) => setNomor(e.target.value)}
                    />
                </div>
                <div className="nomor">
                    <h3>No. WhatsApp</h3>
                    <input 
                        type="text" 
                        name='Nomor'
                        placeholder='Masukkan Nomor Anda'
                        value={kelas}
                        onChange={(e) => setKelas(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={!isFormValid}>Daftar</button>
            </form>

            <p className='infowa' data-aos="fade-up">*Informasi selanjutnya akan dikirimkan melalui WhatsApp*</p>
        </section>
    );
}

export default Daftar;
