import React, { useEffect, useState } from "react";
import { fetchFormData, submitFormResponse } from "../../services/index";
import { useParams } from "react-router-dom";
import styles from "./workspace.module.css";

const Workspace = () => {
    const { formId } = useParams();
    const [form, setForm] = useState({});
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchFormData(formId);
            setForm(data);
          } catch (err) {
            console.log(err.message);
          }
        };
        fetchData();
    }, [formId]);
    
    const handleChange = (inputId, value) => {
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await submitFormResponse(formId, responses);
          alert("Form submitted successfully!");
        } catch (err) {
          console.log(err.message);
        }
    };

    return (
        <div>
            <h1>{form.title}</h1>
            <form onSubmit={handleSubmit}>
                {form.inputs?.map((input) => (
                    <div key={input.id}>
                        <label>{input.label}</label>
                        <input type={input.type} value={responses[input.id] || ""} onChange={(e) => handleChange(input.id, e.target.value)} />
                    </div>
                ))
            }
            <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Workspace;
