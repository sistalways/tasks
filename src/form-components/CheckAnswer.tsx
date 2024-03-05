import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [Ans, setAns] = useState<string>("");
    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="">
                    <Form.Label>write your answer below :</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={Ans}
                        onChange={updateAns}
                    />
                </Form.Group>
                <div>The answer is {Ans === expectedAnswer ? "✔️" : "❌"}.</div>
            </div>
            ;
        </div>
    );
}
