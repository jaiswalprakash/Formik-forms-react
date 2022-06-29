import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

// const validate = (values) => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "required";
//   }
//   // else if (values.email) {
//   //   errors.email = "not valid email";
//   // }
//   if (!values.password) {
//     errors.password = "required";
//   }
//   return errors;
// };

const validationSchema = yup.object({
  email: yup.string().email("Invalid Email").required("required"),
  password: yup.string().required("required"),
});

function OldForm() {
  const form = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema,
  });

  return (
    <>
      <h1> signUp form </h1>
      <form onSubmit={form.handleSubmit}>
        <label>Email Address: </label>
        <input
          id="email"
          type="email"
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
        />
        {form.touched.email && form.errors.email ? (
          <div>{form.errors.email}</div>
        ) : null}
        <br /> <br />
        <label>password:</label>
        <input
          id="password"
          type="text"
          onChange={form.handleChange}
          value={form.values.password}
          onBlur={form.handleBlur}
        />
        {form.touched.password && form.errors.password ? (
          <div>{form.errors.password}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default OldForm;
