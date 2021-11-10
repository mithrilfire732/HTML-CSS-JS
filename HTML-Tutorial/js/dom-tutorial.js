class Person {
    name;
    color;
    number;
    
    toTableRow() {
        let tr = "<tr>";
        tr+= `<td>${this.name}</td>`;
        tr+= `<td>${this.color}</td>`;
        tr+= `<td>${this.number}</td>`;
        tr += "</tr>";
        return tr;
    }

    constructor(name, color, number){
        this.name = name;
        this.color = color;
        this.number = number;
    }
}

let dbDataClass = [
    new Person("Alice","blue",7),
    new Person("Fred","brown",18),
    new Person("Denise","azure",12)
]

let dbData = [
    {name:"Abe", color: "black", number: 13},
    {name:"Betty", color: "red", number: 8},
    {name:"Chris", color: "orange", number: 42},
    {name:"Alexander", color: "green", number: 32}
]

const loaded = () => {
    let tbody = document.getElementById("tbod");
    for (let row of dbDataClass) {
        let tr = row.toTableRow();
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let operanda = document.getElementById("opa").value;
    let operandb = document.getElementById("opb").value;
    let answer = Number(operanda) + Number(operandb);
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerText = "Addition"
    document.getElementById("ans").style.color = "black";
}
const sub = () => {
    let operanda = document.getElementById("opa").value;
    let operandb = document.getElementById("opb").value;
    let answer = Number(operanda) - Number(operandb);
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color = "red";
}
const mul = () => {
    let operanda = document.getElementById("opa").value;
    let operandb = document.getElementById("opb").value;
    let answer = Number(operanda) * Number(operandb);
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color = "green";
}
const div = () => {
    let operanda = document.getElementById("opa").value;
    let operandb = document.getElementById("opb").value;
    let answer = Number(operanda) / Number(operandb);
    document.getElementById("ans").value = answer;
    document.getElementById("ans").style.color = "blue";
}
