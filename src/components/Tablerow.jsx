import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import './Table.css';
export default function Tablerow({ firstName, lastName, email, address, phone, onView, onEdit, onDelete ,id}) {
   

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <div className="action-icons">
                    <FaEye className="view-icon" onClick={()=>onView(id)} />
                    <FaEdit className="edit-icon" onClick={()=>onEdit(id)} />
                    <FaTrash className="delete-icon" onClick={()=>onDelete(id)} />
                </div>
            </td>
        </tr>
    );
}
