//Targeting the form by its id
let formData = document.getElementById("formContainer");
formData.addEventListener("submit", function (event) {
  event.preventDefault();

  // collecting input value
  let usersEmail = document.getElementById("lEmail").value;
  let Password = document.getElementById("lPassword").value;

  // validation
  if (usersEmail === "" || Password === "") {
    alert("please fill the input to continue");
  } else if (Password.length !== 6) {
    alert("password must be more than 5 character");
  } else {
    window.location.href = "/index.html";
  }

  // Collecting the details as object
  const userDetails = {
    usersEmail,
    Password,
  };

  // Saving the details collected to local storage
  localStorage.setItem("database", JSON.stringify(userDetails));
  let dataRetrieve = JSON.parse(localStorage.getItem("database"));
});
