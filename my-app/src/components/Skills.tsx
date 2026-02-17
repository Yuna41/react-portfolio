import { FaCss3Alt, FaHtml5, FaNode, FaReact, FaRegStar, FaStar, FaWordpress } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"

const Skills = () => {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 pt-20 md:pt-45 md:mb-20">
      <h2 className="font-[playfair] font-bold text-4xl mb-8 md:text-5xl md:text-center md:mb-15">Skills<span className="w-[100px] h-[4px] rounded-sm bg-[#706C97] block mt-2 md:mx-auto"></span></h2>
      <ul className="flex flex-wrap gap-4">
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">HTML</span>
          <FaHtml5 className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">CSS</span>
          <FaCss3Alt className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">JavaScript</span>
          <IoLogoJavascript className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">WP</span>
          <FaWordpress className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">React</span>
          <FaReact className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">Next.js</span>
          <RiNextjsFill className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">Tailwind CSS</span>
          <RiTailwindCssFill className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
        </li>
        <li className="bg-white text-[#393846] rounded-xl p-4 flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-sm">Node.js</span>
          <FaNode className="text-4xl" />
          <div className="flex gap-0.5 mt-2 text-xs text-[#706C97] md:text-base"><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>
        </li>
      </ul>
    </section>
  )
}

export default Skills