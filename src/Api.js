import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Api() {
const [post, setPost] = useState([]);
useEffect(() => {
    axios.get('https://course-api.com/react-tours-project')
        .then(res => {
            setPost(res.data);
            console.log(res.data)
        })
        .catch (err => {
            console.log(err.data)
        })
})

  return (
      <ul>
    {
        post.map((person) => {
            const {id, name, info, image, price} = person;
            return <article key={id}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{info}</p>
                <div>
                    <h6>{price}</h6>
                </div>
            </article>
            
        })
    }
    </ul>
  )
}

export default Api