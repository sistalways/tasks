import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import img from "./images/images.jpeg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Girish Sista
            </header>
<<<<<<< HEAD
            <p>
                <h1>Kratos</h1>
                <img src={img} alt="The Ghost of Sparta" />
            </p>
            <ul>
                <li>Kratos is known as the God of War.</li>
                <li>He is also known as the Ghost of Sparta.</li>
                <li>He died 3 times and is still alive.</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="App-Rect">Column I</div>
                    </Col>
                    <Col>
                        <div className="App-Rect">Column II</div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
