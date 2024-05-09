// eslint-disable-next-line no-unused-vars
import React from 'react'

const Helmet = (props) => {
  // eslint-disable-next-line react/prop-types
  document.title = "Printiverse 3D - " + props.title;
    return (
    // eslint-disable-next-line react/prop-types
    <div className='w-100'>{props.children}</div>
  )
}

export default Helmet