import React from "react";

export default function CheckBox(props) {
  const handleChange = () => {
    const { id,value,isChecked, handleToggle } = props;

    handleToggle(id,value,isChecked);
  };

  const { value,id, isChecked } = props;
  console.log(props);

  return (
    <tr>
        <td>{id}</td>
        <td>{value}</td>
        <td><input
          type="checkbox"
          value={value}
          checked={isChecked}
          onChange={handleChange}
        /></td>
    </tr>
  );
}
