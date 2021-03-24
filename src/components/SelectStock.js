import React, {useState} from 'react'

const SelectStock = ({stocks, onvaluechange, addfunc}) => {
    //temp start select value
    const [selval, setval] = useState('no_val');
    return (
        <div className="filters-controls">
            <select id="stock-list" value={selval} onChange={ev=>{onvaluechange(ev); setval(ev.target.value)}}>
                <option value="no_val" disabled>Stocks</option>
                {stocks.map((stock,index) => <option key={index} value={stock.symbol}>{stock.symbol}</option>)}
            </select>
            <button type='button' onClick={ev=>addfunc(ev)}>Add to Watchlist</button>
        </div>
    )
}

export default SelectStock
