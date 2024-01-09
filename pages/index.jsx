import { Inter } from "next/font/google";
import Search from "./components/Search";
import { useState } from "react";
import Circle from "./components/Circle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const borderGradient = `linear-gradient(to right, #111827 50%, white 50%)`;
  const [location, setLocation] = useState("");

  return (
    <main
      className={
        "flex bg-[#404040] w-[100vw] h-[100vh] justify-center items-center"
      }
    >
      <div className={"w-[1600px] h-[1000px] bg-[#F3F4F6] rounded-[50px] p-10 relative"}>
        <Search location={location} setLocation={setLocation} />
        <div
          className={
            "bg-[#0F141E] h-full absolute top-0 right-0 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] w-[50%] z-0"
          }
        >
          hello
        </div>
      </div>
    </main>
  );
}
