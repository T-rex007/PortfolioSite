import { useState, useRef} from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_2dywlk2",
        "template_kaaun1r",
        form.current,
        "M-UORZAXJYOlcSh0l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset()
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder="Email" />
          <textarea placeholder="Message" name ="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will get back to you ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
