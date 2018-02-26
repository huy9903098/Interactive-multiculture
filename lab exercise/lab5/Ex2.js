$(document).ready(function () {
  $('#addperson').on('click',function(){
    var name ='<p>'+document.getElementById('Name-box').value+'</p>';
    $('#Names-input').append(name);
  });
});
