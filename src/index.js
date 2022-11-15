import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // this is the only time we allow direct assignment to this.state
        this.state = { latitude: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!
                this.setState({ latitude: position.coords.latitude });
            },
            err => console.log(err)
        ); 
    }

    // React says we must define render! No render = error
    render() {
        return <div>Latitude: { this.state.latitude }</div>
    }
}

ReactDOM.render (<App />, document.querySelector('#root'));