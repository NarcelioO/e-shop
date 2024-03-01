'use client'
import Link from "next/link"
import { Raleway } from "next/font/google"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import Cart from "./Cart";
const raleway = Raleway({weight:'900', subsets: ["latin"] });

export default function BottomNavbar(){
    const [isExpanded, setExpanded] = useState(false)
    const pathname = usePathname()
    console.log(pathname)
    
    
    return(
        <header className=" py-6 fixed w-full bottom-0 flex items-center justify-center">
            <nav className={`${raleway.className} links flex gap-7 text-black font-bold bg-white p-6 rounded-[20px] uppercase `}>
                
                    <Link href={'/'} className={`${pathname === "/" ? "text-[#E53700] font-semibold" : "text-black"}`} >
                      Home
                    </Link>
                    <Link href={'/Shop'} className={`${pathname === "/Shop" ? "text-[#E53700] font-semibold" : "text-black"}`} >
                       Shop
                    </Link>
                    <Link href={"#"} >
                        About us
                    </Link>
                    <Link href={"#"}>
                        contact
                    </Link>
                
               
            
            </nav>
            <div className="flex ">
                    <button className="flex items-center justify-center gap-y-7 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-19 md:w-19 bg-[#E53700]" onClick={()=> setExpanded(!isExpanded)} >
                        <ShoppingBag/>
                        
                        
                    </button>
                    {isExpanded && <Cart/>}
                </div>
            
        </header>
    )
}