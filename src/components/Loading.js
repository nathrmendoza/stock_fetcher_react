import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
    return (
        <div className="loading-wrap">
            <PulseLoader color={'#FFFFFF'} size={15}/>
        </div>
    )
}

export default Loading
