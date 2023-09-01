import { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  }: any = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const [inputText, setInputText] = useState("");
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support this</span>;
  }

  useEffect(() => {
    setInputText((prev) => prev + transcript);
  }, [listening]);

  return (
    <div>
      <p>Microphone: {listening ? "ON" : "OFF"}</p>
      <button onClick={startListening}>start</button>
      <button onClick={SpeechRecognition.stopListening}>stop</button>
      <button onCanPlay={resetTranscript}>reset</button>
      <p>test: {transcript}</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default SpeechToText;

/*

import { useState } from 'react'
import './App.css'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
  const [inputText,setInputText] = useState("")
  if(!browserSupportsSpeechRecognition){
    return <span>Your browser does not support this</span>
  }
  return (
    <>
      <div>
        <p>Microphone: {listening?"ON":"OFF"}</p>
        <button onClick={startListening}>start</button>
        <button onClick={SpeechRecognition.stopListening}>stop</button>
        <button onCanPlay={resetTranscript}>reset</button>
        <p>test: {transcript}</p>
        <input type="text" value={inputText} onChange={()=>setInputText((pre)=>transcript)} />
        {console.log(transcript)}
      </div>
    </>
  )
}

export default App

*/
