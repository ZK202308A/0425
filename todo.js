

let sequence = 3
let todos = [
  {tno:1, title: 'Test Todo 1', complete:false },
  {tno:2, title: 'Test Todo 2', complete:false },
]

export const addTodo = (title) => {

  const todo = {tno:sequence++, title:title, complete:false}

  todos= [...todos, todo]

}

export const removeTodo = (tno) => {

  todos = todos.filter(todo => todo.tno !== tno)

}

export const getTodos = () => {
  return [...todos]
}

