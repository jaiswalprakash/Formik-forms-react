import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropDownOption = [
    { key: "select an option", value: " " },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
  ];
  const radioOptions = [
    { key: "option 1", value: "roption1" },
    { key: "option 2", value: "roption2" },
    { key: "option 3", value: "roption3" },
  ];
  const CheckBoxOption = [
    { key: "option 1", value: "cboption1" },
    { key: "option 2", value: "cboption2" },
    { key: "option 3", value: "cboption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("required"),
    description: yup.string().required("required"),
    selectOption: yup.string().required("required"),
    radioOption: yup.string().required("required"),
    checkboxOption: yup.array().required("required"),
    birthDate: yup.date().required("required").nullable(),
  });

  const onSubmit = (values) => console.log("form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <br />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <br />
          <FormikControl
            control="select"
            label="Select a topic"
            options={dropDownOption}
            name="selectOption"
          />
          <br />
          <FormikControl
            control="radio"
            label="Radio topic"
            options={radioOptions}
            name="radioOption"
          />
          <br />
          <FormikControl
            control="checkbox"
            label="Check box topic"
            options={CheckBoxOption}
            name="checkboxOption"
          />
          <br />
          <FormikControl control="date" label="Pick a Date" name="birthDate" />
          <button type="submit"> Submit </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
