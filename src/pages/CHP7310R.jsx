import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData6 } from './Images6';

function CHP671R() {
  const [sliderData, setSliderData] = useState(productData6[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData6[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData6.map((data, i) => (
            <div className='md:mr-2'>
              <img
                className={sliderData.id == i ? ' scale-75 duration-700' : ''}
                key={data.id}
                src={data.img}
                onClick={() => handleClick(i)}
                width='120'
              />
            </div>
          ))}
        </div>
        <img className='w-[600px] mb-3' src={sliderData.img} alt='' />
        <article className='font-Kanit text-gray-500 ml-10 '>
          <h2>CHP-7310R Water Purifier</h2>
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
              Service Pack 1 Year 47,200.00 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 60,500.00 ฿
            </button>
          </div>
          <h5>CHP-7310R Water Purifier</h5>
          <p className='text-red-500'>
            ครบทุกความต้องการ เพื่อให้ชีวิตคุณง่ายขึ้น
            เครื่องกรองน้ำที่ปรับอุณหภูมิน้ำได้ถึง 8 รดับ ด้วยฟังก์ชั่นอัจฉริยะ
            สามารถกดปริมาณน้ำได้ตามใจคุณ
          </p>
          <h5>UV Sterilisation</h5>
          <p>
            สะอาดปลอดภัยเหนือชั้น ด้วยระบบฆ่าเชื้อ UV sterilisation
            โดยจะทํางานเมื่อกดน้ําเย็น และน้ำอุณหภูมิปกติ
          </p>
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
