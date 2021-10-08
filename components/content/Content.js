import Image from 'next/image'
import styles from './Content.module.scss'

export default function Content({ children, image }) {
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <Image alt="image" src={image} />
            </div>
            <div className={styles.description}>
                {children}
            </div>
        </div>
    )
}
