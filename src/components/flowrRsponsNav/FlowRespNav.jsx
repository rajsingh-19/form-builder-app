import React, { useState } from "react";
import Switch from "react-switch";

const FlowRespNav = () => {
    const [theme, setTheme] = useState("dark");
    const [checked, setChecked] = useState(false);

    const handleChange = (checked) => {
        setChecked(checked);
    };

    return (
        <div className="flex dir-row">
            <div>
                <button>Flow</button>
                <button>Response</button>
            </div>
            <div>
                Light dark
                <label>
                    <span>Switch with default style</span>
                    <Switch onChange={handleChange} checked={checked} />
                </label>
            </div>
            <div>
                <button>share</button>
                <button>Save</button>
            </div>
            <div>
                <img src="x" alt="x icon" />
            </div>
        </div>
    )
};

export default FlowRespNav;
