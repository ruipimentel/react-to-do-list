import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const [ tarefas, setTarefas ] = useState([
    { id: 1, completada: true, texto: 'Tarefa A' },
    { id: 2, completada: false, texto: 'Tarefa B' },
    { id: 3, completada: false, texto: 'Tarefa C' }
  ]);

  const setTarefa = (tarefa, completada) => {
    setTarefas(
      tarefas.map(_tarefa => {
        if (_tarefa.id === tarefa.id) {
          return {
            id: tarefa.id,
            completada,
            texto: tarefa.texto
          };
        } else {
          return _tarefa;
        }
      }),
    );
  };

  const deleteTarefa = (tarefa) => {
    setTarefas(tarefas.filter((_tarefa) => _tarefa !== tarefa));
  };

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
            <ToDoList
              tarefas={tarefas}
              setTarefa={setTarefa}
              deleteTarefa={deleteTarefa}
            />
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
