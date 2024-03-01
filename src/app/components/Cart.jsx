// components/DraggableComponent.js
'use client'
import React from "react";

import { XCircle } from "lucide-react";



export default function Cart() {

    //useDragger("drag")
  return (
    <div  style={{ position: "absolute", top:-500, cursor: "pointer" }} className="h-80 w-[342px] bg-white shadow-sm rounded-lg z-50 ">
      <div id="drag" className="p-2 flex justify-between"><span className="font-bold text-sm">SHOP CART</span><XCircle /></div>
      <div className=" h-full">
        
      </div>
    </div>
  );
}


