import { information } from "@/assets/data";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

const HeaderSection = () => {
  return (
    <section className="py-5 flex flex-col items-start border-b border-gray-500/20 px-8">
      <div className="flex justify-between items-start w-full">
        <div className="relative w-24 h-24 rounded-xl overflow-hidden mb-5">
          <img
            src="/profile.jpg"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>

        <button className="flex justify-center gap-2 items-center px-3 py-2 bg-green-950 text-green-500 rounded-lg">
          <GoDotFill />
          Open to work
        </button>
      </div>
      <div className="space-y-3 w-full mb-10">
        <h1 className="text-2xl text-wrap text-gray-300">
          Hi, I'm Cristhian. I'm{" "}
          <span className="text-primary">FullStack Developer</span> && Backend
          Lover
        </h1>
        <p className="text-sm tracking-widest text-gray-500 font-light text-balance">
          I am a seasoned full-stack developer with 5 years of programming
          experience and 1 year in web development. Dedicated to crafting
          innovative and efficient solutions.
        </p>
      </div>

      <div>
        <ul className="flex gap-3 items-center">
          {information.socials.map((social) => (
            <Link
              href={social.href}
              key={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-gray-500/30 rounded-lg text-gray-500 hover:bg-gray-500/5 hover:text-white transition-colors duration-300"
            >
              <social.icon size={14} />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeaderSection;
