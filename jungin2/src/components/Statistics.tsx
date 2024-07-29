const Statistics = () => {
  return (
    <section className="bg-cl-grayish-violet-light">
      <div className="container pt-24 mx-auto text-center pb-28">
        <h2 className="text-5xl font-bold mb-7">Advanced Statistics</h2>
        <p className="text-cl-grayish-violet">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>
        <ul className="flex items-center text-left">
          <li className="relative pt-20 bg-white rounded-lg px-7 pb-11">
            <img src="/src/assets/images/icon-brand-recognition.svg" alt="" className="absolute top-0 p-6 -translate-y-1/2 rounded-full bg-cl-dark-violet" />
            <strong className="text-xl">Brand Recognition</strong>
            <p className="mt-5 text-cl-grayish-violet">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </li>
          <span className="inline-flex h-[10px] w-9 bg-cl-cyan shrink-0"></span>
          <li className="relative pt-20 bg-white rounded-lg px-7 pb-11 mt-[88px]">
            <img src="/src/assets/images/icon-detailed-records.svg" alt="" className="absolute top-0 p-6 -translate-y-1/2 rounded-full bg-cl-dark-violet" />
            <strong className="text-xl">Detailed Records</strong>
            <p className="mt-5 text-cl-grayish-violet">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </li>
          <span className="inline-flex h-[10px] w-9 bg-cl-cyan shrink-0"></span>
          <li className="relative pt-20 bg-white rounded-lg px-7 pb-11 mt-[196px]">
            <img src="/src/assets/images/icon-fully-customizable.svg" alt="" className="absolute top-0 p-6 -translate-y-1/2 rounded-full bg-cl-dark-violet" />
            <strong className="text-xl">Fully Customizable</strong>
            <p className="mt-5 text-cl-grayish-violet">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
