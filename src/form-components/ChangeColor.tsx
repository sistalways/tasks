import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <>
            <div>
                <h3>Change Color</h3>
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={<span style={{ backgroundColor: "red" }}>red</span>}
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "blue" }}>blue</span>
                    }
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "green" }}>green</span>
                    }
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "yellow" }}>
                            yellow
                        </span>
                    }
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "orange" }}>
                            orange
                        </span>
                    }
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "white" }}>white</span>
                    }
                    value="white"
                    checked={color === "white"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "purple" }}>
                            purple
                        </span>
                    }
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    onChange={updateColor}
                    label={
                        <span style={{ backgroundColor: "black" }}>black</span>
                    }
                    value="black"
                    checked={color === "black"}
                    color={color}
                />
                <div>
                    The current Color is{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </span>
                    .
                </div>
            </div>
        </>
    );
}
