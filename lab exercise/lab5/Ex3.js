$.ajax({
  url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
  dataType: "jsonp"
});
var link = "#";
function jsonCallback(json){
  for (var i = 0; i < json.length; i++) {
      document.getElementById('data').innerHTML = document.getElementById('data').innerHTML + json[i].name + " email:" + "<a href='"+link+"'><u>"+json[i].email+"</u></a>" +"</br>";
  }
}
