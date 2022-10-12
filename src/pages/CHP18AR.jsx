import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData2 } from './Images2';

function CHP264L() {
  const [sliderData, setSliderData] = useState(productData2[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData2[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData2.map((data, i) => (
            <div className='md:mr-2'>
              <img
                className={sliderData.id == i ? ' scale-75 duration-700' : ''}
                key={data.id}
                src={data.img}
                onClick={() => handleClick(i)}
                width='250'
              />
            </div>
          ))}
        </div>
        <img className='w-[600px] mb-3' src={sliderData.img} alt='' />
        <article className='font-Kanit text-gray-500 ml-10 '>
          <h2>CHP-18AR เครื่องกรองน้ำดื่ม</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>1,090.00 ฿</del>
            <p className='text-cyan-500'>990.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 990.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 34,400.00 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 43,600.00 ฿
            </button>
          </div>
          <h5>Coway Water Purifier CHP-18AR Villaem</h5>
          <p className='text-red-500'>
            ตัวเครื่องกรองน้ำทำงานด้วยการกรองระบบ RO (Reverse Osmosis)
            ซึ่งถือเป็นการกรองที่สะอาดที่สุด สามารถกำจัดเชือไวรัส แบคทีเรีย
            โลหะหนัก สารหนู สารปรอท
            สารที่ก่อให้เกิดมะเร็งที่มีความละเอียดในการกรอง 0.0001
            อีกทั้งยังมีการป้องกันการเกิดแบคทีเรียในถังเก็บน้ำอย่างมีประสิทธิภาพ
            ด้วยไส้กรองเซรามิค
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

export default CHP264L;
