function ToDoList({
  tarefas,
  setTarefa,
  deleteTarefa
}) {
  return (
    tarefas.map(tarefa => (
      <div key={tarefa.id}>
        <input
          id={`completada_${tarefa.id}`}
          type="checkbox"
          onChange={event => setTarefa(tarefa, event.target.checked)}
          value={tarefa.completada}
          defaultChecked={tarefa.completada}
        />
        <label htmlFor={`completada_${tarefa.id}`}>
          { tarefa.texto }
        </label>
        { tarefa.completada && (
          <button
            type="button"
            onClick={event => deleteTarefa(tarefa)}
          >
            Excluir
          </button>
        ) }
      </div>
    ))
  );
}

export default ToDoList;
