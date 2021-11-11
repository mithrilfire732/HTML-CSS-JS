let users = [{id:1,username:"SysAdmin",password:"1234",firstname:"Alexander",lastname:"Kidd",phone:null,email:null,isReviewer:true,isAdmin:true},
{id:2,username:"revpleb",password:"6666",firstname:"Hannibal",lastname:"Barca",phone:null,email:null,isReviewer:true,isAdmin:false},
{id:4,username:"userpeasant",password:"3456",firstname:"Morace",lastname:"Shroom",phone:null,email:null,isReviewer:false,isAdmin:false}]

function yesNo(val){
    return val ? "Y" : "N";
}
const loaded = () => {
    var tbody = document.getElementById("data");
    tbody.innerHTML = "";
    for(let user of users){
        let tr = "<tr>";
        tr += `<td>${user.id}</td>`;
        tr += `<td>${user.username}</td>`;
        tr += `<td>${user.password}</td>`;
        tr += `<td>${user.firstname}</td>`;
        tr += `<td>${user.lastname}</td>`;
        tr += `<td>${user.phone}</td>`;
        tr += `<td>${user.email}</td>`;
        tr += `<td>${yesNo(user.isReviewer)}</td>`;
        tr += `<td>${yesNo(user.isAdmin)}</td>`;
        tr += `<td><a href="user-detail.html?id=${user.id}">Detail</a> | <a href="user-edit.html?id=${user.id}">Edit</a></td>`
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}