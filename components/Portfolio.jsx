import React from "react";
import Image from "next/image";
import WorkSecondaryImg from "@/components/WorkSecondaryImg";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] py-16 mx-auto text-center" id="portfolio">
      <h1 className="font-bold text-2xl p-4">Travel Photos</h1>
      <div className="grid grid-rows-none gap-2 md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1572194054392-a5fbc9f55b71?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <WorkSecondaryImg source="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80" />
        <WorkSecondaryImg source="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'" />
        <WorkSecondaryImg source="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'" />
        <WorkSecondaryImg source="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'" />
      </div>
    </div>
  );
};

export default Portfolio;
