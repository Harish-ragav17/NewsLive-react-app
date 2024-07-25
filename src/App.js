import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Content from "./Content";
import View from "./View"
import {getdata,getNewdata} from "./api";
import { useState, useEffect } from "react";


function App() {
  const [datas, setdata] = useState([]);
  const [loading,setLoading]=useState(true);
  const [name,setName]=useState("News");
   useEffect(() => {
    getdata(setdata,setLoading);
    document.title = 'NewsLive';
  }, []);

  const home=()=>
  {
    setLoading(true)
    getdata(setdata,setLoading);
    setName("News")
  }
  const handleClick=()=>
  {
        setLoading(true)
       getNewdata(setdata,`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=Latest&language=en`,setLoading)
        setName("Latest")
  }
  const handleClick2=()=>
  {
    setLoading(true)
    
    getNewdata(setdata,`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=Trending&language=en`,setLoading)
    setName("Trending")
    
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout home={home} handleClick={handleClick} handleClick2={handleClick2}/>}>
          <Route index element={<Content name={name} loading={loading} datas={datas} />} />
          <Route path="/view/:id" element={<View datas={datas}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
