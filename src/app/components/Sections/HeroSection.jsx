import BottomNavbar from "../BottomNavbar";
import Cart from "../Cart";
import Shop from "../Shop";

export default function HeroSection(){
    return(
           <div className=' h-full bg-slate-600 flex flex-col justify-center px-[60px] gap-3'>
               <div className="flex justify-between gap-3">
                    <div className='bg-neutral-700 w-[50%] h-24 rounded-xl'>bento1</div>
                    <div className='bg-neutral-700 w-[50%] h-24 rounded-xl'>bento2</div>
               </div>
               <div className="flex justify-between gap-3">
                    <div className='bg-neutral-700 h-72 w-[50%] rounded-xl'>bento 3</div>
                    <div className=' h-72 w-[50%] flex justify-between gap-3'>
                        <div className='bg-neutral-700 w-[50%] rounded-xl'>bento4</div>
                        <div className='bg-neutral-700 w-[50%] rounded-xl'>bento5</div>
                    </div>
               </div>
           </div> 
    )
}