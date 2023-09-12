//Targeting the form by its id
let formData = document.getElementById("formContainer");
formData.addEventListener("click", userData);
function userData(e) {
  e.preventDefault();
  let usersName = document.getElementById("Name").value;
  let usersEmail = document.getElementById("email").value;
  let Password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

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
  window.location.href = "/signin.html";
}
