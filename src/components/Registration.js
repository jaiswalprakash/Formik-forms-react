import React from "react";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
import * as yup from "yup";

const Registration = () => {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Required"),
    password: yup.string().required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Password must Match")
      .required("Required"),
    modeOfContact: yup.string().required("Required"),
    phone: yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: yup.string().required("Required"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    // once all the api call is done
    onSubmitProps.setSubmitting(false);
    console.log(values);
    // reset the value after api call
    onSubmitProps.resetForm();
  };

  return (
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
              label="Email:"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              type="password"
              label="Mode of contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="number"
              label="PhoneNumber"
              name="phone"
            />

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Register
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Registration;
