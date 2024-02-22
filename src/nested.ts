/* eslint-disable indent */
import { text } from "stream/consumers";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const ispulished = (question: Question): boolean => question.published;
    const retQ = questions.filter(ispulished);
    return retQ;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const isEmpty = (question: Question): boolean =>
        question.body !== "" ||
        question.expected !== "" ||
        question.options.length > 0;
    const retQ = questions.filter(isEmpty);
    return retQ;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const isQ = (question: Question): boolean => question.id === id;
    const question = questions.filter(isQ);
    if (question.length === 0) {
        return null;
    } else {
        return question[0];
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const isQ = (question: Question): boolean => question.id !== id;
    const retQ = questions.filter(isQ);
    return retQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const retNames = questions.map((q: Question): string => q.name);
    return retNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const retSums = questions.map((q: Question): number => q.points);
    const sumP = retSums.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sumP;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const retSums = getPublishedQuestions(questions).map(
        (q: Question): number => q.points
    );
    const sumP = retSums.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sumP;
}
/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const csvQ = questions.map(
        (q: Question): string =>
            q.id +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points +
            "," +
            q.published
    );
    const retOut = csvQ.reduce(
        (currentTotal: string, num: string) => currentTotal + "\n" + num,
        ""
    );
    return "id,name,options,points,published" + retOut;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newA = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return newA;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQ = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            type: q.type,
            body: q.body,
            options: q.options,
            expected: q.expected,
            points: q.points,
            published: true
        })
    );

    return newQ;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const isType = (q: Question): boolean => q.type !== questions[0].type;
    const sameType = questions.filter(isType);
    if (sameType.length === 0) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const retQ = questions.slice();
    const newQ = makeBlankQuestion(id, name, type);
    retQ.push(newQ);
    return retQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQ = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: targetId == q.id ? newName : q.name,
            type: q.type,
            body: q.body,
            options: q.options,
            expected: q.expected,
            points: q.points,
            published: q.published
        })
    );
    return newQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQ = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            type: targetId == q.id ? newQuestionType : q.type,
            body: q.body,
            options: q.options,
            expected: q.expected,
            points: q.points,
            published: q.published
        })
    );
    const finQ = newQ.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            type: q.type,
            body: q.body,
            options: q.type !== "multiple_choice_question" ? [] : q.options,
            expected: q.expected,
            points: q.points,
            published: q.published
        })
    );
    return finQ;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const finQ = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            type: q.type,
            body: q.body,
            options:
                q.id === targetId
                    ? targetOptionIndex === -1
                        ? [...q.options, newOption]
                        : q.options.map((opt: string, index): string =>
                              index === targetOptionIndex ? newOption : opt
                          )
                    : q.options,
            expected: q.expected,
            points: q.points,
            published: q.published
        })
    );
    return finQ;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIdIndex = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    const finQ = questions.slice();
    finQ.splice(
        targetIdIndex + 1,
        0,
        duplicateQuestion(newId, questions[targetIdIndex])
    );
    return finQ;
}
