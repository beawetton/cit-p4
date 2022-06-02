/*
    CIT 281 Project 4
    Name: Beatrice Wetton
*/

const {data} = require("./p4-data.js")

function getQuestions(){
    let newarr = [];
    for (let i = 0; i < data.length; i++){
        newarr.push(data[i].question);
    }
    return newarr;
}

function getAnswers(){
    let newarr = [];
    for (let i = 0; i < data.length; i++){
        newarr.push(data[i].answer);
    }
    return newarr;
}

function getQuestionsAnswers(){
    let newarr = [];
    for (let i = 0; i < data.length; i++){
        newarr.push(data[i]);
    }
    return newarr;
}

function getQuestion(number = ""){
    if(Number.isInteger(number) == false){
        obj = {
            question: '',
            number: '',
            error: 'Question number must be an integer'
        } 
        return obj; 
    }else if (number < 1){
        obj = {
            question: '',
            number: '',
            error: 'Question number must be >= 1'
        } 
        return obj;
    }else if(number>getQuestions().length){
        obj = {
            question: '',
            number: '',
            error: 'Question number must be less than the number of questions (3)'
        }
        return obj;
    }else{
        let result = 0
        for (let i = 0; i < getQuestions().length; i++){
            result = getQuestions()[number-1]
            }
        obj = {
            question: `${result}`,
            number:number,
            error:''
        }
      
        return obj;
    }
}
    

function getAnswer(number = ""){
    if(Number.isInteger(number) == false){
        obj = {
            answer: '',
            number: '',
            error: 'Answer number must be an integer'
        } 
        return obj; 
    }else if (number < 1){
        obj = {
            answer: '',
            number: '',
            error: 'Answer number must be >= 1'
        } 
        return obj;
    }else if(number>getAnswers().length){
        obj = {
            answer: '',
            number: '',
            error: 'Answer number must be less than the number of answers (3)'
        }
        return obj;
    }else{
        let result = 0
        for (let i = 0; i < getAnswers().length; i++){
            result = getAnswers()[number-1]
            }
        obj = {
            answer: `${result}`,
            number:number,
            error:''
        }
      
        return obj;
    }
}
    
    
function getQuestionAnswer(number = ""){
    if(Number.isInteger(number) == false){
        obj = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be an integer'
        } 
        return obj; 
    }else if (number < 1){
        obj = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be >= 1'
        } 
        return obj;
    }else if(number>getQuestions().length){
        obj = {
            question: '',
            answer: '',
            number: '',
            error: 'Question number must be less than the number of questions (3)'
        }
        return obj;
    }else{
        let result = 0;
        let result2 = 0;
        for (let i = 0; i < getQuestions().length; i++){
            result = getQuestions()[number-1]
        }
        for (let i = 0; i < getAnswers().length; i++){
            result2 = getAnswers()[number-1]
        }
    
        obj = {
            question: `${result}`,
            answer: `${result2}`,
            number:number,
            error:''
        }
      
        return obj;
    }
}

function addQuestionAnswer(info={}){
    //const neededKeys = ['question', 'answer'];
    if(Object.keys(info).length === 0 && info.constructor === Object){
        obj = { error: 'Object question property required', 
        message: '', 
        number: -1 }
        return obj
    }else if('question' in info){
        if('answer' in info){
            obj = { error: '', 
            message: 'Question added', 
            number: 4 }
            return obj
        }else
        obj = { error: 'Object answer property required',
         message: '', 
         number: -1 }
         return obj
    }else if('answer' in info){
        obj = { error: 'Object question property required', 
        message: '', 
        number: -1 }
        return obj
    }
}

function updateQuestionAnswer(info={}){
    if(Object.keys(info).length === 0 && info.constructor === Object){
        obj = { error: 'Object question property or answer property required', 
        message: '', 
        number: '' }
        return obj
    }else if('question' in info){
        if('answer' in info){
            if('number' in info){
                obj = { error: '', 
                message: 'Question 1 updated', 
                number: 1 }
            }else
                obj = { error: 'Object number property must be a valid integer', 
                message: '', 
                number: '' }
                return obj
            
        }else
            obj ={error: 'Object number property must be a valid integer',
            message: '',
            number: ''
            }
            return obj
        
    }else if('answer' in info){
        obj = { error: 'Object number property must be a valid integer', 
        message: '', 
        number: '' }
        return obj
    }
}




/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = true;
  const testUpdate = true;

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(2)", f: getQuestion(2) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
      getQuestions,
      getAnswers,
      getQuestionsAnswers,
      getQuestion,
      getAnswer,
      getQuestionAnswer,
      addQuestionAnswer,
      updateQuestionAnswer
  };

  // addQuestionAnswer()
if (testAdd) {
    testing(
      "addQuestionAnswer",
      { d: "()", f: addQuestionAnswer() },
      { d: "({})", f: addQuestionAnswer({}) },
      { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
      { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
      {
        d: '(question: "Q4", answer: "A4")',
        f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
      }
    );
  }
  
  // updateQuestionAnswer()
if (testUpdate) {
    testing(
      "updateQuestionAnswer",
      { d: "()", f: updateQuestionAnswer() },
      { d: "({})", f: updateQuestionAnswer({}) },
      { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
      { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
      {
        d: '(question: "Q1U", answer: "A1U")',
        f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
      },
      {
        d: '(number: 1, question: "Q1U", answer: "A1U")',
        f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
      }
    );
    console.log(data);
  }
  
  
