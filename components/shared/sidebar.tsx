import { information } from "@/assets/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed w-full lg:w-[13vw] lg:h-full flex flex-col justify-between lg:border-r lg:border-gray-500/20 lg:justify-start">
      {/* Header */}
      <section
        className="fixed lg:static w-full top-0 left-0 flex justify-center lg:justify-start lg:items-start flex-col items-center p-4 lg:p-8 bg-dark border-b border-gray-500/30 group
      h-[12vh]
      "
      >
        <h1 className="text-2xl lg:text-xl text-gray-300 group-hover:text-primary transition-colors duration-300">
          Cristhian Rodríguez
        </h1>
        <h3 className="text-md lg:text-sm text-gray-500 tracking-widest">
          FullStack Developer
        </h3>
      </section>
      {/* Menu */}
      <section className="fixed w-full lg:static left-0 bottom-0 bg-dark">
        <ul className="w-full flex lg:flex-col justify-between lg:justify-start border-t lg:border-t-0 border-gray-500/20">
          {information.menu.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="p-5 w-full flex justify-center lg:justify-start lg:items-center md:text-2xl lg:text-lg lg:gap-2 text-gray-500 hover:bg-gray-500/5 hover:text-white transition-colors duration-300 lg:px-8 lg:py-5 lg:border-b lg:border-gray-500/20"
            >
              <item.icon />
              <span className="lg:block hidden">{item.label}</span>
            </Link>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
