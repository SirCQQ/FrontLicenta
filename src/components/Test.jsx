import React ,{useState} from 'react';
import {Button} from "react-bootstrap";

export default function Test(){
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me for +1
      </Button>
      <Button onClick={() => setCount(count - 1)}>
        Click me for -1
      </Button>
      <p>You clicked {count2} times</p>
      <Button onClick={() => setCount2(count2 + 1)}>
        Click me for +1
      </Button>
      <Button onClick={() => setCount2(count2 - 1)}>
        Click me for -1
      </Button>
      
    </div>
  );
};



