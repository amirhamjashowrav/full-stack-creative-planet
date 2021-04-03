import React from 'react';
import './Book.css';
import { useHistory } from 'react-router-dom';

const Book = ({ book }) => {
    const history = useHistory()
    const handleBook = (key) => {
        history.push(`/bookdetail/${key}`);
    }

    return (
        <div className="container">
            <div className='column col-md-6 col-sm-12'>
                <div className='card shadow'>
                    <img className="mx-auto" src={book.imageURL} alt="" />
                    <h5 className="card-title text-center">{book.name}</h5>
                    <p className="text-center">{book.writer}</p>
                    <div className="d-flex justify-content-between pt-3">
                        <div className="d-flex">
                            <h2 className="text-primary ms-3">{book.price}</h2>
                        </div>
                        <div className="d-flex">
                            <button onClick={() => handleBook(book.key)} className="btn btn-primary me-3">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;