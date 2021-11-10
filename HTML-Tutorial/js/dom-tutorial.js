const add = () => {
    let operanda = document.getElementById("opa").value;
    let operandb = document.getElementById("opb").value;
    let answer = Number(operanda) + Number(operandb);
    document.getElementById("ans").value = answer;

}