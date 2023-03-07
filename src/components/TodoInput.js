import { useState } from "react";

export const TodoInput = (props) => {
    const [text, setText] = useState('');

    const whatever = () => {
        props.letsAddTodoItem(text);
        setText('');
    }

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={whatever}>Submit</button>
        </div>
    )
}