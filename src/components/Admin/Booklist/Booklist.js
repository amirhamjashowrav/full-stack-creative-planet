import React, { useEffect, useState } from 'react';
import './Booklist.css';
import deleteIcon from '../../../images/icons/Group 33150.png';
import { toast } from 'react-toastify';

const Booklist = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://safe-spire-22306.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    
    const deleteEvent = (key) => {
		fetch(`https://safe-spire-22306.herokuapp.com/delete/${key}`, {
			method  : 'DELETE',
			headers : {
				'Content-Type' : 'application/json'
			}
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					const remaining = books.filter((book) => book._id !== key);
					toast.info('Delete book Successfully');
					setBooks(remaining);
				}
			})
			.catch((err) => {
				toast.error(err);
			});
	};

    return (
        <div className='booklist-card'>
            <h3 className="text-center">Booklist</h3>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr>
                        <td>{book.name}</td>
                        <td>{book.writer}</td>
                        <td>{book.price}</td>
                        <td><img onClick={() => deleteEvent(book._id)} src={deleteIcon} style={{width: '30px', cursor: 'pointer'}} alt=""/></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Booklist;