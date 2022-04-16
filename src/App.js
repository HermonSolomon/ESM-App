import { useState } from 'react';
import "./App.scss"
import QuizScreen from "./components/QuizScreen"
import SplashScreen from "./components/SplashScreen/SplashScreen"

import './App.css';

function App() {
  const [hasQuizStarted, setQuizStarted] = useState(false)
  return (
   <>
   <div className='quiz-container'>
     {
       hasQuizStarted ? (
        <QuizScreen retry={()=>setQuizStarted(false)} />
       ) : (
        <SplashScreen start={()=>setQuizStarted(true)} />
       )
     }
   </div>
   </>
  );
}

export default App;
 