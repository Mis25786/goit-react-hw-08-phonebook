import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <div className="container">
        <Link to="/" type="button" className="btn btn-outline-primary">
          Go Home
        </Link>
      </div>
      <div
        className="card position-absolute top-50 start-50 translate-middle p-2"
        style={{ minWidth: '350px' }}
      >
        <h1 className="text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
