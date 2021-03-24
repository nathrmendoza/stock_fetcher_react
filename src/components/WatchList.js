import React from 'react'
import WatchItem from './WatchItem'

const WatchList = ({wlistdata, isloaded}) => {
    if (wlistdata.length > 0) {
        if (!isloaded) {
            return <div>Loading Watchlist...</div>
        }
        else {
            return (
                <div className="wathclist-container">
                    {wlistdata.map((e,index)=><WatchItem key={index} witemdata={e}/>)}
                </div>
            )
        }
    }else {
        return <div>No watchers yet..</div>
    }
}

export default WatchList
