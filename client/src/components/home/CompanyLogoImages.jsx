import React from 'react'

const CompanyLogoImages = (props) => {
  return (
    <div className='grid place-items-center w-12 md:w-36'>
        <img src={props.img} />
    </div>
  )
}

export default CompanyLogoImages