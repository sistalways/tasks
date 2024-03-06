import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface editProp {
    isStudent: boolean;
    setIsStudent: (b: boolean) => void;
    name: string;
    setName: (b: string) => void;
}

export function EMode({
    name,
    isStudent,
    setName,
    setIsStudent
}: editProp): JSX.Element {
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="Student-check"
                label="Is Student?"
                checked={isStudent}
                onChange={updateStudent}
            />
            <Form.Group controlId="">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={name}
                    onChange={updateName}
                />
            </Form.Group>
        </div>
    );
}
export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("your name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    return (
        <>
            <div>
                <h3>Edit Mode</h3>
            </div>
            <div>
                <span>
                    <Form.Check
                        type="switch"
                        id="is-Edit-mode"
                        label="Edit Mode: "
                        checked={editMode}
                        onChange={updateEMode}
                    />
                </span>
                <div>
                    You are {editMode ? "in Edit Mode." : "not in Edit Mode."}.
                </div>
                <div>
                    {editMode ? (
                        <EMode
                            name={name}
                            isStudent={isStudent}
                            setName={setName}
                            setIsStudent={setIsStudent}
                        ></EMode>
                    ) : (
                        " "
                    )}
                </div>
                <div>
                    {name} is {isStudent ? "a Student." : "not a Student"}.
                </div>
            </div>
        </>
    );
}
