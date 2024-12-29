import React from 'react'

const InviteModal = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder='write email here'/>
        <button>invitie by email</button>
      </div>
      <div>
        <button>Copy Link</button>
      </div>
      {/*           access mode      */}
      <div>
        <button>view</button>
        <button>edit</button>
      </div>
    </div>
  )
}

export default InviteModal;
