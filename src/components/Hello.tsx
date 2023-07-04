import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { COUNTER_ACTION_TYPE } from "../types/index";
import countReducer from '../reducers/CountReducer';


type HelloProps = {
    students: {
        name: string,
        age: number,
        registered: boolean
    }[],
    program: 'TS' | 'JS',
};

type HelloProps1 = {
    children: React.ReactNode
}

type HelloProps2 = {
    defaultName: string,
    handleClick: (name: string) => void
}

type HelloProps3 = {
    defaultValue: string,
    styles: React.CSSProperties,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type StudentProps = {
    name: string
    age: number
    address: string
}


const initialState = { count: 0};

export default function Hello() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrease = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.INCREASE,
      payload: 1
    });
  }

  const handleDecrease = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.DECREASE,
      payload: 1
    });
  }

  const handleDouble = () => {
    dispatch({
      type: COUNTER_ACTION_TYPE.DOUBLE
    });
  }

  return <div>
            Count: {state.count}<br/>
            <button onClick={ handleIncrease }> + </button>
            <button onClick={ handleDecrease }> - </button>
            <button onClick={ handleDouble }> *2 </button>
        </div>;
}

export function HelloUseState() {

    const [count, setCount] = useState(0)
  
    return (
      <div className="App">
        <p>Count is: {count}</p>
  
        <div>
          <button onClick={() => {setCount(count => count + 1);}}>Add 1</button>
          <button onClick={() => setCount(count-1)}>Decrease 1</button>
  
          <button onClick={() => setCount(count+10)}>Add 10</button>
          <button onClick={() => setCount(count-10)}>Decrease 10</button>
  
          <button onClick={() => setCount(0)}>Reset count</button>
        </div>
      </div>
    )
  }
export function HelloUseReducer() {

    function reducer(state: {count: number }, action: {[type: string]: string}) {
      switch (action.type) {
        case 'ADD': return { count: state.count + 1 }
        case 'SUB': return { count: state.count - 1 }
        case 'ADD10': return { count: state.count + 10 }
        case 'SUB10': return { count: state.count - 10 }
        case 'RESET': return { count: 0 }
        default: return state
      }
    }
  
    const [state, dispatch] = useReducer(reducer, { count: 0 })  
  
    return (
      <div className="App">
        <p>Count is: {state.count}</p>
  
        <div>
          <button onClick={() => dispatch({type: 'ADD'})}>Add 1</button>
          
          <button onClick={() => dispatch({type: 'SUB'})}>Decrease 1</button>
  
          <button onClick={() => dispatch({type: 'ADD10'})}>Add 10</button>
          <button onClick={() => dispatch({type: 'SUB10'})}>Decrease 10</button>
  
          <button onClick={() => dispatch({type: 'RESET'})}>Reset count</button>
        </div>
      </div>
    )
}

export  function Hello7() {
  const [paid, setPaid] = useState(false);
  const handleClick = (): void => {
    setPaid(prestatue => prestatue =!paid);
  }  

  return <div>
            <div>Paid? {paid? 'Yes': 'No'}</div>
            <button onClick={ handleClick }>
                {
                    paid? 'Cancel': 'Pay'
                }
            </button>
        </div>;
}


export function Student(props: StudentProps) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Address: {props.address}</p>
        </div>
    )
}


export  function Hello6(props: React.ComponentProps<typeof Student>)
{
    return <div>
        {props.age > 20 ? (<Student {...props} />) : (<></>)}
    </div>;
}





export function Hello1(props: HelloProps) {
    var r = <div>
        <h2>{props.program}</h2>
        {
            props.students.map((student) => {
                return (
                    <div><ul>
                        <li>
                            Hello, {student.name}
                            your age is {student.age}
                            you are {student.registered ? "registered" : "not registered"}
                        </li>
                    </ul></div>
                )
            })
        }
    </div>;
    return r;
}

export function Hello2(props: HelloProps2) {
    return <div>
        <button onClick={() => props.handleClick("demo")}>Click me </button>
    </div>;
}

export  function Hello4(props: HelloProps3) {
    return <div>
        <input type='text' placeholder={props.defaultValue} style={props.styles} onChange={props.handleChange} />
    </div>;
}


// export function Hello1(props: HelloProps) {
//     return <div>
//         Hello, {props.students.name}
//         your age is {props.students.age}
//         you are {props.students.registered ? "registered" : "not registered"}
//     </div>;
// }