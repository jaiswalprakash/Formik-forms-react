import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Checkbox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <Field as="radiobutton" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <>
                <input
                  key={option.key}
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;
