import { useState } from 'react';

function App() {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    console.log(reader);

    reader.onload = (e) => {
      const csvText = e.target.result;
      const lines = csvText.split('\n');
      const headers = lines[0].split(',');

      for (let i = 1; i < lines.length; i++) {
        console.log(lines[i]);
        const dataLine = lines[i].split(',');
        console.log(dataLine);
        const rowData = {};
        for (let j = 0; j < headers.length; j++) {
          rowData[headers[j]] = dataLine[j];
        }
        csvData.push(rowData);
      }

      setCsvData(csvData);
      setHeaders(headers);
    };

    reader.readAsText(file);
  };

  return (
    <div className="App">
      <h1>Mesures de qualité de l'air</h1>
      <input type="file" accept=".csv" onChange={handleFile} />
      {csvData.length > 0 && (
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, index) => (
                  <td key={index}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;