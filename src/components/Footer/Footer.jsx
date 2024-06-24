import React from 'react'
import Lita from '../../Assets/lita.jpg'
import Wawan from '../../Assets/pakwawan.jpg'
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
    return (
    <section className="footer" id="Footer">
        <div className="layer"></div>
        <img className="lita" src={Lita} alt="lita"/>

        <div className="content container">
            <div className="wawan flex" data-aos="fade-up">
                <div className="text grid">
                    <h3>Singgih Wirawan (Wawan)</h3>
                    <p>Halo sobat bala!!! kenalin nih, pelatih Bala Teater. Bapak Singgih Wirawan (Pak wawan) atau yang akrab dipanggil "Bapake" tinggal di Masaran, Kec. Bawang, Banjarnegara. Bapake lahir pada tanggal 2 Oktober tahun 1967. Pak wawan yang akrab dipanggil bapake telah mengajar Bala Teater sejak tahun 2015 hingga sekarang. Beliau adalah lulusan FISIP Unsoed dan juga pernah menjadi generasi pertama sekaligus pendiri Teater SiAnak FISIP Unsoed. Selain fokus untuk mengajar ilmu Teater, beliau juga selalu memotivasi terutama melalui cerita pengalaman yang telah dilalui hingga kini. Sehingga anak-anak Bala Teater tak pernah bosan untuk selalu berproses.</p>
                </div>
                <img className="imgwawan" src={Wawan} alt="Pak Wawan" />
            </div>
            <hr />
            <div className="social flex" data-aos="fade-up">
                <div className='oursocial'>
                    <h4>Our Social</h4>
                    <a href='https://www.instagram.com/teaterbalaa/'><FaInstagram className='icon'/>@teaterbalaa</a>
                    <a href='https://www.youtube.com/@balateater3794'><FaYoutube className='icon'/> Bala Teater</a>
                </div>
                <div className="contact grid">
                    <h4>Contact Us</h4>
                    <a href="https://wa.me/+6283144954104"><FaWhatsapp className='icon'/> WhatsApp</a>
                </div>
            </div>
            <div className="footerDiv flex">
                <small>&copy; 2024 Bala Teater. All Right Reserved.</small>
            </div>
        </div>
    </section>
    )
}

export default Footer