import {useState, useEffect} from 'react'
import {fetchData, fetchSingle} from './api'
import SelectStock from './components/SelectStock'
import ResultRender from './components/ResultRender'
import WatchList from './components/WatchList';

function App() {

  const [data,setData] = useState([]);
  const [sData, setSData] = useState([]);
  //initial load
  const [loaded, setLoad] = useState(false);
  //single load fetch
  const [sLoad, setSLoad] = useState(false);
  //if toggled already
  const [sToggled, setSToggled] = useState(false);

  //watchlist
  const [wlist, setWlist] = useState([]);
  const [wCheck, setWCheck] = useState(false);

  //FETCH ALL ON START
  useEffect(()=>{
    const fetchApi = async() => {
      const tempdata = await fetchData();

      setData(tempdata);
      setLoad(true);
    }

    fetchApi();
  },[]);

  //FETCH SELECT VALUE
  const checkSelectValue = async(e) =>{
    if (e !== "no_val") {
      setSLoad(false);
      const tempresult = await fetchSingle(e);
      setSData(tempresult);
      
      if (!sToggled);
        setSToggled(true);
  
      setSLoad(true);
    }
  }

  //ADD SELECTION TO WATCHLIST ARRAY
  const addToWatchlist = async(e) => {
    e.preventDefault();
    setWCheck(false);
    let tempcheck = true;

    let tempwlist = wlist;
    const tempresult = await fetchSingle(sData.data.stock[0].symbol);

    if (tempwlist.length > 0) {
      for (var i=0; i<tempwlist.length; i++) {
        console.log(tempwlist[i].name + " : " + tempresult.data.stock[0].name);
        if (tempwlist[i].name === tempresult.data.stock[0].name) {
          tempcheck = false;
          break;
        }
      }
      if (tempcheck)
        tempwlist.push(tempresult.data.stock[0]);
    }else {
        tempwlist.push(tempresult.data.stock[0]);
    }

    
    if(tempcheck) 
      setWlist(tempwlist);
    
    setWCheck(true);
  }

  //NO RESPONSE ON FETCH ALL / LOADING
  if (!loaded) {
    return <div>FETCHING DATA...</div>
  }
  
  //HAS NOW RESPONSE BEGIN RENDER
  else {
    return (
      <div className="wrapper">
        {/* filter and result */}
        <SelectStock stocks={data.stock} onvaluechange={checkSelectValue} addfunc={addToWatchlist} />
        <ResultRender stocktouse={sData.data} isready={sLoad} istoggled={sToggled}/>

        {/* watchlist */}
        <WatchList wlistdata={wlist} isloaded={wCheck}/>
      </div>
    )
  }

}

export default App;
