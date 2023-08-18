import React from 'react'
import Image from 'next/image';
import HeroSectionphoto1 from "../Assets/HeroSectionphoto1.jpg"
import HeroSectionphoto2 from "../Assets/HeroSectionphoto2.jpg"
import HeroSectionphoto3 from "../Assets/HeroSectionphoto3.jpg"
import HeroSectionphoto4 from "../Assets/HeroSectionphoto4.jpg"
import styles from "../Assets/css.module.css"
import bannerphoto from "../Assets/bannerphoto.jpg"
import recycling from "../Assets/recycling.png"
const HeroSection = () => {
  return (
    <div id='Home' className={`h-screen flex flex-col justify-center items-center relative bg-[#faf4f2]  w-[98%] md:w-[90%] mx-auto mt-20 rounded-3xl ${styles.curved}`}  >
    <div className='mb-[10rem] flex flex-col items-center justify-center gap-10'>
      {/* <Image src={recycling} alt='photo' className='xl:w-[9rem] xl:h-[9rem] lg:w-[9rem] lg:h-[9rem] md:w-[7rem] md:h-[7rem] 2sm:w-[4rem] 2sm:h-[4rem] absolute xl:left-[24%] xl:top-[22%] lg:left-[21%] lg:top-[22%] md:left-[20%] md:top-[24%] 2sm:top-[27%] 2sm:left-[7%] text-white m-10' /> */}
        <h1 className='text-white text-xl md:text-6xl font-bold'> من هم سفراء النضافة</h1>
        <blockquote className='text-white text-center text-md md:text-3xl '>خطوة خطوة ...سوه سوه</blockquote>
    </div>
      <div className='flex absolute xl:top-[60%] xl:left-[60%] lg:top-[60%] lg:left-[55%] md:top-[61%] md:left-[36%] 2sm:top-[62%] 2sm:left-[26%] z-10  ' >
        <div className='xl:w-[12rem] xl:h-[13rem] lg:w-[10rem] lg:h-[14rem] lg:mt-[9%]  md:w-[10rem] md:h-[10rem] md:mt-[17%] 2sm:w-[6rem] 2sm:h-[6rem] 2sm:ml-[-13%]  2sm:mt-[40%]   '>
          <Image  src={HeroSectionphoto3} alt='photo' className='w-full h-4/5 border-[0.09rem] border-white    ' />
          <h1 className='w-full h-full text-center text-[0.9rem] ml:text-[0.8rem] 2sm:text-[0.5rem] text-black font-bold '>العطاء يبتسم: الشخص الكبير يلهم بالنموذج والتفاني</h1>

        </div>
        <div className='xl:w-[12rem] xl:h-[13rem] lg:w-[10rem] lg:h-[14rem] lg:mt-[9%] lg:ml-[4rem] md:w-[10rem] md:h-[10rem] md:mt-[17%] md:ml-[6%] 2sm:w-[6rem] 2sm:h-[6rem]  2sm:mt-[40%]  2sm:ml-[5%]  '>
          <Image  src={HeroSectionphoto2} alt='photo' className='w-full h-4/5 border-[0.09rem] border-white' />
          <h1 className='w-full h-full text-center   ml:text-[0.8rem] 2sm:text-[0.5rem]  text-black font-bold'>روح التطوع تتجسد في طفل نموذجي</h1>

        </div>
      </div>

    </div>

  )
}

export default HeroSection
