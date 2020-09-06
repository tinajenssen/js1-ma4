const from = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");
const firstNameError = document.querySelector("#firstNameError");

function validateForm(){
  event.preventDefault();

  if (lastName.value.trim().length > 5){
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
}

contactForm.addEventListener("submit", validateForm);
