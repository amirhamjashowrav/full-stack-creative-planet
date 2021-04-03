import React, { useState }  from 'react';
import { useForm } from "react-hook-form";
import './AddBooks.css';
import axios from 'axios';

const AddBooks = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data =>{
        const bookData = {
            key: data.key,
            name: data.name,
            writer: data.writer,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://safe-spire-22306.herokuapp.com/addbook`;

        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
          })
          .then(res => console.log('server side response', res))
        };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2dd341a88c16abc2e2f1f8387fb3eac2');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="book-card form-outline">
            <h3 className="text-center">Add Book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label class="form-label" for="formControlLg">Book Name</label>
                <input name="name" ref={register} id="formControlLg" class="form-control" />
                <br />
                <label class="form-label" for="formControlLg">Writer Name</label>
                <input name="writer" ref={register} id="formControlLg" class="form-control" />
                <br />
                <label class="form-label" for="formControlLg">Add Price</label>
                <input name="price" ref={register} id="formControlLg" class="form-control" />
                <br />
                <label class="form-label" for="formControlLg">Add Book Cover Photo</label>
                <input className="btn btn-light" type="file" onChange={handleImageUpload} id="formControlLg" class="form-control" />
                <br />
                <label class="form-label" for="formControlLg">Book No</label>
                <input name="key" ref={register} id="formControlLg" class="form-control" />
                <br />
                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    );
};

export default AddBooks;