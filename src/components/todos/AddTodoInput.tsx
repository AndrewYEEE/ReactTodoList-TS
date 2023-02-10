import React, {useState} from 'react';

//Props
interface Props{
    onAddTodo: AddTodo
}

const AddTodoinput=(props:Props)=>{
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        props.onAddTodo && props.onAddTodo(text);
        setText("");
    }

    return (
        <div>
            <form className="input-group mb-5" onSubmit={(e)=>handleSubmit(e)}>
                <input
                    className="form-control border-primary"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    className="btn btn-primary"
                    type="submit"
                    disabled={!text}
                >
                    Add Todo
                </input>
            </form>
        </div>
    )
}

export default AddTodoinput;



