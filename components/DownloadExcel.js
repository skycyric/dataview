import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver';

const DownloadExcel = (data) => {
    if (!data || !data.length) {
        alert('錯誤！沒有資料可以匯出！');
        return;
    }
    const fileType =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    saveAs(dataBlob, 'data' + fileExtension);
};

export default DownloadExcel;
