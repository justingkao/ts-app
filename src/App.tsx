import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { UserContextProvider } from './Model/UserContext';
import Header from './components/Header';
import ListComponent, { PropsLimit } from './components/ListComponent';
import MasterForm from './components/MasterForm';
import Formily0 from './components/Formily0';
import Formily1 from './components/Formily1';
import Form1 from './components/Form1';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UserList from './components/Redux';
import { HelloUseReducer, HelloUseState } from './components/Hello';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { counterSlice } from './types/CountSlice';
import ReduxtoolKit from './components/ReduxtoolKit';


const people = [
  { name: "Demo", age: 20, registered: true },
  { name: "Demo2", age: 21, registered: false },
];

const people1 = ["Demo", "Demo2", "Demo3", "4"];

const handleClick = (item: string) => {console.log(item)};
const handleClick1 = (item: {name: string} ) => {console.log(item)};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};


const ReduxReducer = (state = { count: 0 }, action: {type: any, payload: any}) => {
  switch (action.type) {
    case 'ADD': return { count: state.count + 1 }
    case 'SUB': return { count: state.count - 1 }
    case 'ADDSOME': return { count: state.count + action.payload }
    case 'SUBSOME': return { count: state.count - action.payload }
    case 'RESET': return { count: 0 }
    default: return state
  }
}

const store = createStore(ReduxReducer, { count: 666 });

const store1 = configureStore({
  reducer:
  {
    counter: counterSlice.reducer
  },
  preloadedState: { counter: { count: 999 } }
})


function App() {
  return (
    <>
      <div className="App">
        <Hello />
        <HelloUseState />
        <HelloUseReducer />
        <UserContextProvider>
          <Header />
        </UserContextProvider>
      </div>
      <hr />
      <div>
        <Provider store={store}>
        <UserList/>
        </Provider>
        <Provider store={store1}>
        <ReduxtoolKit/>
        </Provider>
      </div>
      <hr />
      <div className='APP1'>
        <ListComponent data={people1} handleClick={handleClick} />
      </div>
      <hr />
      <div className='APP2'>
        <PropsLimit name="Boeing 767" speed={4000} maxHeight={10000} />
      <hr />
        <PropsLimit name="Titanic" speed={200} displacement={8000} />
      </div>
      <hr />
      <div className='APP3'>
        <MasterForm />
      </div>
      <hr /> 
      <div>
        <Formily0 />
      </div>
      <hr /> 
      <div>
        <Formily0 />
      </div> 
      <hr /> 
      <div>
        <Form1 />
      </div>
    </>
  );
}
//<Hello name="Lucy" age={28} address="124 Fake Street" />
//<Hello defaultValue='input' styles={{ backgroundColor: 'yellow' }} handleChange={e => handleChange(e)} />

export default App;
