$(document).ready(function()
{ //корректность ввода email
  $('#email').blur(function()
  {
    if($(this).val() != '')
    {
      var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
      if(pattern.test($(this).val()))
      {
        $(this).css({'border' : '1px solid #569b44'});
		    $('#text1').css({'color': '#569b44'});
        $('#Registration').prop('disabled',false);
      }
      else
      {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#text1').css({'color': '#ff0000'});
        $('#Registration').prop('disabled',true);
      }
      }
    else
    {
      $(this).css({'border' : '1px solid #ff0000'});
      $('#text1').css({'color': '#ff0000'});
      $('#Registration').prop('disabled',true);
    }
  });
});

$(document).ready(function()
{ // проверка на пустоту
  $('#password1').keyup(function()
  {
    if($(this).val() != '') //проверка на пустоту
    {
      if ($('#password1').val().length<7)
      {
        $(this).css({'border' : '1px solid #ff0000'});
        $('#text1').css({'color': '#569b44'});
        $('#Registration').prop('disabled',true);
       }
       else
       {
         $(this).css({'border' : '1px solid #569b44'});
           $('#text1').css({'color': '#ff0000'});
         $('#Registration').prop('disabled',false);
       }

       if (/[A-ZА-Я]/.test($(this).val())) //провека на большую букву
       {
         $(this).css({'border' : '1px solid #569b44'});
          $('#text1').css({'color': '#569b44'});
         $('#Registration').prop('disabled',false);
       }
       else
       {
         $(this).css({'border' : '1px solid #ff0000'});
         $('#text1').css({'color': '#ff0000'});
         $('#Registration').prop('disabled',true);
       }

    }
    else
    {
      $(this).css({'border' : '1px solid #ff0000'});
      $('#text1').css({'color': '#ff0000'});
    }
  });
});

$(document).ready(function()
{   // совпадение паролей
  $('#password2').blur(function()
  {
    var pas1=$('#password1').val();
    if($(this).val() == (pas1))
    {
      $(this).css({'border' : '1px solid #569b44'});
    	 $('#text1').css({'color': '#569b44'});
      $('#Registration').prop('disabled',false);
    }
    else
    {
      $(this).css({'border' : '1px solid #ff0000'});
      $('#text1').css({'color': '#ff0000'});
      $('#Registration').prop('disabled',true);
    }
  });
});


$(document).ready(function(){
    $("#but1").click(function(){

        $("#block1").animate({left: '50%'});
        $("#block1").animate({left: '1%'});
    });
});
$(document).ready(function(){
    $("#but2").click(function(){

        $("#block2").animate({left: '1%'});
        $("#block2").animate({left: '50%'});
    });
});


$(document).ready(function(){
    $("#but3").click(function(){
      Anim1();
      Anim2();
      Anim3();
      Anim4();
      Anim5();
      Anim6();
      /*$("#block1").animate({left: '50%',width:'250px',height:'250px'});
      $("#block1").animate({bottom: '20%',width:'100px',height:'100px'});
      $("#block1").animate({left: '1%',width:'250px',height:'250px'});
      $("#block1").animate({top: '21.2%',width:'100px',height:'100px'});
      */
      /*
      $("#block1").animate({left: '50%'},100);
      $("#block1").animate({top: '41%'},100);
      $("#block1").animate({left: '1%'},100);
      $("#block1").animate({top: '21%'},100);
      */
      /*$("#block2").animate({left: '1%', width:'250px',height:'250px'});
      $("#block2").animate({top: '20%', width:'100px',height:'100px'});
      $("#block2").animate({left: '50%', width:'250px',height:'250px'});
      $("#block2").animate({top: '39.83%', width:'100px',height:'100px'});*/

    });
});
function Anim1 ()
{
  $("#block1").animate({left:'50%'},1000);
  $("#block1").animate({top: '41%'},1000);
  $("#block1").animate({left: '1%'},1000);
  $("#block1").animate({top: '21%'},1000);
  window.setTimeout(function() { Anim1() }, 100)
}
function Anim2 ()
{
  $("#block2").animate({left:'50%'},200);
  $("#block2").animate({top: '41%'},200);
  $("#block2").animate({left: '1%'},200);
  $("#block2").animate({top: '21%'},200);
  window.setTimeout(function() { Anim2() }, 200)
}
function Anim3 ()
{
  $("#block3").animate({left:'50%'},300);
  $("#block3").animate({top: '41%'},300);
  $("#block3").animate({left: '1%'},300);
  $("#block3").animate({top: '21%'},300);
  window.setTimeout(function() { Anim3() }, 300)
}
function Anim4 ()
{
  $("#block4").animate({left:'50%'},400);
  $("#block4").animate({top: '41%'},400);
  $("#block4").animate({left: '1%'},400);
  $("#block4").animate({top: '21%'},400);
  window.setTimeout(function() { Anim4() }, 400)
}
function Anim5 ()
{
  $("#block5").animate({left: '50%'},500);
  $("#block5").animate({top: '41%'},500);
  $("#block5").animate({left: '1%'},500);
  $("#block5").animate({top: '21%'},500);
  window.setTimeout(function() { Anim5() }, 500)
}
function Anim6 ()
{
  $("#block6").animate({left: '50%'},600);
  $("#block6").animate({top: '41%'},600);
  $("#block6").animate({left: '1%'},600);
  $("#block6").animate({top: '21%'},600);
  window.setTimeout(function() { Anim6() }, 600)
}
