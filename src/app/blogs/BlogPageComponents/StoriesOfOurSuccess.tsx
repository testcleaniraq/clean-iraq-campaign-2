import React from 'react'
import Image from 'next/image'
import image from "../BlogAssets/image.png"
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter} from 'react-icons/bi'

const StoriesOfOurSuccess = () => {
    const posts=[
        {
            id:1,
            image:image,
            title:"شلون بدت قصتنا؟",
            paragraph:"بدت الفكرة وية صديقنا مرتضى من قرر يطلع ينظف نهر دجلة حت يكدر يستمتع بممنظر  الغروب من ظفاف النهر"
        },
    ]
    return (
      <section className='min-h-screen  flex flex-col items-center   p-3 pl-2 pr-2 pb-[3rem] 2xl:w-[60rem] xl:w-[60rem] lg:w-[51rem] md:w-[37rem] 2sm:w-[16.5rem]  mb-[5rem]  mx-auto mt-5 rounded-3xl bg-[#f6f6f6]'>
        <div className='w-full flex flex-col items-center mt-[5rem] '>
        <div className=' w-full h-1/6 flex justify-end   '>
       
      <h1 className='2xl:text-[2.5rem] xl:text-[2.5rem] lg:text-[2.5rem] md:text-[2rem]   2xl:w-[20rem] xl:w-[20rem] md:w-[20rem] 2sm:w-[5rem] mr-[2rem] font-bold text-[#69B184] text-right '>اخر الاحداث</h1>
  
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full "></hr>
        {(posts.map(post=>{
          return(
              <div key={post.id} className='w-full 2xl:h-5/6 xl:h-5/6 lg:h-5/6 md:h-5/6 2sm:h-[10rem] flex justify-end  items-end mt-[3rem] '>
                <div className='flex flex-col w-full h-full'>
                <div className='h-[18rem] w-full   flex flex-row'>
              <div className='w-6/12 flex  '>
                  <div className=' w-10/12 h-full ml-[0.5rem]   '>
                      <Image src={post.image} alt="morethan1000volunteer" className='2xl:w-full 2xl:h-full xl:w-full xl:h-full lg:w-full lg:h-full md:w-[14rem] md:h-[13rem] 2sm:w-[10rem] 2sm:h-[6rem] 2sm:mt-[1rem] rounded-[1rem]' />
                  </div>
              </div>
              <div className='w-6/12 h-full flex flex-col justify-end items-end   relative'>
           <div className=' h-3/6 mt-[1.5rem] flex flex-col  items-center 2sm:ml-[1rem] 	'>
                     <h1 className='text-[#69B184] font-bold mr-[1rem]  2xl:text-[1.5rem] xl:text-[1.5rem] lg:text-[1.5rem]  md:text-[1rem] 2sm:text-[0.6rem] text-right  '>{post.title}</h1>
                     <p className='text-[#c7c7c7] font-bold 2xl:text-[1rem] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem] 2sm:text-[0.4rem] mr-[0.5rem] mt-[1rem] 2xl:text-right xl:text-right lg:text-right md:text-right 2sm:text-center'>{post.paragraph}</p>
                     <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700 2xl:ml-[3rem] xl:ml-[3rem]  lg:ml-[2rem] md:ml-[0.1rem] 2sm:mr-[1rem] w-10/12	 mt-[2rem]	"></hr>
  
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
  

export default StoriesOfOurSuccess
