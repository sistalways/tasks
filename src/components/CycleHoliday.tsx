import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Festival = "🪔" | "🎄" | "🎃" | "🎆" | "🎏";
    const alph: Record<Festival, Festival> = {
        "🎄": "🪔",
        "🪔": "🎏",
        "🎏": "🎃",
        "🎃": "🎆",
        "🎆": "🎄"
    };
    const year: Record<Festival, Festival> = {
        "🎏": "🪔",
        "🪔": "🎃",
        "🎃": "🎄",
        "🎄": "🎆",
        "🎆": "🎏"
    };
    const [festival, setFestival] = useState<Festival>("🪔");

    return (
        <>
            <div>Cycle Holiday</div>
            <div>
                <Button onClick={() => setFestival(alph[festival])}>
                    {" "}
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setFestival(year[festival])}>
                    {" "}
                    Advance by Year
                </Button>
            </div>
            <div>
                <span>Holiday: {festival}</span>
            </div>
        </>
    );
}
