import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const initialData = {
    title: '',
    director: '',
    release_year: '',
    abstract: '',
    image: null
}

const CreateMovie = () => {
    const [formData, setFormData] = useState(initialData)

    const navigate = useNavigate()

    const setFieldValue = (e) => {
        const { name, value } = e.target
        if (name === 'image') {
            setFormData({
                ...formData,
                image: e.target.files[0]
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/movies', formData,
            {
                headers:
                    { 'Content-Type': 'multipart/form-data' }
            }
        ).then((result) => {
            navigate('/');
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Creazione nuovo film</h2>
                    </div>
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="" className='control-label'>Titolo</label>
                                    <input type="text" className='form-control' placeholder='Titolo' name='title' value={formData.title} onChange={setFieldValue} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className='control-label'>Director</label>
                                    <input type="text" className='form-control' placeholder='Director' name='director' value={formData.director} onChange={setFieldValue} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className='control-label'>Release Year</label>
                                    <input type="text" className='form-control' placeholder='Release Year' name='release_year' value={formData.release_year} onChange={setFieldValue} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className='control-label'>Abstract</label>
                                    <textarea className='form-control' placeholder='Abstract' name='abstract' value={formData.abstract} onChange={setFieldValue} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className='control-label'>Image</label>
                                    <input type="file" className='form-control' placeholder='Image' name='image' onChange={setFieldValue} required />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className='btn btn-primary'>Create Film</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMovie