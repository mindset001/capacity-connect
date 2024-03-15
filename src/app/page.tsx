import Image from "next/image";
import { Hero } from "./components/hero";
import {Expertise} from "./components/expertise"
import {Staff} from './components/staff'
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-white w-full flex flex-col justify-center items-center">
     <div className="w-80%">
      {/* <Header/> */}
      <Hero/>
      <Expertise/>
      <Staff/>
      <Footer/>
     </div>
      
    </main>
  );
}
