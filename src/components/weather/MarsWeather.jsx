import React from 'react';
import MarsWeatherDisplay from './MarsWeatherDisplay';

class MarsWeather extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recentData: {
                lastSol: '',
                currentSeason: '',
                averageTemp: '',
                highTemp: '',
                lowTemp: '',
            },

            respJson: {},
            solKeys: {},
        }
    }


    componentDidMount() {
        let key = 'ZDJJHnQ2ZteVFqHiik49vTYcQQCRNPpASMyeK7vB';
        fetch(`https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                let last = json[Object.keys(json)[Object.keys(json).length - 3]];

                this.setState({
                    lastSol: json.sol_keys[6],
                    currentSeason: last.Season,
                    averageTemp: last.AT.av,
                    highTemp: last.AT.mx,
                    lowTemp: last.AT.mn,

                    respJson: json,
                    solKeys: json.sol_keys,
                });
                console.log(this.state.respJson);
            })
    }

    render() {

        return (
            <div>
                {
                    this.state.lastSol !== '' ?
                        <MarsWeatherDisplay
                            lastSol={this.state.lastSol}
                            currentSeason={this.state.currentSeason}
                            averageTemp={this.state.averageTemp}
                            highTemp={this.state.highTemp}
                            lowTemp={this.state.lowTemp}
                        />
                        : null
                }
            </div>
        );
    }
}

export default MarsWeather;