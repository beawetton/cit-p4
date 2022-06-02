/*
    CIT 281 Project 4
    Name: Beatrice Wetton
*/

const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer,
    updateQuestionAnswer
} = require("./p4-module.js");

const fastify = require("fastify")();

fastify.get("/cit/question", (request, reply) => {
    const obj = {
        "error": "",
        "statusCode": 200,
        "questions": getQuestions() }

    const print = JSON.stringify(obj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});

fastify.get("/cit/answer", (request, reply) => {
    const obj = {
        "error": "",
        "statusCode": 200,
        "answers": getAnswers() }

    const print = JSON.stringify(obj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});


fastify.get("/cit/questionanswer", (request, reply) => {
    const obj = {
        "error": "",
        "statusCode": 200,
        "questions_answers": getQuestionsAnswers() }

    const print = JSON.stringify(obj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});

fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    
    //const text = getQuestion(number)
    let newObj = Object.assign(getQuestion(parseInt(number)), {"statusCode" : 200});
    const print = JSON.stringify(newObj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    
    //const text = getQuestion(number)
    let newObj = Object.assign(getAnswer(parseInt(number)), {"statusCode" : 200});
    const print = JSON.stringify(newObj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    
    //const text = getQuestion(number)
    let newObj = Object.assign(getQuestionAnswer(parseInt(number)), {"statusCode" : 200});
    const print = JSON.stringify(newObj);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send(
            `${print}`
        );
});

fastify.get("/cit/*", (request, reply) => {
    reply
        .code(404)
        .header("Content-Type", "text/html; charset=utf-8")
        .send("<h1>Unsupported request or page</h1>");
});

fastify.post("/cit/question", (request, reply) => {
    const qNa = request.query;
    let newObj = Object.assign(addQuestionAnswer(qNa), {"statusCode" : 201});
    const print = JSON.stringify(newObj);
    reply
      .code(200) // status code
      .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
      .send(`${print}`); // we need to send back the updated student arry
  });

fastify.put("/cit/question", (request, reply) => {
    const uqNa = request.query;
    let newObj = Object.assign(updateQuestionAnswer(uqNa), {"statusCode" : 200});
    const print = JSON.stringify(newObj);
    reply
      .code(200) // status code
      .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
      .send(`${print}`); // we need to send back the updated student arry
  });


const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});
