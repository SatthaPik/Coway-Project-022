import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BgUnder from '../components/BgUnder';

import { productData9 } from './Images9';

function AP1018F() {
  const [sliderData, setSliderData] = useState(productData9[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = productData9[index];
    setSliderData(slider);
  };

  return (
    <>
      <section className='container flex flex-col lg:flex-row  justify-center items-center py-5 h-full'>
        <div className='img-menu flex md:flex mb-3 w-auto lg:grid'>
          {productData9.map((data, i) => (
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
          <h2>AP-1516D เครื่องฟอกอากาศ</h2>
          <p className=' text-lg flex '>
            <del className='mr-3'>890.00 ฿</del>
            <p className='text-cyan-500'>790.00 ฿</p>
          </p>
          <hr />
          <div className='botton'>
            <button className='border px-2 mb-2' type='button'>
              5y SUBSCRIBE รายเดือน(coway care) 790.-
            </button>
            <button className='border px-2 mb-2' type='button'>
              Service Pack 1 Year 18,410 ฿
            </button>
          </div>
          <h5>Coway Storm Air Purifier</h5>
          <p className='text-red-500'>
            Air care customized for each situation through 3-step
            multi-circulation function
          </p>
          <h5>Real time air quality display</h5>
          <p>
            The color of the air outlet allows you to check the indoor air
            quality in real time
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
