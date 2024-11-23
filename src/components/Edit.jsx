import React from 'react';
import { FaArrowCircleLeft} from 'react-icons/fa';
import './Table.css';

export default function View({firstName,lastName,email,address,phone,handleDelete,handleChange,handleSubmit,id}){
    
    return(
    <div>
        
        <div className='edit-section'>
             <div className="table-navBar">
                <h2>Edit Employees</h2>
                <button className="back-button" onClick={handleDelete}> <FaArrowCircleLeft />BACK</button>
            </div>
            <table className='edit-table'>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td><input type="text" value={firstName} name="firstName" onChange={handleChange} required/></td>
                        </tr>
                        <tr>
                            <th>Last Name</th>
                            <td><input type="text" value={lastName} name="lastName" onChange={handleChange} required/></td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td><input type="text" value={email} name="email"  onChange={handleChange} required/></td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td><input type="text" value={address} name="address"  onChange={handleChange} required/></td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td><input type="text" value={phone} name="phone"  onChange={handleChange} /></td>
                        </tr>                   
                    </tbody>
                    <input type="submit" name="Submit" className='submit-button' onClick={handleSubmit}/>
                </table>
            </div>
        </div>
            
        );
}
