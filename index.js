function formsubmit() {
  // Get form field values
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let age = document.getElementById("age");
  let password = document.getElementById("password");

  // Initialize an array to collect error messages
  let errorMessages = [];
  let isValid = true;

  // Helper function to mark fields as invalid
  function markInvalid(field, message) {
    field.style.border = "2px solid red";
    errorMessages.push(message);
    isValid = false;
  }

  // Helper function to reset field styles
  function resetField(field) {
    field.style.border = "";
  }

  // Validate Name
  resetField(name);
  if (name.value.trim() === "") {
    markInvalid(name, "Name is required.");
  }

  // Validate Email
  resetField(email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
    markInvalid(email, "Please enter a valid email address.");
  }

  // Validate Phone
  resetField(phone);
  if (phone.value.trim() === "") {
    markInvalid(phone, "Phone number is required.");
  }

  // Validate Age
  resetField(age);
  if (age.value.trim() === "" || isNaN(age.value.trim()) || age.value.trim() <= 0) {
    markInvalid(age, "Please enter a valid age.");
  } else if (age.value.trim() < 18) {
    markInvalid(age, "You are not eligible to vote.");
  }

  // Validate Password
  resetField(password);
  if (password.value.trim().length < 8) {
    markInvalid(password, "Password should be at least 8 characters long.");
  }

  // If there are any error messages, display them and prevent form submission
  if (!isValid) {
    alert(errorMessages.join("\n"));
    return false;
  }

  // If all validations pass
  alert("Form submitted successfully!");
  return true;
}

function table() {
  let tableNumber = document.getElementById("tableNumber").value.trim();
  let table = document.getElementById("table");

  table.innerHTML = "";

  // Validate the input
  if (tableNumber === "" || isNaN(tableNumber) || tableNumber <= 0) {
    alert("Please enter a valid positive number.");
    document.getElementById("tableNumber").style.border = "2px solid red";
    return;
  }

  // Reset the input field border
  document.getElementById("tableNumber").style.border = "";

  // Generate the multiplication table
  for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerHTML = `${tableNumber} x ${i} = ${tableNumber * i}`;
    row.appendChild(cell);
    table.appendChild(row);
  }
}