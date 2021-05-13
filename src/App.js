import './bootstrap-grid.scss';
import './App.scss';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import Header from './header/header'
import Main from './components/main/main';
import News from './components/news/news';
import Detail from './components/detail/detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/news">
            <News />
          </Route>
          {/* <Route path="/detail/:id">
            <Detail />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
