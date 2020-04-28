import React from 'react';
//import Cards from './components/Cards/Cards';
//import Cards from './components/Chart/Chart';
//import Cards from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/img1.jpg';


class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetcheData=await fetchData();
        this.setState({ data: fetcheData});
        //console.log(data);
    }

    handdleCountryChange= async(country) =>{
        
       //console.log(fetcheData);
       //fetch data.
       const fetcheData=await fetchData(country);
       //set the state
       this.setState({ data: fetcheData, country: country});
    }
    render(){
        const { data,country } = this.state;
        
        return(
            <div className={styles.container}>
                <img className={styles.image}  src={coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handdleCountryChange={this.handdleCountryChange} />
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}
export default App;
