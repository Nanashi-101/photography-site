import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Instagram from "@/components/Instagram";
import { SliderData } from "@/components/SliderData";
import Image from "next/image";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero heading={"NeXCap Studio "} message={"Capture the moments that tell your story, frame by frame, with our lens of artistry and passion."} option="Book" idScroll='/'/>
      <Slider slides={SliderData}/>
      <Instagram/>
      <Footer/>
    </div>
  );
}
