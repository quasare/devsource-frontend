import React from 'react'

export default function JokeCard({joke}) {
   const {en, author} = joke
    return (
        <div>
        <p>{en}  by: {author}</p>
        </div>
    )
}
