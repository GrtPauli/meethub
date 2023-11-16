const HomeHeroSection = () => {
  return (
    <div className='w-full'>
        <div className="relative bg-bottom bg-cover 2xl:h-[600px] h-[500px] cus-xs:h-[350px] w-full">
            <video loop muted autoPlay className="w-full h-full object-cover object-center">
                <source src="/hero.mp4" type="video/mp4"/>
            </video>

            <div className="bg-black/70 absolute h-full w-full top-0 flex flex-col items-center justify-center">
                <h1 className="font-black text-white text-center text-5xl leading-normal">
                  Scheduling And Collaboration
                  <br/> Made Easy
                </h1>
                <p className="text-white text-center text-xl font-light leading-normal">
                  MeetHub is your scheduling automation platform for eliminating the back-and-forth
                  <br/>emails to find the perfect time — and so much more.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSection

// background-color: rgb(0 0 0 / 0.4);