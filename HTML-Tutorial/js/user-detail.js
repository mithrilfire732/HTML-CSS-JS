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
const loaded = () => {
    document.getElementById("uid").value = user.id;
    document.getElementById("uUsername").value = user.username;
    document.getElementById("ufirst").value = user.firstname;
    document.getElementById("ulast").value = user.lastname;
    document.getElementById("uphone").value = user.phone === null ? "" : user.phone;
    document.getElementById("uemail").value = user.email===null ? "":user.email;
    document.getElementById("ureview").value = user.isReviewer;
    document.getElementById("uadmin").value = user.isAdmin;
}