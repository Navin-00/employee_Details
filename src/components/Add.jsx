import './Table.css';
import { FaArrowCircleLeft} from 'react-icons/fa';

export default function Add({ firstName, lastName, email, address, phone, handleChange, handleSubmit,handleDelete }) {
    return (
        <div>
           
           <div className='add-section'>
                <div className="table-navBar">
                   <h2>Add Employee</h2>
                   <button className="back-button" onClick={handleDelete}> <FaArrowCircleLeft />BACK</button>
               </div>

            <form onSubmit={handleSubmit} className='edit-section'>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={firstName || ''} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={lastName || ''} onChange={handleChange} required/>
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={email || ''} onChange={handleChange} required/>
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={address || ''} onChange={handleChange} required/>
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" value={phone || ''} onChange={handleChange} required/>
                </label>
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
}
