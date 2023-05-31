import {
  HeaderBox,
  AddContentBox,
  AddButton,
  TickIcon,
  Icon,
  EditIcon,
  DeleteIcon,
  ToDoList,
  BigBox,
} from './styles/styledElements';
import { ChangeEvent, useState, useEffect } from 'react';
import { ITask } from './Interfaces';
import * as todoApi from './services/todoApi';

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [todo, setTodo] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchAllTodo = async () => {
      const res = await todoApi.getToDo();
      setTodo(res.data);
      console.log(todo, '---Todo---');
    };
    fetchAllTodo();
  }, []);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClickAdd = () => {
    setOpen(!open);
  };

  const handleClickDone = async (title: string) => {
    if (title.trim() === '') {
      return;
    }
    setOpen(!open);
    console.log(title, 'taskkkk');
    try {
      await todoApi.addToDo(title);
      setTitle('');
      const res = await todoApi.getToDo();
      setTodo(res.data);
      console.log(res.data, 'res.data');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSaveEdit = async (id: number, title: string) => {
    setEdit(!edit);
    setEditItemId(id);
    console.log(id);
    try {
      await todoApi.editToDo(id, title);
      const res = await todoApi.getToDo();
      setTodo(res.data);
      setTitle('');
      console.log(res.data, 'res.data');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickEdit = (id: number) => {
    setEdit(!edit);
    setEditItemId(id);
  };

  const handleClickDelete = async (id: number) => {
    try {
      const confirmedDelte = window.confirm('are you sure?');
      if (confirmedDelte) {
        await todoApi.deleteTodo(id);
        const res = await todoApi.getToDo();
        setTodo(res.data);
        console.log(res.data, 'res.data ja');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <BigBox>
          <HeaderBox>
            <p>
              MY TO DO LIST
              <i className="fas fa-rocket" style={{ marginLeft: '12px' }}></i>
            </p>
          </HeaderBox>
          <AddButton onClick={handleClickAdd}>Add</AddButton>
          {/* ADD */}
          {open ? (
            <AddContentBox>
              <input
                type="text"
                placeholder="add your to do list here"
                name="title"
                value={title}
                onChange={handleChangeInput}
                style={{ margin: 'auto', width: '70%', height: '50%' }}
              />
              <TickIcon
                className="fa-sharp fa-solid fa-check"
                onClick={() => handleClickDone(title)}
              />
            </AddContentBox>
          ) : (
            ''
          )}
          {todo.map((item: ITask) => (
            <ToDoList key={item.id}>
              {edit && editItemId === item.id ? (
                <>
                  <input
                    type="text"
                    style={{ margin: 'auto', width: '70%', height: '50%' }}
                    name="title"
                    value={title}
                    onChange={handleChangeInput}
                  />{' '}
                  <TickIcon
                    className="fa-sharp fa-solid fa-check"
                    onClick={() => handleClickSaveEdit(item.id, title)}
                  />
                </>
              ) : (
                <>
                  <p style={{ margin: 'auto', width: '60%' }}>{item.title}</p>
                  <Icon>
                    <EditIcon
                      className="fa-solid fa-pen"
                      onClick={() => handleClickEdit(item.id)}
                    />
                    <DeleteIcon
                      className="fa-solid fa-trash"
                      onClick={() => handleClickDelete(item.id)}
                    />
                  </Icon>
                </>
              )}
            </ToDoList>
          ))}
          {/* )} */}
        </BigBox>
      </div>
    </>
  );
};

export default App;
