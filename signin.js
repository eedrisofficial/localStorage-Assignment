//Targeting the form by its id
let formData = document.getElementById("formContainer");
formData.addEventListener("click", userData);
function userData(e) {
  e.preventDefault();

  let usersEmail = document.getElementById("lEmail").value;
  let Password = document.getElementById("lPassword").value;

  // Collecting the details as object
  const userDetails = {
    usersEmail,
    Password,
  };

  // Saving the details collected to local storage
  localStorage.setItem("database", JSON.stringify(userDetails));
  let dataRetrieve = JSON.parse(localStorage.getItem("database"));
  window.location.href = "/index.html";
}
