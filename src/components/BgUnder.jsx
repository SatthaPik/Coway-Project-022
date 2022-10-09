import React from 'react'
import imgBGunder from '../assets/img/Bgunder.jpg'
import imgPAlbum1 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon28.jpg'
import imgPAlbum2 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon29.jpg'
import imgPAlbum3 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon30.jpg'
import imgPAlbum4 from '../assets/img/LINE_ALBUM_รูปสินค้า Cinnamon31.jpg'
import imgContact from '../assets/img/contact-banner.jpg'

function BgUnder() {
    return (
        <div className="flex flex-col justify-center item-center" >
            <div>
            <img src={imgBGunder} alt="" />
            </div>

            <div className="grid grid-cols-2 flexjustify-center items-center">
            <img src={imgPAlbum1} alt="" />
            <img src={imgPAlbum2} alt="" />
            <img src={imgPAlbum3} alt="" />
            <img src={imgPAlbum4} alt="" />
            </div>
            <img src={imgContact} alt="" />
        </div>
    )
}

export default BgUnder