import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData1 } from './Images1';

function P6320R() {
  const [sliderData, setSliderData] = useState(productData1[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData1[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData1.map((data, i) => (
            <div className='md:mr-2'>
              <img
                className={sliderData.id == i ? ' scale-75 duration-700' : ''}
                key={data.id}
                src={data.img}
                onClick={() => handleClick(i)}
                width='140'
              />
            </div>
          ))}
        </div>
        <img className='w-[600px] mb-3' src={sliderData.img} alt='' />
        <article className='font-Kanit text-gray-500 ml-10 '>
          <h2>P-6320R Water Purifier</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>590.00 ฿</del>
            <p className='text-cyan-500'> 490.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 490.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 24,300.00 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 33,200.00 ฿
            </button>
          </div>
          <h5>เครื่องกรองน้ำโคเวย์รุ่น "ซินนาม่อน" P-6320R</h5>
          <p className='text-red-500'>
            เครื่องกรองน้ำดีไซน์สวยจากโคเวย์ แม้จะมีขนาดที่เล็กกะทัดรัด
            แต่ก็ยังคงคุณภาพและประสิทธิภาพในเรื่องของความสะอาด
            ด้วยมาตรฐานแบรนด์อันดับหนึ่งจาก "เกาหลี"
          </p>
          <h5>ออกแบบให้ใช้งานง่าย เเละเข้ากับบ้านทุกสไตล์</h5>
          <li>ระหยัดพื้นที่</li>
          <li>ประหยัดค่าใช้จ่าย</li>
          <li>ประหยัดพลังงาน</li>
          <li>ใช้งานง่ายไม่ซับซ้อน</li>
          <li>เหมาะกับทุกวัย</li>
          <a href='https://line.me/R/ti/p/@908grhej'>
            <Button variant='primary' className='mt-12 w-96'>
              สั่งซื้อ 🛒
            </Button>
          </a>
        </article>
      </section>
      <BgUnder />
    </>
  );
}

export default P6320R;
