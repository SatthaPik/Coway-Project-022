import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData4 } from './Images4';

function CHP671R() {
  const [sliderData, setSliderData] = useState(productData4[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData4[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData4.map((data, i) => (
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
          <h2>CHP-671R เครื่องกรองน้ำดื่ม</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>1,490.00 ฿</del>
            <p className='text-cyan-500'>1,390.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 1,390.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 43,200.00 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 57,400.00 ฿
            </button>
          </div>
          <h5>เครื่องกรองน้ำโคเวย์ รุ่น "คอร์" CHP-671R</h5>
          <p className='text-red-500'>
            LARGER IS BETTER Durable. Portable. Big capacity. The Core is
            smartly designed to fulfil your needs when it comes to consuming
            highly purified water.
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

export default CHP671R;
