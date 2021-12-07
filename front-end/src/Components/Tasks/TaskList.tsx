import React, { useState, ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../common/Button";
import { TaskListProps } from "../../types/index";

const initialState = {
  id: null,
  status: "",
  title: "",
};

const strikeFrame = keyframes`0% {
  width: 0;
}
100% {
  width: 100%;
}`;

const ContainingDiv = styled.div`
  .strike {
    position: relative;
  }
  .strike::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: black;
    animation-name: ${strikeFrame};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  button {
    margin-top: 30px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;

const StatusCirle: any = styled.span`
  background-color: ${({ item }: TaskListProps) =>
    item.completed ? "green" : "red"};
  filter: blur(5px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
display: inline-block;
  border: 1px solid ${({ item }: TaskListProps) =>
    item.completed ? "green" : "red"};
    margin-top: 15px;
}
`;

const TaskList = ({
  handleUpdate,
  handleDelete,
  taskList,
  item,
}: TaskListProps): ReactElement => {
  const [updateTask, setUpdateTask] = useState(initialState);
  const { title, completed } = item;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateTask((prevVal) => ({ ...prevVal, [name]: value }));
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (updateTask.title !== "") {
      handleUpdate(updateTask);
      setUpdateTask(initialState);
    }
  };
  const viewUpdate = (data: any) => {
    setUpdateTask(data);
  };
  const moveToDone = (data: any) => {
    data.status = "Done";
    handleUpdate(data);
  };
  return (
    <ContainingDiv>
      <div className="row">
        <div className="col s12 m8">
          <div className="card">
            <div className="card-content">
              <p className={completed ? "strike" : ""}>{title}</p>
              <div>
                Completed: <StatusCirle item={item} />
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  {completed ? (
                    <div>
                      <Button error value="mark as incomplete" />
                    </div>
                  ) : (
                    <div>
                      <Button value="mark as complete" />
                    </div>
                  )}
                </div>
                <div className="grid-item">
                  <Button className="btn-floating blue" title="Edit">
                    <i className="material-icons">edit</i>
                  </Button>
                  <Button className="btn-floating" error title="Delete">
                    <i className="material-icons">delete</i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainingDiv>
  );
};
export default TaskList;
