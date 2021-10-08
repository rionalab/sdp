import styles from './Sticky.module.scss'
import StickyItem from './StickyItem'
import Img1 from 'assets/img/aa.png'
import Img2 from 'assets/img/bb.png'
import Img3 from 'assets/img/cc.png'

import Img1A from 'assets/img/a.png'
import Img2A from 'assets/img/b.png'
import Img3A from 'assets/img/c.png'

export default function Sticky() {
    return (
        <div className={styles.sticky}>
            <StickyItem active={true} url="/" image={Img1} imageActive={Img1A} label={`About Us`} />
            <StickyItem url="/vision-mission" image={Img2} imageActive={Img2A} label={`Vision Mission`} />
            <StickyItem url="/contact" image={Img3} imageActive={Img3A} label={`Contact`} />
        </div>
    )
}
