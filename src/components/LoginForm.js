import React from "react";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // once all the api call is done
    onSubmitProps.setSubmitting(false);
    console.log(values);
    // reset the value after api call
    onSubmitProps.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Enter Email:"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Enter your Password"
                name="password"
              />
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
