import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    return (
        <>
            <div>Change Type</div>
            <span>
                <Button
                    onClick={() =>
                        value === "short_answer_question"
                            ? setValue("multiple_choice_question")
                            : setValue("short_answer_question")
                    }
                >
                    {" "}
                    Change Type
                </Button>
            </span>
            <div>
                {value === "multiple_choice_question" ? (
                    <span>Type: Multiple Choice.</span>
                ) : (
                    <span>Type: Short Answer.</span>
                )}
            </div>
        </>
    );
}
