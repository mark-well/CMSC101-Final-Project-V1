(function () {
    //Rules of Inference
    //All the questions
    const data = [
        {
            question:
                'What rule of inference is used in the argument: "If it rains, then the ground will be wet. It is raining. Therefore, the ground is wet."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "A. Modus Ponens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Ponens is the rule of inference that allows one to infer the consequent from the antecedent and the conditional statement, i.e., if p→q and p, then q.",
            _id: "A1b2C3d4E5F6g7H8"
        },
        {
            question:
                'What rule of inference is used in the argument: "If it is sunny, we will go to the park. We did not go to the park. Therefore, it is not sunny."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "B. Modus Tollens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Tollens is the rule of inference that allows one to infer the negation of the antecedent from the negation of the consequent and the conditional statement, i.e., if p→q and ¬q, then ¬p.",
            _id: "I2j3K4l5M6n7O8P9"
        },
        {
            question:
                'Which rule of inference is applied in: "It is either raining or snowing. It is not raining. Therefore, it is snowing."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "C. Disjunctive Syllogism",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Disjunctive Syllogism is the rule of inference that allows one to infer the truth of one disjunct from the falsity of the other disjunct, i.e., if p∨q and ¬p, then q.",
            _id: "Q3r4S5t6U7v8W9X0"
        },
        {
            question:
                'What rule of inference is used in: "If I study, I will pass the exam. If I pass the exam, I will be happy. Therefore, if I study, I will be happy."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "D. Hypothetical Syllogism",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Hypothetical Syllogism is the rule of inference that allows one to infer a conditional statement from two other conditional statements, i.e., if p→q and q→r, then p→r.",
            _id: "Y1z2A3b4C5d6E7F8"
        },
        {
            question:
                'What rule of inference is demonstrated in: "Either we will go to the beach or to the mountains. We will not go to the mountains. Therefore, we will go to the beach."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "C. Disjunctive Syllogism",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Disjunctive Syllogism is used here, where the falsity of one option leads to the conclusion of the other option, i.e., if p∨q and ¬q, then p.",
            _id: "G1h2I3j4K5l6M7N8"
        },
        {
            question:
                'Which rule of inference is used here: "If I am hungry, I will eat. I am hungry. Therefore, I will eat."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "A. Modus Ponens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Ponens is applied, where the truth of the antecedent and the conditional statement lead to the truth of the consequent, i.e., if p→q and p, then q.",
            _id: "O1p2Q3r4S5t6U7V8"
        },
        {
            question:
                'Identify the rule of inference: "If it snows, school will be closed. School is not closed. Therefore, it did not snow."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "B. Modus Tollens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Tollens is used, where the falsity of the consequent leads to the falsity of the antecedent, i.e., if p→q and ¬q, then ¬p.",
            _id: "W1x2Y3z4A5b6C7D8"
        },
        {
            question:
                'What rule of inference is illustrated here: "If I exercise, I will be fit. If I am fit, I will be healthy. Therefore, if I exercise, I will be healthy."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "D. Hypothetical Syllogism",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Hypothetical Syllogism is used to link two conditional statements into one, i.e., if p→q and q→r, then p→r.",
            _id: "E1f2G3h4I5j6K7L8"
        },
        {
            question:
                'Which rule of inference is shown: "If it rains, the ground gets wet. The ground is not wet. Therefore, it did not rain."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "B. Modus Tollens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Tollens is used here, where the negation of the consequent leads to the negation of the antecedent, i.e., if p→q and ¬q, then ¬p.",
            _id: "M1n2O3p4Q5r6S7T8"
        },
        {
            question:
                'Determine the rule of inference: "If today is Monday, I have a meeting. Today is Monday. Therefore, I have a meeting."',
            optionA: "Modus Ponens",
            optionB: "Modus Tollens",
            optionC: "Disjunctive Syllogism",
            optionD: "Hypothetical Syllogism",
            correctAnswer: "A. Modus Ponens",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Modus Ponens is applied here, where the truth of the antecedent and the conditional statement lead to the truth of the consequent, i.e., if p→q and p, then q.",
            _id: "U1v2W3x4Y5z6A7B8"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
