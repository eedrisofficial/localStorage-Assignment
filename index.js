//Targeting the form by its id
const formData = document.getElementById("formContainer");
formData.addEventListener("submit", function (event) {
  event.preventDefault();
  let usersName = document.getElementById("Name").value;
  let usersEmail = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  //validation
  if (
    usersName === "" ||
    usersEmail === "" ||
    Password === "" ||
    confirmPassword === ""
  ) {
    // Display an error message if any field is empty
    alert("Please fill in all fields.");
  } else if (Password.length !== 6) {
    alert("password must be more than 5 character");
  } else if (Password !== confirmPassword) {
    // Display an error message if passwords do not match
    alert("Passwords do not match.");
  } else {
    window.location.href = "/signin.html";
  }

  // Collecting the details as object
  const userDetails = {
    usersName,
    usersEmail,
    Password,
    confirmPassword,
  };

  // Saving the details collected to local storage
  localStorage.setItem("database", JSON.stringify(userDetails));
  let dataRetrieve = JSON.parse(localStorage.getItem("database"));
});
