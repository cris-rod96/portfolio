import { information } from "@/assets/data";
import { DiApple, DiSpark } from "react-icons/di";
import { RiFacebookFill } from "react-icons/ri";
import { SiAirbnb, SiQuora, SiSamsung, SiSass } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

const SkillsSection = () => {
  return (
    <section
      className="py-5 flex flex-col items-start  overflow-x-hidden"
      id="skills"
    >
      <h2 className="text-xl text-gray-400 mb-5 px-8">Skills</h2>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] border border-gray-500/20 py-5">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none  animate-infinite-scroll">
          {information.skills.tech.map((skill, idx) => (
            <li
              key={`skil-${idx}`}
              className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
            >
              <skill.icon size={40} />
              {skill.label}
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll"
          aria-hidden="true"
        >
          {information.skills.tech.map((skill, idx) => (
            <li
              key={`skil-${idx}`}
              className="px-5 py-3 flex flex-col gap-2 justify-center items-center"
            >
              <skill.icon size={40} />
              {skill.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
