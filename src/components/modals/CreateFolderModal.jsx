import React from 'react'
import "./modals.css";

const CreateModal = () => {
  return (
    <div>
        <div className='font-open-sans font-wt-600 text-white'>Create New Folder</div>
        <div>
            <input type="text" placeholder='Enter folder name' />
        </div>
        <div>
            <button className='dont-btn font-open-sans font-wt-600'>Done</button>
            <button className='font-open-sans font-wt-600'>Cancel</button>
        </div>
    </div>
  )
}

export default CreateModal;
