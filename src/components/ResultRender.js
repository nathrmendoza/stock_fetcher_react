import React from 'react'
import {formatNumber} from './functions'
import Loading from './Loading'

const ResultRender = ({stocktouse, isready, istoggled}) => {
    if (!isready && istoggled) {
        return <Loading />
    }
    else if (istoggled){
        let stock = stocktouse.stock[0];
        return (
            <div id="stock-result" className={`${stock.percent_change > 0 ? "positive" : "negative"} ${stock.percent_change === 0 ? "no-change" : ""}`}>
                    <h3 className="ticker-name-symbol">{stock.name}</h3>
                    <div className="price-percent">
                        <label>Price %</label>
                        <div className="value">
                            <span className="price">: {`₱` + stock.price.amount}</span>
                            <span className="percent"> ({stock.percent_change}%)</span>
                        </div>
                    </div>
                    <div className="volume">
                        <label>Volume</label>
                        <span className="value">: {formatNumber(stock.volume)}</span>
                    </div>
            </div>
        )
    }
    else{
        return <div className="spacer"></div>
    }
}

export default ResultRender
