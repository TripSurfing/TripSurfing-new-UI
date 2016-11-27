import React from 'react';

const Parallax = ({url}) => {
  return (
    <div className="parallax-container">
      <div className="parallax"><img src={url} /></div>
    </div>
  )
}
export default Parallax;