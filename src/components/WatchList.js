import React, {useState} from 'react'
import WatchItem from './WatchItem'
import Loading from './Loading'

const WatchList = ({wlistdata, isloaded}) => {
    const [confirmClear, setConfirmClear] = useState(false);

    const removeItemW = (e) => {
        e.preventDefault();
        console.log('removed');
    }

    if (wlistdata.length > 0) {
        if (!isloaded) {
            return <Loading />
        }
        else {
            return (
                <div id="watchlist">

                    <div id="confirmation-clear" style={{display : confirmClear ? 'flex' : 'none'}}>
                        <div className="window">
                            <h4>You are about to clear your watch list, are you sure?</h4>
                        <div className="clear-confirm-response">
                            <span>Yes</span>
                            <span onClick={()=>setConfirmClear(false)}>No</span>
                        </div>
                        </div>
                    </div>
                    
                    <div className="top">
                        <h2>Stock Watchlist</h2>
                        <button type="button" id="clear-watchlist" onClick={()=>setConfirmClear(true)}>Clear Watchlist</button>
                    </div>
                    <div className="watchlist-container">
                        {wlistdata.map((e,index)=><WatchItem key={index} witemdata={e} removeitem={removeItemW}/>)}
                    </div>
                </div>
            )
        }
    }else {
        return <div>No watchers yet..</div>
    }
}

export default WatchList
