import React from 'react'
import './home.css'

const Home = () => {
    return (
        <section className='home' id='Home'>
            <div className="bgDiv"></div>

            <div className='homeContent container flex'>
                <div className='textDiv' data-aos="fade-up">
                    <h1 className='title'>Welcome to Bala Teater</h1>
                    <h3 className='subtitle'>“Kulo Balane Njenengan, Njenengan Balane Kulo, Bala Bala Bala!!!”</h3>
                    <p>Apakah kamu siswa SMAN 1 BAWANG yang ingin bergabung dengan ekstrakurikuler tetapi belum menemukan bakat? Jangan khawatir, Bala Teater siap membantu untuk menemukan dan mengembangkan bakatmu dalam dunia teater!</p>
                    <div className='btn'>
                        <a href="#Daftar" className='btnDaftar'>
                            <p>Daftar Sekarang!</p>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
