import React, { FC, useState } from 'react'
import IEvent from '../../models/IEvent'

const AddEventModal:FC = () => {

  const [formData, setFormData] = useState<IEvent>({
    title: '',
    description: '',
    timestamp: 0
  })

  return (
    <div className='modal-bg'>
      <div className="modal">
        <button className='btn r-corner'>X</button>
        <h2 className='modal-title'>Add Event</h2>
        <form>
          <div className="input-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className='form-control' id='title' name="title" value={formData.title} />
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddEventModal