import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

function UpdateMovie() {
    const {id} = useParams()
    const [title, setTitle] = useState()
    const [genre, setGenre] = useState()
    const [rating, setRating] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getMovie/'+id)
        .then(result => {
            console.log(result)
            setTitle(result.data.title)
            setGenre(result.data.genre)
            setRating(result.data.rating)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateMovie/"+id, {title, genre, rating})
        .then(result => {
            console.log(result)
            navigate('/')
    })
        .catch(err => console.log(err))
        
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Edit Movie</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='Enter New Title' className='form-control'
                        value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                    <select
                            id="genre"
                            className="form-control"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            
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
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateMovie;