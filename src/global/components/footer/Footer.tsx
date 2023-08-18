'use client';
import { useMediaQuery } from '@react-hook/media-query';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Logo } from '../Logo';
import { SocialLinks } from './SocialLinks';
import { FooterColumn } from './FooterColumn';
import NewsletterSection from './NewsLetterSection';
import { ROUTES } from '@/app/routes';

export default function Footer() {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

  const FOOTER_CONTENT={
    social:[
     { icon:faFacebook, link:"https://www.facebook.com/clean.iraq/",},
     { icon:faTelegram, link:"https://t.me/clean_iraq?fbclid=IwAR3qE2DG8_wtoTqdEWbS0zEQW0SsuQcj-MP-aiE7WchLaJHJSB6QUe5TLUA",},
     { icon:faInstagram, link:"https://www.instagram.com/reel/CmEH_cIKTBt/?igshid=MzRlODBiNWFlZA%3D%3D",},
    ],
    nav:[{
      title:"عن سفراء النضافة",
      links:[
        {text:"من نحن",link:ROUTES.about},
        {text:"الحملات",link:ROUTES.campaigns},
        {text:"المدونة",link:ROUTES.blog},
      ]
    },
   {
      title:"ساهم",
       links:[
        {text:"انضم للحملات",link:ROUTES.join},
        {text:"اقترح حملة",link:ROUTES.campaigns},
        {text:"تواصل معنا",link:ROUTES.contact},
      ]
    }],
  }
  return (
 
  <footer className="bg-gray1 py-10 w-screen px-5 text-gray4" > 
  {!isTabletOrMobile?( <div className="grid grid-cols-6 gap-4">
   <div className='col-span-2'>
    <NewsletterSection/>
    </div>
  {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-end'>
   <FooterColumn item={item} />
  </div>
  ))}
  <div className="col-span-2 flex gap-4 flex-col items-center">
      <Logo/>
      <SocialLinks content={FOOTER_CONTENT.social}/>
  </div>

</div>):(
<div>
      <SocialLinks content={FOOTER_CONTENT.social}/>
     <FooterDivider/>
  <div className="text-center text-lg space-y-2 ">
    <NewsletterSection/>
  </div>

<FooterDivider/>
  <div className='grid grid-cols-2 gap-2'>
      {FOOTER_CONTENT.nav.map(item=>(
  <div key={item.title} className='col-span-1 text-center'>
   <FooterColumn item={item} key={item.title}/>
  </div>
  ))}
  </div>
</div>)}
      </footer>
  )
}
 const FooterDivider = () => {
  return (
     <hr className='border border-gray2 my-2'/>
  )
}
