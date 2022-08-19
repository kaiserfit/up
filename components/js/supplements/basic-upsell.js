$( document ).ready(function() {

});

const hashVal  = [...crypto.getRandomValues(new Uint8Array(10))]
.map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
const timeStamp = Date.now();    
const event_id = 'event-'+hashVal+'-'+timeStamp; //unique ID of visitor
const vsltest = 16;
			var sid = "";
  var uid = "";
   var un = "";
  var obx = 0;
  var tokenx = "";
  var acid = "";
  var botqty = "";
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
        
			}
     
     function checkCookie() {
  		var username = getCookie("cName");
   	var ob = getCookie("obx");
      var cid = getCookie("cid");
       var cd = getCookie("sid");
        var userToken = getCookie("userToken");
       tokenx = userToken;

      
       if (cid != "") {//user exists
   				uid = cid;
       	un = username;
         obx = ob;
         sid  = cd;
          if($("#yt").length){
           document.getElementById("yt").innerText = un;
         }
         if($("#u3name").length){
           document.getElementById("u3name").innerText = un;
         }
         if($("#u1d1name").length){
           document.getElementById("u1d1name").innerText = un;
         } 
         
         
         
 		 				}else { //no user id present
              console.log("hello visitor");
               if($("#u1d1name").length){
           document.getElementById("u1d1name").innerText = "visitor";
         } 
            }
            var acidx = getCookie("acid");
                 if (acidx != ""){
                 acid = acidx;
              }
              var botq = getCookie("bot");
              if (botq != ""){
            botqty = botq;
                } else {
                  botqty = "1";
                }
     }
         

     
     checkCookie();

     function vupdateAmount(page, price){ //function to update purchase amount for a page in vsl split test from upsell 1-4
      var mobile = getCookie('mobile');
     

      $.ajax({
         type: 'POST',
         url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
         crossDomain: true,
         data: {'testid': vsltest,'page_name': page,'price': price, 'mobile': mobile},
         dataType: 'json',
         success: function(data) {
          
          
         },
          error: function(data){
            console.log(data);
          }
     });
  }
     
     function updateAmount(testid, price, fstep){ //function to update purchase amount for a page in split test from upsell 1-4
      var mobile = getCookie('mobile');
      var stp = getCookie('stp');
      $.ajax({
         type: 'POST',
         url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
         crossDomain: true,
         data: {'testid': testid,'page_name': stp,'price': price,'mobile': mobile},
         dataType: 'json',
         success: function(data) {
          setTimeout(function() {
            findNextPage(fstep);
          }, 500);
          
           
         },
          error: function(data){
            console.log(data);
          }
     });
  }

   
 function updateAmount2(testid, price){ //function to update purchase amount for a page in split test at the thank-you page
  var mobile = getCookie('mobile');
  var stp = getCookie('stp');
  $.ajax({
     type: 'POST',
     url: 'https://pay.kaiserfitapp.com/split_test/upsell.php',
     crossDomain: true,
     data: {'testid': testid,'page_name': stp,'price': price,'mobile': mobile},
     dataType: 'json',
     success: function(data) {
       console.log(data);
      
     },
      error: function(data){
        console.log(data);
      }
 });
}

  function u4ia(){
    if (obx==1){ //orderbump ticked
      //window.location.href="/u4-forever-fat-loss-stripe";
      if (botqty === "1") {
           window.location.href="queen-biotics-3.html";
         }
         if (botqty === "3") {
            window.location.href="queen-biotics-6.html";
         }
         if (botqty === "6") {
            window.location.href="queen-biotics-12.html";
         }
    } else if (obx==0) {
    console.log("no-orderbump");
      window.location.href="/u4kfc.html";
    } else {
      console.log("Kaiserfit");
    }
    
  } //end u4ia
   if (un != ""){
   console.log("up");
   }
  function findNextPage(fstep){
    botqty = "1";

    switch (fstep){
      case "u2":
        if (botqty === "1") {
          window.location.href="queen-pure-collagen-3.html";
        }
        if (botqty === "3") {
           window.location.href="queen-pure-collagen-6.html";
        }
        if (botqty === "6") {
           window.location.href="queen-pure-collagen-12.html";
        }
       // window.location.href="/u3-meal-master-class-stripe";
        break;
       
      case "d1":
        if (botqty === "1") {
          window.location.href="queen-night-burner-3.html";
        }
        if (botqty === "3") {
          window.location.href="queen-night-burner-6.html";
        }
        if (botqty === "6") {
          window.location.href="queen-night-burner-12.html";
        }
        break;
        case "d2":
          if (botqty === "1") {
            window.location.href="queen-pure-collagen-3.html";
          }
          if (botqty === "3") {
             window.location.href="queen-pure-collagen-6.html";
          }
          if (botqty === "6") {
             window.location.href="queen-pure-collagen-12.html";
          }
        break;
        case "d3":
          if (botqty === "1") {
            window.location.href="queen-biotics-3.html";
          }
          if (botqty === "3") {
            window.location.href="queen-biotics-6.html";
          }
          if (botqty === "6") {
            window.location.href="queen-biotics-12.html";
          }
        break;
        case "d4":
          window.location.href="thank-you.html";
        break;
      case "u3":
        if (botqty === "1") {
          window.location.href="queen-biotics-3.html";
        }
        if (botqty === "3") {
           window.location.href="queen-biotics-6.html";
        }
        if (botqty === "6") {
           window.location.href="queen-biotics-12.html";
        }
        break;
          case "u4":
       window.location.href="thank-you.html";
        break;
      default:
        console.log("journey stop");
        break;
    }
  }
  
     function integro(addonid){
 	$.post("https://hook.integromat.com/hrmj8ohgwuxd3mtkblxbvtmrc49h4vvm",{'customer_id': uid, 'product_id':addonid},function(data) {
		
	
		});
  }
  function get_upsell(addonid, fstep, taboola_id, page, track, desc, bot){
         var userA = addonid;
         var oid = getCookie('oid');
         var fbclid = getCookie('fbclid');
         var url=window.location.href;
    var dd = {'cid': uid,'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'desc': desc, 'orderid': oid, 'bot': bot, 'fbclid': fbclid,'url': url};

    	$.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/upsellLive.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {

      fbq('track', 'Purchase', {
        value: data.price,
        currency: 'USD'
        }, {eventID:event_id});

        ttq.track('CompletePayment',{
          content_id: data.product,
          content_type:'product',
          quantity: parseInt(bot),
          price: data.price,
          value: data.price,
          currency: 'USD'});

      // integro(addonid);

      gtag('event', 'conversion', {
        'send_to': 'AW-10886811479/DB76CJPsy7QDENeensco',
        'value': data.price,
        'currency': 'USD',
        'transaction_id': data.receipt
    });
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
   
      //window.MC_PIXEL.fireLogMoneyEvent('Purchased - Dream Body Academy', data.price, 'USD');
      
      var v = getCookie('vsltest');
      if (v != '') {
        var p = getCookie('rec');
        vupdateAmount(p, price);
      }
      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        updateAmount(testid, data.price, fstep);
      } else {
        setTimeout(function() {
          findNextPage(fstep);
        }, 500);
      }
		
    },
        error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
      //  console.log(data);
      findNextPage(fstep);
      // $("#ldr").removeClass("glyphicon-alert");
      // $('.msg').text('Oops Something Wrong Happened. Please Try Again Later');
        
      }
        
      });

  } //end get_upsell
  function get_downsell(planid, fstep, taboola_id, page, track, desc){
             var userA = planid;
    var dd = {'cid': uid,'addonid': planid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'desc': desc};
 		
    $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/downsell.php',
    crossDomain: true,
    data: dd,
    dataType: 'json',
    success: function(data) {
     
      //  integro(planid);
   
     
     
  //  _tfa.push({notify: 'event', name: taboola_id, id: 1376421});
    
      
             //ultracart
   	//fb tracking
      fbq('track', 'Purchase', {
        value: data.price,
         currency: 'USD'}
         );
    
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			findNextPage(fstep);
    },
      error: function(data) {
        $("#ldr").removeClass("glyphicon-alert");
        $('.msg').text('Oops Something Wrong Happened. Please Try Again Later');
      }
    });
  } //end downsell func
  
  
  
    $('.kfc').click(function(){
        var plan = $(this).data('id');
       $.ajax({
    type: 'POST',
    url: 'https://queenformula.net/api/kfc.php',
    crossDomain: true,
    data: {'uid': uid,'plan': plan},
    dataType: 'json',
    success: function(data) {
   
      
      integro(addonid);		
           
              
        //  _tfa.push({notify: 'event', name: 'u4kfc_purchase', id: 1376421});
           
	//fb tracking
      fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
 
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");
    
			window.location.href="thank-you.html";
    }, 
      error: function(data) {
      	window.location.href="thank-you.html";
      }
       });
 		});
  
      $('.d1btn').click(function(){
        var desc = $(this).data('desc');
       var track = $(this).data('track');
     var addonid = $(this).data('id');
         var fstep = $(this).data('idx');
      var taboola_id = $(this).data('taboola');
         var page = $(this).data('page');
         var bot = $(this).data('bot');
           get_upsell(addonid, fstep, taboola_id, page, track, desc, bot);
  
		});
  
    $('.dsbtn').click(function(){
      var desc = $(this).data('desc');
      var track = $(this).data('track');
      var planid = $(this).data('id');
         var fstep = $(this).data('idx');
     var page = $(this).data('page');
     		var taboola_id = $(this).data('taboola');
           get_downsell(planid, fstep, taboola_id, page, track, desc);
   
   
  
		});
  
    $('.ty-btn').click(function(){
      var bot = 3;
      var desc = $(this).data('desc');
        var track = $(this).data('track');
        var addonid = $(this).data('id');
      var useraction = addonid;
      var oid = getCookie('oid');
      var fbclid = getCookie('fbclid');
      var url=window.location.href;
      $("#ldr").removeClass("glyphicon-ok");
      $("#ldr").addClass("glyphicon-alert");
      $('#modPurchase').modal('show');
      $.ajax({
    type: 'POST',
    url: 'https://pay.kaiserfitapp.com/stripe/upsellLive.php',
    crossDomain: true,
    data: {'cid': uid,'addonid': addonid,'track': track,'tokenx': tokenx,'useraction': useraction,'acid': acid, 'desc': desc, 'orderid': oid, 'bot': bot,'fbclid': fbclid, 'url': url},
    dataType: 'json',
    success: function(data) {
      
      fbq('track', 'Purchase', {
        value: data.price,
        currency: 'USD'
        }, {eventID:event_id});

        ttq.track('CompletePayment',{
          content_id: data.product,
          content_type:'product',
          quantity: 3,
          price: data.price,
          value: data.price,
          currency: 'USD'});
     
          gtag('event', 'conversion', {
            'send_to': 'AW-10886811479/DB76CJPsy7QDENeensco',
            'value': data.price,
            'currency': 'USD',
            'transaction_id': data.receipt
        });
      // integro(addonid);
    
 
    

    
      
	//fb tracking
      var v = getCookie('vsltest');
      if (v != '') {
        var p = getCookie('rec');
        vupdateAmount(p, price);
      }
      var testid = getCookie('testid');
      if (testid != ''){ // there is an active test
        updateAmount2(testid, data.price);
      } 
      
      $("#ldr").removeClass("glyphicon-alert");
      $("#ldr").addClass("glyphicon-ok");

    
			$('#modPurchase').modal('hide');
    },
        error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {
       
      		$('#modPurchase').modal('hide');
        
      }
        
      });
      $(this).attr('disabled', 'disabled');
      $(this).attr('value', 'Addon Purchased');
      $(this).val('Addon Purchased');
       $(this).text('Addon Purchased');
      		
		});
  
  


  $('.dskip').click(function(){
    var track = $(this).data('track');
   
    switch (track) {
      case "U1D3": 
      if (botqty === "1") {
      window.location.href="queen-night-burner-3.html";
    }
    if (botqty === "3") {
       window.location.href="queen-night-burner-6.html";
    }
    if (botqty === "6") {
       window.location.href="queen-night-burner-12.html";
    }
        break;
      case "U2": 
        if (botqty === "1") {
        window.location.href="queen-night-burner-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="queen-night-burner-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="queen-night-burner-downsell-12";
      }
          break;
         case "U3": 
        if (botqty === "1") {
        window.location.href="queen-pure-collagen-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="queen-pure-collagen-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="queen-pure-collagen-downsell-12";
      }
          break;
        case "U4": 
        if (botqty === "1") {
        window.location.href="queen-biotics-downsell-3";
      }
      if (botqty === "3") {
         window.location.href="queen-biotics-downsell-6";
      }
      if (botqty === "6") {
         window.location.href="queen-biotics-downsell-12";
      }
          break;
        case "U2D1": 
      if (botqty === "1") {
        window.location.href="queen-pure-collagen-3";
      }
      if (botqty === "3") {
         window.location.href="queen-pure-collagen-6";
      }
      if (botqty === "6") {
         window.location.href="queen-pure-collagen-12";
      }
          break;
      case "U3D1" :
        if (botqty === "1") {
          window.location.href="queen-biotics-downsell-3.html";
        }
        if (botqty === "3") {
           window.location.href="queen-biotics-downsell-6.html";
        }
        if (botqty === "6") {
           window.location.href="queen-biotics-downsell-12.html";
        }
        break;
      case "U4D1":
        window.location.href = "thankyou-page-stripe";
        break;
      default: 
        break;
        
        
      } //end switch
  
  
  
  
  
  });//end dskip
  




function kTr(eventName){
  if (window.location.hostname === 'localhost') {
    return false;
  }
  var url = window.location.href;
  var navAgent = navigator.userAgent;
  var fbc = getCookie('_fbc');

var data = {
    'eventName': eventName,
    'eventID': event_id,
    'URL': url,
    'userAgent': navAgent,
    'fbc': fbc,
    'ipv4Address': ipv4,
   
    }

    setTimeout(() => {
       
        $.ajax({
            type: 'POST',
            url: 'https://hook.us1.make.com/aorjaog2ut3cu8o32yv0ih9mk543nguu',
            crossDomain: true,
            data: data,
            dataType: 'json'
      
            }); //end ajax

    }, 3000);
   
    
}
