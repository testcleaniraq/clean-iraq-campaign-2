import { useMediaQuery } from '@react-hook/media-query';
import OutlinedButton from '../OutlinedButton';

export default function NewsletterSection(){
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const  NEWSLETTER_CONTENT={
      title:"ابق على اطلاع",
      subtitle:"اكتب بريدك الالتروني لتصلك اخبار الحملة",
      inputPlaceholder:'example@gmail.com',
      buttonText:"اشترك"
    }
  return (
    <>
    <div className={`space-y-2 ${isTabletOrMobile?'text-center':'text-end'}`}>
      <h5 className="font-semibold text-lg mb-3">{NEWSLETTER_CONTENT.title}</h5>
      <p className="text-xs text-gray3">{NEWSLETTER_CONTENT.subtitle}</p>
     <div className='flex gap-4 justify-center md:justify-end'>
       <OutlinedButton text={NEWSLETTER_CONTENT.buttonText} onClick={()=>{}}/>
       <input
        className="bg-gray2 rounded-md px-2 text-start placeholder:text-sm"
        type="email"
        placeholder={NEWSLETTER_CONTENT.inputPlaceholder}
      />
     </div>
    </div>
   </> 
  );
};
