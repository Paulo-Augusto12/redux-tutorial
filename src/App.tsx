import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch } from "react-redux";

import { increment, incrementAmount } from "./features/counter/counter-slice";
import { useAppSelector } from "./store/useAppSelector";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }

  function incrementCounterByAmount(amount: number) {
    dispatch(incrementAmount(amount));
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="card">
          <button
            onClick={() => {
              handleClick();
            }}
          >
            count is {count}
          </button>
        </div>
        <div className="card">
          <button
            onClick={() => {
              incrementCounterByAmount(15);
            }}
          >
            increment Amount
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch({ type: "counter/incrementing" });
//     },
//     incrementAmount: (amount) => {
//       dispatch({ type: "counter/incrementAmmount", payload: amount });
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
