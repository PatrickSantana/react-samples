import React, { useState } from 'react';


const Button: React.FC = () => {
  //const [state, setstate] = useState(initialState)
  const [name, setName] = useState('hi');

  return (
    <div className="Button">Button</div>
  );
}

export default Button;
