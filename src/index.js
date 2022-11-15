import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // constructor is optional for initial setup if needed
    constructor(props) {
        super(props);

        // this is the only time we allow direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        ); 
    }

    // React says we must define render! No render = error
    render() {
       if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: { this.state.errorMessage }</div>;
       }
       if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: { this.state.lat }</div>;
       }
       return <div>Loading!</div>;
    }
}

ReactDOM.render (<App />, document.querySelector('#root'));