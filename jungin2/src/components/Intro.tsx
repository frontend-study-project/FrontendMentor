const Intro = () => {
  return (
    <section>
      <div className="container grid grid-cols-2 mx-auto">
        <div className="">
          <h2 className="font-bold text-7xl">More than just shorter links</h2>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="px-8 py-3 text-white rounded-[40px] bg-cl-cyan text-xl font-bold hover:bg-cl-cyan-hover">Get Started</button>
        </div>
        <div>
          <img src="/src/assets/images/illustration-working.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
