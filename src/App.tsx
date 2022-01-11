import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';
import Square from './components/Square'
import ShyGuy from './assets/shy-guy.png'
import ShyGuyPart from './assets/shy-guy-part.png'
import DraggableSquare from './components/DraggableSquare';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Mario Facelift!</h1>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <DndProvider backend={HTML5Backend}>
              <DraggableSquare src={ShyGuyPart} />
            </DndProvider>
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
