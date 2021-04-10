import {useState, useEffect} from 'react'
import {fetchData, fetchSingle} from './api'
import SelectStock from './components/SelectStock'
import ResultRender from './components/ResultRender'
import WatchList from './components/WatchList';
import FullScreenLoad from './components/FullScreenLoad'

function App() {

  const [data,setData] = useState([]);
  const [sData, setSData] = useState([]);
  //initial load
  const [loaded, setLoad] = useState(false);
  //single load fetch
  const [sLoad, setSLoad] = useState(false);
  //if toggled already
  const [sToggled, setSToggled] = useState(false);
  const [wToggled, setWToggled] = useState(false);

  //watchlist
  const [wlist, setWlist] = useState(()=>{
    if (localStorage.getItem('watchlist_data') !== null)
      return JSON.parse(localStorage.getItem('watchlist_data'));
    else
      return []
  });
  const [wCheck, setWCheck] = useState(false);

  //FETCH ALL ON START
  useEffect(()=>{
    //if wlist has data, update function
    let timer
    if (wlist.length > 0) {

      //init update watchlist
      updateWatchlist().then(data => {
        setWlist(data);
        console.log(data);
        setWCheck(true);
      });

      //update per 1 minute
       timer = setInterval(()=>{
          updateWatchlist().then(data => {
            setWlist(data);
            console.log(data);
            setWCheck(true);
          })
      }, 60000)
    }


    const fetchApi = async() => {
      const tempdata = await fetchData();

      setData(tempdata);
      setLoad(true);
    }

    fetchApi();

    return(() => {
        if (timer) clearInterval(timer);
    });


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

  //UPDATE WATCHLIST
  const updateWatchlist = async() => {
    return Promise.all(wlist.map(item => fetchSingle(item.symbol)));
  }

  //ADD SELECTION TO WATCHLIST ARRAY
  const addToWatchlist = async(e) => {
    e.preventDefault();
    setWCheck(false);
    let tempcheck = true;

    let tempwlist = wlist;
    const tempresult = await fetchSingle(sData.symbol);

    if (tempwlist.length > 0) {
      for (var i=0; i<tempwlist.length; i++) {
        console.log(tempwlist[i].name + " : " + tempresult.name);
        if (tempwlist[i].name === tempresult.name) {
          tempcheck = false;
          break;
        }
      }
      if (tempcheck)
        tempwlist.push(tempresult);
    }else {
        tempwlist.push(tempresult);
    }

    //if no duplicate add, and save to localstorage (cache)
    if(tempcheck) {
      setWlist(tempwlist);
      localStorage.setItem('watchlist_data', JSON.stringify(tempwlist));
    }
    
    setWCheck(true);
  }

  //clear watchlist data and remove from localstorage
  const clearWatchlist = (e) => {
    e.preventDefault();
    setWlist([]);
    localStorage.removeItem('watchlist_data');
  }
  
  //clear one
  const clearOneWatcher = (e) => {
    let tempwlist = wlist.filter(item=>{
      return item.symbol !== e.symbol;
    });
    setWlist(tempwlist);
    localStorage.setItem('watchlist_data', JSON.stringify(tempwlist));
  }


  //RENDER
  //NO RESPONSE ON FETCH ALL / LOADING
  if (!loaded) {
    return <FullScreenLoad/>
  }
  
  //HAS NOW RESPONSE BEGIN RENDER
  else {
    return (
      <div className="wrapper">
        {/* filter and result */}
        <div id="sidebar">
          <SelectStock stocks={data.stock} onvaluechange={checkSelectValue} addfunc={addToWatchlist} />
          <ResultRender stocktouse={sData} isready={sLoad} istoggled={sToggled}/>
        </div>

        {/* watchlist */}
        <div className="rcontent">
            <h2>Stock Watchlist</h2>
          <WatchList wlistdata={wlist} isloaded={wCheck} clearAll={clearWatchlist} clearOne={clearOneWatcher}/>
        </div>
      </div>
    )
  }

}

export default App;
