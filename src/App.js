import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Navbar} from './components/navbar/index';
import {AllTodosPage} from './components/pages/all-todos/index';
import {NewTodoPage} from './components/pages/new-todo/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>

          {/* Homepage */}
          <Route exact path="/">
            <div>
              <AllTodosPage/>
            </div>
          </Route>

          {/* New Todo Page */}
          <Route path="/new">
            <div>
              <NewTodoPage/>
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
