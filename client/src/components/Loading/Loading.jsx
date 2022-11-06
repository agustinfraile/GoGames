import React from 'react';
import loadingGif from "../../images/loading-gif.gif"

const Loading = () => {
  return (
    <div>
        <img src={loadingGif} alt="Loading" />
    </div>
  )
}

export default Loading