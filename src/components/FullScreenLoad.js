import React, {useEffect, useState} from 'react'
import Loading from './Loading'

const FullScreenLoad = () => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        return () => {
            
        }
    }, [])
    return (
        <div className="fullscreen-load" style={style}>
          <h3>Setting up the page.</h3>
          <Loading/>
        </div>
    )
}

export default FullScreenLoad
