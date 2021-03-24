import React from 'react'
import WatchItem from './WatchItem'

const WatchList = ({wlistdata, isloaded}) => {
    console.log(wlistdata);
    if (!isloaded) {
        return <div>Loading Watchlist...</div>
    }
    else {
        return (
            <div className="wathclist-container">
                {wlistdata.map(e=><WatchItem witemdata={e}/>)}
            </div>
        )
    }
}

export default WatchList
