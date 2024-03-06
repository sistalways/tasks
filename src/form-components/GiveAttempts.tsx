import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [usrInp, setUsrInp] = useState<string>("");
    function updateAttempts(inp: string) {
        inp == ""
            ? setAttempts(attempts)
            : setAttempts(attempts + parseInt(inp));
    }
    return (
        <>
            <div>
                <h3>Give Attempts</h3>
                <Form.Group controlId="formMovieReleased">
                    <Form.Label>
                        enter the number of attemps you need:{" "}
                    </Form.Label>
                    <Form.Control
                        type="number"
                        value={usrInp}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setUsrInp(event.target.value)}
                    />
                </Form.Group>
            </div>
            <div>
                <span>
                    <Button
                        onClick={() => setAttempts(attempts - 1)}
                        disabled={attempts === 0 || isNaN(attempts)}
                    >
                        use
                    </Button>
                    <Button onClick={() => updateAttempts(usrInp)}>gain</Button>
                </span>
            </div>
            <div>number of Attempts left : {attempts}</div>
        </>
    );
}
