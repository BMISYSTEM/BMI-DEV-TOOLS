import { Link } from "react-router-dom";

interface props{
    text:string,
    icon:string,
    imagehidden:boolean,
    url:string
}

const ButtonImage = ({text,icon,imagehidden,url}:props) => {

  return (
    <Link to={url} className="text-slate-200 text-sm font-bold w-full 
    p-2 flex flex-row gap-2   rounded-sm items-center
     hover:bg-slate-200 hover:text-slate-700 hover:border-l-8 hover:border-indigo-500 transition-all ">
        <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: icon }} />
        {imagehidden ? 
            <p className={`   opacity-${imagehidden ? '100' : '0'} transition-opacity duration-500`}>{text}</p>
        
        : null}
    </Link>
  )
}

export default ButtonImage
