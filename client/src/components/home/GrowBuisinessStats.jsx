import React from 'react'

const GrowBuisinessStats = (props) => {
    const getColor = () => {
        switch (props.color) {
            case "cyan":
                return 'text-cyan-500'
            case "orange":
                return 'text-orange-500'
            case "purple":
                return 'text-purple-600'
        
            default:
                break;
        }
    }
  return (
    <div className='m-2'>
        <p className={`text-4xl font-extrabold mb-1 ${getColor()}`}>{props.incRate}{props.type}</p>
        <p className='text-gray-700'>{props.defination}</p>
    </div>
  )
}

export default GrowBuisinessStats