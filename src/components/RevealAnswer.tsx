import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const ans = 42;
    const [showAns, setShowAns] = useState<boolean>(false);
    return (
        <>
            <div>Reveal Answer</div>
            <span>
                <Button
                    onClick={() =>
                        showAns ? setShowAns(false) : setShowAns(true)
                    }
                >
                    {" "}
                    Reveal Answer
                </Button>
            </span>
            <div>
                {showAns ? (
                    <span>Answer: {ans}.</span>
                ) : (
                    <span>Click To Show Answer.</span>
                )}
            </div>
        </>
    );
}
