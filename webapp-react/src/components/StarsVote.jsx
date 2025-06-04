import React from 'react'

const renderStars = ({ vote }) => {

    //stars
    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((elem, i) => {
            return (<i
                key={`star-average-${i}`}
                className={`fa-star ${i < vote ? 'fa-solid' : 'fa-regular'} text-warning`}>
            </i>
            );
        })
    }
    return (
        <span>{renderStars(vote)}</span>
    )
}

export default renderStars