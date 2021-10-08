import { useState } from 'react'
import styles from './Sticky.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function StickyItem({ label, image, url, imageActive }) {
    const router = useRouter()
    const active = router.pathname === url

    const handleClick = (e) => {
        const url = e.target.dataset.url
        router.push(url)
    }

    return (
        <div onClick={(e) => handleClick(e)} className={`${styles.stickyItem} ${active ? styles.active : ''}`} data-url={url}>
            <div>
                <Image alt="logo" src={active ? imageActive : image} />
                <span>{label}</span>
            </div>
        </div>
    )
}
