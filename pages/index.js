import { useState, useEffect } from 'react';
import moment from 'moment';
import DataTable from '../components/DataTable';
import DatePicker from '../components/DatePicker';
import SearchVolume from '../components/SearchVolume';


export default function Home() {
  const [data, setData] = useState([]);
  const [volume, setVolume] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const today = moment();
    const minDate = today.clone().subtract(12, 'months').format('YYYY-MM');
    const maxDate = today.format('YYYY-MM');
    setMinDate(minDate);
    setMaxDate(maxDate);
    setStartDate(null);
    setEndDate(null);
  }, []);

  const getApiData = async () => {
    if (keyword === "") {
      alert("錯誤！請輸入查詢關鍵字！");
      return;
    }
    if (!startDate || !endDate) {
      alert("錯誤！請輸入開始或結束的月份");
      return;
    }
    const apiKey = process.env.API_KEY;
    const url = `https://api.similarweb.com/v4/keywords/keyword/analysis/organic-competitors?api_key=${apiKey}&keyword=${keyword}&start_date=${startDate}&end_date=${endDate}&country=tw&metrics=traffic,organic-vs-paid,volume,cpc&format=json&limit=30&sort=traffic_share`;
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setData(apiData.traffic_breakdown);
      setVolume(apiData.search_volume.volume)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Similarweb<br />關鍵字各網站流量查詢</h1>
      <p className="comment">#選擇年、月。<br />#可選區間為本月至12個月之前。<br />#數量上限30，按照Traffic Share排序。</p>
      <label>輸入關鍵字：</label>
      <input id="query" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <br /><br />
      <label htmlFor="start-date">開始日期：</label>
      <DatePicker id="start-date" min={minDate} max={maxDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br /><br />
      <label htmlFor="end-date">結束日期：</label>
      <DatePicker id="end-date" min={minDate} max={maxDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br /><br />
      <button onClick={getApiData}>查詢</button>
      <br /><br />
      <label>Search Volume：</label>
      <SearchVolume volume={volume} />
      <br /><br />
      <DataTable data={data} />
    </div>
  );
}
