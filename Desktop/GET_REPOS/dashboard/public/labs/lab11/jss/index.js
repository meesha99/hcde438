
function prompting() {
    var input = prompt('Username:', '');
    alert("Username: " + input);
    console.log(input);
    document.write("Username: " + input + "<br>");

    var response = prompt('Password:', '');
    alert("Password: " + response)
    console.log(response);
    document.write("Password: " + response);

}

object.onclick = prompting();
object.addEventListener("click", myScript);

