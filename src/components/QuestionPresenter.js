import React from 'react'
import axios from 'axios'
import htmlEncoder from 'he'

class QuestionPresenter extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: [],
      currentQIdx: 0
    }
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
  }

  componentDidMount () {
    const questionsUrl = `https://opentdb.com/api.php?amount=3&category=${this.props.selectedCategory.id}`
    axios.get(questionsUrl)
      .then(res => this.setState({
        questions: res.data.results
      }))
  }

  handleNextQuestion () {
    this.setState({ currentQIdx: this.state.currentQIdx + 1 })
  }

  render () {
    const { selectedCategory } = this.props
    const { questions, currentQIdx } = this.state
    const currentQuestion = questions[currentQIdx]
    let answers = []
    if (currentQuestion) {
      answers = currentQuestion.incorrect_answers.concat([currentQuestion.correct_answer])
    }

    return (
      <div className='QuestionPresenter'>
        <h1>{selectedCategory.name} Questions</h1>
        {currentQuestion && (
          <div>
            <h2>{htmlEncoder.decode(currentQuestion.question)}</h2>
            <div>
              {answers.map((answer, idx) => <p key={idx}>{answer}</p>)}
            </div>
          </div>
        )}
        {(currentQIdx < questions.length - 1) &&
          <button className='pa2' onClick={this.handleNextQuestion}>Next question</button>}

      </div>
    )
  }
}

export default QuestionPresenter
