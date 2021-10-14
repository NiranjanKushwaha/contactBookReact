import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Modal} from "react-bootstrap";

const AddSection = () => {
  const gettinLocalStorageData = () => {
    let list = JSON.parse(localStorage.getItem("contacts"));
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  const [visible, setVisible] = useState(false);
  const [allData, setAllData] = useState([]);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    worknumber: "",
    homenumber: "",
  });

  useEffect(() => {
    setAllData(gettinLocalStorageData());
  }, []);

  const handlingEnterData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...contact, id: new Date().getTime().toString() };
    setAllData([...allData, newRecord]);
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
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <div className="AddPage">
      <Header />
      <form className="addDataForm" onSubmit={handleSubmit} name="addForm">
        <div>
          <label htmlFor="username">Enter Name:</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            value={contact.username}
            onChange={handlingEnterData}
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
            onChange={handlingEnterData}
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
            onChange={handlingEnterData}
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
            onChange={handlingEnterData}
            name="homenumber"
            required
          />
          <br /> <br />
          <div className="text-center submit-btn">
            <button type="submit"  className="submit">submit Data</button>
          </div>
        </div>
      </form>
      <Modal show={visible}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Woohoo, Data added Successfully</Modal.Body>
      </Modal>
    </div>
  );
};

export { AddSection };
