import { Component } from "react";
// import './Display2.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import 'C:/Users/Hemant Kaushik/kalu/node_modules/bootstrap/dist/css/bootstrap.min.css'
function Display2() {
    const [user, setItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost/display.php').then((result) => {
            console.log(result)
            setItem(result.data);
           
        })

    }, []);
    return (
        <div>
            <body>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="text-center mb-4"><h2>Display Bundle Lists</h2></h4>
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-primary">
                                            <tr>
                                                <th>ID</th>
                                                {/* <th>year</th> */}
                                                <th>branch</th>
                                                <th>STUDENT_ID</th>
                                                <th>subject</th>
                                                <th>FILE</th>
                                                <th>EVALUATE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                user.map((res) => 
                                                    <tr>
                                                        <th scope="row" class="scope" >{res.id}</th>
                                                        <td>{res.year}</td>
                                                        <td>{res.branch}</td>
                                                        <td>{res.subject}</td>
                                                        <td>{res.add_file}</td>
                                                        <td><a href="#" class="btn btn-primary">Evaluate</a></td>
                                                    </tr>
                                                )
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="js/main.js"></script>
            </body>
        </div>
    );
}
export default Display2;
