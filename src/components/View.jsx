import React from 'react';
import { FaArrowCircleLeft} from 'react-icons/fa';
import './Table.css';

export default function View({firstName,lastName,email,address,phone,handleDelete}){
    
    return(
    <div>
       
        <div className='view-section'>
             <div className="table-navBar">
                <h2>View Employees</h2>
                <button className="back-button" onClick={handleDelete}> <FaArrowCircleLeft />BACK</button>
            </div>
            <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            
        );
}