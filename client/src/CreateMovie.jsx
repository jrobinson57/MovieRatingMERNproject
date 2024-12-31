import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './CreateMovie.module.css';

function CreateMovie() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(5); // Default rating is set to 5
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        // Check if any field is blank
        if (!title || !genre || !rating) {
            alert('Please fill in all fields');
            return;
        }

        // All fields are filled, proceed with submission
        axios.post("http://localhost:3001/createMovie", { title, genre, rating })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Movie</h2>
                    <div className='mb-2'>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter Title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="genre">Genre</label>
                        <select
                            id="genre"
                            className="form-control"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            <option value="">Select Genre</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Horror">Horror</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Action">Action</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="rating">Rating</label>
                        <input
                            type="range"
                            id="rating"
                            className="form-range"
                            min="1"
                            max="10"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        <div>Current Rating: <strong>{rating}</strong></div>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateMovie;
