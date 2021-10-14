import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ShowSection = () => {
  let mappArrData = [];
  const [allData, setAllData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [output, setOutput] = useState([]);
  useEffect(() => {
    setAllData(JSON.parse(localStorage.getItem("contacts")));
  }, []);
  const deleteContact = (data, index) => {
    setAllData(allData.filter((el) => el !== data));
    allData.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(allData));
  };
  const handleSearchInput = (e) => {
    setTextInput(e.target.value);
    searchFunc(e.target.value);
  };

  const searchFunc = (value) => {
    const filterArr = [];
    allData.forEach((el) => {
      if (
        el.username.includes(value) ||
        el.email.includes(value) ||
        el.worknumber.includes(value) ||
        el.homenumber.includes(value)
      ) {
        filterArr.push(el);
      }
    });
    setOutput(filterArr);
  };
  mappArrData = output.length > 0 ? output : allData;
  return (
    <>
      <Header />

      <div className="search-area">
        <div><input
          type="text"
          value={textInput}
          onChange={handleSearchInput}
          className="searchField"
          placeholder="search here ..."
        /></div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Home Number</th>
            <th scope="col">Work Number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mappArrData &&
            mappArrData.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.homenumber}</td>
                  <td>{data.worknumber}</td>
                  <td className="action_options">
                    <span
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteContact(data, index)}
                    ></span>
                    <Link className="fas fa-pen" to={`/update/${index}`}></Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ShowSection;
