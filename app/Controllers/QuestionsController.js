import { ProxyState } from "../AppState.js";
import TriviaService from "../Services/TriviaService.js"

function _draw() {
    console.log(ProxyState.question);
    document.getElementById("app").innerHTML = ProxyState.question.template()
    document.getElementById("score").innerText = ProxyState.score
}


export default class QuestionsController {
    constructor(){
        ProxyState.on('question', _draw)
    }
    getQuestion(){
        TriviaService.getQuestion()
    }
    submitResponse(answerId, correctBool){
        let answerElem = document.getElementById(answerId)
        console.log(answerElem);
        TriviaService.response(correctBool)
            
            
        
    }
}