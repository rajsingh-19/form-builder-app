import React, { useEffect, useState } from "react";
import { fetchFormData, submitFormResponse } from "../../services/index";
import { useParams } from "react-router-dom";
import WorkspaceNav from "../../components/workspaceNav/WorkspaceNav";
import styles from "./workspace.module.css";

const Workspace = () => {
    const { formId, dashboardId, folderId } = useParams();
    const [form, setForm] = useState({});
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const formData = async () => {
          try {
              // console.log(formId, dashboardId, folderId);
              const response = await fetchFormData({ formId, dashboardId, folderId });
  
              if (!response.ok) {
                  console.error("Failed to fetch form data:", response.statusText);
                  alert("Failed to open form. Please try again.");
                  return;
              };
  
              const formDetails = await response.json();
              console.log(formDetails);
          } catch (error) {
              console.error("Error fetching form data:", error);
              alert("An error occurred while opening the form. Please try again.");
          }
        };
        formData();
    },[]);
    
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
          <WorkspaceNav />
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
