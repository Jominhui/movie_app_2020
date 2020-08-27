import React from 'react';

const Rapper = ({fav}) =>{
return <h1>I like {fav}</h1>;
}

function App() {
  return( 
    <div>
      <h1>Hello!</h1>
      <Rapper fav="Ash Island" />
      <Rapper fav="Hash Swan" />
      <Rapper fav="ChangMo" />
      <Rapper fav="Haon" />
    </div>
    );
}

export default App;
