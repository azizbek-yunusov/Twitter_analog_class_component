import React from 'react';  
import './postAddForm.css'

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }  
  onSubmit(e) {
    e.preventDefault()
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return(
      <form className="bottom-panel" onSubmit={this.onSubmit}>
        <input
          required
          type="text"
          placeholder="What are you thinking about?"
          className="form-control"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button 
          type="submit" 
          className="submit-btn">
          Add Post
        </button>
      </form>
    )
  }
}