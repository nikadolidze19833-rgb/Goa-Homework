const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()


  const firstNameValue = e.target.firstName.value
    const emailValue = e.target.email.Value
    const passwordValue = e.target.Password.value;
     
    console.log(firstNameValue)
    console.log(emailValue)
    console.log(PasswordValue)


if (firstNameValue === "" || firstNameValue.includes(" ")) {
    alert("Name Value must be filled!")
    return;
}

if (lastNameValue === "" || lastNameValue.includes(" ")) {
    alert("LastName Value must be filled!")
    return;
}

if (emailValue === "" || !emailValue.includes("@")) {
    alert("Email Value mest be filled correctly!")
    return;}

if (PasswordValue.length < 8 ) {
    alert("password must contain 8 characters!")
}


const usersArray = JSON.parse(localStorage.getItem("allUsers")) || []

const newUser = {
    firstName: firstNameValue,
    email: emailValue,
    Password: PasswordValue,
   
}

usersArray.push(newUser);

localStorage.setItem("allUsers", JSON.stringify(usersArray))
})


console.log(window.location)
