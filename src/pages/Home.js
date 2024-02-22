import React from 'react';
import FreePrompt from '../components/freePrompt';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: '#005082' }} >Generative AI with React JS!</h1>
      <p style={{ textAlign: "center" }}>Built free prompt with ❤️ using ReactJS + Gemini API</p>

      {
        <FreePrompt />
      }
    </div>
  );
};

export default Home;