import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import Content from 'components/content/Content'
import Sticky from 'components/sticky/Sticky'

export default function Layout({ children, image }) {
    return (
        <div>
            <Navbar />
            <Sticky />
            <Content image={image}>
                {children}
            </Content>
            <Footer />
        </div>
    )
}
