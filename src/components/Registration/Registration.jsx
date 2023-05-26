import React from 'react';
import { useDispatch } from 'react-redux';
// import { signUp } from '../../api/auth';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/operations';

export const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <div className="container">
        <Link to="/" className="btn btn-success mt-5">
          Go Home
        </Link>
      </div>
      <div
        className="card position-absolute top-50 start-50 translate-middle p-2"
        style={{ minWidth: '350px' }}
      >
        <h1 className="text-center">REGISTER</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputName1"
            />
          </div>

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

          <button type="submit" className="btn btn-primary">
            Register
          </button>
          {/* <Link to="/login" className="m-3">
            Login
          </Link> */}
        </form>
      </div>
    </>
  );
};

export default Registration;
//!================================================================
// import React from 'react';
// import { signUp } from '../../api/auth';
// import { Link, useNavigate } from 'react-router-dom';

// const RegistrationPage = () => {
//   const navigate = useNavigate();

// const handleSubmit = e => {
//   e.preventDefault();
// const newUser = {
//   name: e.target.elements.name.value,
//   email: e.target.elements.email.value,
//   password: e.target.elements.password.value,
//   avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
// };
// signUp(newUser)
//   .then(() => {
//     navigate('/login');
//   })
//   .catch(error => console.log(error));
// };

//   return (
//     <>
//       <div className="container">
//         <Link to="/" className="btn btn-success mt-5">
//           Go Home
//         </Link>
//       </div>
//       <div
//         className="card position-absolute top-50 start-50 translate-middle p-2"
//         style={{ minWidth: '350px' }}
//       >
//         <h1 className="text-center">REGISTER</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputName1" className="form-label">
//               Name
//             </label>
//             <input
//               name="name"
//               type="text"
//               className="form-control"
//               id="exampleInputName1"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               name="email"
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//           <Link to="/login" className="m-3">
//             Login
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// };

// export default RegistrationPage;
