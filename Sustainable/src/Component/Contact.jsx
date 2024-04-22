import React, { useState } from "react";
import "../App.css";
import '../Styles/contact.css';

import { db, ref, push } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    push(ref(db, 'contacts'), {
      name: name,
      email: email,
      message: message,
      selectedPackage: selectedPackage,
    })

      .then(() => {
        setLoader(false);
        alert("Din besked er blevet sendt👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setSelectedPackage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>KONTAKT OS</h1>

      <div className="input-group">
        <div className="input-container">
          <label>Navn</label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label>E-mail</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="package-options">
        <div className="package-option">
          <input
            type="radio"
            name="package"
            value="Package 1"
            checked={selectedPackage === "Package 1"}
            onChange={(e) => setSelectedPackage(e.target.value)}
          />
          FULL-SERVICE
        </div>
        <div className="package-option">
          <input
            type="radio"
            name="package"
            value="Package 2"
            checked={selectedPackage === "Package 2"}
            onChange={(e) => setSelectedPackage(e.target.value)}
          />
          STANDARD-PAKKEN
        </div>
        <div className="package-option">
          <input
            type="radio"
            name="package"
            value="Package 3"
            checked={selectedPackage === "Package 3"}
            onChange={(e) => setSelectedPackage(e.target.value)}
          />
          SERVICE-PAKKEN
        </div>
      </div>

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <div className="button-container">
        <button
          type="submit"

        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
