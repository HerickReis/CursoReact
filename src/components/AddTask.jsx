import { useState } from "react";
import InputTask from "./InputTask";

function AddTask({ onAddTaskSumbmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log({ title, description });
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <InputTask
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <InputTask
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          //Validar se titulo e descricao esta preeechido
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }

          onAddTaskSumbmit(title, description);
          setTitle(""), setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
