import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>();
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }
    return (
        <>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="favoriteColors">
                    <Form.Label>What is your favorite color?</Form.Label>
                    <Form.Select value={selected} onChange={updateSelected}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>
                <span>Selected answer : {selected}</span>{" "}
                {selected === expectedAnswer ? "✔️" : "❌"}
            </div>
        </>
    );
}
