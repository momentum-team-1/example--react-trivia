import React from 'react'

class CategorySelector extends React.Component {
  render () {
    return (
      <div className='CategorySelector'>
        <h1>Pick a trivia category</h1>
        <div>
          {this.props.categories.map(category => (
            <button
              key={category.id}
              className='mr2 mb2 pa2'
              onClick={() => this.props.selectCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default CategorySelector
