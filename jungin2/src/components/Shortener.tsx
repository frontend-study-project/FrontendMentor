import React, { useState } from "react";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      alert("Empty");
    } else {
      const shortenLink = async () => {
        const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
          method: 'POST',
          mode: "cors",
          headers: {
            'Authorization': `Bearer 6e6aa014800159bf4a5c3fea22639226e1fa1a43`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "long_url": url,
            "domain": "bit.ly",
            "group_guid": "Bo7l3cfxjXl"
          })
        });
        const data = await res.json();
        console.log(data);

        setLinks((prev) => [
          ...prev,
          {
            long: data.long_url,
            short: data.link,
          },
        ])
      }

      shortenLink();
    }
  };

  return (
    <section className="bg-gradient-to-t from-cl-grayish-violet-light from-50% to-white to-50%">
      <div className="container mx-auto px-16 py-12 bg-[url('./assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-cl-dark-violet rounded-xl">
        <form className="flex gap-6" onSubmit={handleSubmit}>
          <input
            className="px-8 py-6 text-xl rounded-xl grow"
            type="text"
            value={url}
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <button className="py-3 text-xl font-bold text-white px-9 rounded-xl bg-cl-cyan hover:bg-cl-cyan-hover">Shorten It!</button>
        </form>
      </div>
    </section>
  );
};

export default Shortener;
