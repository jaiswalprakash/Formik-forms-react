import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import TextError from "./TextError";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
};

const onSubmitForm = (values, onSubmitProps) => {
  // facking api call start
  let startTime = new Date().getTime();
  let endTime = startTime;
  while (endTime < startTime + 3000) {
    endTime = new Date().getTime();
  }
  // facking api call end
  // once all the api call is done
  onSubmitProps.setSubmitting(false);
  console.log(values);
  // reset the value after api call
  onSubmitProps.resetForm();
};

const validationSchema = yup.object({
  name: yup.string().required("requird"),
  email: yup.string().email("Invalid Email").required("required"),
  channel: yup.string().required("required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

function FormikForm() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
        // validateOnChange={false}
        // validateOnBlur={false}
        //validateOnMount //validate once page load
      >
        {(formik) => {
          return (
            <Form>
              <div style={{ margin: 20 }}>
                <label>Name: </label>
                <Field id="name" type="text" name="name" />
                <ErrorMessage name="name" />
              </div>
              <div style={{ margin: 20 }}>
                <label>Email Address: </label>
                <Field id="email" type="email" name="email" />
                <ErrorMessage name="email">
                  {(errormessage) => {
                    return <div style={{ color: "blue" }}>{errormessage}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div style={{ margin: 20 }}>
                <label>channel:</label>
                <Field id="channel" type="text" name="channel" />
                <ErrorMessage name="channel" component={TextError} />
              </div>
              <div style={{ margin: 20 }}>
                <label>comments:</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  validate={validateComments}
                />
                <ErrorMessage name="comments" component={TextError} />
              </div>

              <div style={{ margin: 20 }}>
                <label>address:</label>
                <Field name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div> {meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div style={{ margin: 20 }}>
                <label>facebook profile:</label>
                <Field id="facebook" type="text" name="social.facebook" />
                <ErrorMessage name="facebook" />
              </div>
              <div style={{ margin: 20 }}>
                <label>Twitter profile:</label>
                <Field id="twitter" type="text" name="social.twitter" />
                <ErrorMessage name="twitter" />
              </div>

              <div style={{ margin: 20 }}>
                <label>primary phoneNumber</label>
                <Field id="primaryphono" type="number" name="phoneNumber[0]" />
                <ErrorMessage name="twitter" />
              </div>

              <div style={{ margin: 20 }}>
                <label>secondary phoneNumber</label>
                <Field
                  id="secondaryphono"
                  type="number"
                  name="phoneNumber[1]"
                />
                <ErrorMessage name="twitter" />
              </div>
              <div style={{ margin: 20 }}>
                <label> list of phoneNumber</label>
                <FieldArray type="number" name="phNumbers">
                  {(props) => {
                    const { push, remove, form } = props;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => {
                          return (
                            <div key={index}>
                              <Field
                                name={`phNumbers[${index}]`}
                                type="number"
                              />
                              {phNumbers.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}

                              <button type="button" onClick={() => push()}>
                                +
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
                <ErrorMessage name="twitter" />
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormikForm;
