const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 pt-20 md:pt-35">
      <h2 className="font-[playfair] font-bold text-4xl mb-8 md:text-5xl md:text-center md:mb-15">Projects<span className="w-[100px] h-[4px] rounded-sm bg-[#706C97] block mt-2 md:mx-auto"></span></h2>
      <ul>
        <li className="rounded-xl overflow-hidden md:flex">
          <div className="bg-[#E3E6F6] p-5 md:w-1/2 md:order-2 md:px-8 md:py-20"><img src="/assets/project02.webp" alt="" /></div>
          <dl className="bg-white text-[#393846] p-5 md:w-1/2 md:px-14 md:py-20 md:flex md:justify-center md:flex-col">
            <dt className="font-[playfair] font-semibold text-xl mb-2 md:bold md:text-4xl md:mb-5">React Portfolio</dt>
            <dd>
              <p className="text-sm mb-3 md:text-base md:mb-5">A personal site built with HTML, CSS, and JavaScript. Fully responsive and optimized for all screen sizes.</p>
              <div><a href="/" target="_blank" className="font-medium px-6 py-2 border rounded-4xl inline-block">View Project</a></div>
            </dd>
          </dl>
        </li>
        <li className="rounded-xl overflow-hidden mt-8 md:mt-20 md:flex">
          <div className="bg-[#E3E6F6] p-5 md:w-1/2 md:px-8 md:py-20"><img src="/assets/project02.webp" alt="" /></div>
          <dl className="bg-white text-[#393846] p-5 md:w-1/2 md:px-14 md:py-20 md:flex md:justify-center md:flex-col">
            <dt className="font-[playfair] font-semibold text-xl mb-2 md:text-4xl md:mb-5">Static Portfolio</dt>
            <dd>
              <p className="text-sm mb-3 md:text-base md:mb-5">A personal site built with HTML, CSS, and JavaScript. Fully responsive and optimized for all screen sizes.</p>
              <div><a href="/" target="_blank" className="font-medium px-6 py-2 border rounded-4xl inline-block">View Project</a></div>
            </dd>
          </dl>
        </li>
        <li className="rounded-xl overflow-hidden mt-8 md:mt-20 md:flex">
          <div className="bg-[#E3E6F6] p-5 md:w-1/2 md:order-2"><img src="/assets/project03.webp" alt="" /></div>
          <dl className="bg-white text-[#393846] p-5 md:w-1/2 md:px-14 md:py-20 md:flex md:justify-center md:flex-col">
            <dt className="font-[playfair] font-semibold text-xl mb-2 md:text-4xl md:mb-5">Project Name</dt>
            <dd>
              <p className="text-sm mb-3 md:text-base md:mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, doloremque? Voluptatem beatae ullam consequuntur vel repudiandae praesentium, rerum explicabo quisquam.</p>
              <div><a href="/" target="_blank" className="font-medium px-6 py-2 border rounded-4xl inline-block">View Project</a></div>
            </dd>
          </dl>
        </li>
      </ul>
    </section>
  )
}

export default Projects