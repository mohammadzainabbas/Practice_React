import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

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
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: 500,
          height: 500,
          margin: "auto"
        }}
      >
        <button
          style={{
            padding: 20
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
            padding: 20
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
