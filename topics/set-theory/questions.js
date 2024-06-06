(function () {
    //Set Theory
    //All the questions
    const data = [
        {
            question:
                "Which of the following sets is an example of a well-defined set?",
            optionA: "The collection of smart students in a class",
            optionB: "The collection of red cars",
            optionC: "The collection of two-digit even numbers",
            optionD: "The collection of interesting books",
            correctAnswer: "C. The collection of two-digit even numbers",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A well-defined set has clear criteria for membership. The collection of two-digit even numbers is well-defined because it is clear which numbers belong to the set.",
            _id: "ABC123defGHI456j"
        },
        {
            question: "What is the cardinality of the set ( {a, b, c, d} )?",
            optionA: "2",
            optionB: "3",
            optionC: "4",
            optionD: "5",
            correctAnswer: "C. 4",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The set ( {a, b, c, d} ) has four elements, so its cardinality is 4.",
            _id: "DEF456ghiJKL789m"
        },
        {
            question: "Which symbol represents the empty set?",
            optionA: "Ø",
            optionB: "ℝ",
            optionC: "ℕ",
            optionD: "∞",
            correctAnswer: "A. Ø",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "Ø is the symbol representing the empty set.",
            _id: "GHI789jklMNO012p"
        },
        {
            question:
                "What is the union of the sets ( {1, 2, 3} ) and ( {3, 4, 5} )?",
            optionA: "({1, 2})",
            optionB: "({3, 4, 5})",
            optionC: "({1, 2, 3, 4, 5})",
            optionD: "({1, 2, 3})",
            correctAnswer: "C. ({1, 2, 3, 4, 5})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The union of ( {1, 2, 3} ) and ( {3, 4, 5} ) includes all distinct elements from both sets.",
            _id: "JKL012mnoPQR345q"
        },
        {
            question:
                "What is the intersection of the sets ( {a, b, c} ) and ( {b, c, d} )?",
            optionA: "({a, b, c, d})",
            optionB: "({a, d})",
            optionC: "({b, c})",
            optionD: "({a, b})",
            correctAnswer: "C. ({b, c})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The intersection of ( {a, b, c} ) and ( {b, c, d} ) includes only the elements common to both sets, which are ( b ) and ( c ).",
            _id: "MNO345pqrSTU678v"
        },
        {
            question:
                "If ( A = {2, 4, 6} ) and ( B = {4, 6, 8} ), what is ( A - B )?",
            optionA: "({2, 8})",
            optionB: "({2})",
            optionC: "({4, 6})",
            optionD: "({2, 4})",
            correctAnswer: "B. ({2})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "( A - B ) represents the elements in ( A ) that are not in ( B ). Thus, ( {2, 4, 6} - {4, 6, 8} = {2} ).",
            _id: "PQR678stuVWX901y"
        },
        {
            question:
                "What is the complement of the set ( A = {1, 2} ) with respect to the universal set ( U = {1, 2, 3, 4} )?",
            optionA: "({3, 4})",
            optionB: "({1, 2})",
            optionC: "({1, 2, 3, 4})",
            optionD: "({2, 3})",
            correctAnswer: "A. ({3, 4})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The complement of ( A ) with respect to ( U ) includes all elements in ( U ) that are not in ( A ), which are ( 3 ) and ( 4 ).",
            _id: "STU901vwxYZA234z"
        },
        {
            question:
                "Which of the following is a proper subset of ( {1, 2, 3} )?",
            optionA: "({1, 2, 3})",
            optionB: "({2, 3, 4})",
            optionC: "({1, 2})",
            optionD: "({4})",
            correctAnswer: "C. ({1, 2})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A proper subset of ( {1, 2, 3} ) is a subset that is not equal to the set itself. ( {1, 2} ) is a proper subset.",
            _id: "VWX234yzaBCD5671"
        },
        {
            question:
                "If ( A = { x | x is a prime number less than 10 } ), what is ( A )?",
            optionA: "({1, 2, 3, 5, 7})",
            optionB: "({2, 3, 5, 7})",
            optionC: "({2, 3, 5, 7, 11})",
            optionD: "({1, 2, 3, 7})",
            correctAnswer: "B. ({2, 3, 5, 7})",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "Prime numbers less than 10 are ( 2, 3, 5, ) and ( 7 ).",
            _id: "YZA567bcdEFG8902"
        },
        {
            question:
                "Which statement is true about the set ( {x | x is an even number} )?",
            optionA: "It is a finite set.",
            optionB: "It is an infinite set.",
            optionC: "It is an empty set.",
            optionD: "It is a subset of the set of odd numbers.",
            correctAnswer: "B. It is an infinite set.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The set of even numbers is infinite as it continues without end.",
            _id: "BCD890efgHIJ1233"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
