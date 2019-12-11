import React, {Component} from 'react';
import Home from './pages/Home';
import GlobalStyles from './globals/globalStyles';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <Home />
            </>
        );
    }
}

export default App;
