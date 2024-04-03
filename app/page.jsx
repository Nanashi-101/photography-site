import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero heading={"NeXCap Studio "} message={"Capture the moments that tell your story, frame by frame, with our lens of artistry and passion."}/>
      <Slider slides={SliderData}/>
    </div>
  );
}
