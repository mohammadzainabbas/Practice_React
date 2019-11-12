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
      <div>
        <button onClick={handleSubtract}>
          <FaMinus />
        </button>
        <span>{`${minutes} minutes`}</span>
        <button onClick={handleAdd}>
          <FaPlus />
        </button>
        {error && <span>{error}</span>}
      </div>
    </>
  );
};

export default App;
