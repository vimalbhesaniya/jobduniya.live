import React from 'react'

const  ProfilePreview = ({image}) => {
  return (
    <div className='previewClass'>
        <img src={image} alt="" className='previewImage' />
    </div>
  )
}

export default ProfilePreview