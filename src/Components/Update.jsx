import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import { useParams,useHistory  } from "react-router-dom";

const Update = (props) => {
  let { id } = useParams();
  let history = useHistory();
  const [contact, setContact] = useState({
    username: "",
    email: "",
    worknumber: "",
    homenumber: "",
  });

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("contacts"));
    setContact(list[id]);
  }, [id]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const Update = (e) => {
    e.preventDefault();
    const newRecord = { ...contact, id: new Date().getTime().toString() };
    let list = JSON.parse(localStorage.getItem("contacts"));
    list[id] = newRecord;
    localStorage.setItem("contacts", JSON.stringify(list));
    setContact({ username: "", email: "", worknumber: "", homenumber: "" });
    alert('updated Successfully');
    history.push('/view')
  };
  return (
    <div className="addContact_page">
      <TopSection />
      <form className="form_area" onSubmit={Update} name="contactform">
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
            contentEditable
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
            contentEditable
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
          <input type="submit" value="Update" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Update;
