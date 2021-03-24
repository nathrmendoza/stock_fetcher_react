import React from 'react'
import {formatNumber} from './functions'

const WatchItem = ({witemdata}) => {
    return (
        <div className="watcher">
            <div className="wrapper">
                <h3>{witemdata.symbol}</h3>
                    <div className="price-percent">
                        <span className="price">{`${witemdata.price.currency}` + witemdata.price.amount}</span>
                        <span className="percent">({witemdata.percent_change}%)</span>
                    </div>
                    <span className="volume">{formatNumber(witemdata.volume)}</span>
            </div>
        </div>
    )
}

export default WatchItem
