(function () {
    //Compound Propositions
    //All the questions
    const data = [
        {
            question:
                "What is formed from simpler propositions and is connected with logical operators?",
            optionA: "Truth table",
            optionB: "Proposition",
            optionC: "Tautology",
            optionD: "Compound Proposition",
            correctAnswer: "D. Compound Proposition",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Compound propositions, or complex propositions, are formed from simpler propositions and is connected with logical operators",
            _id: "a1B2c3D4e5F6g7H8"
        },
        {
            question:
                "If converse reverses the rules of p and q, inverse negates both p and q but doesn’t reverse them, what does contrapositive do?",
            optionA: "It doesn't change anything",
            optionB: "It only reverses p and q",
            optionC: "It reverses p and q, then negates both of them",
            optionD: "It negates only the p",
            correctAnswer: "C. It reverses p and q, then negates both of them",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Contrapositive reverses both p and q, then negates both statements.",
            _id: "I9j8k7L6m5N4o3P2"
        },
        {
            question:
                "Which of the following shows statements that are always true?",
            optionA: "Contingencies",
            optionB: "Tautology",
            optionC: "Contrapositive",
            optionD: "Contradiction",
            correctAnswer: "B. Tautology",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Tautology shows statements that are always true no matter what, and it is the negation of contradictions.",
            _id: "Q1r2s3T4u5V6w7X8"
        },
        {
            question:
                "If two statements has the same truth value and results to a tautology using biconditional proposition, it is considered as–",
            optionA: "Logically equivalent",
            optionB: "Logically true",
            optionC: "False",
            optionD: "Contrapositive",
            correctAnswer: "A. Logically equivalent",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "",
            _id: "Y9z8a7B6c5D4e3F2"
        },
        {
            question:
                "Construct a truth table, what does [¬p v p] ^ [¬q v q] result to?",
            optionA: "Contradiction",
            optionB: "Converse",
            optionC: "Contingency",
            optionD: "Tautology",
            correctAnswer: "D. Tautology",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "",
            _id: "G1h2i3J4k5L6m7N8"
        },
        {
            question: "Which of the following best represents a contradiction?",
            optionA: "If it is sunny, then it is raining.",
            optionB: "If it is sunny, then it is not raining.",
            optionC: "If it is raining, then it is cloudy.",
            optionD: "If it is cloudy, then it is windy.",
            correctAnswer: "A. If it is sunny, then it is raining.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option A represents a contradiction because it states that it is both sunny and raining simultaneously, which is logically impossible.",
            _id: "O9p8q7R6s5T4u3V2"
        },
        {
            question:
                "In the compound proposition 𝑃∨¬𝑃, where 𝑃 represents 'It is snowing,' what does the truth value of this compound proposition indicate?",
            optionA: "It is a contradiction.",
            optionB: "It is a tautology.",
            optionC: "It is contingent on the weather.",
            optionD: "It represents the converse.",
            correctAnswer: "B. It is a tautology.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The compound proposition 𝑃∨¬𝑃 represents 'It is snowing or it is not snowing,' which is always true regardless of the weather conditions, making it a tautology.",
            _id: "W1x2y3Z4a5B6c7D8"
        },
        {
            question:
                "Which of the following represents the converse of the statement: 'If it is hot, then I will go swimming'?",
            optionA: "If I go swimming, then it is hot.",
            optionB: "If I don't go swimming, then it is not hot.",
            optionC: "If it is not hot, then I will not go swimming.",
            optionD: "If it is not hot, then I will go swimming.",
            correctAnswer: "A. If I go swimming, then it is hot.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The converse of the given statement reverses the order of its parts, so the correct choice is option A.",
            _id: "E1f2g3H4i5J6k7L8"
        },
        {
            question:
                "Which of the following statements represents a contingency?",
            optionA: "If it is snowing, then it is cold.",
            optionB: "If it is windy, then the leaves rustle.",
            optionC: "If it is sunny, then it is daytime.",
            optionD: "If it is raining, then the streets are wet.",
            correctAnswer: "B. If it is windy, then the leaves rustle.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option B represents a contingency because the rustling of leaves depends on the presence of wind, making it true only under specific conditions.",
            _id: "M9n8o7P6q5R4s3T2"
        },
        {
            question: "What is an example of a tautology?",
            optionA: "If it is raining, then it is wet outside.",
            optionB: "It is either snowing or it is not snowing.",
            optionC: "If it is cloudy, then it is not sunny.",
            optionD: "If it is cold, then I will wear a jacket.",
            correctAnswer: "B. It is either snowing or it is not snowing.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option B represents a tautology because it is always true; either it is snowing, or it is not snowing.",
            _id: "U1v2w3X4y5Z6a7B8"
        },
        {
            question:
                "Which of the following compound propositions is a contradiction?",
            optionA: "𝑃∧¬𝑃",
            optionB: "𝑃∨𝑄",
            optionC: "𝑃→𝑄",
            optionD: "¬𝑃∧¬𝑄",
            correctAnswer: "A. 𝑃∧¬𝑃",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The compound proposition 𝑃∧¬𝑃 represents a contradiction because it asserts that 𝑃 is both true and false simultaneously.",
            _id: "C9d8e7F6g5H4i3J2"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
