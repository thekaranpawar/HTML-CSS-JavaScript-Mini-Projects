// let questions = [
//     {
//         question: "Who developed JavaScript ?",
//         answer: [
//             { text: "Tim Berners-Lee", correct: false },
//             { text: "Brendan Eich", correct: true },
//             { text: "James Gosling", correct: false },
//             { text: "Guido van Rossum", correct: false },
//         ]
//     },
//     {
//         question: "What is the full form of HTTP ?",
//         answer: [
//             { text: "HyperText Transfer Protocol", correct: true },
//             { text: "HyperText Transmission Protocol", correct: false },
//             { text: "High Text Transfer Protocol", correct: false },
//             { text: "Hyperlink Transfer Protocol", correct: false },
//         ]
//     },
//     {
//         question: "What type of language is SQL ?",
//         answer: [
//             { text: "Scripting Language", correct: false },
//             { text: "Markup Language", correct: false },
//             { text: "Database Query Language", correct: true },
//             { text: "General-purpose Language", correct: false },
//         ]
//     },
//     {
//         question: "Which language is mother of all language ?",
//         answer: [
//             { text: "C++", correct: false },
//             { text: "Python", correct: false },
//             { text: "C", correct: true },
//             { text: "Java", correct: false },
//         ]
//     },
//     {
//         question: "What does CSS Stand for ?",
//         answer: [
//             { text: "Computer Style Sheets", correct: false },
//             { text: "Cascading Style Sheets", correct: true },
//             { text: "Creative Style Syntax", correct: false },
//             { text: "Color Styling Sheets", correct: false },
//         ]
//     }
// ];

// let questionElement = document.getElementById("question");
// let answerButton = document.getElementById("answer-buttons");
// let nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     answerButton.innerHTML = "Next";
//     showQuestion();
// }
//         // It will display question
// function showQuestion (){
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestion + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//         // It will display answer
//     currentQuestion.answer.array.forEach(answer => {
//         let button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//     });
// }

// startQuiz();





let Questions = [
    {
        Que : 'Who developed JavaScript ?',
        a: 'Tim Berners-Lee',
        b: 'Brendan Eich',
        c: 'James Gosling',
        d: 'Guido van Rossum',
        correct: 'b'
    },
    {
        Que : 'What is the full form of HTTP ?',
        a: 'HyperText Transfer Protocol',
        b: 'HyperText Transmission Protocol',
        c: 'High Text Transfer Protocol',
        d: 'Hyperlink Transfer Protocol',
        correct: 'a'
    },
    {
        Que : 'What type of language is SQL ?',
        a: 'Scripting Language',
        b: 'Markup Language',
        c: 'Database Query Language',
        d: 'General-purpose Language',
        correct: 'c'
    },
    {
        Que : 'Which language is called mother of all language ?',
        a: 'C++',
        b: 'Python',
        c: 'C',
        d: 'Java',
        correct: 'c'
    },
    {
        Que : 'What does CSS Stand for ?',
        a: 'Computer Style Sheets',
        b: 'Cascading Style Sheets',
        c: 'Creative Style Syntax',
        d: 'Color Styling Sheets',
        correct: 'b'
    }
]

let index = 0;
let right = 0, wrong = 0;
let total = Questions.length;

const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".option");
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const quesBox = document.getElementById("quesBox");
    const data = Questions[index]
    quesBox.innerHTML = `${index+ 1}) ${data.Que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const nextQuiz = () => {
    const data = Questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        ++right;
    } else{
        ++wrong;
    }
    ++index;
    loadQuestion();
    return ;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("sub-container").innerHTML = `<h3> Thank you for completing the quiz. I appreciate your time! </h3>
    <hr>
    <h2>Your score is ${right} / ${total} are correct </h2>`;
}

loadQuestion();









