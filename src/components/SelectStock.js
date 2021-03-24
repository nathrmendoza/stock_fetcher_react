import React, {useState} from 'react'
import {compareString} from './functions'

const SelectStock = ({stocks, onvaluechange, addfunc}) => {
    //temp start select value
    const [selval, setval] = useState('no_val');
    //select filter
    const [filterSel, setFilterSel] = useState("");

    return (
        <div className="filters-controls">
            <input type="text" placeholder="Search" id="select-search" onChange={ev=>{setFilterSel(ev.target.value);}}/>
            <select id="stock-list" value={selval} onChange={ev=>{onvaluechange(ev); setval(ev.target.value)}}>
                <option value="no_val" disabled>Stocks</option>
                {stocks.map((stock,index) => {
                    if (compareString(filterSel.toUpperCase(), stock.symbol)) 
                        return (<option key={index} value={stock.symbol}>{stock.symbol}</option>)
                    else 
                        return(<></>)
                })}
            </select>
            <button type='button' onClick={ev=>addfunc(ev)}>Add to Watchlist</button>
        </div>
    )
}

export default SelectStock
