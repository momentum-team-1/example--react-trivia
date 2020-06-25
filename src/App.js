import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount () {
    axios.get('https://opentdb.com/api_category.php')
      .then(res => {
        this.setState({ categories: res.data.trivia_categories })
      })
  }

  render () {
    return (
      <div className='App mw8 center pa4'>
        <h1>Pick a trivia category</h1>
        <div>
          {this.state.categories.map(category => (
            <button key={category.id} className='mr2 mb2 pa2'>{category.name}</button>
          ))}
        </div>
      </div>
    )
  }
}

export default App
