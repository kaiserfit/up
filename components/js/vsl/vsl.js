$( document ).ready(function() {

 
    var tokenx = "";
var v = getCookie('rec');

if (v === 'instant'){
  document.getElementById("co-box").style.display = 'block';
}
   
   function showCO(){
     document.getElementById("co-box").style.display = 'block';
     
     document.cookie = "fh-watched=1";
     productLoad();
   }

    
   
   function checkCookie() {

     var fhw = getCookie("fh-watched");
    var fsw = getCookie("fh-played");
    if (fsw != "") {
      $(".video-play").hide();
    }
      if (fhw != "") {
        document.getElementById("co-box").style.display = 'block';

}

else { //initiate timer of vid
  document.cookie = "fh-watched=1";
  document.cookie = "fh-played=1";
    setTimeout(showCO, 2690000);

}  

document.cookie="mobile="+window.mobileCheck();

     
}
   
   checkCookie();



  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
  var mm = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();
function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
          }
var ee = ordinal_suffix_of(dd);
var today1 = ee + ' ' + mm + ' ' + yyyy;
$("#curdate").text(today1);
$("#curdate").css('font-weight', '700');



      }); //end doc ready

      

    


      var timeInSecs;
      var ticker;
      
      function startTimer(secs) {
      timeInSecs = parseInt(secs);
      ticker = setInterval("tick()", 1000); 
      }
      
      function tick() {
      var secs = timeInSecs;
      if (secs > 0) {
      timeInSecs--; 
      }
      else {
        // document.getElementById("counter").innerText = "00:00:00"
      // clearInterval(ticker);
      startTimer(15*60); // 10 minutes in seconds
      }
      
      var days= Math.floor(secs/86400); 
      secs %= 86400;
      var hours= Math.floor(secs/3600);
      secs %= 3600;
      var mins = Math.floor(secs/60);
      secs %= 60;
      var pretty = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
      var xmins = ( (mins < 10) ? "0" : "" ) + mins;
        var xsec = ( (secs < 10) ? "0" : "" ) + secs;
        // document.getElementById("counter").innerText = "00:"+xmins+":"+xsec;
      
        $("#counter").text("00:"+xmins+":"+xsec);
        // document.getElementById("sec").innerText = xsec;
      //document.getElementById("countdown").innerHTML = pretty;
      }
      
      startTimer(15*60);
      
      function productLoad(){
        var email = getCookie('em');
        if (email != "") {
          $.ajax({
            type: 'POST',
            url: 'https://hook.integromat.com/lmma1cea3wx1ui8ns6oqmys8srojr7gd',
            crossDomain: true,
            data: {'email': email},
            dataType: 'json',
            success: function() {
            console.log("sadf");
            }
              }); 
        }
      }

      $('.scroll-product').click(function(){
        $('html, body').animate({
            scrollTop: $("#co-box").offset().top - 20 
        }, 'slow');
    });
 



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
    
          const tokent = getCookie("userToken");
      
          function recordCheckout(testidx, page, dba){ //function to record checkout click
            var mobile = getCookie('mobile');
            $.ajax({
                type: 'POST',
                url: 'https://pay.kaiserfitapp.com/split_test/checkout.php',
                crossDomain: true,
                data: {'testid': testidx,'page_name': page, 'mobile': mobile},
                dataType: 'json',
                success: function(data) {
                  // console.log(data);
                
                  window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba +"&spid="+ testidx +"&page="+page; //use these parameters for split testing
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
          }
  
 
  
  

$('.checkout-button').click(function() {
  
  var page = getCookie('page');
  var dba=$(this).data('sku');
  var testidx = getCookie('testid'); //change this to the id of the active test
  var v = getCookie('vsltest');
  if (v !== '') {
    var p = getCookie('rec');
    vrecordCheckout(p);
  }

 
    if (testidx != '') { //there is an active test;
    // console.log('test');
    recordCheckout(testidx, page, dba); 

  } else { //there is no running test
 
    // console.log('no test');
    setTimeout(function(){
      window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba;
    }, 200);
    
   }
  });


   $('#product-section-2 .product-pack').click(function() {

    var page = getCookie('page');
    var dba=$(this).data('sku');
    var testidx = getCookie('testid'); //change this to the id of the active test
    var v = getCookie('vsltest');
    if (v !== '') {
      var p = getCookie('rec');
      vrecordCheckout(p);
    }

 
    if (testidx != '') { //there is an active test;
      // console.log('test');
      recordCheckout(testidx, page, dba); 
    } else { //there is no running test
   
      // console.log('no test');
      setTimeout(function(){
        window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba;
      }, 200);
      
     }
    
 
  
  
      
});



