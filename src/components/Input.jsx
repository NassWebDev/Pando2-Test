function Input({ setCsvData, csvData, setHeaders, setLoading }) {

    const handleFile = (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const csvText = e.target.result;
            const lines = csvText.split('\n');
            const headers = lines[0].split(',');
    
            const csvData = [];
            for (let i = 1; i < lines.length; i++) {
                const dataLine = lines[i].split(',');
                const rowData = {};
                for (let j = 0; j < headers.length; j++) {
                rowData[headers[j]] = dataLine[j];
                }
                csvData.push(rowData);
            }
    
            setCsvData(csvData);
            setHeaders(headers);

            setLoading(false);
        };
    
        reader.readAsText(file);
      };

    return (
        <div className="App">
            <h1>Mesures de pression de l'air</h1>
            <div className="input" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="file">Pick a file</label>
                <input type="file" accept=".csv" id="file" onChange={handleFile} />
            </div>
        </div>
    )
}

export default Input;