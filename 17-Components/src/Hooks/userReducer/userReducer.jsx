import React, { useReducer } from 'react';

const initialState = { name: '', email: '', password: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function MyForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <div>
        <h3>Name : {state.name}</h3>
        <h3>Email : {state.email}</h3>
        <h3>Password : {state.password}</h3>
    </div>
    <br /><br /><br />
    <form>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={state.email}
        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={state.password}
        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        placeholder="Password"
      />
    </form>
    </>
  );
}

export default MyForm