import React, {useState} from 'react'
import {compareString} from './functions'

const SelectStock = ({stocks, onvaluechange, addfunc}) => {
    //temp start select value
    const [selval, setval] = useState('no_val');
    //select filter
    const [filterSel, setFilterSel] = useState("");
    const [dropTrigger, setTrigger] = useState(false);

    //add trigger
    const [addTrigger, setAddTrigger] = useState(true);

    return (
        <div className="filters-controls">
            <h5>Search stock</h5>
            <div className="inner-wrap">
                <input type="text" placeholder="Search" id="select-search" onChange={ev=>{setFilterSel(ev.target.value); if(ev.target.value.length > 0 && !dropTrigger) setTrigger(true); else if (ev.target.value.length <= 0) setTrigger(false);}}/>
                <div id="sym-dropdown">
                    <div id="sym-selected" onClick={()=>{setTrigger(!dropTrigger)}}>{selval === "no_val" ? "Stocks" : selval}</div>
                    <ul id="drop-list" className={dropTrigger ? "active" : ""}>
                        {stocks.map((stock,index) => {
                            if (compareString(filterSel.toUpperCase(), stock.symbol)) 
                                return (<li key={index} onClick={()=>{onvaluechange(stock.symbol); setval(stock.symbol); setTrigger(!dropTrigger); if (addTrigger) setAddTrigger(false)}}>{stock.symbol}</li>)
                            else {
                                if (index+1 === stocks.length) {
                                    return (<li className="last-no-result" key={index} onClick={()=>{setTrigger(!dropTrigger)}}>No Result</li>)
                                }
                                else
                                    return (null)

                            }
                        })}
                    </ul>
                </div>
                <button type='button' disabled={addTrigger} onClick={ev=>addfunc(ev)}>+</button>
            </div>
        </div>
    )
}

export default SelectStock
