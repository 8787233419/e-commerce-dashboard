import React from 'react'

export default function ArrowButton(props) {
  if (props.right === 1) {
    return (
      <div>
        <button className='arrowbutton'>
          &gt;
        </button>
      </div>
    )
  }
  if (props.right === 0) {
    return (
      <div>
        <button className='arrowbutton'>
          &gt;
        </button>
      </div>
    )
  }
}
