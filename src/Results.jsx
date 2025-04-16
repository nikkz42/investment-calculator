import {calculateInvestmentResults, formatter} from './util/investment.js';

export default function Results({userInput}) {
    const data = calculateInvestmentResults(userInput);
    console.log(data);
    return (
        <div>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>    
                <tbody>
                        {data.map((yeardata) => {
                                return(
                                    <tr key={yeardata.year}>
                                        <td>{yeardata.year}</td>
                                        <td>{formatter.format(yeardata.valueEndOfYear)}</td>
                                        <td>{formatter.format(yeardata.interest)}</td>
                                    </tr>
                                );
                            })
                        }
                </tbody>
            </table>
        </div>
    );
}