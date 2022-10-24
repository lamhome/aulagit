/* para mudar as cores do border bottom no menu de acordo com a classe */

$(document).ready(function(){
  // MUDAR CORES DAS DIVS E MENU  
  $("#sobre").hide();
  $("#equipe").hide();
  $("#agenda").hide();
  $("#projetos").hide();
  $("#contato").hide();

  $("a").click(function(){
    $("a").css("background-color", "#EDEDED");
    $("a").css("color", "#333");
    $(this).css("background-color", "#000");
    $(this).css("color", "#fff");
    $(this).css("borderBottom", "3px solid green");
  });

  $(".cor-verde").mouseenter(function(){
    $(".cor-verde").css("borderBottom", "3px solid green");
  });
  $("a").mouseleave(function(){
      $(".cor-verde").css("borderBottom", "3px solid #EDEDED");
  });

  $(".cor-verde").click(function(){
      $("#sobre").show();
      $("#equipe").hide();
      $("#agenda").hide();
      $("#projetos").hide();
      $("#contato").hide();
      $("h1").css("color", "green");
      $("p").css("color", "green");
      $("#sobre").css("background-color", "#f4fdf4")
  });

  $(".cor-azul").mouseenter(function(){
      $(".cor-azul").css("borderBottom", "3px solid blue");
    });
  $("a").mouseleave(function(){
        $(".cor-azul").css("borderBottom", "3px solid #EDEDED");
  });
  $(".cor-azul").click(function(){
      $("#sobre").hide();
      $("#equipe").show();
      $("#agenda").hide();
      $("#projetos").hide();
      $("#contato").hide();
      $("h1").css("color", "blue");
      $("p").css("color", "blue");
      $("#equipe").css("background-color", "#f0f8ff")
  });

  $(".cor-vermelha").mouseenter(function(){
      $(".cor-vermelha").css("borderBottom", "3px solid red");
    });
  $("a").mouseleave(function(){
        $(".cor-vermelha").css("borderBottom", "3px solid #EDEDED");
  });
  $(".cor-vermelha").click(function(){
      $("#sobre").hide();
      $("#equipe").hide();
      $("#agenda").show();
      $("#projetos").hide();
      $("#contato").hide();
      $("h1").css("color", "red");
      $("p").css("color", "red");
      $("#agenda").css("background-color", "#ffeef2")
  });

  $(".cor-marron").mouseenter(function(){
      $(".cor-marron").css("borderBottom", "3px solid brown");
    });
  $("a").mouseleave(function(){
        $(".cor-marron").css("borderBottom", "3px solid #EDEDED");
  });

  $(".cor-marron").click(function(){
      $("#sobre").hide();
      $("#equipe").hide();
      $("#agenda").hide();
      $("#projetos").show();
      $("#contato").hide();
      $("h1").css("color", "brown");
      $("p").css("color", "brown");
      $("#projetos").css("background-color", "#fdf8f8")
  });

  $(".cor-amarela").mouseenter(function(){
      $(".cor-amarela").css("borderBottom", "3px solid yellow");
    });
  $("a").mouseleave(function(){
        $(".cor-amarela").css("borderBottom", "3px solid #EDEDED");
  });
  $(".cor-amarela").click(function(){
      $("#sobre").hide();
      $("#equipe").hide();
      $("#agenda").hide();
      $("#projetos").hide();
      $("#contato").show();
      $("h1").css("color", "yellow");
      $("p").css("color", "yellow");
      $("#contato").css("background-color", "#979797")
  });

  // ANIMACAO DO LOGO
    $( ".logo" ).effect( "bounce", "slow" );


  // CONTATO


});