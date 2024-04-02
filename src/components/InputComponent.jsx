import { useState } from "react";

export const InputComponent = ({onNewTodo}) => {

  const [inputValue, setInputValue] = useState("")

  const onInputChange =({target})=>{
    setInputValue(target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim()==='') return
    onNewTodo(inputValue.trim())
    setInputValue('')
  }

  return (
    <form className=" p-5 mx-10 bg-slate-500 rounded-md lg:mx-96 "
    onSubmit={onSubmit}>
      <input 
      value={inputValue}
      onChange={(event) =>{onInputChange(event)}}
      className="h-10 border-gray-950 rounded-md w-full px-4 py-2" type="text" placeholder="Add a new To Do"/>
    </form>
  );
};
