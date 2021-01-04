import shuffle from "../Utils/Shuffle.js"
import  { generateId } from "../Utils/GenerateId.js"

export default class Question {
    constructor({question, correct_answer, incorrect_answers, difficulty}) {
        this.answers = shuffle([...incorrect_answers, correct_answer])
        this.difficulty = difficulty
        this.prompt = question
        this.correctAnswer = correct_answer
        this.pointValue = difficulty == 'easy' ? 8 : difficulty == 'medium' ? 12 : difficulty == 'hard' ? 16 : 'ERROR' 
        this.strikes = 0
    }
    template(){
        let template = `<div class="col-7 bg-secondary">
                            <header class="px-2 py-2 row bg-primary text-success">
                                <h3 class="col-12 pb-2 mb-2 border-bottom">${this.prompt}</h3>
                                <h3>Point Value: ${this.pointValue}</h3>
                            </header>
                            <div class="row"
                                <div class="col"`

        for (let ind in this.answers) {
            let answerId = generateId()
            template += `<div class="row">
                            <button onclick='app.questionsController.submitResponse("${answerId}", ${this.answers[ind] == this.correctAnswer})' id="${answerId}" class="btn btn-dark my-1 mx-1">
                                <b>${this.answers[ind]}</b>
                            </button>
                        </div>
            `
        }
        template += `
                                </div>
                            </div>
                        </div>`
        return template
    }

}