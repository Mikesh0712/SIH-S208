import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "🌱 Hello! I am your Plant Disease Assistant. Please speak or upload an image.", sender: "bot" }
  ]);
  const [language, setLanguage] = useState("en"); // 'en' or 'hi'
  const fileInputRef = useRef(null);

  // Add message to chat
  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
    if (sender === "bot") speakText(text);
  };

  // Speech recognition for voice input
  const startVoice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "hi-IN" : "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      addMessage(text, "user");

      // Check if user wants language change
      if (text.toLowerCase().includes("hindi")) setLanguage("hi");
      if (text.toLowerCase().includes("english")) setLanguage("en");

      if (fileInputRef.current.files[0]) handleUpload(fileInputRef.current.files[0]);
    };
  };

  // Text-to-speech
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "hi" ? "hi-IN" : "en-US";
    window.speechSynthesis.speak(utterance);
  };

  // Upload image to backend
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("lang", language);

    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      const predictedDisease = res.data.prediction;
      addMessage(`🌱 Predicted disease: ${predictedDisease}`, "bot");
    } catch (err) {
      console.error(err);
      addMessage("❌ Error predicting disease.", "bot");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={startVoice}>🎤 Speak</button>
        <input type="file" ref={fileInputRef} onChange={e => handleUpload(e.target.files[0])} />
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Chatbot;
