import React from 'react'
import PropTypes from 'prop-types'
import Admin from '../classes/Admin'

export default function User({ name, age, parent, admin, scores, employe={name: 'fakeEmploye'} }){
    return (
        <>
            <h2>Hello World {name}</h2>
            <h2>My age is {age}</h2>
            <h2>I {parent ? 'have children' : "don't have children"}</h2>
            <h2>My boss is {admin.name}</h2>
            <h2>
                My scores are {scores.map((score,i) => score + (scores.length-1 != i ? ', ' : ''))}
            </h2>
            <h2>My employe is {employe.name}</h2>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    parent: PropTypes.bool,
    admin: PropTypes.instanceOf(Admin),
    scores: PropTypes.arrayOf(PropTypes.number),
    employe: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }).isRequired
}