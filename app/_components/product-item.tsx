
import {Prisma} from "@prisma/client";
import Image from "next/image";
import { calculateProductToralPrice, formatCurrency } from "../_helpers/price";
import { ArrowDown01Icon } from "lucide-react";

interface ProductItemProps {
    product: Prisma.ProductGetPayload<{
        include:{
            restaurant:{
                select:{
                    name:true;
                },
            },
        },
    }>;
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="w-[150px] min-w-[150px] space-y-2">
            
            <div className="h[150px] w-full relative">
                <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill className="rounded-lg object-cover shadow-md" //fill 100% da div pai
                />

                {product.discountPercentage &&(
                    <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
                        <ArrowDown01Icon size={12} />
                        <span className="text-sm font-semibold">
                            {product.discountPercentage}% </span>
                    </div>
                )}
                

            </div>
            <div>
                
               <h2 className="truncate text-sm ">{product.name}</h2>
               <div className="flex items-center gap-1">
                 <h3 className="font-semibold">
                   {formatCurrency(calculateProductToralPrice(product))}
                 
                 </h3>
                 {product.discountPercentage > 0 && (
                    <span className="text-xs text-muted-foreground line-through">
                        {formatCurrency(Number(product.price))}
                    </span>
                 )}
               </div>

               <span className="block text-xs text-muted-foreground ">
                {product.restaurant.name} 
                </span>
              
            </div>

        </div>
     );
}
 
export default ProductItem;