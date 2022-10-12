import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData8 } from './Images8';

function AP1018F() {
  const [sliderData, setSliderData] = useState(productData8[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData8[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData8.map((data, i) => (
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
          <h2>AP-1018F เครื่องฟอกอากาศ</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>790.00 ฿</del>
            <p className='text-cyan-500'>690.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 690.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 15,200 ฿
            </button>
          </div>
          <h5>Smart mode</h5>
          <p className='text-red-500'>
            Smart air purifier adapts to its surroundings. Fan speeds
            automatically adjust based on the room’s air quality and lighting
            conditions.
          </p>
          <h5>Slim design</h5>
          <p>
            Slim design suits everywhere. It can be used anywhere by suction in
            the front part, and slim design enhances space efficiency.
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

export default AP1018F;
