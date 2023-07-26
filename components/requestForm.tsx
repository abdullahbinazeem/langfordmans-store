import React from "react";

const RequestForm = () => {
  return (
    <div className="w-full md:w-[70%] m-auto my-40">
      <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Product Requests
        </h1>
        <form
          action="https://formsubmit.co/abdullahbinazeem06@gmail.com"
          method="POST"
        >
          <div className="block md:flex w-full gap-x-10">
            <ContactInputBox
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <ContactInputBox
              type="text"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="block md:flex w-full gap-x-10">
            <ContactInputBox
              type="text"
              name="phone"
              placeholder="Your Phone"
            />
            <ContactInputBox
              type="text"
              name="budget"
              placeholder="Your budget"
            />
          </div>
          <ContactTextArea
            row="2"
            placeholder="Product Size and Color"
            name="size & color"
            defaultValue=""
          />

          <ContactTextArea
            row="6"
            placeholder="Your Message"
            name="message"
            defaultValue=""
          />
          <div>
            <button
              type="submit"
              className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactTextArea = ({ row, placeholder, name, defaultValue }: any) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name, ...props }: any) => {
  return (
    <>
      <div className="mb-6 flex-grow">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className=" border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          {...props}
        />
      </div>
    </>
  );
};
export default RequestForm;
