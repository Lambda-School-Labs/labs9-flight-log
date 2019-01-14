import { checkPropTypes } from "prop-types";

const AuthenticationForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={props.handleChanges}
        />
         <input
          name="password"
          placeholder="password"
          onChange={props.handleChanges}
        />
        <button onClick={props.handleSubmit}>Sign In</button>
        <button onClick={props.fbLogin}>Log in with Facebook</button>
      </form>
    </div>
  );
};
export default AuthenticationForm;