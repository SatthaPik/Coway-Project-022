import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData5 } from './Images5';

function CHP6200N() {
  const [sliderData, setSliderData] = useState(productData5[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData5[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData5.map((data, i) => (
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
          <h2>CHP-6200N Water Purifier(Nanotrap™)</h2>
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
              Service Pack 1 Year 37,280.00 ฿ ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 45,750.00 ฿
            </button>
          </div>
          <h5>เครื่องกรองน้ำโคเวย์ รุ่น "คอร์" CHP-671R</h5>
          <p className='text-red-500'>
            รูปทรงที่ทันสมัยและสวยงาม แค่เพียงสัมผัสเดียว
            คุณก็สามารถดื่มน้ำสะอาดได้ตามความต้องการ ไม่ว่าจะเป็น 1 แก้ว, 2
            แก้ว, 1 ลิตร หรือปริมาณตามที่คุณต้องการ
            ก็กดเพียงแค่สัมผัสเดียวเท่านั้น
          </p>
          <h5>เลือกน้ำดื่มได้ง่ายตามความต้องการของคุณ</h5>
          <p>
            คุณสามารถเลือกอุณหภูมิน้ำได้ 5 ระดับ และปรับปริมาณน้ำได้ 4 รูปแบบ
          </p>
          <h5>SLEEK & SLIM DESIGN</h5>
          <p>
            ลงล็อกในทุกๆ รูปแบบการใช้งาน ด้วยดีไซน์ที่เล็กและบาง
            แต่ยังคงประสิทธิภาพเรื่องความสะอาด ไว้อย่างเต็มเปี่ยม
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

export default CHP6200N;
