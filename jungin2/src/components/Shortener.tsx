import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLinks } from "../redux/dataSlice"

const Shortener = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError(true);
      return;
    }

    const shortenLink = async () => {
      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "long_url": url,
          "domain": "bit.ly",
          "group_guid": import.meta.env.VITE_API_GUID
        })
      });

      if (!response.ok) {
        setError(true);
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      dispatch(setLinks({ "longUrl": data.long_url, "shortUrl": data.link }));
      setUrl("");
      setError(false);
    }

    shortenLink();
  };

  return (
    <section className="bg-gradient-to-t from-cl-grayish-violet-light from-50% to-white to-50%">
      <div className=" relative container mx-auto px-16 py-12 bg-[url('./assets/images/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-cl-dark-violet rounded-xl">
        <form className="flex gap-6" onSubmit={handleSubmit}>
          <input
            className={`px-8 py-6 text-xl rounded-xl grow outline-none ${error ? "border-2 border-cl-red" : ""}`}
            type="text"
            value={url}
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <button className="py-3 text-xl font-bold text-white px-9 rounded-xl bg-cl-cyan hover:bg-cl-cyan-hover">Shorten It!</button>
        </form>
        {error && <span className="absolute italic bottom-4 text-cl-red">Please add a link</span>}
      </div>
    </section>
  );
};

export default Shortener;
