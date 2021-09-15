import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";

const ViewContacts = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem("contacts")));
  }, []);
  const deleteContact = (record, index) => {
    setRecords(records.filter((el) => el !== record));
    records.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(records));
  };

  return (
    <>
      <TopSection />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Work Number</th>
            <th scope="col">Home Number</th>
          </tr>
        </thead>
        <tbody>
          {records &&
            records?.map((record, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{record.username}</th>
                  <td>{record.email}</td>
                  <td>{record.worknumber}</td>
                  <td>{record.homenumber}</td>
                  <td>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteContact(record, index)}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ViewContacts;
