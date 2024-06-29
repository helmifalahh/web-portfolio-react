import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { Button } from "flowbite-react";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({selectedPage, setSelectedPage}: Props) {
    const flexBetween = "flex items-center justify-end gap-10";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <nav>
            <div className={`${flexBetween} fixed top-6 z-30 w-full py-6`}>
                <div className={`${flexBetween} md:mx-52 w-5/6 px-5`}>
                    <div className={`${flexBetween} w-full gap-16`}>

                        <div className="text-xl">👋</div>

                        { isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm  backdrop-blur-md bg-gray-200/60 rounded-full py-6 h-9 w-auto px-10`}>
                                    <Link 
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Project"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>

                                <div className={`${flexBetween} gap-8`}>  
                                    <a href="mailto:helmifalah2002@gmail.com" className="text-white bg-primary hover:bg-primary-300 focus:ring-4 font-medium rounded-full text-sm px-10 py-3">Hire Me</a>
                                </div>
                            </div>
                            ) : (
                                <button
                                  className="rounded-full bg-primary-500 p-2 z-50"
                                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                  <Bars3Icon className="h-4 w-4 text-white" />
                                </button>
                              )
                            }
                    </div>
                </div>
            </div>

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[250px] bg-slate-300 drop-shadow-xl">
                
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-black" />
                    </button>
                </div>

                <div className="ml-[30%] flex flex-col gap-10 text-2xl">
                    <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Project"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="Hire Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
                </div>
      )}
        </nav>
    )
}

export default Navbar