$(document).ready(function(){
  $("#textbox").keypress(function(event){
    if (event.which == 13){
      if ($("#enter").prop("checked")){
        //console.log("test");
        event.preventDefault();
      }
    }
  });
});
