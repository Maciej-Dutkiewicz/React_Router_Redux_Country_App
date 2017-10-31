import React from "react";
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory} routes={routes}/>
                <DevTools />
            </div>
        );
    }
}

export default App;