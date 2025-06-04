import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ReviewForm = ({ movie_id, reloadReviews }) => {

    const initialData = {
        name: '',
        vote: '',
        text: ''
    }

    const [formData, setFormData] = useState(initialData)

    const setFieldValue = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3000/api/movies/${movie_id}/review`, formData,
            {
                headers:
                    { 'Content-Type': 'application/json' }
            }).then((response) => {
                console.log('Risposta dal server:', response.data)
                setFormData(initialData)
                reloadReviews()
            }).catch(error => {
                console.error('Errore durante l\'invio della recensione:', error.response ? error.response.data : error.message)
                alert('Errore durante l\'invio della recensione. Controlla la console per dettagli.')
            })
    }

    return (
        <div className="card-review">
            <div className="card-header">
                <h4 className='text-danger'>Add your review</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name='name' value={formData.name} required onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Vote</label>
                        <input type="number" min={0} max={5} className="form-control" placeholder="Vote" name='vote' value={formData.vote} required onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="control-label">Review</label>
                        <textarea className="form-control" placeholder="Review" name='text' value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger mt-2">Add Review</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm