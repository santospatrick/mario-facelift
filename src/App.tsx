import './App.css';
import Square from './components/Square'
import ShyGuy from './assets/shy-guy.png'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Mario Facelift!</h1>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Square src={ShyGuy} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Square src={ShyGuy} />
          </div>
          <small>All rights reserved to Nintendo</small>
        </div>
      </div>
    </div>
  );
}

export default App;
