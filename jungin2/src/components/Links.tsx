const Links = () => {
  return (
    <section className="pt-7 bg-cl-grayish-violet-light">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6 bg-white rounded-lg px-7">
          <span className="text-xl">long url</span>
          <div className="flex items-center gap-6">
            <span className="text-xl text-cl-cyan">short url</span>
            <button className="px-8 py-3 font-bold text-white rounded-lg bg-cl-cyan hover:bg-cl-cyan-hover">Copy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
