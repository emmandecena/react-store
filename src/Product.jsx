import { useState } from "react";
import "./index.css";

export default function Product(props) {
  const { details } = props;
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function handleButtonClick() {
    setDisabled(false);
    setCounter(counter + 1);
  }

  function handleButtonDecrement() {
    if (counter > 1) {
      setDisabled(false);
      setCounter(counter - 1);
    } else {
      setDisabled(true);
    }
  }

  return (
    <div className="product">
      <img width="50" alt="" src={details.image} />
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          disabled={disabled}
          onClick={handleButtonDecrement}
          className="product-sub"
        >
          -
        </button>
        <h3 className="product-count">{counter}</h3>
        <button onClick={handleButtonClick} className="product-add">
          +
        </button>
      </div>
    </div>
  );
}
