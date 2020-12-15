import React, { useState, useEffect } from "react";
import axios from "axios";
function SingleDatafetching() {
  const [post, setpost] = useState({});
  const [id, setid] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1)
  const handleclick=()=>{
      setidFromButtonClick(id)
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + idFromButtonClick + "")
      .then((res) => {
        console.log(res);
        setpost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // return () => {
    //     cleanup
    // }
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
     <button  type='button' onClick={handleclick}>fetch post</button>
      <div>{post.title}</div> 
    </div>
  );
}

export default SingleDatafetching;
