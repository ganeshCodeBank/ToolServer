$(document).ready(function(){

  $("#dash-Id").addClass("active");
  $("#all-mch").addClass("machine-active");


   $("#full-view-Id").click(function(){
    $(".toolmenu").hide(500);
    $(".expand").show();
    $(".full-view").hide();
    $(".viewBody").css("margin-left","50px");
  });

   $("#expand_Id").click(function(){
    $(".toolmenu").show(500);
    $(".expand").hide();
    $(".full-view").show();
    $(".viewBody").css("margin-left","0px");
  });

  $('#logo-Id').click(function() {
    location.reload();
  });

  $("#new-build").click(function(){
    $(".build-report").hide();
    $(".codeBox").show();
  });

  $("#buil-btn-id").click(function(){
     $(".codeBox").hide();
    $(".build-report").show();
   
  });
  
  $("#bug-Id-new").click(function(){

     $(".bug-content").show();
   
  });

  $("#bug-Id").click(function(){

     $(".bug-content").show();
   
  });

   $("#bugadd-Id").click(function(){

     $(".bug-content").hide();
   
  });

    $("#bugcancel-Id").click(function(){

     $(".bug-content").hide();
   
  });

 $("#run-btn").click(function(){
    $(".testCode").hide();
    $(".run-report1").show();
  });

   $("#new-run").click(function(){
    $(".testCode").show();
    $(".run-report1").hide();
  });

   $('#logo-Id').click(function() {
      location.reload();
    });

    document.onreadystatechange = function() {
      if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
      } 
      else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
      }
    };
    


   $("#all-mch").click(function(){
    $(".all-machine").show();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").addClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active");  
   
  });

   $("#inc-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").show();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").addClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

  $("#exc-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").show();
    $(".add-machine").hide();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").addClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

  $("#add-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").show();
    $(".remove-machine").hide();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").addClass("machine-active");
    $("#rem-mch").removeClass("machine-active"); 
   
  });

   $("#rem-mch").click(function(){
    $(".all-machine").hide();
    $(".include-machine").hide();
    $(".exclude").hide();
    $(".add-machine").hide();
    $(".remove-machine").show();
    $("#all-mch").removeClass("machine-active");
    $("#inc-mch").removeClass("machine-active");
    $("#exc-mch").removeClass("machine-active");
    $("#add-mch").removeClass("machine-active");
    $("#rem-mch").addClass("machine-active"); 
   
  });


});