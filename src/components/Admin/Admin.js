import React, {useState} from 'react';
import './Admin.css';
import Booklist from './Booklist/Booklist';
import AddBooks from './AddBooks/AddBooks';

const Admin = () => {
    const [ showItem, setShowItem ] = useState(true);
    return (
        <div className="container admin-card" setShowItem={setShowItem} showItem={showItem} >
            <h3 className="text-center">Admin Panel</h3>
            <button  onClick={() => setShowItem(true)} className="btn btn-primary me-3 ms-5">Add Book</button>
            <button  onClick={() => setShowItem(false)} className="btn btn-primary">Book List</button>
            {showItem ? <AddBooks /> : <Booklist />}
        </div>
    );
};

export default Admin;