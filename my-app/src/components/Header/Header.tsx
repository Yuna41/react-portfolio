import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoIosClose } from "react-icons/io"
import useScrollPosition from "../../hooks/useScrollPosition"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollDistance = useScrollPosition()
  const screenHeight = window.outerHeight

  const handleToggleOpenMenu = () => {
    setIsMenuOpen(true)
  }
  const handleToggleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`flex justify-between items-center md:w-full fixed top-0 left-0 z-50 p-3 md:px-5 ${scrollDistance > screenHeight && "md:bg-[#00000033]"}`}>
      <button className="p-2 cursor-pointer md:hidden" onClick={handleToggleOpenMenu}><CiMenuFries /></button>
      <div className={`${isMenuOpen ? "fixed top-0 left-0 w-full h-screen bg-[#111] p-3 transition translate-x-0" : "fixed top-0 left-0 w-full h-screen bg-[#111] p-3 transition translate-x-[-100vw]"} md:static md:translate-none md:h-auto md:bg-transparent md:p-0 md:max-w-6xl md:mx-auto`}>
        <button className="text-3xl cursor-pointer md:hidden" onClick={handleToggleCloseMenu}><IoIosClose /></button>
        <div className="px-2 py-8 md:flex md:justify-between md:items-center md:py-0">
          <div className="font-[Lobster_Two] text-lg italic text-xl pb-5 border-b mb-8 md:border-none md:pb-0 md:mb-0"><a href="#welcome" onClick={handleToggleCloseMenu}>yuna</a></div>
          <nav>
            <menu className="flex gap-8 text-sm flex-col md:flex-row">
              <li><a href="#welcome" onClick={handleToggleCloseMenu}>Home</a></li>
              <li><a href="#about" onClick={handleToggleCloseMenu}>About</a></li>
              <li><a href="#projects" onClick={handleToggleCloseMenu}>Projects</a></li>
              <li><a href="#skills" onClick={handleToggleCloseMenu}>Skills</a></li>
              <li><a href="#work" onClick={handleToggleCloseMenu}>Work</a></li>
              <li><a href="#contact" onClick={handleToggleCloseMenu}>Contact</a></li>
            </menu>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header