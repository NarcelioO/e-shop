'use client'
import { useState } from "react"
import Image from "next/image"
export default function ProducImage({product, fill}){

    const [loading, setLoading] = useState(true)
    return fill ?(
        <Image 
        src={product.image}
        width={200}
        height={200}
        alt={product.title}
        className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        onLoad={()=> setLoading(false)}
        />
    ) : (
        <Image 
        src={product.image}
        width={400}
        height={700}
        alt={product.title}
        className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        onLoad={()=> setLoading(false)}
        />
    )
}