import React, {useState} from 'react'
import WatchItem from './WatchItem'
import Loading from './Loading'

const WatchList = ({wlistdata, isloaded, clearAll, clearOne}) => {
    const [confirmClear, setConfirmClear] = useState(false);

    if (wlistdata.length > 0) {
        return (
            <div id="watchlist">
                {/* confirm popup */}
                <div id="confirmation-clear" style={{display : confirmClear ? 'flex' : 'none'}}>
                    <div className="window">
                        <h4>You are about to clear your watch list, are you sure?</h4>
                        <div className="clear-confirm-response">
                            <span onClick={(ev)=>{setConfirmClear(false);clearAll(ev);}}>Yes</span>
                            <span onClick={()=>setConfirmClear(false)}>No</span>
                        </div>
                    </div>
                </div>
                
                <div className="top">
                    <button type="button" id="clear-watchlist" onClick={()=>setConfirmClear(true)}>Clear Watchlist</button>
                </div>
                <div className="watchlist-container">
                    {wlistdata.map((e,index)=><WatchItem key={index} witemdata={e} removeitem={clearOne} loaded={isloaded}/>)}
                </div>
            </div>
        )
    }else {
        return <div className="no-watchers"><h5>No watchers yet. <br/>Check the sidebar(on the left) and add some.</h5></div>
    }
}

export default WatchList
