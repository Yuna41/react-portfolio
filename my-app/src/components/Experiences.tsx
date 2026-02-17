import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const Experiences = () => {
  return (
    <section id="work" className="max-w-5xl mx-auto px-5 pt-20 md:pt-45 md:mb-20">
      <h2 className="font-[playfair] font-bold text-4xl mb-8 md:text-5xl md:text-center md:mb-15">Work Experience<span className="w-[100px] h-[4px] rounded-sm bg-[#706C97] block mt-2 md:mx-auto"></span></h2>
      <ul>
        <li className="border-b-1 border-[#B6D3DE] pb-4 md:pb-8">
          <h3 className="font-semibold text-xl mb-3 md:text-3xl md:mb-4">Front-end Engineer</h3>
          <div>
            <p className="mb-4 md:text-lg md:mb-6">World Wide System Corporation / Japan</p>
            <p className="mb-4 bg-[#706C97] text-white inline-block px-4 py-0.5 md:mb-5">2020 - 2024</p>
          </div>
          <ul className="text-sm md:text-base">
            <li className="relative pl-4 mb-1"><MdKeyboardDoubleArrowRight className="text-[#B6D3DE] absolute top-0.5 left-0" />Built and maintained websites for various clients</li>
            <li className="relative pl-4 mb-1"><MdKeyboardDoubleArrowRight className="text-[#B6D3DE] absolute top-0.5 left-0" />Worked closely with designers to implement responsive UIs</li>
            <li className="relative pl-4 mb-1"><MdKeyboardDoubleArrowRight className="text-[#B6D3DE] absolute top-0.5 left-0" />Used HTML, CSS, JavaScript, and WordPress daily</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Experiences