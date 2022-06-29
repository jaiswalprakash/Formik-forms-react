import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import DataView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="">
      <label htmlFor="">{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DataView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={<TextError />} />
    </div>
  );
};

export default DatePicker;
