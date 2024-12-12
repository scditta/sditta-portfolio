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
        <div className="w-full h-screen">
          <h1 className="text-center pt-20 md:text-5xl sm:text-3xl text-xl">
            Contact Me
          </h1>
          <div className="m-auto">
            <form
              className="flex justify-center flex-col w-1/2 m-auto"
              onSubmit={handleSubmit}
            >
              <label htmlFor="fName">Name:</label>
              <input
                id="fName"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                type="text"
                name="message"
                onChange={handleChange}
              />
              <input id="submit" type="submit" className="cursor-pointer" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
