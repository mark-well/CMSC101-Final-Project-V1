(function () {
    //Laws of Equivalence
    //All the questions
    const data = [
        {
            question: "Which of the following is the law of double negation?",
            optionA: "p ∧ ¬p = False",
            optionB: "¬(¬p) = p",
            optionC: "p ∨ ¬ p= True",
            optionD: "p ∧ q = q ∧ p",
            correctAnswer: "B. ¬(¬p) = p",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The law of double negation states that a double negation cancels out, i.e., ¬(¬p) = p.",
            _id: "a9B8c7D6e5F4g3H2"
        },
        {
            question:
                "According to the commutative law, which of the following is true?",
            optionA: "p ∧ (q ∧ r) = ( p ∧ q) ∧ r",
            optionB: "p ∧ q = q ∧ p",
            optionC: "p ∨ ( q ∨ r ) = ( p ∨ q ) ∨ r",
            optionD: "p ∨ q = p ∧ q",
            correctAnswer: "B. p ∧ q = q ∧ p",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The commutative law states that the order of the operands does not matter in conjunction (∧) or disjunction (∨), i.e., B. p ∧ q = q ∧ p.",
            _id: "I1j2k3L4m5N6o7P8"
        },
        {
            question:
                "Which of the following demonstrates the associative law for conjunction?",
            optionA: "p ∧ q = q ∧ p",
            optionB: "( p ∧ q ) ∧ r = p ∧ ( q ∧ r )",
            optionC: "¬(¬p) = p",
            optionD: "p ∨ ( q ∧ r ) = ( p ∨ q ) ∧ ( p ∨ r )",
            correctAnswer: "B. ( p ∧ q ) ∧ r = p ∧ ( q ∧ r )",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The associative law states that the grouping of the operands does not affect the result, i.e., ( p ∧ q ) ∧ r = p ∧ ( q ∧ r ).",
            _id: "Q2r3s4T5u6V7w8X9"
        },
        {
            question:
                "Which of the following is an example of the distributive law?",
            optionA: "p ∧ q = q ∧ p",
            optionB: "p ∧ ( q ∨ r ) = ( p ∧ q ) ∨ ( p ∧ r )",
            optionC: "¬(¬p) = p",
            optionD: "p ∨ q = p ∧ q",
            correctAnswer: "B. p ∧ ( q ∨ r ) = ( p ∧ q ) ∨ ( p ∧ r )",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The distributive law states that conjunction distributes over disjunction and vice versa, i.e., p ∧ ( q ∨ r ) = ( p ∧ q ) ∨ ( p ∧ r ).",
            _id: "Y3z2a1B4c5D6e7F8"
        },
        {
            question: "The identity law for conjunction states that:",
            optionA: "p ∨ False = p",
            optionB: "p ∧ True = p",
            optionC: "p ∧ False = False",
            optionD: "p ∨ True = True",
            correctAnswer: "B. p ∧ True = p",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The identity law for conjunction states that any statement p and true is p, i.e., p ∧ True = p.",
            _id: "G3h2i1J4k5L6m7N8"
        },
        {
            question:
                "According to De Morgan's first law, which of the following is true?",
            optionA: "¬( p ∨ q ) = ¬p ∨ ¬q",
            optionB: "¬( p ∧ q ) = ¬p ∧ ¬q",
            optionC: "¬( p ∨ q ) = ¬p ∧ ¬q",
            optionD: "¬( p ∧ q ) = ¬p ∨ ¬q",
            correctAnswer: "C. ¬( p ∨ q ) = ¬p ∧ ¬q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "De Morgan's first law states that the negation of a disjunction is the conjunction of the negations, i.e., ¬( p ∨ q ) = ¬p ∧ ¬q.",
            _id: "O3p2q1R4s5T6u7V8"
        },
        {
            question:
                "Which of the following correctly represents De Morgan's second law?",
            optionA: "¬( p ∧ q ) = ¬p ∨ ¬q",
            optionB: "¬( p ∧ q ) = ¬p ∧ ¬q",
            optionC: "¬( p ∨ q ) = ¬p ∨ ¬q",
            optionD: "¬( p ∨ q ) = p ∨ q",
            correctAnswer: "A. ¬( p ∧ q ) = ¬p ∨ ¬q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "De Morgan's second law states that the negation of a conjunction is the disjunction of the negations, i.e., ¬( p ∧ q ) = ¬p ∨ ¬q.",
            _id: "W3x2y1Z4a5B6c7D8"
        },
        {
            question:
                "Which of the following is an incorrect application of De Morgan's laws?",
            optionA: "¬( p ∨ q ) = ¬p ∧ ¬q",
            optionB: "¬( p ∧ q ) = ¬p ∨ ¬q",
            optionC: "¬( p ∨ q ) = ¬p ∨ ¬q",
            optionD: "¬( p ∧ q ) = ¬p ∧ ¬q",
            correctAnswer: "C. ¬( p ∨ q ) = ¬p ∨ ¬q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The correct application of De Morgan's laws would be ¬( p ∨ q ) = ¬p ∧ ¬q and ¬(p ∧ q ) = ¬p ∨ ¬q.",
            _id: "E3f2g1H4i5J6k7L8"
        },
        {
            question:
                "Which statement is equivalent to ¬( ¬p ∨ ¬q ) by De Morgan's laws?",
            optionA: "p ∧ q",
            optionB: "p ∨ q",
            optionC: "¬p ∧ ¬q",
            optionD: "¬p ∨ q",
            correctAnswer: "A. p ∧ q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "By De Morgan's law, ¬( ¬p ∨ ¬q ) is equivalent to p ∧ q.",
            _id: "M3n2o1P4q5R6s7T8"
        },
        {
            question:
                "What is the equivalent of ¬( ¬ p ∧ ¬q ) using De Morgan's law?",
            optionA: "p ∨ q",
            optionB: "p ∧ q",
            optionC: "¬p ∨ ¬q",
            optionD: "¬p ∧ q",
            correctAnswer: "A. p ∨ q",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Using De Morgan's law, ¬( ¬ p ∧ ¬q ) is equivalent to p ∨ q.",
            _id: "U3v2w1X4y5Z6a7B8"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
