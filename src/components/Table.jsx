import React, { useState } from "react";
import './Table.css';
import Tablerow from './Tablerow.jsx';
import {FaPlus } from 'react-icons/fa';
import View from './View.jsx';
import Edit from './Edit.jsx';
import Add from './Add.jsx';


export default function Table() {
    const [employees, setEmployees] = useState([
        { id: 1, firstName: "Navin", lastName: "K", email: "navin@gmail.com", address: "Some Address", phone: "1234567890" },
        { id: 2, firstName: "Rithin", lastName: "K", email: "rithinkbhjhg@gmail.com", address: "Some Address", phone: "0987654321" },
        { id: 3, firstName: "Punitha", lastName: "R", email: "punitha@gmail.com", address: "Some Address", phone: "1122334455" },
    ]);

    // state for storing selected employee
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    //statte for adding the new employee to the existoing employee details
    const [addedEmployee,setAddedEmployee]=useState(null);

    // state for the current view mode (view or edit)
    const [mode, setMode] = useState('view');  // 'view' or 'edit' or 'add'

    // Simplified delete function
    function deleteEmployeeFun(id) {
        const employeeDetails = employees.filter(emp => emp.id !== id);
        setEmployees(employeeDetails);
        alert("Data has been Deleted");
        
    }

    // View employee function
    function viewEmployeeFun(id) {
        const employeeDetails = employees.find(emp => emp.id === id);
        setSelectedEmployee(employeeDetails);
        setMode('view');  // Set mode to 'view'
        
    }

    // Edit employee function
    function editEmployeeFun(id) {
        const employeeDetails = employees.find(emp => emp.id === id);
        setSelectedEmployee(employeeDetails);
        setMode('edit');  // Set mode to 'edit'

    }

    // Handle delete in view or edit mode or add mode
    function handleDelete() {
        setSelectedEmployee(null);
        setMode('view');
    }
    //handling changes in the edit-section
    function handleChange(event) {
        const { name, value } = event.target;
    
        if (mode === 'add') {
            setAddedEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value,
            }));
        } else{
            setSelectedEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value,

            }));
        }
        
    }
    //submitting after editing the employee file
    function handleSubmit(event) {
        event.preventDefault();
        if (mode === 'add') {
            setEmployees(prevEmployees => [...prevEmployees, addedEmployee]);
            setAddedEmployee(null); // Clear the added employee state
            alert("Data has been Added Succesfully");
        } else if(mode=='edit'){
            setEmployees(prevEmployees =>
                prevEmployees.map(employee =>
                    employee.id === selectedEmployee.id ? { ...selectedEmployee } : employee
                )
            );
            alert("Data has been Edited Succesfully");
            setSelectedEmployee(null);    
           
        }
    }
    
    //add new employee details
    function addEmployeeFun(){
        setAddedEmployee({
            id: employees.length + 1, // Generate a new id
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: ""
        });
        
        setMode('add')
    }
    return (
        <div className="table">
            <div>
                {selectedEmployee && mode === 'view' ? (
                    <View
                        id={selectedEmployee.id}
                        firstName={selectedEmployee.firstName}
                        lastName={selectedEmployee.lastName}
                        email={selectedEmployee.email}
                        address={selectedEmployee.address}
                        phone={selectedEmployee.phone}
                        handleDelete={handleDelete}
                    />
                ):

                 mode === 'edit' && selectedEmployee ? (
                    <Edit
                        id={selectedEmployee.id}
                        firstName={selectedEmployee.firstName}
                        lastName={selectedEmployee.lastName}
                        email={selectedEmployee.email}
                        address={selectedEmployee.address}
                        phone={selectedEmployee.phone}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                ):
                mode === 'add' && addedEmployee ? (
                    <Add 
                        id={addedEmployee.id}
                        firstName={addedEmployee.firstName}
                        lastName={addedEmployee.lastName}
                        email={addedEmployee.email}
                        address={addedEmployee.address}
                        phone={addedEmployee.phone}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                ):
                (
                    <>
                    <div className="table-navBar">
                        <h2>Manage Employees</h2>
                        <button className="add-button" onClick={addEmployeeFun}> <FaPlus /> ADD</button>
                    </div>
                    <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <Tablerow
                                key={employee.id}
                                id={employee.id}
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                email={employee.email}
                                address={employee.address}
                                phone={employee.phone}
                                onDelete={deleteEmployeeFun}
                                onView={viewEmployeeFun}
                                onEdit={editEmployeeFun}
                            />
                        ))}
                    </tbody>
                </table>
            </>
            ) }
         </div>
            
        </div>
    );
}
