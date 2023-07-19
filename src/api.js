import axios from "axios";
 const url='https://newsdata.io/api/1/news?apikey=pub_258322a68f389b3a410618a325240dd901822&q=education'

const getdata=async(setdata,setLoading)=>
{ 
   await axios.get(url).then(function (response) {
        setdata(response.data.results)
        setLoading(false)
    }).catch(function (error) {
        console.error(error);
    });
} 

const getNewdata=async(setdata,url2,setLoading)=>
{ 
   await axios.get(url2).then(function (response) {
        setdata(response.data.results)
        setLoading(false)
    }).catch(function (error) {
        console.error(error);
    });
} 

export {getdata,getNewdata}
