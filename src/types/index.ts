import { createSlice } from "@reduxjs/toolkit"

export type CounterState = {
    count: number
  }
  
export type PayloadCounterAction = {
    type: string
    payload: number
}
export type NoPayloadCounterAction = {
    type: string
}

export type CounterAction = PayloadCounterAction | NoPayloadCounterAction
  
export enum COUNTER_ACTION_TYPE {
    INCREASE = 'increase',
    DECREASE = 'decrease',
    DOUBLE = 'double'
}
  
export type User = {
    userid: string
    email: string
    role: string
}

export type UserState = {
    users: { [x: string]: string }[];
}

export type ReduxState = {
    count: number;
};