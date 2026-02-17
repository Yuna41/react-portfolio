const Welcome = () => {
  return (
    <section id="welcome" className="bg-[url(/assets/mv-bg.svg)] bg-no-repeat bg-contain bg-position-[right_-6rem_top] md:bg-position-[right_-14rem_top_-10rem]">
      <div className="max-w-5xl mx-auto px-5 h-screen flex flex-col justify-center md:flex-row md:items-center md:gap-4">
        <div>
          <p className="text-[#B6D3DE] font-bold text-xl mb-4">Frontend developer</p>
          <h1 className="font-[playfair] font-bold text-5xl mb-6 md:text-6xl md:mb-8">Hello, my name<br />is Yuna Shimonosono</h1>
          <p className="text-sm leading-6 md:text-base md:leading-8">I'm a frontend developer with a passion for clean code and thoughtful design.<br />
            Bringing ideas to life with HTML, CSS, JavaScript, and a user-first mindset.</p>
        </div>
        <div className="hidden md:block">
          <img src="/assets/mv-me.png" alt="Yuna" />
        </div>
      </div>
    </section>
  )
}

export default Welcome