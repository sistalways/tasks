import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [prog, setProg] = useState<boolean>(false);
    return (
        <>
            <div>Change Type</div>
            <span>
                <Button
                    onClick={() => {
                        setProg(true);
                        setAttempts(attempts - 1);
                    }}
                    disabled={prog || attempts === 0}
                >
                    {" "}
                    Start Quiz
                </Button>
                <Button
                    onClick={() => {
                        setProg(false);
                    }}
                    disabled={!prog}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(1 + attempts)}
                    disabled={prog}
                >
                    {" "}
                    Mulligan
                </Button>
            </span>
            <div>
                <span>Attempts: {attempts}</span>
                {prog ? (
                    <span> In Progress: Yes</span>
                ) : (
                    <span> In Progress: No</span>
                )}
            </div>
        </>
    );
}
