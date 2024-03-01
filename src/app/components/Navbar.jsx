"use client"
import Link from "next/link";

import Logo from '../../../public/Assets/logoipsum.svg'
import Image from "next/image";

import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import Cart from "./Cart";
import { SignInButton, SignedIn,SignedOut,UserButton } from "@clerk/nextjs";

export default function Navbar(){
    const [isExpanded, setExpanded] = useState(false)
    return(
        <header className="">
       
            <nav className="w-full flex items-center justify-between py-4 px-14 z-50"> 
                <Link href={"./"}>
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                </Link> 
                <div className="border-2 rounded-full px-4 py-1  bg-[#CA3000]">
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                        <button className="font-medium text-sm px-10 text-white">Fazer login</button>
                        </SignInButton>
                    </SignedOut>
                </div>
                <div className="flex mx-4 ">
                    <button className="flex items-center justify-center gap-y-7 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-19 md:w-19 bg-[#E53700]" onClick={()=> setExpanded(!isExpanded)} >
                        <ShoppingBag/>
                        
                        
                    </button>
                    {isExpanded && <Cart/>}
                </div>
                
            </nav>
       
        </header>
    )
}