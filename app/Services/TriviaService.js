import { ProxyState } from "../AppState.js"
import tdb from "./AxiosService.js"
import Question from "../Models/Question.js"

class TriviaService{
    constructor(){

    }
    async getQuestion(){
        let res = await tdb.get('https://opentdb.com/api.php?amount=1&type=multiple')
        ProxyState.question = new Question(res.data.results[0])
    }
    response(correctBool) {
        if (correctBool) {
            ProxyState.score += ProxyState.question.pointValue
            this.getQuestion()
        } else if (ProxyState.question.strikes == 2) {
            this.getQuestion()
        } else {
            ProxyState.question.strikes += 1
            ProxyState.question.pointValue /=2
            ProxyState.question = ProxyState.question
        }

        
    }
}
const triviaService = new TriviaService()
export default triviaService