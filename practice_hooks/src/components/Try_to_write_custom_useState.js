import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { renderWithCrappyHooks } from "./../index";
/**
 * Try to self-write useState hook (with Ryan Florence)
 **/

//To keep track of states
const states = [];
let calls = -1;

const useState = defaultValue => {
  const callId = ++calls;
  const setValue = newValue => {
    //Assign something
    states[callId][0] = newValue;
    //Reset index
    calls = -1;
    //Re-render
    renderWithCrappyHooks();
  };
  const tuple = [defaultValue, setValue];
  states[callId] = tuple;
  return tuple;
};

const App = () => {
  const [minutes, setMinutes] = useState(5);
  const [error, setError] = useState(null);

  const handleAdd = () => {
    if (minutes < 9) {
      setMinutes(minutes + 1);
      setError(null);
    } else {
      setError("Less than 10 please");
    }
  };

  const handleSubtract = () => {
    if (minutes > 1) {
      setMinutes(minutes - 1);
      setError(null);
    } else {
      setError("More than 0 please");
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: -50,
          marginLeft: -50,
          width: 300,
          height: 300
        }}
      >
        <button
          style={{
            padding: 20,
            borderRadius: "100%"
          }}
          onClick={handleSubtract}
        >
          <FaMinus />
        </button>
        <span
          style={{
            padding: 20
          }}
        >{`${minutes} minutes`}</span>
        <button
          style={{
            padding: 20,
            borderRadius: "100%"
          }}
          onClick={handleAdd}
        >
          <FaPlus />
        </button>
        {error && (
          <span
            style={{
              padding: 20
            }}
          >
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default App;
