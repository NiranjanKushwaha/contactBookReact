import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import { Modal} from "react-bootstrap";

const AddContact = () => {
  const getLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem("contacts"));
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  const [show, setShow] = useState(false);
  const [records, setRecords] = useState([]);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    worknumber: "",
    homenumber: "",
  });

  useEffect(() => {
    setRecords(getLocalStorage());
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...contact, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    let docs = localStorage.getItem("contacts");
    if (docs !== null) {
      let docArray = JSON.parse(docs) || [];
      docArray = [...docArray, newRecord];
      localStorage.setItem("contacts", JSON.stringify(docArray));
    } else {
      let docArray = [newRecord];
      localStorage.setItem("contacts", JSON.stringify(docArray));
    }
    setContact({ username: "", email: "", worknumber: "", homenumber: "" });
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  return (
    <div className="addContact_page">
      <TopSection />
      <form className="form_area" onSubmit={handleSubmit} name="contactform">
        <div>
          <label htmlFor="username">Enter Name:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={contact.username}
            onChange={handleInput}
            name="username"
            required
          />
          <br />
          <label htmlFor="email">Enter email:</label>
          <br />
          <input
            type="email"
            autoComplete="off"
            value={contact.email}
            onChange={handleInput}
            name="email"
            required
          />
          <br />
          <label htmlFor="worknumber">Work Number:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={contact.worknumber}
            onChange={handleInput}
            name="worknumber"
            required
          />
          <br />
          <label htmlFor="homenumber">Home Number:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={contact.homenumber}
            onChange={handleInput}
            name="homenumber"
            required
          />
          <br /> <br />
          <input type="submit" value="Submit" className="submit" />
        </div>
      </form>
      <Modal show={show}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Woohoo, Data added Successfully</Modal.Body>
      </Modal>
    </div>
  );
};

export { AddContact };
