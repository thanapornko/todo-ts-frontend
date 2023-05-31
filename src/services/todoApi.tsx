import axios from '../configs/axios';

export const getToDo = () => axios.get('/todos');
export const addToDo = (title: string) => axios.post('/todos', { title });
export const editToDo = (id: number, title: string) =>
  axios.put(`/todos/${id}`, { title });
export const deleteTodo = (id: number) => axios.delete(`/todos/${id}`);
