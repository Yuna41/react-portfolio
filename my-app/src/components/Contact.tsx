import { CiMail } from "react-icons/ci"
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 pt-20 mb-20 md:mb-40 md:pt-45">
      <h2 className="font-[playfair] font-bold text-4xl mb-8 md:text-5xl md:text-center md:mb-15">Contact<span className="w-[100px] h-[4px] rounded-sm bg-[#706C97] block mt-2 md:mx-auto"></span></h2>
      <p className="text-sm leading-6 mb-4 md:text-base md:leading-7 md:mb-10">I’m currently open to freelance opportunities, internships, or part-time work related to web development.<br />
        Feel free to reach out via Email or connect with me on Whatsapp.</p>
      <ul className="text-lg">
        <li className="flex gap-2 items-center mb-2">
          <CiMail />
          <a href="m&#97;i&#108;t&#111;:u&#110;c&#110;p&#114;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;om">u&#110;c&#110;p&#114;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;om</a>
        </li>
        <li className="flex gap-2 items-center">
          <FaWhatsapp />
          <a href="https://wa.me/+16729631227" target="_blank">+1) 672-963-1227</a>
        </li>
      </ul>
    </section>
  )
}

export default Contact