import Hero from './Hero'
import CardProduc from './Produc-One'
import CardProduc2 from './Produc-Two'
import Bgunder from '../assets/img/Bgunder.jpg'
import imgContact from '../assets/img/contact-banner.jpg'
import img28 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon28.jpg'
import img29 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon29.jpg'
import img30 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon30.jpg'
import img31 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon31.jpg'








function Index() {

    return (
        <>
            <Hero/>
            <CardProduc/>
            <CardProduc2/>
                <img src={Bgunder} alt="bg" />
                <div className="grid grid-cols-2">
                    <img src={img28} alt="bg" />
                    <img src={img29} alt="bg" />
                    <img src={img30} alt="bg" />
                    <img src={img31} alt="bg" />
                </div>
                <a href="https://www.facebook.com/profile.php?id=100086475185295">
                <img className="w-full" src={imgContact} alt="bg" />
                </a>
        </>
    );
}

export default Index