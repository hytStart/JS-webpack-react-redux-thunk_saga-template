import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { Get } from '../utils/request';

const User = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Get('/api/user/gettestdata', {}).then((response) => {
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
