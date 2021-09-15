import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import ViewContacts from "./ViewContacts";

const AddContact = () => {
  const getLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem("contacts"));
    if (list) {
      console.log(list);
      return list;
    } else {
      return [];
    }
  };

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
      console.log(JSON.parse(docs));
      docArray = [...docArray, newRecord];
      localStorage.setItem("contacts", JSON.stringify(docArray));
    } else {
      let docArray = [newRecord];
      localStorage.setItem("contacts", JSON.stringify(docArray));
    }
    setContact({ username: "", email: "", worknumber: "", homenumber: "" });
  };

  const deleteContact = (record,index) => {
    setRecords(records.filter((el) => el !== record));
    records.splice(index,1);
    localStorage.setItem('contacts', JSON.stringify(records));
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

      <div>
        <div className="contactMain">
          <div className="contactTable">
            <div>username</div>
            <div>email</div>
            <div>worknumber</div>
            <div>homenumber</div>
          </div>
          {records &&
            records?.map((record, index) => {
              return (
                <div className="showDataStyle" key={index}>
                  <div>{record.username}</div>
                  <div>{record.email}</div>
                  <div>{record.worknumber}</div>
                  <div>{record.homenumber}</div>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteContact(record,index)}
                  ></i>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export {AddContact};
