import { Link } from 'react-router-dom';
import Login from '../login/Login';
function Register(props){
    return(
<div className="row justify-content-center">
  <div className="col-md-6 mt-4">
    <div className="card">
      <div className="card-header bg-info text-white">Register</div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              placeholder="Confirm password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password">Display name:</label>
            <input
              type="password"
              className="form-control"
              id="Display"
              placeholder="Display name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Picture
            </label>
            <input className="form-control" id="formFileSm" type="file" />
          </div>
          <button
            type="submit"
            className="btn btn-info text-white"
            formAction="login.html"
          >
            Submit
          </button>
        </form>
        <br />
        Already registered?
        <Link to='/login'> Click here to log in</Link>

      </div>
    </div>
  </div>
</div>

    );
}
export default Register;