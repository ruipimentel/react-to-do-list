import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          Início
        </Link>
        &nbsp;
        <Link to="/nova-tarefa">
          Nova tarefa
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            To-Do List
          </Route>
          <Route path="/nova-tarefa">
            Nova tarefa
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
