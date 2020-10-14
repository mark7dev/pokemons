import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>
        </div>
      </Provider>
    </Router>
    
  );
}

export default App;
