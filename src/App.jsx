import { useState } from 'react';

import Input from './components/Input';
import CsvData from './components/CsvData';

function App() {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Input csvData={csvData} setCsvData={setCsvData} setHeaders={setHeaders} setLoading={setLoading} />
      <CsvData csvData={csvData} headers={headers} loading={loading} />
    </div>
  );
}

export default App;