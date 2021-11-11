
const save = () => {
    let newUser = {};
    newUser.id = +document.getElementById("uid").value;
    newUser.username = document.getElementById("uUsername").value;
    newUser.password = document.getElementById("upassword").value;
    let password2 = document.getElementById("upassword2").value;
    if (newUser.password !== password2) {
        return;
    }
    newUser.firstname = document.getElementById("ufirst").value;
    newUser.lastname = document.getElementById("ulast").value;
    newUser.phone = document.getElementById("uphone").value;
    newUser.email = document.getElementById("uemail").value;
    newUser.isReviewer = document.getElementById("ureview").checked;
    newUser.isAdmin = document.getElementById("uadmin").checked;
    console.log(newUser);

    window.location.href = "user-list.html"
}