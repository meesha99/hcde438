function Flight(airline, number, origin, destination, departure, arrival, gate) {
    this.airline = airline;
    this.number = number;
    this.origin = origin;
    this.destination = destination;
    this.departure_time = departure;
    this.arrival_time = arrival;
    this.arrival_gate = gate;
    this.flight_duration = function() {
      return duration(this.departure_time, this.arrival_time);
    };
  }
  
  function duration(t1, t2) {
    var d1 = new Date(t1);
    var d2 = new Date(t2);
    return (d2 - d1) / 1000 / 3600 + " hours";
  }
  
   function MakeRow(i) {
       return "<tr><td>" +
    flights[i].airline +
    "</td><td>" +
    flights[i].number +
    "</td><td>" +
    flights[i].origin +
    "</td><td>" +
    flights[i].destination +
    "</td><td>" +
    flights[i].departure_time +
    "</td><td>" +
    flights[i].arrival_time +
    "</td><td>" +
    flights[i].arrival_gate +
    "</td><td>" +
    flights[i].flight_duration() +
    "</td></tr>";
   }
  
  
  var time1 = "NOV 18, 2019 21:35:00";
  var time2 = "NOV 18, 2019 23:18:00";
  var flight_duration = duration(time1, time2);
  console.log(flight_duration);
  
  var f1 = new Flight(
    "UAL",
    319,
    "SEA",
    "SFO",
    "NOV 18, 2019 21:35:00 (PST)",
    "NOV 18, 2019 23:18:00 (PST)",
    "GATE F1"
  );
  var f2 = new Flight(
    "ASA",
    738,
    "SEA",
    "FLL",
    "NOV 18, 2019 17:20:00 (PST)",
    "NOV 18, 2019 21:28:00 (EST)",
    "GATE C9"
  );
  var f3 = new Flight(
    "QXE",
    2952,
    "SEA",
    "GEG",
    "NOV 18, 2019 11:07:00 (PST)",
    "NOV 18, 2019 12:26:00 (PST)",
    "GATE C23"
  );
  var f4 = new Flight(
    "DAL",
    128,
    "SEA",
    "LAX",
    "NOV 18, 2019 09:38:00 (PST)",
    "NOV 18, 2019 12:55:00 (PST)",
    "GATE C9"
  );
  var f5 = new Flight(
    "DAL",
    2429,
    "SEA",
    "SFO",
    "NOV 18, 2019 20:59:00 (PST)",
    "NOV 18, 2019 22:28:00 (PST)",
    "GATE C10"
  );
  
  var test = duration("FEB 25, 2019 23:32:00", "FEB 26, 2019 05:07:00");
  
  var test2 = duration("Nov 11, 2016 18:00:00", "Nov 11, 2016 18:00:00");
  
  var time = f1.flight_duration();
  
  var flightTime = time - Math.floor(time);
  
  var flights = [f1, f2, f3, f4, f5];
  
  var el = document.getElementById("table_data");
  
  el.innerHTML = "";
  
  var i = 0;
  
  el.innerHTML += MakeRow(0);
  el.innerHTML += MakeRow(1);
  el.innerHTML += MakeRow(2);
  el.innerHTML += MakeRow(3);
  el.innerHTML += MakeRow(4);
  