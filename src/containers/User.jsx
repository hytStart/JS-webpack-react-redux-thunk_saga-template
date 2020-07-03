import React, { useState } from "react";
import { Input } from "antd";

const User = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <span>User</span>
      <Input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text}
    </div>
  );
};

export default User;
