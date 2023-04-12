import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css'

export const getDataChart = async () => {
    const URL = ''; //ссылка на api
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

export const getOptionsChart = (data: any) => {
    return {
        chart: {
            type: 'spline'
        },
        yAxis: {
            title: {
                text: ''
            },
            min: -100
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'DATASET',
                data: 'data.что то там'
            }
        ]
    }
}

export const Chart = (props: any) => {
    const { options } = props;
    return (
        <div>
            {options ? <div className='chart-box'><HighchartsReact className='chart-box' highcharts={Highcharts} options={options} /> </div> : <div>Loader...</div>}
        </div>
    )
}