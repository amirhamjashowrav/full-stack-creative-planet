import React, { useEffect, useState } from 'react';
import './BookDetail.css';
import { useParams, useHistory } from 'react-router-dom';

const BookDetail = () => {
    const {key} = useParams();
    const [books, setBooks] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch('https://safe-spire-22306.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const item = books && books.find((book) => book.key === key);

    const handleProceedCheckout = () => {
        history.push({
            pathname:'/orders',
            state: item
        });
    }

    return (
        <div className="container checkout-card">
            <h3 className="text-center">Checkout</h3>
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                        <td>{item?.name}</td>
                        <td>{item?.writer}</td>
                        <td>{item?.price}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleProceedCheckout} className="btn btn-primary">Checkout</button>
        </div>
    );
};

export default BookDetail;