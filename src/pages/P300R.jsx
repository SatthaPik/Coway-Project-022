import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData7 } from './Images7';

function P300R() {
  const [sliderData, setSliderData] = useState(productData7[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData7[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData7.map((data, i) => (
            <div className='md:mr-2'>
              <img
                className={sliderData.id == i ? ' scale-75 duration-700' : ''}
                key={data.id}
                src={data.img}
                onClick={() => handleClick(i)}
                width='200'
              />
            </div>
          ))}
        </div>
        <img className='w-[600px] mb-3' src={sliderData.img} alt='' />
        <article className='font-Kanit text-gray-500 ml-10 '>
          <h2>P-300R เครื่องกรองน้ำดื่ม</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>890.00 ฿</del>
            <p className='text-cyan-500'>490.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 490.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 24,300 ฿
            </button>
            <button className='border px-2 mb-4' type='button'>
              Service Pack 3 Year 31,790 ฿
            </button>
          </div>
          <h5>P-300R เครื่องกรองน้ำดื่ม</h5>
          <p className='text-red-500'>
            Enough purified water as well as meticulous inspection service
          </p>
          <h5>P-300R is The no-power mode</h5>
          <p>
            allows you to economically use the essential water purification
            features without worries about electricity bills. The power code is
            not required so the water purifier can be installed anywhere.
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

export default P300R;
