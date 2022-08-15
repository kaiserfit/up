


  

  var quiz = [];
  var cquiz = [];
  
     
      function getip(){
        $.get("https://ipinfo.io", function(response) {
          return response.ip;
      }, "json")
      }
  

  function integromatt(action, ip) {
    var fbc = getCookie('_fbc');
    
        $.ajax({
        type: 'POST',
        url: 'https://hook.integromat.com/rzwt665qate0d0bu5xhex9q7cr0lun7m',
        crossDomain: true,
        data: {'Event': action, 'fbc': fbc,'url': window.location.href, 'userAgent': navigator.userAgent, 'ipAddress':ip},
        dataType: 'json'
  
        }); //end ajax
  }



 function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
        
			}//getCookie
    


    var widthValue = 0;
    var elem = document.getElementById("progress");
    var widthAnim = widthValue;


    function move() {
      var id = setInterval(frame, 12.5);
      var widthIncrement = 12.5;
      widthValue = widthAnim + widthIncrement;
      function frame() {
        if (widthAnim >= widthValue || widthValue > 100) {
          clearInterval(id);
          //button.disabled = true;
        } else {
          widthAnim++;
          elem.style.width = widthAnim + '%';
          elem.innerHTML = widthAnim * 1 + '%';
        }
      }
    }

$(".quiz-cart").click(function(){
  var ans = $(this).data('ans');
  quiz.push(ans);

  function vowel(string){
    if (string.charAt(0) === 'A') {
      return "an "+ string;
    } else {
      return "a "+ string;
    }
  }

  var x = parseInt($(this).data("idx"));
 
  switch (x) {
    case 0:
    $("#a1").text(ans);
    break;
    case 1:
    $("#a2").text(vowel(ans));
    break;
    case 2:
      $("#a3").text(ans);
      break;
    case 3:
      $("#a4").text(ans);
    case 4:
      let m = $("#a4").text();
      $("#a5a").text(m);
      $("#a5b").text(ans);
      case 6 :
        $("#a7").text(ans); 
        break;
    case 7:
      let r = $("#a5a").text();
      let d = $("#a5b").text();
      $("#a8a").text(r);
      $("#a8b").text(d);
      $("#a8c").text(ans);
    default: break;
  }//end switch
});
   

function quizzify(){
  var elements = {
    q1: quiz[0],
    q2: quiz[1],
    q3: quiz[2],
    q4: quiz[3],
    q5: quiz[4],
    q6: quiz[5],
    q7: quiz[6],
    q8: quiz[7],
    q9: quiz[8]


 }

cquiz.push(elements);
var jsonStr = JSON.stringify( cquiz );

 document.cookie = "cquiz="+jsonStr;
 

}

    $(".answers-col").click(function(){
 
    
  $(".lazy").each(function(i, obj) {
   
    let x = obj.dataset.src
    obj.src = x;

});
      $('#question-modal').animate({
      
          scrollTop: '0px'
    }, 300);
      

      var cb = $(this).find("input[type='checkbox']");
    
      cb.attr('checked', true);
      $(cb).prop('checked', true);
     
      var z = $(this).data('idx');
      if (z === 2){
        document.cookie="userage="+cb.val();
   
       
        
      }
      
      if (z === 3){


       
        document.cookie="wlg="+cb.val();
      }
      var x = "#q"+z;
      var y = "#q"+(z+1);
      if (z != 8){
       
        // $(x).fadeOut('slow');
        // $(y).fadeIn('slow');
       setTimeout(function() {
        move();
        $(x).animate({
          left: '-100px',
          opacity: 'hide'
        }, function(){
          $(y).animate({
            right: '0px',
            opacity: 'show'
          });
        });
     
 
       
      
       }, 500);
      
       
      } else {
       
        elem.style.backgroundColor = "#0FFF50";
             elem.style.width = '100%';
      				elem.innerHTML = '100%';
              quizzify();
             

              setTimeout(function() {
          
                $("#question-modal").modal('hide');
                
                window.location.href="/fathacks-vsl.html";
              
             }, 500);
     
      

    
  
     
             
      }
      
    
    });




$(".ini-ans").click(function(){

  $('input:checkbox').prop('checked', false);
    
});


$(".final-ans").click(function(){
  var uip = getip();
  integromatt('SubmitApplication', uip);
  document.cookie="_uip="+uip;
});

    