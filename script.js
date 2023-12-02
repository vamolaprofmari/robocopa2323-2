$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});

// $("video").click(function(){
//   var v = $("video > source");
//   var t = v.attr("src");
//   $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
//   $("#myModal").modal();  
// });

$("iframe").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<iframe class='modal-iframe' src=' "+t+" ' </iframe>");
  $("#myModal").modal();  
});
});//EOF Document.ready

function video1(){
 
  $(".modal-body").html("<video class='model-vid' controls><source src='jr/enxo e antonio 1.mp4' type='video/mp4'></source></video>");
  $("#myModal").modal(); 
}

function video2(){
 
  $(".modal-body").html("<video class='model-vid' controls><source src='jr/enzo, benicio, matheus - 1.mp4' type='video/mp4'></source></video>");
  $("#myModal").modal(); 
}

function video3(){
 
  $(".modal-body").html("<video class='model-vid' controls><source src='jr/Samuel,Francisco,Pedro-1.mp4' type='video/mp4'></source></video>");
  $("#myModal").modal(); 
}

function video4(){
 
  $(".modal-body").html("<video class='model-vid' controls><source src='jr/1.mp4' type='video/mp4'></source></video>");
  $("#myModal").modal(); 
}

function video5(){
 
  $(".modal-body").html("<video class='model-vid' controls><source src='nofull.mp4' type='video/mp4'></source></video>");
  $("#myModal").modal(); 
}
