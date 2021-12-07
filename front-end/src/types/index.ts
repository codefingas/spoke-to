import React from "react";

export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    value?: string | number;
    size?: 'small' | 'large';
    handleSubmit?: () => {};
    error?: boolean;
    children?: React.ReactElement;
    className?: string;
    title?: string;
};


export interface ActionTypes {
    GET_TODOS: string;
    GET_TODO: string;
    ADD_TODO: string;
    UPDATE_TODO: string;
    REMOVE_TODO: string;
};


export interface TodoPayload {
    id: string | number;
    title: string;
    completed: boolean;
};

export interface InitialStateInterface {
    taskList: []
};

export interface TaskListProps {
    item: TodoPayload;
    handleUpdate: (data: any) => void;
    handleDelete: (id: string | number) => void;
    handleSubmit: (data: any) => void;
    taskList: TodoPayload[];
}

export type PayloadType = { type: string, payload: any };