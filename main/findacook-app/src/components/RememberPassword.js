import { React, useState } from "react";

const RememberPassword = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label>Remember password</label>
    </div>
  );
};

export default RememberPassword;