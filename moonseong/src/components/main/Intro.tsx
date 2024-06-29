import GetSarted from "./GetSarted";

const Intro = () => (
  <div className="w-[1440px] mx-auto bg-[url('/images/illustration-working.svg')] bg-no-repeat bg-right-top">
    <div className="w-[1100px] mx-auto pb-[240px] pt-[70px]">
      <h1 className="font-bold text-6xl text-gray-700 leading-[80px]">More than just <br/> shorter links</h1>
      <p className="text-[18px] leading-8 text-main-color mb-10">
        Build your brand's recognition and get detailed <br/> insights on how your links are prforming.
      </p>
      <GetSarted />
    </div>
  </div>
)

export default Intro;