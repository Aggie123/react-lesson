const ADD_TODO='ADD_TODO'

function AddTodo(text){
	return {
		type:'ADD_TODO',
		text
	}
}