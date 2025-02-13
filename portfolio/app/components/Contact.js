import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMessage({ ...message, [name]: value });
  };

  return (
    <>
      <section id="contact">
        <div className="w-full h-screen flex flex-col">
          <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
            Contact Me
          </h1>
          <form
            className="flex justify-center flex-col w-3/4 h-full m-auto"
            onSubmit={handleSubmit}
          >
            <div className="h-1/2 p-10 bg-slate-800 rounded-md">
              <div className="w-full my-5">
                <label htmlFor="fName" className="block">
                  Name:
                </label>
                <input
                  id="fName"
                  className="block w-1/2"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full my-5">
                <label htmlFor="email" className="block">
                  Email:
                </label>
                <input
                  id="email"
                  className="block w-1/2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full my-5">
                <label htmlFor="message" className="block">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="block w-full h-56"
                  type="text"
                  name="message"
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <input
                  id="submit"
                  type="submit"
                  className="p-2 cursor-pointer bg-slate-700 hover:bg-slate-800"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
