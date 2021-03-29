import React, {useState} from 'react'
import {formatNumber} from './functions'

const WatchItem = ({witemdata, removeitem}) => {
    const [removeConfirm, setRemoveConfirm] = useState(false)

    return (
        <div className={`watcher ${witemdata.percent_change > 0 ? "positive" : "negative"} ${witemdata.percent_change === 0 ? "no-change" : ""}`}>
            <div className="inner">
                <div className="remove-item">
                    <button onClick={()=>setRemoveConfirm(!removeConfirm)} className={removeConfirm ? 'rotate-this' : ''}/>
                    <div className="confirm-dialog" style={{display : `${removeConfirm ? 'block' : 'none'}`}}>
                        Will remove <b>{witemdata.symbol}</b> from watchlist.
                        <div className="remove-confirm-response">
                            <span onClick={()=>{setRemoveConfirm(false);removeitem(witemdata); }}>Yes</span>
                            <span onClick={()=>setRemoveConfirm(false)}>No</span>
                        </div>
                    </div>
                </div>
                <h3>{witemdata.symbol}</h3>
                <label>Price %:</label>
                <div className="price-percent">
                    <span className="price">{`₱` + witemdata.price.amount}</span>
                    <span className="percent"> ({witemdata.percent_change}%)</span>
                </div>
                <label>Volume:</label>
                <span className="volume">{formatNumber(witemdata.volume)}</span>
            </div>
        </div>
    )
}

export default WatchItem
