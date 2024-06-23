import React, {useState} from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai"
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/logo.png"

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const [scroll, setScroll] = useState(false)
    // Fungsi untuk mengaktifkan navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    // Fungsi untuk menutup navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    return (
        
    <section className="navBarSection">
        <header className={scroll ? "header-scroll flex" : "header flex"}>

            <div className="logoDiv">
                <span className="logo flex">
                    <img src={logo} alt="logo" className='icon'/>
                    <span className='flex'>
                        <h1>Bala</h1>
                        <h1>Teater</h1>
                    </span>
                </span>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#Home" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#About" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#Gallery" className="navLink">Gallery</a>
                    </li>

                    <li className="navItem">
                        <a href="#Daftar" className="navLink">Daftar</a>
                    </li>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
            <MdMenu className="icon"/>
            </div>

        </header>
    </section>
    )
}

export default Navbar
