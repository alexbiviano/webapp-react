import React from 'react'
import StarsVote from './StarsVote'

const ReviewCard = ({ review }) => {
    const { text, vote, name } = review
    return (
        <div className="col-12">
            <div className="card p-3">
                <p><b>Recensione: </b>{text}</p>
                <StarsVote vote={vote} />
                <p className='mt-3'><b>Autore: </b>{name}</p>
            </div>
        </div>
    )
}

export default ReviewCard;