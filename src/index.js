import React from 'react';
import ReactDOM from 'react-dom';

// functional component is not suitable for async geolocator - have to make it a class based component which is step one towards the solution
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );    

//     return <div>Latitude: </div>
// };

// class based component of the above
class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        ); 
        return <div>Latitude: </div>
    }
}

ReactDOM.render (<App />, document.querySelector('#root'));