import { useState, useEffect } from 'react';
import moment from 'moment';
import DataTable from '../components/DataTable';
import DatePicker from '../components/DatePicker';
import SearchVolume from '../components/SearchVolume';
import DownloadExcel from '../components/DownloadExcel';
import GetApiData from '../components/GetApiData';
import Modal from 'react-modal';

Modal.setAppElement('#__next');


export default function Home() {
  const [data, setData] = useState([]);
  const [volume, setVolume] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [keyword, setKeyword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('')

  useEffect(() => {
    const today = moment();
    const minDate = today.clone().subtract(13, 'months').format('YYYY-MM');
    const maxDate = today.clone().subtract(1, 'months').format('YYYY-MM');

    setMinDate(minDate);
    setMaxDate(maxDate);
    setStartDate(null);
    setEndDate(null);
  }, []);

  const handleGetApiData = async () => {
    if (keyword === "") {
      setModalContent("錯誤！請輸入查詢關鍵字！");
      setModalIsOpen(true);
      return;
    }
    if (!startDate || !endDate) {
      setModalContent("錯誤！請輸入開始或結束的月份");
      setModalIsOpen(true);
      return;
    }

    const confirmedContent = `是否搜尋 ${keyword} 在 ${startDate} 至 ${endDate} 的資料？`;
    setModalContent(confirmedContent);
    setModalIsOpen(true);
  };

  const handleModalConfirm = async () => {
    setModalIsOpen(false);

    if (modalContent.startsWith('是否搜尋')) {
      const apiKey = process.env.API_KEY;
      const apiData = await GetApiData(apiKey, keyword, startDate, endDate);
      if (apiData) {
        setData(apiData.data);
        setVolume(apiData.volume);
      }
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleDownloadExcel = () => {
    DownloadExcel(data);
  };


  return (
    <div>
      <h1>Similarweb<br />關鍵字各網站流量查詢</h1>
      <p className="comment">#選擇年、月。<br />#可選區間為上個月至12個月之前。<br />#數量上限30，按照Traffic Share排序。</p>
      <label>輸入關鍵字：</label>
      <input id="query" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <br /><br />
      <label htmlFor="start-date">開始日期：</label>
      <DatePicker id="start-date" min={minDate} max={maxDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <br /><br />
      <label htmlFor="end-date">結束日期：</label>
      <DatePicker id="end-date" min={minDate} max={maxDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <br /><br />
      <button className="search-btn" onClick={handleGetApiData}>查詢</button>
      <br /><br />
      <label>Search Volume：</label>
      <SearchVolume volume={volume} />
      <br /><br />
      <DataTable data={data} />
      <button className="download-btn" onClick={handleDownloadExcel}>下載Excel</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Alert Modal"
        className="modal"
      >
        <div>{modalContent}</div>
        {modalContent.startsWith('是否搜尋') && (
          <div>
            <button onClick={handleModalConfirm}>確認</button>
            <button onClick={handleModalClose}>取消</button>
          </div>
        )}
        {!modalContent.startsWith('是否搜尋') && <button onClick={handleModalClose}>確認</button>}
      </Modal>
    </div>
  );
}
