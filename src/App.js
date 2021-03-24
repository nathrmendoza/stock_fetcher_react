import {useState, useEffect} from 'react'
import {fetchData, fetchSingle} from './api'
import SelectStock from './components/SelectStock'
import ResultRender from './components/ResultRender'
import WatchList from './components/WatchList';

function App() {

  const [data,setData] = useState([]);
  const [sData, setSData] = useState([]);
  const [loaded, setLoad] = useState(false);
  const [sLoad, setSLoad] = useState(false);
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
    if (e.target.value !== "no_val") {
      setSLoad(false);
      const tempresult = await fetchSingle(e.target.value);
      setSData(tempresult);
      
      if (!sToggled);
        setSToggled(true);
  
      setSLoad(true);
    }
  }

  //ADD SELECTION TO WATCHLIST ARRAY
  const addToWatchlist = (e) => {
    e.preventDefault();

    setWCheck(false);
    let tempwlist = wlist;
    tempwlist.push(sData.data.stock[0]);
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
        <SelectStock stocks={data.stock} onvaluechange={checkSelectValue} addfunc={addToWatchlist}/>
        <ResultRender stocktouse={sData.data} isready={sLoad} istoggled={sToggled}/>
        <WatchList wlistdata={wlist} isloaded={wCheck}/>
      </div>
    )
  }

}

export default App;
