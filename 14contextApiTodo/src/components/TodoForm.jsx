import { useState } from "react";
import { useTodo } from "../context/context";

function TodoForm() {

    const [input, setInput] = useState('')

    const { addTodo } = useTodo()

    const AddClickHandler = (e) => {
        e.preventDefault();

        addTodo({ id: Date.now(), message: input, toogle: false })
        setInput('')
    }

    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={AddClickHandler} type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

