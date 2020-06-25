import React from 'react'
import axios from 'axios'
import CategorySelector from './components/CategorySelector'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      categories: [],
      selectedCategory: null
    }

    this.selectCategory = this.selectCategory.bind(this)
  }

  componentDidMount () {
    // Retrieve the list of trivia categories from API.
    axios.get('https://opentdb.com/api_category.php')
      .then(res => {
        this.setState({ categories: res.data.trivia_categories })
      })
  }

  selectCategory (category) {
    this.setState({ selectedCategory: category })
  }

  render () {
    return (
      <div className='App mw8 center pa4'>
        <CategorySelector
          categories={this.state.categories}
          selectCategory={this.selectCategory}
        />
      </div>
    )
  }
}

export default App
