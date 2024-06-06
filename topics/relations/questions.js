(function () {
    //Relations
    //All the questions
    const data = [
        {
            question:
                "Which of the following is the correct definition of the domain of a relation?",
            optionA:
                "The set of all second elements in the ordered pairs of the relation.",
            optionB:
                "The set of all elements in the Cartesian product of two sets.",
            optionC:
                "The set of all first elements in the ordered pairs of the relation.",
            optionD:
                "The set of all elements that are not part of the relation.",
            correctAnswer:
                "C. The set of all first elements in the ordered pairs of the relation.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The domain of a relation is the set of all first elements in the ordered pairs of the relation."
        },
        {
            question:
                "In a directed graph, which set represents the range of the relation?",
            optionA: "All vertices with outgoing edges.",
            optionB: "All vertices without any edges.",
            optionC: "All vertices with incoming edges.",
            optionD: "All vertices that are isolated.",
            correctAnswer: "C. All vertices with incoming edges.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The range of a relation in a directed graph consists of all vertices that have at least one incoming edge."
        },
        {
            question:
                "Given the relation ( R = {(1, 2), (2, 3), (4, 5)} ), what is the domain?",
            optionA: "{1, 2, 3}",
            optionB: "{2, 3, 5}",
            optionC: "{1, 2, 4}",
            optionD: "{1, 3, 4}",
            correctAnswer: "C. {1, 2, 4}",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The domain of the relation ( R ) is the set of all first elements in the ordered pairs: {1, 2, 4}."
        },
        {
            question: "In a mapping diagram, which elements form the range?",
            optionA:
                "Elements on the left side with arrows pointing to the right.",
            optionB:
                "Elements on the right side with arrows pointing to them from the left.",
            optionC: "All elements in the diagram.",
            optionD:
                "Elements on the left side without arrows pointing to the right.",
            correctAnswer:
                "B. Elements on the right side with arrows pointing to them from the left.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The range in a mapping diagram is the set of elements on the right side that have arrows pointing to them from the left side."
        },
        {
            question:
                "What property does a relation ( R ) have if ((a, b) ∈ R) implies ((b, a) ∈ R) for all (a) and (b) in the set?",
            optionA: "Reflexive",
            optionB: "Symmetric",
            optionC: "Transitive",
            optionD: "Antisymmetric",
            correctAnswer: "B. Symmetric",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A relation is symmetric if ((a, b) ∈ R) implies ((b, a) ∈ R) for all (a) and (b) in the set."
        },
        {
            question:
                "If a relation is reflexive, which of the following must be true?",
            optionA: "( ∀ a, b ∈ A, (a, b) ∈ R )",
            optionB: "( ∀ a ∈ A, (a, a) ∈ R )",
            optionC: "( ∀ a, b, c ∈ A, (a, b) ∈ R ∧ (b, c) ∈ R ⟹ (a, c) ∈ R )",
            optionD: "( ∀ a, b ∈ A, (a, b) ∈ R ⟹ (b, a) ∉ R )",
            correctAnswer: "B. ( ∀ a ∈ A, (a, a) ∈ R )",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A relation is reflexive if every element is related to itself, i.e., ( ∀ a ∈ A, (a, a) ∈ R )."
        },
        {
            question:
                "Which of the following is an example of an antisymmetric relation?",
            optionA: "( R = {(1, 2), (2, 1)} )",
            optionB: "( R = {(1, 1), (2, 2), (1, 2)} )",
            optionC: "( R = {(1, 2), (2, 3), (3, 1)} )",
            optionD: "( R = {(1, 1), (2, 2), (3, 3)} )",
            correctAnswer: "B. ( R = {(1, 1), (2, 2), (1, 2)} )",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A relation is antisymmetric if ((a, b) ∈ R ∧ (b, a) ∈ R ⟹ a = b). Option B fits this criterion because there are no pairs ((a, b)) and ((b, a)) with (a ≠ b)."
        },
        {
            question:
                "Given a relation ( R = {(a, b), (b, c), (c, a)} ) on the set ({a, b, c}), which property does ( R ) violate?",
            optionA: "Reflexive",
            optionB: "Symmetric",
            optionC: "Transitive",
            optionD: "Antisymmetric",
            correctAnswer: "D. Antisymmetric",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The relation ( R ) violates the antisymmetric property because it contains cycles ((a, b)), ((b, c)), and ((c, a)), where ((a, b)) and ((b, a)) would imply (a = b) if it were antisymmetric."
        },
        {
            question:
                "If ( R = {(1, 2), (2, 3), (1, 3)} ), which property does ( R ) satisfy?",
            optionA: "Reflexive",
            optionB: "Symmetric",
            optionC: "Transitive",
            optionD: "Antisymmetric",
            correctAnswer: "C. Transitive",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The relation ( R ) is transitive because ((1, 2) ∈ R) and ((2, 3) ∈ R) imply ((1, 3) ∈ R)."
        },
        {
            question:
                "Which representation is best suited for visualizing the range of a relation?",
            optionA: "Set of ordered pairs",
            optionB: "Matrix representation",
            optionC: "Directed graph",
            optionD: "Mapping diagram",
            correctAnswer: "D. Mapping diagram",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A mapping diagram clearly shows the range as the set of elements on the right side that have arrows pointing to them from elements on the left side."
        }
    ];

    window.questionsData = {
        data: data
    };
})();
