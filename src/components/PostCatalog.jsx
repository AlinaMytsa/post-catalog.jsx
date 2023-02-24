import React, {useEffect, useState} from "react";

export const PostCatalog = (props) => {

  const [data, setData] = useState([])


    useEffect(() => {

      async function getPost() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data)
    }

      getPost()

  }, [])

  console.log(data)

  return (
    <div className="posts">
      <ul className="posts__list">
        {data.map(item => (
            <li key={item.id} className="posts_single-post" data-post-id="Id поста">
              <h3 className="posts__post-title">{item.title}</h3>
              <p className="posts__post-description">{item.body}</p>
            </li>
          )
        )}
      </ul>
    </div>
  )

}

