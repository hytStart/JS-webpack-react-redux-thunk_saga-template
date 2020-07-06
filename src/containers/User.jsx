import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Get } from "$Utils/request.js";

const User = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    Get("/api/user/gettestdata", {}).then(function (response) {
      console.log(response);
    });
  }, []);
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
