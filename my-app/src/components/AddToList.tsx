import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({ name: "", age: "", note: "", img: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        notes: input.note,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddTolList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddTolList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddTolList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddTolList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
