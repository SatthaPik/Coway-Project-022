import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData3 } from './Images3';

function P6320R() {
  const [sliderData, setSliderData] = useState(productData3[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData3[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid h-'>
          {productData3.map((data, i) => (
            <div className='md:mr-2'>
              <img
                className={sliderData.id == i ? ' scale-75 duration-700' : ''}
                key={data.id}
                src={data.img}
                onClick={() => handleClick(i)}
                width='auto'
              />
            </div>
          ))}
        </div>
        <img className='w-[150rem] mb-3' src={sliderData.img} alt='' />
        <article className='font-Kanit text-gray-500 ml-10 '>
          <h2>CHP-264L เครื่องกรองน้ำดื่ม</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>890.00 ฿</del>
            <p className='text-cyan-500'> 790.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 790.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 32,900.00 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 39,800.00 ฿
            </button>
          </div>
          <h5>เครื่องกรองน้ำโคเวย์รุ่น CHP-264L (นีโอ-พลัส)</h5>
          <p className='text-red-500'>
            ระบบประหยัดพลังงานอัตโนมัติ : ด้วยเซ็นเซอร์ตรวจวัดระดับแสง
            ปรับเข้าโหมดกลางคืนอัตโนมัติเมื่อห้องมืดหรือมีแสงน้อย
            ถังเก็บน้ำขนาดพอดี :
            ด้วยถังน้ำขนาดพอดีที่มาพร้อมกับประสิทธิภาพการทำความเย็น
            ทำให้แน่ใจได้ว่าคุณจะมีน้ำเย็นเพียงพอต่อความต้องการ
            ระบบป้องกันแบคทีเรียเจริญเติมโต :
            ป้องกันการเกิดแบคทีเรียในถังเก็บน้ำอย่างมีประสิทธิภาพด้วยแอนตี้แบคทีเรีย
            (Anti-Bacterial Filter)
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
