import "./styles.scss"

const questionHeader = document.querySelector('.question-header');
const questionDescription = document.querySelector('.question-description');
const nextBtn = document.querySelector('button');
const labels = document.querySelectorAll('label');
const radioSelections = document.querySelectorAll('input') 
const questionOneSelections = ['A) Abraham Lincoln', 'B) James Madison', 'C) Thomas Jefferson', 'D) George Washington'];
const questionTwoSelections = ['A) Athens, Greece', 'B) London, England', 'C) Tokyo, Japan', 'D) Paris, France'];
const questionThreeSelections = ['A) Lion King', 'B) Mulan', 'C) Tarzan', 'D) Hercules'];
const questionFourSelections = ['A) Georgia', 'B) California', 'C) Minnesota', 'D) Washington'];
const questionFiveSelections = ['A) Apples', 'B) Pinto beans', 'C) Chickpeas', 'D) Celery'];
let questionCount = 1;
function Question (description, selections){
    this.description = description;
    this.selections = selections;
}
let questionOne = new Question('Who was the first president of the United States?', questionOneSelections);
let questionTwo = new Question('Where was the 2012 summer olympics hosted?', questionTwoSelections);
let questionThree = new Question('In which Disney movie is the villain Clayton from?', questionThreeSelections);
let questionFour = new Question('Which U.S. state is known for peaches?', questionFourSelections);
let questionFive = new Question('What is hummus made from?', questionFiveSelections);

function populateQuestion(count){
    switch(count){
        case 1:
            questionHeader.textContent = 'Question 1 of 5';
            questionDescription.textContent = questionOne.description;
            for(let i = 0; i < labels.length; i++){
                labels[i].textContent = questionOne.selections[i];
            }
            break;
        case 2:
            questionHeader.textContent = 'Question 2 of 5';
            questionDescription.textContent = questionTwo.description;
            for(let i = 0; i < labels.length; i++){
                labels[i].textContent = questionTwo.selections[i];
            }
            break;
        case 3:
            questionHeader.textContent = 'Question 3 of 5';
            questionDescription.textContent = questionThree.description;
            for(let i = 0; i < labels.length; i++){
                labels[i].textContent = questionThree.selections[i];
            }
            break;
        case 4:
            questionHeader.textContent = 'Question 4 of 5';
            questionDescription.textContent = questionFour.description;
            for(let i = 0; i < labels.length; i++){
                labels[i].textContent = questionFour.selections[i];
            }
            break;
        case 5: 
            questionHeader.textContent = 'Question 5 of 5';
            questionDescription.textContent = questionFive.description;
            for(let i = 0; i < labels.length; i++){
                labels[i].textContent = questionFive.selections[i];
            }
    }

}

populateQuestion(5);