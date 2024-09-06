// first
const quizData = [
    {
        question: " Article related to Equality of opportunity is?",
        Options: ["Articles 14", "Articles 15 ", "Articles 16", "Articles 17"],
        correct: 2,
    },
    {
        question: "Fundamental duties are added in which amendment?",
        Options: ["Amendment 42", "Amendment 35", "Amendment 40", "Amendment 46"],
        correct: 0,
    },
    {
        question: "How many writs can be issued by the supreme court?",
        Options: ["Six", "Four", "Five", "Seven"],
        correct: 2,
    },
    {
        question: "In which year fundamental duties implemented?",
        Options: ["1951", "1970", "1995", "1976"],
        correct: 3,
    },
    {
        question: "Which of the following is part of federal system?",
        Options: ["concurrent list", "state list", "union list", "All the above"],
        correct: 3,
    },
];

// second
const quiz = document.querySelector('#quiz');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// third
const loadQuiz = () => {
    const { question, Options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = `${currentQuiz + 1} : ${question}`;
    Options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// fourth
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const SelectedOptionIndex = getSelectedOption();
    console.log(SelectedOptionIndex);

    if (SelectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <div class="result">
                <h2>🏆 Your score: ${score}/${quizData.length} Correct Answer</h2>
                <p>
                    Congratulation on completing the quiz! 🎊🎉
                </p>
                <button class="reload-button" onclick="location.reload()"> Play Again 🔄</button>
            </div>
        `;
    }
});