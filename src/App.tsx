import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about"
import ProjectMin from "@/scenes/projectMin";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Footer from "./scenes/footer";
import CustomCursor from "./scenes/cursor";

function App() { 
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app min-h-screen max-w-screen-2xl items-center">
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <div className="bg-[#061E2B]">
        <ProjectMin setSelectedPage={setSelectedPage} />
      </div>
      <Footer />
    </div>
  )
}

export default App
