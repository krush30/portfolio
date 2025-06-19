import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      className="relative flex items-center c-space
  section-spacing"
    >
      <div
        className="flex flex-col items-center justify-center
        max-w-md ms-auto border border-white/10 rounded-2xl bg-primary"
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Connect</h2>
          <p className="font-normal text-neutral-400">
            If you liked my project and consider me as a potential employee or
            collaborator, feel free to reach out to me via email or LinkedIn
          </p>
        </div>
        <form action="" className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input 
            filed-input-focus"
              placeholder="Enter your full name"
              autoComplete="name"
              value={formData.name}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className="field-input 
              
            filed-input-focus"
              placeholder="ingalekrushna@gmail.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              value={formData.message}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              required
            />
          </div>
          <button
            className="w-full px-1 py-3 text-lg rounded-md
          cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
