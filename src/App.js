import './App.css';
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Header from './components/Header';
import Post from './pages/Post'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="container" id="whole">
          <div className="row">
            <div className="col-md-2 ">
              <div className="sidebar">
                <Header />
                <ul className="nav flex-md-column flex-lg-column flex-xxl-column flex-xl-column">
                  <div id="items"><li className="nav-item">
                    <button className="button-side"><Link to="/" className="nav-link">Home</Link></button>
                  </li>
                    <li className="nav-item">
                      <button className="button-side"><Link to="/Projects" className="nav-link">Projects</Link></button>
                    </li>
                    <li className="nav-item">
                      <button className="button-side"><Link to="/About" className="nav-link">About</Link></button>
                    </li>
                    <li className="nav-item">
                      <button className="button-side"><Link to="/Contact" className="nav-link">Contact</Link></button>
                    </li>
                    <li className="nav-item">
                      <button className="button-side"><a className="nav-link" href="http://github.com/Manoj-gowra">Github</a></button>
                    </li></div>
                </ul>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 col-sm-12 ">
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/About" exact component={About}></Route>
                <Route path="/Contact" exact component={Contact}></Route>
                <Route path="/Projects" exact component={Projects}></Route>
                <Route exact path="/Post/int:id" render={props => <Post{...props} />} />
                <Route component={Error}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    </div >
  );
}

export default App;
