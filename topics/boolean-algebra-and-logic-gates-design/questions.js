(function () {
    //Boolean Algebra & Logic Gates Design
    //All the questions
    const data = [
        {
            question:
                "Which logic gate outputs true only if both inputs are true?",
            optionA: "OR",
            optionB: "AND",
            optionC: "NOT",
            optionD: "XOR",
            correctAnswer: "B. AND",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The AND gate outputs true only if both inputs are true (i.e., 1 AND 1 = 1).",
            _id: "Q1w2E3r4T5y6U7i8"
        },
        {
            question:
                "Which logic gate outputs true if at least one input is true?",
            optionA: "OR",
            optionB: "AND",
            optionC: "NOT",
            optionD: "NAND",
            correctAnswer: "A. OR",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The OR gate outputs true if at least one of its inputs is true (i.e., 1 OR 0 = 1).",
            _id: "O1p2Q3r4S5t6U7V8"
        },
        {
            question: "Which logic gate inverts the input signal?",
            optionA: "AND",
            optionB: "OR",
            optionC: "NOT",
            optionD: "XOR",
            correctAnswer: "C. NOT",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The NOT gate outputs the opposite of the input signal (i.e., if input is 1, output is 0).",
            _id: "A1s2D3f4G5h6J7k8"
        },
        {
            question:
                "Which logic gate outputs true only if the inputs are different?",
            optionA: "AND",
            optionB: "OR",
            optionC: "NOT",
            optionD: "XOR",
            correctAnswer: "D. XOR",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The XOR (exclusive OR) gate outputs true if the inputs are different (i.e., 1 XOR 0 = 1).",
            _id: "Z1x2C3v4B5n6M7o8"
        },
        {
            question:
                "Which logic gate outputs false only if both inputs are true?",
            optionA: "NOR",
            optionB: "NAND",
            optionC: "AND",
            optionD: "XOR",
            correctAnswer: "B. NAND",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The NAND (NOT AND) gate outputs false only if both inputs are true (i.e., 1 NAND 1 = 0).",
            _id: "P1l2K3j4H5g6F7d8"
        },
        {
            question:
                "Which logic gate outputs true only if both inputs are false?",
            optionA: "NOR",
            optionB: "NAND",
            optionC: "OR",
            optionD: "AND",
            correctAnswer: "A. NOR",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The NOR (NOT OR) gate outputs true only if both inputs are false (i.e., 0 NOR 0 = 1).",
            _id: "Q1z2W3x4E5c6R7v8"
        },
        {
            question:
                "What is the output of an AND gate if the inputs are 1 and 0?",
            optionA: "0",
            optionB: "1",
            optionC: "2",
            optionD: "-1",
            correctAnswer: "A. 0",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The AND gate outputs false if any input is false (i.e., 1 AND 0 = 0).",
            _id: "T1y2U3i4O5p6Q7w8"
        },
        {
            question:
                "What is the output of a NOR gate if the inputs are 0 and 1?",
            optionA: "0",
            optionB: "1",
            optionC: "2",
            optionD: "-1",
            correctAnswer: "A. 0",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The NOR gate outputs false if at least one input is true (i.e., 0 NOR 1 = 0).",
            _id: "Y1u2I3o4P5q6A7s8"
        },
        {
            question: "Which logic gate outputs true if both inputs are false?",
            optionA: "XOR",
            optionB: "AND",
            optionC: "OR",
            optionD: "NOR",
            correctAnswer: "D. NOR",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The NOR gate outputs true if both inputs are false (i.e., 0 NOR 0 = 1).",
            _id: "F1d2G3h4J5k6L7a8"
        },
        {
            question:
                "What is the output of an XOR gate if both inputs are the same?",
            optionA: "0",
            optionB: "1",
            optionC: "It depends",
            optionD: "Cannot be determined",
            correctAnswer: "A. 0",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "The XOR gate outputs false if both inputs are the same (i.e., 1 XOR 1 = 0 or 0 XOR 0 = 0).",
            _id: "Z1x2C3v4B5n6M7p8"
        },
        {
            question: "What is the output of an AND gate if both inputs are 1?",
            optionA: "0",
            optionB: "1",
            optionC: "Depends on the inputs",
            optionD: "Cannot be determined",
            correctAnswer: "B. 1",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "An AND gate outputs 1 only when both inputs are 1.",
            _id: "R1t2S3u4I5o6P7q8"
        },
        {
            question: "Which gate outputs true only if both inputs are false?",
            optionA: "OR gate",
            optionB: "NAND gate",
            optionC: "NOR gate",
            optionD: "XOR gate",
            correctAnswer: "C. NOR gate",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "A NOR gate outputs 1 only when both inputs are 0.",
            _id: "A1s2D3f4G5h6J7k9"
        },
        {
            question: "What does a NOT gate do to the input?",
            optionA: "It leaves the input unchanged.",
            optionB: "It inverts the input.",
            optionC: "It doubles the input value.",
            optionD: "It halves the input value.",
            correctAnswer: "B. It inverts the input.",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A NOT gate outputs the opposite of the input: 0 becomes 1, and 1 becomes 0.",
            _id: "P1l2K3j4H5g6F7d9"
        },
        {
            question: "In a NAND gate, the output is false when:",
            optionA: "Both inputs are true",
            optionB: "Both inputs are false",
            optionC: "Either input is true",
            optionD: "Either input is false",
            correctAnswer: "A. Both inputs are true",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation: "A NAND gate outputs 0 only when both inputs are 1.",
            _id: "Q1z2W3x4E5c6R7v9"
        },
        {
            question: "Which gate outputs true if at least one input is true?",
            optionA: "AND gate",
            optionB: "OR gate",
            optionC: "NOR gate",
            optionD: "XNOR gate",
            correctAnswer: "B. OR gate",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "An OR gate outputs 1 if at least one of the inputs is 1.",
            _id: "T1y2U3i4O5p6Q7w9"
        },
        {
            question:
                "What is the output of an XOR gate if both inputs are the same?",
            optionA: "0",
            optionB: "1",
            optionC: "Depends on the inputs",
            optionD: "Cannot be determined",
            correctAnswer: "A. 0",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "An XOR gate outputs 0 when both inputs are either 0 or 1.",
            _id: "Y1u2I3o4P5q6A7s9"
        },
        {
            question: "An XNOR gate outputs true when:",
            optionA: "Both inputs are true",
            optionB: "Both inputs are false",
            optionC: "Inputs are identical",
            optionD: "Inputs differ",
            correctAnswer: "C. Inputs are identical",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "An XNOR gate outputs 1 when both inputs are the same, either both 0 or both 1.",
            _id: "F1d2G3h4J5k6L7a9"
        },
        {
            question:
                "Which gate's output is the inverse of an AND gate's output?",
            optionA: "NOR gate",
            optionB: "XOR gate",
            optionC: "XNOR gate",
            optionD: "NAND gate",
            correctAnswer: "D. NAND gate",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A NAND gate outputs the opposite of what an AND gate would output.",
            _id: "Z1x2C3v4B5n6M7o9"
        },
        {
            question:
                "What does an IMPLY gate output if A is true and B is false?",
            optionA: "0",
            optionB: "1",
            optionC: "Depends on A",
            optionD: "Depends on B",
            correctAnswer: "A. 0",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "In an IMPLY gate, if A is 1 and B is 0, the output is 0.",
            _id: "R1t2S3u4I5o6P7q9"
        },
        {
            question: "Which gate combines an OR gate with a NOT gate?",
            optionA: "NOR gate",
            optionB: "NAND gate",
            optionC: "XNOR gate",
            optionD: "XOR gate",
            correctAnswer: "A. NOR gate",
            alreadyAnswered: false,
            answeredCorrectly: false,
            explanation:
                "A NOR gate outputs the inverse of an OR gate's output.",
            _id: "O1p2Q3r4S5t6U7i9"
        }
    ];

    window.questionsData = {
        data: data
    };
})();
