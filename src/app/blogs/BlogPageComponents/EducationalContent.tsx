'use client'
import React, { useEffect, useRef } from 'react';
import Image ,{ StaticImageData }  from 'next/image';
import styles from "../BlogAssets/css.module.css";
import ImageSlider from "../BlogPageComponents/ImageSlider"
import Eductionalcontentpart1photo1 from "../BlogAssets/Eductionalcontentpart1photo1.jpg"
import Eductionalcontentpart1photo2 from "../BlogAssets/Eductionalcontentpart1photo2.jpg"
import Eductionalcontentpart1photo3 from "../BlogAssets/Eductionalcontentpart1photo3.jpg"
import Eductionalcontentpart1photo4 from "../BlogAssets/Eductionalcontentpart1photo4.jpg"
import Eductionalcontentpart1photo5 from "../BlogAssets/Eductionalcontentpart1photo5.jpg"
import Eductionalcontentpart1photo6 from "../BlogAssets/Eductionalcontentpart1photo6.jpg"
import Eductionalcontentpart1photo7 from "../BlogAssets/Eductionalcontentpart1photo7.jpg"
import Eductionalcontentpart2photo1 from "../BlogAssets/Eductionalcontentpart2photo1.jpg"
import Eductionalcontentpart2photo2 from "../BlogAssets/Eductionalcontentpart2photo2.jpg"
import Eductionalcontentpart2photo3 from "../BlogAssets/Eductionalcontentpart2photo3.jpg"
import Eductionalcontentpart2photo4 from "../BlogAssets/Eductionalcontentpart2photo4.jpg"
import Eductionalcontentpart2photo5 from "../BlogAssets/Eductionalcontentpart2photo5.jpg"
import Eductionalcontentpart2photo6 from "../BlogAssets/Eductionalcontentpart2photo6.jpg"
import Eductionalcontentpart3photo1 from "../BlogAssets/Eductionalcontentpart3photo1.jpg"
import Eductionalcontentpart4photo1 from "../BlogAssets/Eductionalcontentpart4photo1.jpg"
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'

interface Article{
    id:number
    src:string | StaticImageData,
    alt:string

}
interface SliderContent{
    id:number,
    title:string
    object:Article[]
}
const EducationalContent: React.FC = () => {
    const educationcontent:SliderContent[]=[
        {
            id:1,
            title:"الفرق مو بالمكان الي تروح اله النفايات، ولكن الفرق في",
            object:[
                {
                    id:1,
                    src:Eductionalcontentpart1photo1,
                    alt:"Eductionalcontentpart1photo1",
                },
                {
                    id:2,
                    src:Eductionalcontentpart1photo2,
                    alt:"Eductionalcontentpart1photo2",
                },
                {
                    id:3,
                    src:Eductionalcontentpart1photo3,
                    alt:"Eductionalcontentpart1photo3",
                },
                {
                    id:4,
                    src:Eductionalcontentpart1photo4,
                    alt:"Eductionalcontentpart1photo4",
                },
                {
                    id:5,
                    src:Eductionalcontentpart1photo5,
                    alt:"Eductionalcontentpart1photo5",
                },
                {
                    id:6,
                    src:Eductionalcontentpart1photo6,
                    alt:"Eductionalcontentpart1photo6",
                },
                {
                    id:7,
                    src:Eductionalcontentpart1photo7,
                    alt:"Eductionalcontentpart1photo7",
                },
            ]
       
        },
        {
            id:2,
            title:"الخيار الك وبايدك تصنع الفرق بامتناعك عن الاساليب الخاطئة",
            object:[
                {
                    id:1,
                    src:Eductionalcontentpart4photo1,
                    alt:"Eductionalcontentpart4photo1",
                },
            ]
       
        },
        {
            id:3,
            title:"خلونا نتعرف على مبدأ التدوير الصحيح للنفايات بأسلوب سهل",
            object:[
                {
                    id:1,
                    src:Eductionalcontentpart2photo1,
                    alt:"Eductionalcontentpart2photo1",
                },
                {
                    id:2,
                    src:Eductionalcontentpart2photo2,
                    alt:"Eductionalcontentpart2photo2",
                },
                {
                    id:3,
                    src:Eductionalcontentpart2photo3,
                    alt:"Eductionalcontentpart2photo3",
                },
                {
                    id:4,
                    src:Eductionalcontentpart2photo4,
                    alt:"Eductionalcontentpart2photo4",
                },
                {
                    id:5,
                    src:Eductionalcontentpart2photo5,
                    alt:"Eductionalcontentpart2photo5",
                },
                {
                    id:6,
                    src:Eductionalcontentpart2photo6,
                    alt:"Eductionalcontentpart2photo6",
                },
            ]
       
        },
        {
            id:4,
            title:"تدرون شكد ممكن تاثر المواد البلاستيكية على ثروتنا النهرية؟",
            object:[
                {
                    id:1,
                    src:Eductionalcontentpart3photo1,
                    alt:"Eductionalcontentpart3photo1",
                },
            ]
       
        },
        
    ]
    return (
        <section className='min-h-screen  flex flex-col items-center   p-3 pl-2 pr-2 pb-[3rem] 2xl:w-[60rem] xl:w-[60rem] lg:w-[51rem] md:w-[37rem] 2sm:w-[16.5rem]  mb-[5rem]  mx-auto mt-5 rounded-3xl bg-[#f6f6f6]'>
          <div className='w-full flex flex-col items-center mt-[5rem] '>
          <div className=' w-full h-1/6 flex justify-end   '>
         
        <h1 className='2xl:text-[2.5rem] xl:text-[2.5rem] lg:text-[2.5rem] md:text-[2rem]   2xl:w-[20rem] xl:w-[20rem] md:w-[20rem] 2sm:w-[5rem] mr-[2rem] font-bold text-[#69B184] text-right '>اخر الاحداث</h1>
    
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full "></hr>
          {(educationcontent.map(sliderContent=>{
            return(
                <div key={sliderContent.id} className='w-full 2xl:h-5/6 xl:h-5/6 lg:h-5/6 md:h-5/6 2sm:h-[10rem] flex justify-end  items-end  '>
                  <div className='flex flex-col w-full h-full'>
                  <div className='h-[18rem] w-full   flex flex-row'>
                <div className='w-6/12 2xl:ml-[1rem] xl:ml-[1rem] lg:ml-[1rem] md:ml-[1rem] 2sm:ml-[0.1rem] flex  '>
                    <div className='2xl:w-[24rem] 2xl:h-[16rem] xl:w-[24rem] lg:h-[16rem] lg:w-[22rem] xl:h-[16rem] md:w-[15rem] md:h-[15rem] 2sm:w-[9rem] 2sm:h-[6rem] 2sm:mt-[1rem]   rounded-[1rem]'>
                    <ImageSlider educationcontent={sliderContent.object} />
                    </div>
                </div>
                <div className='w-6/12 h-full flex flex-col justify-end items-end   relative'>
             <div className=' h-3/6 mt-[1.5rem] flex flex-col  items-center 2sm:ml-[1rem] 	'>
                       <h1 className='text-[#69B184] font-bold mr-[1rem]  2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem]  md:text-[1rem] 2sm:text-[0.6rem] text-center  '>{sliderContent.title}</h1>
                       <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 2xl:ml-[3rem] xl:ml-[3rem]  lg:ml-[2rem] md:mr-[1.1rem] 2sm:ml-[0rem] w-10/12	 mt-[2rem]	"></hr>
    
             </div>
    <div className='flex flex-row justify-center w-full h-3/6	mb-[2rem]   '>
            <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2sm:flex-col  justify-center  w-full h-full mt-[1rem] 2sm:ml-[1rem]'>
            <div className='flex 2xl:ml-[4rem] xl:ml-[4rem] lg:ml-[4rem] md:ml-[2rem] 2sm:ml-[1rem] h-full w-full '>
                <a href='https://www.facebook.com/AzizAhsaan2/'>< BiLogoTwitter className="2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1rem] 2sm:text-[0.6rem] mr-[0.5rem] text-black" /></a>
                <h1 className=' 2xl:text-[1.1rem] xl:text-[1.1rem] lg:text-[1.1rem] md:text-[0.9rem]  2sm:text-[0.6rem] font-bold '>clean_iraq</h1>
            </div>
            <div className='flex h-full w-full ml-[1rem] 2sm:mb-[5rem]  '>
                <a href='https://www.facebook.com/AzizAhsaan2/'>< BiLogoFacebook className="2xl:text-[2rem] xl:text-[2rem] lg:text-[2rem] md:text-[1rem] 2sm:text-[0.6rem] mr-[0.5rem] text-black  " /></a>
                <h1 className=' 2xl:text-[1.1rem] xl:text-[1.1rem] lg:text-[1.1rem] md:text-[0.9rem] 2sm:text-[0.6rem] font-bold '>clean_iraq</h1>
            </div>
    
            </div>
    </div>
    
                </div>
                
    
    
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full "></hr>
    
                  </div>
        
            
            
          </div>
          
            )
          }))}
          </div>
        
          
        
        </section>
        
      )
    }
    
export default EducationalContent;
