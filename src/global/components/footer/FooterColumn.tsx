 import Link from "next/link";

type FooterColumnProps = {
  item: {
    title: string;
    links: {link:string,text:string}[];
  },
};

export const FooterColumn: React.FC<FooterColumnProps> = ({ item }) => {
  return (
  <>
    <h5 className="font-semibold text-lg mb-3">{item.title}</h5>
    {item.links.map(item=>(
    <Link href={item.link} key={item.link} className='block  font-light hover:text-light hover:underline'>{item.text}</Link> 
    ))}
    </> );
};