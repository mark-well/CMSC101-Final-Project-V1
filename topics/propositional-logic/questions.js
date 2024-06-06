(function () {
    //Propositional Logic
    //All the questions
    const data = [
        {
            question:
                "Which of the following statements accurately describes the behavior of the propositional conjunction operator?",
            optionA: "It returns true if either of the propositions is true.",
            optionB: "It returns false if either of the propositions is false.",
            optionC: "It returns true only if both propositions are true.",
            optionD: "It returns true only if one of the propositions is true.",
            correctAnswer:
                "C) It returns true only if both propositions are true.",
            alreadyAnswered: false,
            answeredCorrectly:false,
            explanation:
                "This means that the AND operator (represented by ∧) gives a true result only when both statements it connects are true. If either one or both of the statements are false, the result will be false.",
            _id: "2zzA8vSMy68hymMW"
        },
        {
            question:
                'What does the symbol "∧" represent in propositional logic?',
            optionA: "Conjunction",
            optionB: "Disjunction",
            optionC: "Negation",
            optionD: "Conditional",
            correctAnswer: "A) Conjunction",
            alreadyAnswered: false,
            answeredCorrectly:false,
            explanation:
                'The symbol "∧" in propositional logic represents conjunction, which is like saying "and". When you see "p ∧ q", it means both "p" and "q" must be true for the whole statement to be true.',
            _id: "4oVEVfqZsKsFQlRv"
        },
        {
            question:
                'In logical propositions, what does a statement like "P ∧ Q" represent?',
            optionA: "If P then Q ",
            optionB: "Either P or Q",
            optionC: "P and Q ",
            optionD: "Not P",
            correctAnswer: "C) P and Q ",
            alreadyAnswered: false,
            answeredCorrectly:false,
            explanation:
                'The statement "P ∧ Q" represents the logical operation "and" between two propositions, P and Q. This means that both P and Q are true at the same time.',
            _id: "65cyuid8us8bApT0"
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
            answeredCorrectly:false,
            explanation:
                "The biconditional is true when both (p) and (q) are true or both are false, which corresponds to the first and last rows of the truth table in option A.",
            _id: "CSK2P5CCiDVnBC0m"
        },
        {
            question:
                "What does the truth table for the propositional conjunction operator look like? ",
            optionA: "TFFF",
            optionB: "TTTF",
            optionC: "TFTT",
            optionD: "FFFT",
            correctAnswer: "B) TTTF",
            alreadyAnswered: false,
            answeredCorrectly:false,
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
            answeredCorrectly:false,
            explanation:
                'This symbol (∧) is commonly used to represent the propositional conjunction operation in logic. It\'s like saying "and." So, if you see this symbol between two statements, it means both of them are true at the same time.',
            _id: "I638YA64FWA9mmIp"
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
            answeredCorrectly:false,
            explanation:
                'In a conjunction like "P ∧ Q", both "P" and "Q" must be true for the whole statement to be true. If "P" is true but "Q" is false, then the conjunction "P ∧ Q" is false. Think of it like this: if one part of an "and" statement isn\'t true, the whole thing isn\'t true.',
            _id: "wTMvtLn3ewliQhmP"
        },
        {
            question:
                "Which of the following is the truth value of m → q when m is true (T) and q is false (F)?",
            optionA: "¬T",
            optionB: "¬F",
            optionC: "F",
            optionD: "T",
            correctAnswer: "C. F",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The answer is F because an implication is considered valid (true) as long as there are no cases in which the antecedent is true and the consequence is false.",
            _id: "BiKThTR25oUlqPyn"
        },
        {
            question:
                "What symbol is used to denote conditional (implication) proposition?",
            optionA: "V",
            optionB: "→",
            optionC: "^",
            optionD: "¬",
            correctAnswer: "B. →",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "This symbol is used because it shows how the first statement ‘p’ implies the second statement ‘q’.",
            _id: "uBYYTQNiAnxrT8ng"
        },
        {
            question:
                "The Consequent of a proposition can also be called a _______?",
            optionA: "Truth Value",
            optionB: "Antecedent",
            optionC: "Hypothesis ",
            optionD: "Conclusion",
            correctAnswer: "D. ",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The consequent is also called the conclusion as it is the result or consequence of the first proposition.",
            _id: "xD0KhI5PHpxermIH"
        },
        {
            question:
                "Which logical connective is equivalent to conditional (implication) proposition?",
            optionA: "NOT",
            optionB: "AND",
            optionC: "IF-THEN",
            optionD: "IF AND ONLY IF",
            correctAnswer: "C. IF-THEN",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "In writing a conditional (implication) proposition in a sentence, “if-then” is used because the “if” represents the antecedent, and the “then” represents the consequent.",
            _id: "tbaOgWEg88RkrlBM"
        },
        {
            question: "In n → m, n is known as:",
            optionA: "Consequent",
            optionB: "Antecedent",
            optionC: "Proposition",
            optionD: "Logic",
            correctAnswer: "B. Antecedent",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "N is the antecedent of M because the symbol shows that N implies M or “if N, then M.”",
            _id: "EXznnKMxFmEUzdVi"
        },
        {
            question:
                "Which of the following represents a conditional (implication) proposition?",
            optionA: "If it is sunny, then i will go out",
            optionB: "It is sunny and hot",
            optionC: "Either it is sunny or rainy",
            optionD: "It is sunny, but it might rain later.",
            correctAnswer: "A. If it is sunny, then i will go out",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The correct answer is “If it is sunny, then I will go out” because the statement contains a condition with “if-then.”",
            _id: "SbCT0sieagZdHruS"
        },
        {
            question:
                "The statement “If the night sky is clear, then we’ll be able to see the stars” is what kind of propositional logic?",
            optionA: "Negation",
            optionB: "Conjunction",
            optionC: "Biconditional",
            optionD: "Implication",
            correctAnswer: "D. Implication",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The statement has a hypothesis and conclusion, and it uses “if-then,” there it is and implication.",
            _id: "U4f07BpHz2QPoGvU"
        },
        {
            question:
                "What is the truth value of this conditional (implication) proposition: “If 4 + 6 > 3, then 2 + 5 ≠ 8”",
            optionA: "Neither true nor false",
            optionB: "False",
            optionC: "True",
            optionD: "Cannot be determined",
            correctAnswer: "C. True",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The given proposition comes out true because both the hypothesis and conclusion are true, which makes it true following the rules of conditional proposition. ",
            _id: "pJrWZVT4nILKvoR7"
        },
        {
            question:
                "It is a system based on propositions and their relationships.",
            optionA: "Propositional Logic",
            optionB: "Sentence",
            optionC: "Proposition",
            optionD: "Declarative statement",
            correctAnswer: "A. Propositional Logic",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Propositional Logic is a system based on propositions and their relationships.",
            _id: "Srk5GmBZ7Q7sCoER"
        },
        {
            question:
                "It is a declarative sentence that has a truth value of True or False, but not both.",
            optionA: "Logic",
            optionB: "Proposition",
            optionC: "Truth Value",
            optionD: "Sentence",
            correctAnswer: "B. Proposition",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Proposition is the premise used in propositional logic and it is a declarative sentence that has a truth value of True or False, but not both.",
            _id: "MEkvxVDVW316sivI"
        },
        {
            question:
                "The following statements are examples of a proposition, EXCEPT for one.",
            optionA: "Dinosaurs are bigger than chickens.",
            optionB: "2 + 3 = 6",
            optionC: "x > 4",
            optionD: "111 < 250",
            correctAnswer: "C. x > 4",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "“x > 4” is not a proposition because the “x” needs a specific value in order to be considered as a proposition.",
            _id: "XLpE0UCH7UOHUUER"
        },
        {
            question:
                "Identify the only proposition in the following statements:",
            optionA: "Who is that person?",
            optionB: "x = 5",
            optionC: "Answer the following questions",
            optionD: "12 / 3 = 4",
            correctAnswer: "D. 12 / 3 = 4",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "12 / 3 = 4 is the answer because it it is a declarative sentence that has a truth value.",
            _id: "a0xklzaxqWmywcdD"
        },
        {
            question:
                "Is the truth value of the proposition “The ground is wet, it must’ve rained” True or False?",
            optionA: "False",
            optionB: "True",
            optionC: "Neither",
            optionD: "Not applicable",
            correctAnswer: "A. False",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The proposition is False because the ground being wet does not necessarily mean that it rained.",
            _id: "986mCHgdoGRx12Kn"
        },
        {
            question:
                "These can be used to show how the logical operators work and how they can combine propositions to compound propositions.",
            optionA: "Connectives",
            optionB: "Truth table",
            optionC: "Table of contents",
            optionD: "Logic Gates",
            correctAnswer: "B. Truth Table",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Truth tables are used to display how the logical operators work and how they can combine propositions to compound propositions.",
            _id: "hgzPEW7dwrKrnuxJ"
        },
        {
            question: "What symbol represents disjunction?",
            optionA: "v",
            optionB: "—",
            optionC: "^",
            optionD: "¬",
            correctAnswer: "A. v",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                'Option a (∨) represents disjunction because it denotes logical "or," connecting statements where at least one must be true.',
            _id: "55AjEyrJccMGYPf4"
        },
        {
            question: "How is p ∨ q read?",
            optionA: "p and q",
            optionB: "p not q",
            optionC: "p or q",
            optionD: "not p and q",
            correctAnswer: "C. p or q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                '"P or q" is the correct answer as "∨" signifies logical "or", where either p or q is true.',
            _id: "C4U29mvjy8zIXHkL"
        },
        {
            question:
                "What is the truth value of p ∨ q if p is true and q is false?",
            optionA: "False",
            optionB: "False - true",
            optionC: "True - false",
            optionD: "True",
            correctAnswer: "D. True",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option D is correct because in a disjunction (p ∨ q), if at least one statement (in this case, p) is true, the overall statement is true regardless of the other statement (q).",
            _id: "7eqoF5ZdfhXiepYE"
        },
        {
            question:
                "Which of the following represents a propositional disjunction?",
            optionA: "p ^ q",
            optionB: "p v q",
            optionC: "¬ p",
            optionD: "p → q",
            correctAnswer: "B. p v q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                'Option B (p ∨ q) represents a propositional disjunction because the symbol "∨" denotes logical "or," connecting statements where at least one must be true for the entire statement to be true.',
            _id: "KMW94WnSC3NU5bWN"
        },
        {
            question:
                'What is the outcome of the propositional disjunction "P ∧ Q" if P is true and Q is false?',
            optionA: "True",
            optionB: "Either true or false",
            optionC: "False",
            optionD: "Either false",
            correctAnswer: "C. False",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Option C is correct because in a conjunction (P ∧ Q), both P and Q must be true for the overall statement to be true. Since Q is false, the conjunction is false.",
            _id: "AXWMGMCYYqoYfrwK"
        },
        {
            question:
                "In a disjunction, what is the truth value if both statements are true?",
            optionA: "False",
            optionB: "True",
            optionC: "Either true or false",
            optionD: "Both A and B",
            correctAnswer: "B. True",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "In a disjunction, if at least one statement is true, the entire statement is true, regardless of the truth value of the other statement.",
            _id: "nHMk3KWQ2Jns27kY"
        },
        {
            question:
                'If P is true and Q is false, what is the truth value of "P ∨ Q"?',
            optionA: "False",
            optionB: "Either true or false",
            optionC: "Both a and b",
            optionD: "True",
            correctAnswer: "D. True",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Since P is true, the disjunction is true regardless of the truth value of Q.",
            _id: "dQ3GyTaOWITjltz8"
        },
        {
            question: "Can a disjunction be true if both statements are false?",
            optionA: "Yes",
            optionB: "Maybe",
            optionC: "True",
            optionD: "No",
            correctAnswer: "D. No",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A disjunction is only true if at least one statement is true.",
            _id: "qK5H0RxC3KtMztcD"
        },
        {
            question:
                'What is the truth value of "¬P ∨ Q" if P is true and Q is false?',
            optionA: "True",
            optionB: "False",
            optionC: "Maybe",
            optionD: "Either true or false",
            correctAnswer: "B. false",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                '"¬P" is false (since P is true), but "¬P ∨ Q" is true because at least one statement (Q) is true.',
            _id: "BW9ADE8St8CpOnIO"
        },
        {
            question:
                "What is the term for a disjunction where both statements are true?",
            optionA: "Inclusive disjunction",
            optionB: "Intrusive disjunction",
            optionC: "Disjunction",
            optionD: "Conjunction",
            correctAnswer: "A. Inclusive disjunction",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                'Because the logical "or" means a disjunction formula is true when either one or both of its parts are true, it is referred to as an inclusive disjunction.',
            _id: "mkOWKA34qMQiEjJQ"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
