import Image from "next/image";
import { Hero } from "./components/hero";
import {Expertise} from "./components/expertise"
import {Staff} from './components/staff'
import Footer from "./components/footer";
import { Values } from "./components/values";
import About from './components/about'
import { Floating } from "./components/floating";
import Header from "./components/navbar";

export default function Home() {
  return (
    <main className="bg-white w-full flex flex-col justify-center items-center overflow-x-hidden">
      <Floating/>
     <div className="w-80%">
      <div className="block md:hidden">
      <Header/>
      </div>
      <Hero/>
      
      <Expertise/>
      <div id="about">
      <About/>
      </div>
      <div id="values">
      <Values/>
      </div>
      <div id="team">
      <Staff/>
      </div>
      <div id="contact">
      <Footer/>
      </div>
     </div>
      
    </main>
  );
}
