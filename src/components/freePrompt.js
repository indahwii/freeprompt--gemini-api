import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './styles/freePrompt.css'

const FreePrompt = () => {
    const genAI = new GoogleGenerativeAI('API_KEY');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch text insights
     */
    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `${search} `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div className="container">
            <input className="input-text" placeholder='Search everthing you want using Generative AI' onChange={(e) => handleChangeSearch(e)} />
            <button className="search-button" onClick={() => handleClick()}>Search</button>
            {
                loading === true && (aiResponse === '') ?
                <p style={{ margin: '30px 0' }}>Loading ...</p>
                :

                <div className="result-container">
                    <p className="result-text">{aiResponse}</p>
                </div>
            }
        </div>
    );
};

export default FreePrompt;