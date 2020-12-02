import React from 'react';
import Layout from './hoc/Layout';
import {Switch, Route,Redirect} from 'react-router-dom';
import './containers/CharactersPage';
import CharactersPage from './containers/CharactersPage';
import EpisodePage from './containers/EpisodePage';
import LocationsPage from './containers/LocationsPage';
import WatchListPage from './containers/WatchListPage';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/locations" component ={LocationsPage}></Route>
          <Route path="/episodes" component ={EpisodePage}></Route>
          <Route path="/characters" component ={CharactersPage} ></Route>
          <Route path="/watch-list" component ={WatchListPage} ></Route>
          <Redirect from="/" to="/episodes"  exact/>
        </Switch>
      </Layout>   
    </div>
  );
}

export default App;
