import { useState, useEffect } from "react";
import { Resend } from "resend";



export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  
  const   sendEmail = async({name, email, message}: {name: string, email: string, message: string}): Promise<void> =>{
     const resend = new Resend(import.meta.env.PUBLIC_RESEND_API);
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: ["silverwolf0607@gmail.com"],
      subject: message,
      html: "<strong>It works!</strong>",
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  }


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const {name, email, message} = Object.fromEntries(formData);
    console.log(name, email, message);
    sendEmail(name, email, message);
    setLoading(false);
};

  return (
    <form action="" className="py-2 " onSubmit={handleSubmit}>
      <div className="bg-slate-500 flex flex-col gap-3 p-4 rounded-lg">
        <label htmlFor="name">Enter your name: </label>
        <input
          className="border-2 border-slate-500 rounded-md "
          type="text"
          name="name"
          id="name"
          required
        />
        <label htmlFor="email">Enter your email: </label>
        <input
          className="border-2 border-slate-500 rounded-md "
          type="email"
          name="email"
          id="email"
          required
        />
        <textarea
          className="border-2 border-slate-500 rounded-md resize-none"
          name="message"
          cols="30"
          rows="15"
          id="message"
        ></textarea>
        <button className=" text-white rounded-lg mx-auto border-emerald-900 border-2 bg-teal-800 p-2 " type="submit" >Send</button>
      </div>
    </form>
  );
}
