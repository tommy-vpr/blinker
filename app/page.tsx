import Image from "next/image";
import Products from "./components/products/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div className="w-full bg-[#353935]">
        <div className="bg-green-600 p-2 w-full flex items-center justify-center gap-2">
              
            <div className="uppercase text-sm text-white">
              New 2G Disposables available now!
            </div>
            <button className=" border-[1px] border-white text-white px-4 py-1 
            rounded-full text-xs hover:bg-white duration-200 transition hover:text-green-600">
              Shop
            </button>
        </div> 

        <div className="w-full h-[500px] relative">
          {/* <div className="bg-green-700 w-full h-full">
           
          </div> */}
          <Image 
            alt="hero"
            fill
            sizes="100vw"
            src={'/assets/hero-3.jpg'}
            // src={'/images/hero.png'}
            style={{
              objectFit: 'cover'
            }}
            // className="object-cover"
          />
        </div>

        <div className="w-full py-24 flex justify-center items-center">
          <Products />
        </div>

        <Footer />
      </div>
  );
}
