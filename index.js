function formsubmit() {
  // Get form field values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();
  let password = document.getElementById("password").value;

  // Initialize an array to collect error messages
  let errorMessages = [];

  // Validate Name
  if (name === "") {
    errorMessages.push("Name is required.");
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessages.push("Please enter a valid email address.");
  }

  // Validate Age
  if (age === "" || isNaN(age) || age <= 0) {
    errorMessages.push("Please enter a valid age.");
  } else if (age < 18) {
    errorMessages.push("You are not eligible to vote.");
  }

  // Validate Password
  if (password.length < 8) {
    errorMessages.push("Password should be at least 8 characters long.");
  }

  // If there are any error messages, display them and prevent form submission
  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    return false;
  }

  // If all validations pass
  alert("Form submitted successfully!");
  return true;
}