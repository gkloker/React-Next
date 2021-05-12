import React, { useState, useEffect } from "react";

const useValidation = (initialState, validate, fn) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      noErrors && fn(); // Fn = Method execute in the component

      setSubmitForm(false);
    }
  }, [errors]);

  // Method execute when the user write something
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  // Methon execute when the user submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  }

  // Method event blur
  const handleBlur = () => {
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  }
}

export default useValidation;