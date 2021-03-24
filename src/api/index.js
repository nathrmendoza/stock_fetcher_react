import axios from 'axios'

const url = 'http://phisix-api3.appspot.com';

export const fetchData = async() => {
    try {
        const result = await axios.get(url+'/stocks.json');
        return result.data;
    }
    catch(error) {
        console.log('Encountered an error: ' + error);
        return;
    }
}

export const fetchSingle = async(param) => {
    try {
        const result = await axios.get(url+'/stocks/'+param);
        return result;
    }
    catch(error) {
        console.log('Encountered an error searching for stock: ' + error);
        return;
    }
}