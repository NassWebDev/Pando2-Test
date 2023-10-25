import Spinner from './Spinner';

function CsvData( {csvData, headers, loading} ) {

    return(
        <>
            {
                loading && csvData.length === 0 ? 
                    <Spinner />
                :
                    <table style={{border: '1px solid white'}}>
                        <thead>
                            <tr>
                            {headers.map((header, index) => (
                                <th style={{border: '1px solid white', padding: '5px'}} key={index}>{header}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {headers.map((header, index) => (
                                <td style={{border: '1px solid white', padding: '5px', textAlign: 'center'}} key={index}>{row[header]}</td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
                    </table>
            }
        </>
    )
}

export default CsvData;