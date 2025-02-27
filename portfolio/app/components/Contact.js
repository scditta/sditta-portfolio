import { useState } from "react";

const messageTemplate = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [message, setMessage] = useState(messageTemplate);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(message);
    await fetch(
      "https://formsubmit.co/ajax/fcc1b77e6d0681469ef60ad7deaad6d6 ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: message.name,
          email: message.email,
          message: message.message,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMessageSent(true);
        // setTimeout(setMessageSent(false), 5000);
        setMessage(messageTemplate);
        // console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {/* Update this formsubmit link once the new domain name and front-end server are officially set up */}
          <form
            className="flex justify-center flex-col w-3/4 h-full m-auto"
            onSubmit={handleSubmit}
          >
            <div className="h-fit p-10 bg-slate-800 rounded-md">
              <div className="w-full my-5">
                <label htmlFor="fName" className="block">
                  Name:
                </label>
                <input
                  id="fName"
                  className="block w-full md:w-1/2 sm:w-full p-1 text-black"
                  type="text"
                  placeholder="Name..."
                  name="name"
                  onChange={handleChange}
                  value={message.name}
                  required
                />
              </div>
              <div className="w-full my-5">
                <label htmlFor="email" className="block">
                  Email:
                </label>
                <input
                  id="email"
                  className="block w-full md:w-1/2 sm:w-full p-1 text-black"
                  type="email"
                  placeholder="Email..."
                  name="email"
                  onChange={handleChange}
                  value={message.email}
                  required
                />
              </div>
              <div className="w-full my-5">
                <label htmlFor="message" className="block">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="block w-full h-56 p-1 text-black resize-none"
                  type="text"
                  placeholder="Message..."
                  name="message"
                  onChange={handleChange}
                  value={message.message}
                  required
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
          {messageSent ? <div>Your message was successfully sent!</div> : <></>}
        </div>
      </section>
    </>
  );
}
