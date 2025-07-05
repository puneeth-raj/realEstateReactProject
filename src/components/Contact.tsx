import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de**cb--08570d04****56f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center 
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hiddenn"
      id="Contact">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form onSubmit={onSubmit}action="" className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="Name" id="" placeholder='Your Name' required/>
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="Email" id="" placeholder='Your Email' required/>
          </div>
        </div>
        <div className='my-6 text-left'>
          message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none' name="Message" id=""  placeholder='Message' required></textarea>
        </div>

        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result? result : "Send Messages"}</button>
      </form>
    </div>
  )
}

export default Contact