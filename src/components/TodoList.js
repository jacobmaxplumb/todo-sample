export const TodoList = (props) => {
	console.log(props.myTodoItems);
	return (
		<div>
			{props.myTodoItems.map((todo, index) => (
				<div key={index}>{todo.description}</div>
			))}
		</div>
	);
};
