import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from 'react-materialize';

require('dotenv').config();

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.init(process.env.REACT_APP_USER_ID);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="">
      <label className="flex">Name</label>
      <input type="text" name="user_name" />
      <label className="flex">Email</label>
      <input type="email" name="user_email" />
      <label className="flex">Message</label>
      <textarea name="message" />
      <Button
        className="bg-white text-black h-full w-40 rounded text-3xl p-4 m-5 ml-auto text-center cursor-pointer shadow-2xl hover:bg-gray-300"
        type="submit"
        value="Send"
      >
        SEND
      </Button>
    </form>
  );
};
