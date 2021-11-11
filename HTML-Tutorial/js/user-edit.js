let user = {
    id:1,
    username:"SysAdmin",
    password:"1234", 
    firstname:"Alexander",
    lastname:"Kidd",
    phone:null,
    email:null,
    isReviewer:true,
    isAdmin:true
}

const chkPassword = () => {
    let password = document.getElementById("upassword").value;
    let password2 = document.getElementById("upassword2")
    if (password !== password2) {
        alert("Passwords don't match!")
    }
}
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

const loaded = () => {
    document.getElementById("uid").value = user.id;
    document.getElementById("uUsername").value = user.username;
    document.getElementById("upassword").value = user.password;
    document.getElementById("upassword2").value = user.password;
    document.getElementById("ufirst").value = user.firstname;
    document.getElementById("ulast").value = user.lastname;
    document.getElementById("uphone").value = user.phone === null ? "" : user.phone;
    document.getElementById("uemail").value = user.email===null ? "":user.email;
    document.getElementById("ureview").checked = user.isReviewer;
    document.getElementById("uadmin").checked = user.isAdmin;
}