const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-5 pt-18 md:flex md:gap-10 md:items-center md:py-40">
      <div>
        <h2 className="font-[playfair] font-bold text-4xl mb-8 md:text-5xl md:mb-10">About Me<span className="w-[100px] h-[4px] rounded-sm bg-[#706C97] block mt-2"></span></h2>
        <h3 className="font-semibold text-xl mb-4 md:mb-6">I’m Yuna Shimonosono.</h3>
        <div className="text-sm leading-6 md:text-base">
          <p className="mb-3">I’m a former web engineer from Japan, currently based in Vancouver.</p>
          <p className="mb-3">With 4 years of experience in front-end development, I’m now studying full-stack skills at a tech school to expand my abilities.</p>
          <p>I’m passionate about creating responsive, accessible, and visually engaging websites.<br />When I’m not coding, you might find me playing basketball, snowboarding, or exploring local cafes.</p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#706C97] rounded-[50%] w-[64vw] h-[64vw] mx-auto mt-10 md:w-[50vh] md:h-[50vh] md:min-w-[50vh]">
        <img src="/assets/about-me.webp" alt="Yuna" className="w-[180px] md:w-[30vh]"/>
      </div>
    </section>
  )
}

export default About