import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopSection from "./TopSection";

const ViewContacts = () => {
    let renderArr=[];
  const [records, setRecords] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [output, setOutput] = useState([]);
  useEffect(() => {
    setRecords(JSON.parse(localStorage.getItem("contacts")));
  }, []);
  const deleteContact = (record, index) => {
    setRecords(records.filter((el) => el !== record));
    records.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(records));
  };
  const SearchHandle=(e)=>{
    setSearchText(e.target.value);
    searchFunc(e.target.value);
  }

  const searchFunc=(value)=>{
    const filterArr = [];
    records.forEach((el) => {
       if (el.username.includes(value) || el.email.includes(value)||el.worknumber.includes(value) || el.homenumber.includes(value)) {
        filterArr.push(el);
      }
    })
    setOutput(filterArr);
  }
  renderArr = output.length > 0 ? output : records;
  return (
    <>
      <TopSection />
      <div className="text-center mt-2 mb-3">
      <input type="text" value={searchText} onChange={SearchHandle} className='search'/><button onClick={()=>searchFunc(searchText)}><i className="fas fa-search"></i></button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Work Number</th>
            <th scope="col">Home Number</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {renderArr &&
            renderArr?.map((record, index) => {
              return (
                <tr key={index}>
                  <td>{record.username}</td>
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
                  <td>
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

export default ViewContacts;
