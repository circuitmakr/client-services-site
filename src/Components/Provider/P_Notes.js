import React from "react";
import Header from "./P_Header";
import "./P_Notes.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Notes() {
  const [providerItem, setProviderItem] = useState();
  const [providerList, setProviderList] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [buttonLabel, setButtonLabel] = useState("Add Assignment");
  const provider_id = useSelector(
    (store) => store.authReducer.user.provider_id
  );
  console.log("provider_id", provider_id);

  const handleChange = (e) => {
    setProviderItem(e.target.value);
  };
  const handleOnClick = () => {
    setProviderList((pl) => (pl = [...providerList, providerItem]));
  };
  const handleDelete = (i) => {
    const filteredItems = providerList.filter((item, index) => index !== i);
    setProviderList(filteredItems);
  };
  const handleSendtoClient = () => {
    setClientList([]);
    setProviderList([]);
  };

  const handleSubmit = () => {
    axios
      .post(`api/provider/assignments/${provider_id}`, {
        client_id: 11,
        providerList,
      })
      .then((res) => {
        setClientList(res.data);
        console.log(res.data);
      });
  };
  const handleEdit = (i) => {
    console.log("provider at index", providerList[i]);
    const editList = providerList.map((item, index) =>
      index === i ? providerItem : item
    );
    setProviderList(editList);
    console.log("editList", editList);
    setButtonLabel("Add Assignment");
  };
  
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="p_CN_tiles_container">
        <div className="p_CN_greeting">
          <h1>{`Session Follow Up`}</h1>
        </div>
        <div className="p_CN_intro_text p_CN_tile">
          <h2>Assignments</h2>
          <div className="p_CN_Assignment_adder provider_input">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Create Items Here..."
            ></input>
          </div>
          <div className="p_CN_Assignment_adder provider_btnContainer">
            <button onClick={handleOnClick}>
              <h3>{`${buttonLabel}`}</h3>
            </button>
          </div>
          <div className="p_CN_Assignment_adder client_btnContainer">
            <select className="client_select">
              <option value="client 1">Client 1</option>
              <option value="client 1">Client 2</option>
              <option value="client 1">Client 3</option>
              <option value="client 1">Client 4</option>
              <option value="client 1">Client 5</option>
            </select>
          </div>
          <div className="p_CN_Assignment_adder client">
            <button>
              <h3>Remove All</h3>
            </button>
            <button onClick={handleSendtoClient}>
              <h3>Send to Client</h3>
            </button>
          </div>
          <div className="p_CN_Assignment_display">
            {providerList.map((e, index) => {
              return (
                <table className="assignments">
                  <tr>
                    <>{e}</>
                    <td>
                      <button
                        onClick={() => handleEdit(index)}
                        className="Edit"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              );
            })}
          </div>
          <div className="p_CN_Assignment_display client">
                <ul>
                {clientList.map((item,i) => {
                  return( 
                  <li>{item.assignments}</li>)}
                  )}
                  </ul>
          </div>
          <div onClick={handleSubmit} className="p_CN_Submit">
            <i class="fa-solid fa-table-list"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
