import React from 'react'
import {formatNumber} from './functions'

const ResultRender = ({stocktouse, isready, istoggled}) => {
    if (!isready && istoggled) {
        return <div>Loading Result...</div>
    }
    else if (istoggled){
        let stock = stocktouse.stock[0];
        return (
            <div id="stock-result" className={`${stock.percent_change > 0 ? "positive" : "negative"} ${stock.percent_change === 0 ? "no-change" : ""}`}>
                    <h3 className="ticker-name-symbol">{stock.name}<span>{stock.symbol}</span></h3>
                    <div className="price-percent">
                        <span className="price">{`${stock.price.currency}` + stock.price.amount}</span>
                        <span className="percent">({stock.percent_change}%)</span>
                    </div>
                        <span className="volume">{formatNumber(stock.volume)}</span>
            </div>
        )
    }
    else{
        return <div className="spacer"></div>
    }
}

export default ResultRender
