import { Button } from 'react-materialize';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="ContactForm">
      <div className="container">
        <div className="col-12 text-center">
          <div className="contactForm">
            <form
              className="inline-flex"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Row 1 of form */}
              <div className="row formRow">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Please enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Name"
                  ></input>
                  {errors.name && (
                    <span className="errorMessage">{errors.name.message}</span>
                  )}

                  <input
                    type="email"
                    name="email"
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className="form-control formInput"
                    placeholder="Email address"
                  ></input>
                  {errors.email && (
                    <span className="errorMessage">
                      Please enter a valid email address
                    </span>
                  )}

                  <input
                    type="text"
                    name="subject"
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Please enter a subject',
                      },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Subject"
                  ></input>
                  {errors.subject && (
                    <span className="errorMessage">
                      {errors.subject.message}
                    </span>
                  )}
                  <textarea
                    rows={3}
                    name="message"
                    {...register('message', {
                      required: true,
                    })}
                    className="form-control formInput"
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="errorMessage">Please enter a message</span>
                  )}
                  <div className="place-content-stretch w-auto sm:auto">
                    <Button
                      type="submit"
                      className="submit-btn h-24 w-auto pt-4 email-btn sm:h-1/6"
                      target="_blank"
                      rel="noreferrer"
                      href={process.env.REACT_APP_MAILCHIMP_API_URL}
                      variant="contained"
                      color="secondary"
                    >
                      <i className="text-4xl animate-pulse text-yellow-100  fas fa-2x fa-envelope-square"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
