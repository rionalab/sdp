import styles from './Navbar.module.scss'
import Image from 'next/image'
import Logo from 'assets/img/logo.png'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        console.log(window.scrollY);
    };

    useEffect(() => {

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const isSticky = (className) => {
        return scrollY > 150 ? styles[className] : ''
    }

    return (
        <nav className={`${styles.navbar} ${isSticky('navbarsticky')}`}>
            <div className={`${styles.logo} ${isSticky('logosticky')}`}>
                <a href="">
                    <Image alt="logo" src={Logo} />
                    <span>Logo here</span>
                </a>
            </div>
            <div className={`${styles.title} ${isSticky('titlesticky')} text-right`}>
                <p>Resourceful Indonesia</p>
            </div>
        </nav >
    )
}
