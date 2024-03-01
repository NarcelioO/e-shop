import ProducImage from "./ProductImage"
import { ProductType } from "../../types/ProductType"
type ProductProps = {
    product : ProductType;
}
export default function Product({product} :ProductProps){
    return(
        
        <div className="h-96 w-6">
           <div><ProducImage product={product}fill /></div>
           <div>{product.name}</div>
           <div>{product.description}</div>
           <div><p>{product.price}</p></div>
           <button className="" >BUY</button>
        </div>
        
    )
}