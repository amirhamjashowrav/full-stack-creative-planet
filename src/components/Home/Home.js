import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import loading from '../../images/icons/loading.gif';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://safe-spire-22306.herokuapp.com/books`)
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            {isLoading ? (
               <div className="text-center" style={{marginTop: '100px'}}>
                    <img className="mx-auto d-block img-fluid" src={loading} alt="" />
               </div>
            ) : (
                <div>
                    {
                        books.map(book => <Book book={book}></Book>)
                    }
                </div>
            )}
        </div>
    );
};

export default Home;