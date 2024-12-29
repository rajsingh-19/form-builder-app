import React, { useEffect, useState } from "react";
import { fetchFormData, submitFormResponse } from "../../services/api";
import { useParams } from "react-router-dom";
import styles from "./formbot.module.css";

const FormBot = () => {
    const { formId } = useParams();
    const [form, setForm] = useState({});
    const [responses, setResponses] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchFormData(formId);
                setForm(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [formId]);

    const handleResponse = (inputId, value) => {
        setResponses((prevResponses) => {
            const existingResponse = prevResponses.find((r) => r.inputId === inputId);
            if (existingResponse) {
                existingResponse.value = value;
            } else {
                prevResponses.push({ inputId, value });
            }
            return [...prevResponses];
        });
    };
    
    const handleSubmit = async () => {
        try {
            await submitFormResponse(formId, responses);
            alert("Form submitted successfully!");
        } catch (err) {
            setError(err.message);
        }
    };
    
    const handleNext = () => {
        if (currentQuestionIndex < form.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
    };
    
    const currentQuestion = form.questions ? form.questions[currentQuestionIndex] : null;
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    if (!currentQuestion) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <h1>{form.title}</h1>
            <div>
            <h2>{currentQuestion.questionText}</h2>
                {currentQuestion.bubbles && (
                    <div>
                        {currentQuestion.bubbles.map((bubble) => (
                            <div key={bubble.id} onClick={() => handleResponse(bubble.id, bubble.value)}>
                                <div>{bubble.type === "text" ? bubble.text : <img src={bubble.imageUrl} alt="Bubble" />}</div>
                            </div>
                        ))}
                    </div>
                )}
            {currentQuestion.inputs && (
                <div>
                    {currentQuestion.inputs.map((input) => (
                        <div key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} value={responses[input.id] || ""} onChange={(e) => handleResponse(input.id, e.target.value)} />
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
    )
};

export default FormBot;
