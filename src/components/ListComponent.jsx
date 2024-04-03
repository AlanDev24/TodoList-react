export const ListComponent = ({ todos, setTodos }) => {

    const handleClick = (todo) =>{
      const reminingTodos = todos.filter( (task) => task !== todo)
      setTodos(reminingTodos)
    }

  return (
    <div className="flex justify-center m-10">
      <ul className="bg-stone-200 ">
        {todos.map((todo, i) => (
          <li className="p-7 max-w-[1200px] w-[400px] truncate flex justify-between" key={i}>
            
            <p className="text-xl text-zinc-900">{todo}</p>

            <button
            onClick={() => handleClick(todo)}
            className="hover:bg-slate-400 p-3 rounded-lg"
            ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" 
            />
          </svg>
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
