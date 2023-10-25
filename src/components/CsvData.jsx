import Spinner from './Spinner';

function CsvData( {csvData, headers, loading} ) {

    return(
        <>
            {
                loading && csvData.length === 0 ? 
                    <Spinner />
                :
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
            }
        </>
    )
}

export default CsvData;