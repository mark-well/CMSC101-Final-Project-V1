(function () {
    //All the questions
    let data = [
        {
            question:
                "Which symbol is commonly used to represent the propositional conjunction operation in logic? ",
            optionA: "∧",
            optionB: "∨ ",
            optionC: " ¬ ",
            optionD: "→ ",
            correctAnswer: "A. ∧",
            alreadyAnswered: false,
            explanation:
                'This symbol (∧) is commonly used to represent the propositional conjunction operation in logic. It\'s like saying "and." So, if you see this symbol between two statements, it means both of them are true at the same time.',
            _id: "I638YA64FWA9mmIp"
        },
        {
            question:
                "Which of the following represents a propositional conjunction?",
            optionA: "Either it rains or it snows.",
            optionB: "If it rains, then I'll bring an umbrella.",
            optionC: "It is raining and it is windy.",
            optionD: "It is sunny, but it might rain later.",
            correctAnswer: "C. It is raining and it is windy.",
            alreadyAnswered: false,
            explanation:
                'C) "It is raining and it is windy" is the correct answer because it combines two statements about the weather using "and." This means both statements are true at the same time.',
            _id: "p5PQYnAlRxFxweWA"
        },
        {
            question:
                'In logical propositions, what does a statement like "P ∧ Q" represent?',
            optionA: "If P then Q ",
            optionB: "Either P or Q",
            optionC: "P and Q ",
            optionD: "Not P",
            correctAnswer: "C. P and Q ",
            alreadyAnswered: false,
            explanation:
                'The statement "P ∧ Q" represents the logical operation "and" between two propositions, P and Q. This means that both P and Q are true at the same time.',
            _id: "65cyuid8us8bApT0"
        },
        {
            question:
                "What does the truth table for the propositional conjunction operator look like? ",
            optionA: "TFFF",
            optionB: "TTTF",
            optionC: "TFTT",
            optionD: "FFFT",
            correctAnswer: "B. TTTF",
            alreadyAnswered: false,
            explanation:
                "B) TTTF shows that the conjunction (AND) is true only when both propositions are true, which happens in the first three rows. In the last row, where both propositions are false, the conjunction is false.",
            _id: "FDQSPBL8s23ZAduN"
        },
        {
            question:
                "Which symbol is commonly used to represent the propositional conjunction operation in logic? ",
            optionA: "∧",
            optionB: "∨ ",
            optionC: " ¬ ",
            optionD: "→ ",
            correctAnswer: "A) ∧",
            alreadyAnswered: false,
            explanation:
                'This symbol (∧) is commonly used to represent the propositional conjunction operation in logic. It\'s like saying "and." So, if you see this symbol between two statements, it means both of them are true at the same time.',
            _id: "I638YA64FWA9mmIp"
        },
        {
            question:
                "Which of the following represents a propositional conjunction?",
            optionA: "Either it rains or it snows.",
            optionB: "If it rains, then I'll bring an umbrella.",
            optionC: "It is raining and it is windy.",
            optionD: "It is sunny, but it might rain later.",
            correctAnswer: "C) It is raining and it is windy.",
            alreadyAnswered: false,
            explanation:
                'C) "It is raining and it is windy" is the correct answer because it combines two statements about the weather using "and." This means both statements are true at the same time.',
            _id: "p5PQYnAlRxFxweWA"
        },
        {
            question:
                'What is the outcome of the propositional conjunction "P ∧ Q" if P is true and Q is false?',
            optionA: "True",
            optionB: "False",
            optionC: "Either true or false",
            optionD: "Cannot be determined",
            correctAnswer: "B) False",
            alreadyAnswered: false,
            explanation:
                'In a conjunction like "P ∧ Q", both "P" and "Q" must be true for the whole statement to be true. If "P" is true but "Q" is false, then the conjunction "P ∧ Q" is false. Think of it like this: if one part of an "and" statement isn\'t true, the whole thing isn\'t true.',
            _id: "wTMvtLn3ewliQhmP"
        },
        {
            question: "What does the biconditional statement (p↔q) signify?",
            optionA: "(p) →(q)",
            optionB: "(q) →(p)",
            optionC: "(p) and (q) are both true or both false",
            optionD: "(p) and (q) are mutually exclusive",
            correctAnswer: "C. (p) and (q) are both true or both false",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The biconditional (p↔q) is true if both (p) and (q) have the same truth value, either both true or both false.",
            _id: "hQ5F3sznrE7zLoaN"
        },
        {
            question: "Which truth table represents the biconditional (p↔q)?",
            optionA: "(p: T, T, F, F; q: T, F, T, F; p ↔ q: T, F, F, T)",
            optionB: "(p: T, T, F, F; q: T, F, T, F; p ↔ q: F, T, T, F)",
            optionC: "(p: T, T, F, F; q: T, F, T, F; p ↔ q: T, T, F, F)",
            optionD: "(p: T, T, F, F; q: T, F, T, F; p ↔ q: F, F, T, T)",
            correctAnswer:
                "A. (p: T, T, F, F; q: T, F, T, F; p ↔ q: T, F, F, T)",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The biconditional is true when both (p) and (q) are true or both are false, which corresponds to the first and last rows of the truth table in option A.",
            _id: "CSK2P5CCiDVnBC0m"
        },
        {
            question:
                "If (p↔q) is true, which of the following must also be true?",
            optionA: "(p→q)",
            optionB: "(q→p)",
            optionC: "Both A and B",
            optionD: "Neither A nor B",
            correctAnswer: "C. Both A and B",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "If a biconditional statement is true, it means that both the conditional (p→q) and its converse (q→p) are true.",
            _id: "kJGgFUQpwvpSmHz6"
        },
        {
            question:
                "In terms of logical equivalence, which of the following is equivalent to (p↔q)?",
            optionA: "(p ∧ q) ∨ ( ¬p ∧ ¬ q)",
            optionB: "(p ∨ q) ∧ ( ¬p ∨ ¬ q)",
            optionC: "(p ∧ ¬q) ∨ ( ¬p ∧ q)",
            optionD: "(p ∨ ¬q) ∧ ( ¬p ∨ ¬ q)",
            correctAnswer: "A. (p ∧ q) ∨ ( ¬p ∧ ¬ q)",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option A expresses that (p) and (q) are both true or both false, which is the definition of a biconditional statement",
            _id: "TQoxar1GlzN5q6Tz"
        },
        {
            question: "Which of the following statements is a biconditional?",
            optionA: '"If it rains, then the ground is wet."',
            optionB: '"The ground is wet if and only if it rains."',
            optionC: '"The ground is wet whenever it rains."',
            optionD: '"It rains because the ground is wet."',
            correctAnswer: 'B. "The ground is wet if and only if it rains."',
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                'Option B uses the phrase "if and only if," which indicates a biconditional relationship between "it rains" and "the ground is wet."',
            _id: "sejbLBiweIxGkvEL"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
