import HDesc_Light from "@/shared/HDesc_light";
import HText_White from "@/shared/HText_white";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import GeloraLogo from "@/assets/logo_gelora.png"
import ParentPalLogo from "@/assets/logo_parentpal.png"
import iPlantLogo from "@/assets/logo_iplant.png"
import RetrofitLogo from "@/assets/logo_retrofit.png"
import FirebaseLogo from "@/assets/logo_firebase.png"
import ComposeLogo from "@/assets/logo_compose.png"
import TfliteLogo from "@/assets/logo_tflite.png"
import PhotoParentPal from "@/assets/img_parentpal.png"
import PhotoGelora from "@/assets/img_gelora.png"
import PhotoiPlant from "@/assets/img_iplant.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ProjectMin = ({ setSelectedPage }: Props) => {
  return (
    <section id="project" className="md:mx-52 px-5 min-h-full py-28">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Project)}>
        <div>
          <HText_White>Recent Project</HText_White>
          <HDesc_Light>that I've worked</HDesc_Light>
        </div>

        <div className="md:rounded-2xl rounded-xl p-[2px] bg-gradient-to-tr my-10 from-[#094666] via-transparent to-[#094666]">
          <div className="bg-[#47816F] rounded-2xl">
            <div className="rounded-2xl md:flex md:flex-row overflow-hidden bg-bg-global bg-cover">
              <div className="basis-3/5 p-10 bg-gradient-to-l from-transparent from-13% via-[#47816F] via-10% to-[#47816F] to-90% relative z-50 inner_shadow_iplant">
                <img className="h-20" src={iPlantLogo}/>
                <h1 className="text-xl my-10 text-white"><b>Introducing iPlant</b> - iPlant is a plant disease detection application that provides information related to diseases in potatoes and pesticides used in overcoming these diseases to users or common people who want to plant potato.</h1>
                <div className="text-xl font-bold mb-5 text-white">Combination technologies used</div>
                <div className="flex gap-7">
                  <div className="tooltip tooltip-bottom" data-tip="Kotlin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png" className="h-10" alt="Kotlin" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Retrofit">
                    <img src={RetrofitLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Firebase">
                    <img src={FirebaseLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Jetpack Compose">
                    <img src={ComposeLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Tensorflow Lite">
                    <img src={TfliteLogo} className="h-10" />
                  </div>
                </div>
              </div>
              <div className="relative flex-grow">
                <img className="transform scale-150 md:scale-[1.7] pb-0 absolute bottom-[-70px] right-[10px] rotate-[-12.866deg]" src={PhotoiPlant} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:rounded-2xl rounded-xl p-[2px] bg-gradient-to-tr my-10 from-[#094666] via-transparent to-[#094666]">
          <div className="bg-[#13294E] rounded-2xl">
            <div className="rounded-2xl md:flex md:flex-row overflow-hidden bg-bg-global bg-cover">
              <div className="basis-3/5 p-10 bg-gradient-to-l from-transparent from-13% via-[#13294E] via-10% to-[#13294E] to-90% relative z-50 inner_shadow_iplant">
                <img className="h-20" src={GeloraLogo}/>
                <h1 className="text-xl my-10 text-white"><b>Introducing iPlant</b> - iPlant is a plant disease detection application that provides information related to diseases in potatoes and pesticides used in overcoming these diseases to users or common people who want to plant potato.</h1>
                <div className="text-xl font-bold mb-5 text-white">Combination technologies used</div>
                <div className="flex gap-7">
                  <div className="tooltip tooltip-bottom" data-tip="Kotlin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png" className="h-10" alt="Kotlin" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Retrofit">
                    <img src={RetrofitLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Firebase">
                    <img src={FirebaseLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Jetpack Compose">
                    <img src={ComposeLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Tensorflow Lite">
                    <img src={TfliteLogo} className="h-10" />
                  </div>
                </div>
              </div>
              <div className="relative flex-grow">
                <img className="transform w-96 pb-0 absolute bottom-[-3rem] right-[30px]" src={PhotoGelora} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:rounded-2xl rounded-xl p-[2px] bg-gradient-to-tr my-10 from-[#094666] via-transparent to-[#094666]">
          <div className="bg-[#234293] rounded-2xl">
            <div className="rounded-2xl md:flex md:flex-row overflow-hidden bg-bg-global bg-cover">
              <div className="basis-3/5 p-10 bg-gradient-to-l from-transparent from-13% via-[#234293] via-10% to-[#234293] to-90% relative z-50 inner_shadow_iplant">
                <img className="h-20" src={ParentPalLogo}/>
                <h1 className="text-xl my-10 text-white"><b>Introducing iPlant</b> - iPlant is a plant disease detection application that provides information related to diseases in potatoes and pesticides used in overcoming these diseases to users or common people who want to plant potato.</h1>
                <div className="text-xl font-bold mb-5 text-white">Combination technologies used</div>
                <div className="flex gap-7">
                  <div className="tooltip tooltip-bottom" data-tip="Kotlin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/900px-Kotlin_Icon.png" className="h-10" alt="Kotlin" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Retrofit">
                    <img src={RetrofitLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Firebase">
                    <img src={FirebaseLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Jetpack Compose">
                    <img src={ComposeLogo} className="h-10" />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Tensorflow Lite">
                    <img src={TfliteLogo} className="h-10" />
                  </div>
                </div>
              </div>
              <div className="relative flex-grow">
                <img className="transform w-96 pb-0 absolute bottom-[-2rem] right-[2px]" src={PhotoParentPal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectMin;
