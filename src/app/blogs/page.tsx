'use client'
import React,{useState} from 'react'
import HeroSectionBlogPage from "../blogs/BlogPageComponents/HeroSectionBlogPage"
import LatestUpdates from './BlogPageComponents/LatestUpdates'
import StoriesOfOurSuccess from "../blogs/BlogPageComponents/StoriesOfOurSuccess"
import EducationalContent from "../blogs/BlogPageComponents/EducationalContent"
import newspaper from "../blogs/BlogAssets/newspaper.png"
import styles from "../blogs/BlogAssets/css.module.css"
import Image ,{ StaticImageData }  from 'next/image';
import growth from "../blogs/BlogAssets/growth.png"
import onlinelearning from "../blogs/BlogAssets/onlinelearning.png"
interface Object{
  id:number,
  Title:string,
  image:string | StaticImageData,
}
const Page = () => {
  const fields = [
    {
      id: 1,
      Title: "اخر الاحداث",
      image: newspaper,
    },
    {
      id: 2,
      Title: "قصص نجاحنا",
      image: growth
    },
    {
      id: 3,
      Title: "محتوى تعليمي",
      image: onlinelearning
    }
  ];
  const [choosefield, setChooseField] = useState<Object>(
    {
      id: 1,
      Title: "اخر الاحداث",
      image: newspaper,
    },
  );

  return (
    <main className="min-h-screen pt-27 box-border	scroll-smooth	overflow-x-hidden	">
      <section id='Home' className={`h-screen flex flex-col justify-center items-center relative bg-[#faf4f2]   w-[98%] md:w-[90%] mx-auto mt-20 rounded-3xl mb-[9rem]  ${styles.curved}`}>
        <h1 className='2xl:text-[4rem] xl:text-[4rem] lg:text-[4rem] md:text-[3rem] 2sm:text-[2rem] text-white mb-[2rem]'>مدونة سفراء النظافة</h1>
        <p className='2xl:text-[0.9rem] xl:text-[0.9rem] lg:text-[0.9rem] md:text-[0.8rem] 2sm:text-[0.7rem] text-white mb-[9rem] text-center'>اتعرف على اخر احداث الحملة و قصص نجاحها  وحتواها التعليمي</p>
        <div className='h-[7rem] w-[70rem]   absolute top-[100%] z-20 flex flex-col justify-center items-center '>
          <h1 className='2xl:text-[2.2rem] xl:text-[2.2rem] lg:text-[2.2rem] md:text-[1.6rem]  mt-[8rem] text-secondary font-bold'>اخر المحتوى الذي تود اظهارة</h1>
          <div className='flex mt-[1rem]'>
          {fields.map(field => (
          <button
            key={field.id}
            onClick={() => setChooseField(field)}
            className={ field.id===choosefield.id?`2xl:w-[14rem] 2xl:h-[9rem] xl:w-[14rem] xl:h-[9rem] lg:w-[14rem] lg:h-[9rem] md:w-[11rem] md:h-[8rem] 2sm:w-[5rem] 2sm:h-[5.5rem] rounded-[1rem] ml-[1rem] bg-[#436a91] `:"2xl:w-[12rem] 2xl:h-[8rem] xl:w-[12rem] xl:h-[8rem] lg:w-[12rem] lg:h-[8rem] md:w-[9rem] md:h-[7rem] 2sm:w-[4.5rem] 2sm:h-[4.5rem] rounded-[1rem] h-full ml-[0.8rem] bg-[#b2b2b2]"}
          >
          <div className='flex flex-col justify-center items-center'>
              <h1 className='2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.5rem] 2sm:text-[0.7rem] text-center text-white '>{field.Title}</h1>
              <Image src={field.image} alt='Image' className='2xl:h-[4rem] 2xl:w-[4rem] xl:h-[4rem] xl:w-[4rem] lg:h-[4rem] lg:w-[4rem] md:h-[3rem] md:w-[3rem] 2sm:h-[2rem] 2sm:w-[2rem]' />
          </div>
          </button>
        ))}
          </div>
        
          </div>
      </section>
      {choosefield?.id === 1 && <LatestUpdates />}
      {choosefield?.id === 2 && <StoriesOfOurSuccess />}
      {choosefield?.id === 3 && <EducationalContent />}
    </main>
  );
}

export default Page;

