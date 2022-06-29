import React from "react";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
import * as yup from "yup";

const CourseEnrolmentForm = () => {
  const dropDownOptions = [
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const CheckBoxOptions = [
    { key: "Html", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Required"),
    bio: yup.string().required("Required"),
    course: yup.string().required("Required"),
    courseDate: yup.date().required("Required").nullable(),
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
            <FormikControl control="textarea" label="Bio" name="bio" />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropDownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Skills"
              name="skills"
              options={CheckBoxOptions}
            />
            <FormikControl
              control="date"
              label="Course date"
              name="courseDate"
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

export default CourseEnrolmentForm;
