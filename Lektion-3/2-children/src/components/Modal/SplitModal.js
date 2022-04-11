import React from 'react'


const SplitModal = ({ left, right }) => {
  return (
    <div className='modal-bg'>
      <div className="modal split">
        <div className="left">
          { left }
        </div>
        <div className="right">
          { right }
        </div>
      </div>
    </div>
  )
}

export default SplitModal