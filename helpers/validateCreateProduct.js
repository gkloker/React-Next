export default function validateCreateProduct(values) {
  let errors = {};

  // Validate name
  if (!values.name) {
    errors.name = "Name is required"
  }

  // Validate company
  if (!values.company) {
    errors.company = "Company is required"
  }

  // Validate company
  if (!values.url) {
    errors.url = "URL is required"
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "Invalid URL"
  }

  // Validate description
  // Validate company
  if (!values.description) {
    errors.description = "Description is required"
  }

  return errors;
}