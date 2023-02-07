import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {OPENAI_KEY, OPENAI_ORGANIZATIONid} from './config/config.js';
import 'semantic-ui-css/semantic.min.css'
import {
  Form,
  TextArea,
  Button,
  Icon
} from 'semantic-ui-react';

export default function App() {

const [inputText, setInputText] = useState('');
const [resultText, setResultText] = useState('');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const getOpenAiResponse = () => {
  openai.createCompletion({
  model: "text-curie-001",
  prompt: "You are a rant translator and your job is to \
  translate and rephrase a user's rant to a more calmer, neutral, polite, \
  and professional statements.You should reduce the risk of misunderstandings \
  and help the use communicate their thoughts in \
  a positive and effective way \n User Rant: " + inputText + 
  "Translation:",
  max_tokens: 256,
  temperature: 0.7,
}).then((response) => {
  setResultText(response.data.choices[0].text)
})
};

  return (
    <div>
        <div className="app-header">
            <h2 className="header">daddychill.ai</h2>
            <h1 className="header2">The Rant Translator App</h1>
        </div>
        <div className="app-body">
                <div>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            color ="red"  
                            placeholder='Go rant here...'
                            onChange={(e) => setInputText(e.target.value)}
                            
                        />

                    <Button class="main__btn"
                            color="green"
                            size="large"
                            onClick={getOpenAiResponse}
                        >TRANSLATE</Button>

                        <Form.Field className='yo'
                            control={TextArea}
                            placeholder='Translated better, calmer, more polite and professional rant...'
                            value={resultText}
                        />
                    </Form>
                    

                </div>
            </div>
            <div className='p'>
              <p>//Daddychill is an AI Rant Translator app that helps users communicate their thoughts and emotions in a more neutral and 
                professional manner. Using cutting-edge artificial intelligence technology, daddychill 
                analyzes angry or frustrated statements and rephrases them into a calmer, clearer tone.
                With daddychill, 
                users can effectively convey their message and reduce the risk of misunderstandings. Whether for personal or 
                professional use, this is an indispensable tool for anyone looking to 
                communicate their thoughts in a positive and effective way.</p>
            </div>
    </div>
    
);
}

