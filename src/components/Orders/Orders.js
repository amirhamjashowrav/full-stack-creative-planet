import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useLocation } from 'react-router';

const Orders = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { state } = useLocation();

    const onSubmit = data => {
        const orderDetails = { product: state, shipment: data, orderTime: (new Date().toString("dddd, mmmm dS, yyyy, g:i A TT")) };

        //Adding order to the mongodb database

        fetch('https://safe-spire-22306.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order Placed Successfully');
                }
            })
        console.log('form submitted', data)
    };


    // Getting order list information from mongodb database for the logged in user

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://safe-spire-22306.herokuapp.com/orderList')
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])


    return (
        <div className="container order-card">
            <h3 className="text-center">Order Details</h3>
            <br />
            <h4 className="text-center">You Have {orderList.length} Ordered Items</h4>
            <br />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.map((book) => (
                        <tr>
                            <td>{book.product.name}</td>
                            <td>{book.product.writer}</td>
                            <td>{book.product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <br />

            <form onSubmit={handleSubmit(onSubmit)}>
                <label class="form-label" for="formControlLg">Your Name</label>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} id="formControlLg" class="form-control" />
                {errors.name && <span className="error">Name is required</span>}

                <br />

                <label class="form-label" for="formControlLg">Email Address</label>
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} id="formControlLg" class="form-control" />
                {errors.email && <span className="error">Email is required</span>}

                <br />

                <label class="form-label" for="formControlLg">Address</label>
                <input name="address" ref={register({ required: true })} id="formControlLg" class="form-control" />
                {errors.address && <span className="error">Address is required</span>}

                <br />

                <label class="form-label" for="formControlLg">Phone Number</label>
                <input name="Phone" ref={register({ required: true })} id="formControlLg" class="form-control" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <br />

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default Orders;