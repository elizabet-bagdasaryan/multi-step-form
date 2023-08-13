import { useState } from "react";

function Info(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

  
  
    return(
        <div className="bg-white rouned absolute ">
    <h2 className="text-3xl text-denim font-bold">Personal info</h2>
    <p className="text-gray">Please provide your name, email address, and phone number</p>
    <div className="mb-6">
        <label htmlFor="name" className="text-denim text-xl ">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          className="p-2 text-sm rounded"
          placeholder="e.g. Stephen King"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {nameError && (
          <span className="text-red text-xs italic">
            Required. Min 2 characters
          </span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          className="p-2 text-sm rounded"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {emailError && (
          <span className="text-red text-xs italic">
            Required. Should match Email format
          </span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="phone">Phone Number</label>
        <br />

        <input
          type="text"
          name="phone"
          className="p-2 text-sm rounded "
          placeholder="e.g. +1 234 567 890"
          value={phone}

        />
        <br />
        {phoneError && (
          <span className="text-red text-xs italic">
            Required. Should include 8-15 digits
          </span>
        )}
      </div>
        </div>
    )
}


export default Info