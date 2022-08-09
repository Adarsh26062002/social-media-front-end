import React, { useState } from 'react'
import './style.css'
import Message from './message';
import list from './messageApi';
import NewConnections from './newconnections';

const Main = () => {
  let [listOfPeople, setListOfPeople] = useState(list);
  let filterList = (event) => {
    let searchValue = event.target.value;
    let l = list;
    if(searchValue !== "") {
      l = list.filter((el) => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    }
    setListOfPeople(l);
  }
  return (
    <>
      <div className="main-container">
        <div className="new-connections-container">
          <div className="new-connection-header">
            <p>New Connections <span>2</span></p>
          </div>
          <div className="wrapper">
            <NewConnections />
          </div>
        </div>
        <div className="messages-container">
          <div className="message-header">
            <div className="txt"><p>Messages <span>1</span></p></div>
            <div className="search-field">
              <input type="text" id="search" placeholder='🔍Search'  onChange={(event) => filterList(event)} />
            </div>
          </div>
          <div className="message-box-container">
            <Message listOfPeople={listOfPeople}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main