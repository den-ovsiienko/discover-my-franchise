import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import { Line, Bar} from 'react-chartjs-2'
import Sources from './components/Sources';


const options={
  maintainAspectRatio: false,
}

export const stateEnum = {
  all: 'all',
  bar: 'bar',
  line: 'line',
  sources: 'sources',
}

const App = () => {
  const [data, setData] = useState({})
  const [currentState, setSate] = useState(stateEnum.all)
  const [source, setSource] = useState(null)

  const fetchData = async () => {
    return await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => res.json())
  }

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData()
      setData(createChartData(dataFromServer))
      setSource(dataFromServer.source)
    }

    getData()
  }, [])

  const createChartData = (res) => {
    if(res === {})
      return {}
    return {
      labels: res.data.map((obj) => obj.Year),
      datasets: [{
          label: `${res.data[0].Nation} Population`,
          data: res.data.map((obj) => obj.Population),
          backgroundColor: [
              '#3ec4f3'
          ],
      }]
    }
  }

  const onClick = (newState) => {
    setSate(newState)
  }
  
  return (
    <div className="App">
      <Header onButtonClick={onClick} />
      <div className='container'>
        {
          {
            'all' : 
              <>
                <Line className='chart' data={data} options={options}/>
                <Bar className='chart' data={data} options={options}/>
              </>,
            'bar' : <Bar className='chart' data={data} options={options}/>,
            'line': <Line className='chart' data={data} options={options}/>,
            'sources': <Sources source={source} />
          }[currentState]
        }
      </div>
    </div>
  );
}

export default App;
