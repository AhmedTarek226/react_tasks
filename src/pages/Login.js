import { useFormik } from "formik";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { schema } from "./schema";

function Login(props) {
  let path = useLocation().state?.pathname || "/";
  let navigate = useNavigate();
  function login(email) {
    localStorage.setItem("token", email);
    navigate(path);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
  });
  return (
    <div className="row justify-content-center">
      <form
        onSubmit={formik.handleSubmit}
        className="form w-50 border p-3 py-5"
      >
        <div class="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <small style={{ color: "red" }}>{formik.errors.email}</small>
          ) : (
            ""
          )}
        </div>
        <div class="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <small style={{ color: "red" }}>{formik.errors.password}</small>
          ) : (
            ""
          )}
        </div>
        <button type="submit" onClick={()=>login(formik.values.email)} className="btn btn-success w-25">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
