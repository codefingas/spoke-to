import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import type from "../store/actionTypes";
import { TodoPayload } from "../types/index";
import { RootState } from "../store/rootReducer";
import Tasklist from "../Components/Tasks/TaskList";

// import TaskList from "../Components/Tasks/TaskList";
// import TaskForm from "./components/taskForm";

const ContainingDiv = styled.div`
  margin-top: 50px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state: RootState) => {
    return {
      taskList: state.todo.taskList,
    };
  });

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    dispatch({
      type: `${type.GET_TODOS}_REQUESTED`,
    });
  };
  const handleUpdate = (data: any) => {
    dispatch({
      type: `${type.UPDATE_TODO}_REQUESTED`,
      data,
    });
  };
  const handleDelete = (id: string | number) => {
    if (window.confirm(`Are you sure you want to delete task?`)) {
      dispatch({
        type: `${type.REMOVE_TODO}_REQUESTED`,
        id,
      });
    }
  };
  const handleSubmit = (data: any) => {
    dispatch({
      type: `${type.ADD_TODO}_REQUESTED`,
      data,
    });
  };
  return (
    <ContainingDiv className="container">
      <h3>Todos</h3>
      {taskList.length === 0 ? (
        <div>No Todos</div>
      ) : (
       taskList && taskList.map((item: TodoPayload, index: number) => (
          <Tasklist
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            taskList={taskList}
            item={item}
            key={index}
          />
        ))
      )}
    </ContainingDiv>
  );
};
export default Home;
