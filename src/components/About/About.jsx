import React from 'react'
import './about.css'
import about1 from "../../Assets/about1.jpg"
import about2 from "../../Assets/about2.jpg"

const About = () => {
    return (
        <section className='about' id='About'>
            <div className="firstP flex" data-aos="fade-up">
                <div className='P1'>
                    <h1>About Us</h1>
                    <p>Bawang Lakon Teater atau yang biasa disingkat Bala Teater merupakan salah satu ekstrakurikuler yang mendalami bidang seni teater di SMA Negeri 1 Bawang, Banjarnegara, Jawa Tengah. Bala Teater terbagi menjadi beberapa divisi inti, seperti Penaskahan, Keaktoran & Penyutradaraan, Musik, Wardrobe & Makeup. Bala Teater dibimbing oleh Singgih Wirawan yang kerap kali dipanggil "Pak Wawan" atau "Bapake".</p>
                </div>
                <img src={about1} alt="" />
            </div>
            <div className="secondP flex" data-aos="fade-up">
                <img src={about2} alt="" />
                <p>Ekstrakulikuler Teater sebelumnya sudah ada sejak 2010 namun ada beberapa hal yang menyebabkan ekstrakurikuler ini sempat padam, kemudian pada tahun 2016 dibentuk kembali dengan nama Bala Teater. Pada tahun 2017, Bala Teater pertama kali mengikuti perlombaan Festival Teater Pelajar Tingkat Kabupaten Banjarnegara dan meraih Penyaji Terbaik 1 yang pada saat itu membawakan naskah drama "Dilarang Bernyanyi di Kamar Mandi".</p>
            </div>
        </section>
    )
}

export default About
