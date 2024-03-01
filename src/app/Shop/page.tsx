import Product from "../components/Product"
import { ProductType } from "../../types/ProductType"
import { XCircle } from "lucide-react"
import Stripe from "stripe"

async function getProducts() : Promise<ProductType[]>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const products = await stripe.products.list()

    const formatedProducts = await Promise.all(
        products.data.map(async(product)=>{
            const price = await stripe.prices.list({
                product: product.id,
            })

            return{
                id: product.id,
                price: price.data[0].unit_amount,
                name:product.name,
                image:product.images[0],
                description:product.description,
                currency:price.data[0].currency,

    
            }
        })

       
    )
    return formatedProducts;
 
} 

export default async function Shop(){

    const products = await getProducts()
    return(
        <div className="min-[320px]:p-2 sm:p-4 md:p-3 lg:px-[60px] ">
          
                
               
                   {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                   ))}
       

        </div>
    )
}