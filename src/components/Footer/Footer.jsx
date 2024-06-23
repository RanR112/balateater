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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptate voluptas veniam, accusamus nobis repellendus! Atque optio repellendus at enim delectus aspernatur, nemo nobis rem reiciendis qui iure quod voluptate incidunt unde voluptatum dolores officiis eligendi magnam minima blanditiis recusandae placeat quibusdam! Itaque, nemo eveniet. Veniam, adipisci. Quia, laboriosam nemo.</p>
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