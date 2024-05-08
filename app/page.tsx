import Image from "next/image";
import { ChevronRightIcon, Search } from "lucide-react";
import Header from "./_components/header";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";

const Home = () =>{

  
  return(
    <>
    <Header />
   <div className="px-5 pt-6">
   <Search />
   </div>

  <div className="px-5 pt-6">
   <CategoryList />
   </div>

   <div className="px-5 pt-6">
   <Image 
   src="/promo-banner-01.png"
   alt="ate 30% de desconto em pizza"
   height={0}
   width={0}
   className="h-auto w-full object-contain"
   sizes="100vw"
   quality={100}

   />
   </div>

    <div className="space-y-4 pt-6">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-semibold">Pedidos Recomendados</h2>
        <Button 
        variant="ghost" 
        className="h-fit p-0 text-primary hover:bg-transparent">
          Ver todos
          <ChevronRightIcon size={16} />
          </Button>
      </div>

      <ProductList />

    </div>


    </>
  );
}

export default Home;