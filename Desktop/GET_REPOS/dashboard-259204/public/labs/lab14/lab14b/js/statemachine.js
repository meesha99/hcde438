function testStateMachine() {
  var states = ["idle", "s1", "s2", "s3", "s4"];
  var i = 0;
  var cmd = "";

  do {
    cmd = prompt("Enter a command:", "next");

    switch (cmd) {
      case "next":
        alert("StateMachine Status : " + states[i]);
        document.write(i);
        i++;
        if (i > 4) {
          i = 0;
        }
        break;
      case "quit":
        alert("Bye");
        exit(0);
        break;
      case "exit":
        alert("Bye");
        exit(0);
        break; 
      default:
        alert("Invalid Response");
    }
  } while (true);
}
