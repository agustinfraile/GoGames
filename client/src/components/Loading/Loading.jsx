import React from 'react';
import loadingGif from "../../images/loading-gif.gif";
import "./loading.css"

const Loading = () => {
  return (
    <div className='loading-cnt'>
        <img src={loadingGif} alt="Loading" />
    </div>
  )
}

export default Loading