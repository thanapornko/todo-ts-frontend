import styled from 'styled-components';

export const BigBox = styled.div`
  background: #f7e071;
  width: 500px;
  margin: auto;
  border: 2px solid;
  border-radius: 16px;
  padding: 20px;
`;

export const HeaderBox = styled.div`
  background: pink;
  height: 80px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  font-family: monospace;
  font-size: 2rem;
  border: 2px solid;
  border-radius: 16px;
`;

export const AddButton = styled.button`
  background: skyblue;
  font-family: monospace;
  font-size: 1.5rem;
  display: flex;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px solid;
  &:hover {
    background: lightblue;
    cursor: pointer;
  }
`;

export const AddContentBox = styled.div`
  background: skyblue;
  height: 80px;
  width: 400px;
  display: flex;
  align-items: center;
  margin: auto;
  font-family: monospace;
  font-size: 1.2rem;
`;

export const ToDoList = styled(AddContentBox)`
  background: #a6a5f8;
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const TickIcon = styled.div`
  margin: auto;
  &:hover {
    color: #09662c;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 16%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const EditIcon = styled.div`
  &:hover {
    color: #9c6c0b;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled.div`
  &:hover {
    color: #883225;
    cursor: pointer;
  }
`;
