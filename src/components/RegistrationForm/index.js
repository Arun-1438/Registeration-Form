// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isRegisterSuccess: false,
    firstName: '',
    lastName: '',
    errorFirst: '',
    errorLast: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({errorFirst: 'Required', errorLast: 'Required'})
    } else if (lastName === '') {
      this.setState({errorLast: 'Required'})
    } else if (firstName === '') {
      this.setState({errorFirst: 'Required'})
    } else {
      this.setState({isRegisterSuccess: true})
    }
  }

  onBlurEventFirst = event => {
    if (event.target.value === '') {
      this.setState({errorFirst: 'Required'})
    } else {
      this.setState({errorFirst: ''})
    }
  }

  onBlurEventLast = event => {
    if (event.target.value === '') {
      this.setState({errorLast: 'Required'})
    } else {
      this.setState({errorLast: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderForm = () => {
    const {errorFirst, errorLast, firstName, lastName} = this.state
    return (
      <form onSubmit={this.onSubmitForm} className="form">
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          onChange={this.onChangeFirstName}
          value={firstName}
          onBlur={this.onBlurEventFirst}
          type="text"
          id="firstName"
          placeholder="First Name"
        />
        <p className="required">{errorFirst}</p>
        <label htmlFor="lastName">LAST NAME</label>
        <input
          onChange={this.onChangeLastName}
          value={lastName}
          onBlur={this.onBlurEventLast}
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
        <p className="required">{errorLast}</p>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  onSubmitAnother = () => {
    this.setState({isRegisterSuccess: false, firstName: '', lastName: ''})
  }

  renderSuccess = () => (
    <div className="success">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={this.onSubmitAnother} type="button" className="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isRegisterSuccess} = this.state
    return (
      <div className="main-container">
        <h1 className="title">Registration</h1>
        <div className="inner-container">
          {isRegisterSuccess ? this.renderSuccess() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
