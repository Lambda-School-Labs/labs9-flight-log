import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import firebase from "firebase";
import { app, facebook, google,email } from '../components/config/fire';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }
  handleChanges = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };
  authWithFacebook(){
    app.auth().signInWithPopup(facebook).then(()=>console.log('hey it works')).catch(()=>console.log('you are death, start over'))
  }

  render() {
    return (
      <div>
        <AuthenticationForm handleChanges={this.handleChanges} fbLogin={this.authWithFacebook}/>
      </div>
    );
  }
}

export default SignIn;
