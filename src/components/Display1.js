import { Component } from "react";
import './Display.css';
import { useState, useEffect } from 'react';
import axios from "axios";
// import { useResolvedPath } from "react-router-dom";
function Display() {

  // const [show,setShow]=useState(false);
  // const handleClose=()=>setShow(false);
  // const handleShow=()=>setShow(false)

  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch('http://localhost/answer.php').then(res => res.json()).then((result) => {
      setItem(result);
      console.log(result)
    })

  }, []);
  return (
    <div>
      <div className="row">
        <div className="d_flex my-4 text-uppercase">
          <h1>Display bundle Lists</h1>
        </div>
        <table className="table table-borderded">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Year</th>
              <th>Branch</th>
              <th>Subject</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {
              item.map(item=>(
                <tr key={item.id}>
                  <td>{item.year}</td>
                  <td>{item.branch}</td>
                  <td>{item.subject}</td>
                  <td>{item.add_file}</td>
                </tr>
              ))
            }
          </tbody>

        </table>

      </div>






      {/* <div className="container">
        <h1 >Display Bundles Screen</h1>
        <table className="style" >
          {user.map((res) =>
          <tr>
            <td></td>
            <td></td>
            <td>
              <span className="action_btn">
                <a href="#">Evaluate</a>
              </span>
            </td>
          </tr>
          )}
        </table>
      </div> */}
    </div >
  );
}
export default Display;
