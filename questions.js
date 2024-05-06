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
        }
    ];

    window.questionsData = {
        data: data
    };
})();
