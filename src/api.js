import axios from "axios";
console.log(process.env.REACT_APP_API_KEY);
const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=education&language=en`;

const getdata = async (setdata, setLoading) => {
  await axios
    .get(url)
    .then(function (response) {
      setdata(response.data.results);
      console.log(response.data)
      setLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getNewdata = async (setdata, url2, setLoading) => {
  await axios
    .get(url2)
    .then(function (response) {
      setdata(response.data.results);
      setLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { getdata, getNewdata };
