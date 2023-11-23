const HomeHeroSection = () => {
  return (
    <div className="w-full">
      <div className="cus-xs:h-[350px] relative h-[500px] w-full bg-cover bg-bottom 2xl:h-[600px]">
        <video loop muted autoPlay className="h-full w-full object-cover object-center">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 px-5 flex h-full w-full flex-col items-center justify-center bg-black/70">
          <h1 className="text-center text-5xl cus-sm:text-3xl cus-sm2:text-2xl cus-xs:!text-xl font-black leading-normal text-white">
            Scheduling And Collaboration
            <br /> Made Easy
          </h1>
          <p className="text-center text-xl cus-sm:text-lg cus-sm2:text-base cus-xs:!text-sm font-light leading-normal text-white">
            MeetHub is your scheduling automation platform for eliminating the back-and-forth
            <br />
            emails to find the perfect time — and so much more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;

// background-color: rgb(0 0 0 / 0.4);
