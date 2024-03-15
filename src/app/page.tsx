import Image from "next/image";
import { Hero } from "./components/hero";
import {Expertise} from "./components/expertise"
import {Staff} from './components/staff'
import Footer from "./components/footer";
import { Values } from "./components/values";
import About from './components/about'

export default function Home() {
  return (
    <main className="bg-white w-full flex flex-col justify-center items-center overflow-x-hidden">
     <div className="w-80%">
      {/* <Header/> */}
      <Hero/>
      <Expertise/>
      <About/>
      {/* <Values/> */}
      <Staff/>
      <Footer/>
     </div>
      
    </main>
  );
}
