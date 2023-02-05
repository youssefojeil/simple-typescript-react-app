import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    notes?: string;
  }[];
}

// const List = ({ people }: IProps) => {
//   return <div>List</div>;
// };

// or like this
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} className="List-img" alt={person.name} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.notes}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
