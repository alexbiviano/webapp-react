import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import StarsVote from '../components/StarsVote'
import ReviewForm from '../components/ReviewForm'

const FilmPage = () => {
    const { id } = useParams()

    const [film, setFilm] = useState(null)
    //function
    const fetchFilm = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then((response) => {
                console.log(response.data)
                setFilm(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    //stars
    const renderStars = (vote) => {
        return [1, 2, 3, 4, 5].map((elem, i) => {
            return (<i
                key={`star-average-${i}`}
                className={`fa-star ${i < vote ? 'fa-solid' : 'fa-regular'} text-warning`}>
            </i>
            );
        })
    }

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            <div className='row'>
                {film === null ? (
                    <p>Caricamento dati</p>
                ) : (
                    <>
                        <div className="col-12 col-md-6 col-lg-4">
                            <img className='img-fluid' src={film.image} alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <h1>{film.title}</h1>
                            <h3>{film.author}</h3>
                            <p>{film.excerpt}</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <h3>Our Community Reviews</h3>
                                    <p>
                                        <StarsVote vote={film.average_vote} />
                                    </p>
                                </div>
                            </div>
                            {film.reviews.map((review) => {
                                return (
                                    <div className="col-12" key={`review-${review.id}`}>
                                        <ReviewCard review={review} />
                                    </div>
                                )
                            })}
                            <ReviewForm movie_id={film.id} reloadReviews={fetchFilm} />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default FilmPage