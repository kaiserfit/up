$( document ).ready(function() {
    var sid = "";
var uid = "";
var un = "";
var obx = 0;
var tokenx = "";
var acid = "";
var botqty = "";
var obid = "";
var orderid = "";

function getUserDate(){
var d = new Date();

var date1 = d.getFullYear() + '-' +
      ((d.getMonth()+1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) +
      '-' +
      (d.getDate() < 10 ? "0" + d.getDate() : d.getDate());

var time1 = (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) +
      ':' +
      (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
      ':' +
      (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());

      var dd = date1+ " " +time1;
    return dd;
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

    }

function checkCookie() {
  var username = getCookie("cName");
var ob = getCookie("obx");
var cid = getCookie("cid");
var cd = getCookie("sid");
var userToken = getCookie("userToken");
var iOrder = getCookie("iOrder");
orderid = iOrder;
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
var botq = getCookie("botqty");
if (botq != ""){
botqty = botq;
          }
var obs = getCookie("obid");
if (obs != ""){
obid = obs;
          }
} //end checkCookie
 


checkCookie();
function u4ia(){
if (obx==1){ //orderbump ticked
//window.location.href="/u4-forever-fat-loss-stripe";
if (botqty === "1") {
  window.location.href="queen-biotics-3";
}
if (botqty === "3") {
   window.location.href="queen-biotics-6";
}
if (botqty === "6") {
   window.location.href="queen-biotics-12";
}
} else if (obx==0) {
if (obid === "19"){
window.location.href="/u4-kaiserfit-club-stripe";
}
if (obid === "47"){
window.location.href="/u4-kaiserfit-club-47";
}
if (obid === "79"){
window.location.href="/u4-kaiserfit-club-79";
}
} else {
console.log("Kaiserfit");
}

}
if (un != ""){
console.log("up");
}
function findNextPage(fstep){
switch (fstep){
case "u2":
window.location.href="/u3-collagen";
break;
case "d1":
window.location.href="/u2-night-burner";
break;
case "d2":
window.location.href="/u2-night-burner";
break;
case "u3":
window.location.href="/u4-biotics";
break;
  case "u4":
window.location.href="/thankyou-page-stripe";
break;
default:
console.log("journey stop");
break;
}
}

function integro(addonid){
$.post("https://hook.integromat.com/hrmj8ohgwuxd3mtkblxbvtmrc49h4vvm",{'customer_id': uid, 'product_id':addonid},function(data) {

console.log(data);
});
}
function get_upsell(addonid, fstep, taboola_id, page, track, desc, bot){
var pdate = getUserDate();
var userA = addonid;
var oid = getCookie('oid');
var dd = {'cid': uid,'pdate': pdate, 'addonid': addonid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid,'desc': desc,'orderid': oid,'bot':bot};

$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripe/upsellLive.php',
crossDomain: true,
data: dd,
dataType: 'json',
success: function(data) {
integro(addonid);

var price = parseFloat(data.price);
gtag('event', 'conversion', {
'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
'value': price,
'currency': 'USD',
'transaction_id': data.receipt
          });  

$("#ldr").removeClass("glyphicon-alert");
$("#ldr").addClass("glyphicon-ok");

    findNextPage(fstep);
},
error: function (data, xhr,jqXHR, ajaxOptions, thrownError) {

  findNextPage(fstep);

}

});

} //end get_upsell
function get_downsell(planid, fstep, taboola_id, page, track, desc){
     var userA = planid;
var dd = {'cid': uid,'addonid': planid,'tokenx': tokenx,'track': track, 'useraction': userA,'acid': acid, 'desc': desc};
 
$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripe/downsellLive.php',
crossDomain: true,
data: dd,
dataType: 'json',
success: function(data) {

integro(planid);

var price = data.price;
gtag('event', 'conversion', {
'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
'value': price,
'currency': 'USD',
'transaction_id': data.receipt
          });





$("#ldr").removeClass("glyphicon-alert");
$("#ldr").addClass("glyphicon-ok");

    findNextPage(fstep);
},
error: function(data) {
  findNextPage(fstep);
}
});
} //end downsell func



$('.kfc').click(function(){
var plan = $(this).data('id');
$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripe/kfcLive.php',
crossDomain: true,
data: {'uid': uid,'plan': plan},
dataType: 'json',
success: function(data) {
console.log(data);

integro(addonid);		
     console.log(data);
       gtag('event', 'conversion', {
'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
'value': 0.0,
'currency': 'USD',
'transaction_id': data.receipt
          });
 
    //ultracart
(function(img) { img.src = 'https://kaiserbody.com/api/conversions/ultracart?salePages=51&conversionData=' + encodeURIComponent('receipt='+ data.receipt +'&amount=0.00&products=15572') + '&referrer=' + encodeURIComponent(document.referrer); })(new Image); 
//fb tracking



$("#ldr").removeClass("glyphicon-alert");
$("#ldr").addClass("glyphicon-ok");

    window.location.href="/thankyou-page-stripe";
}, 
error: function(data) {
  window.location.href="/thankyou-page-stripe";
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

$('.tybtn').click(function(){
var track = $(this).data('track');
var addonid = $(this).data('id');
var useraction = addonid;
$("#ldr").removeClass("glyphicon-ok");
$("#ldr").addClass("glyphicon-alert");
$('#modPurchase').modal('show');
$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripe/upsellLive.php',
crossDomain: true,
data: {'cid': uid,'addonid': addonid,'track': track,'tokenx': tokenx,'useraction': useraction},
dataType: 'json',
success: function(data) {
integro(addonid);

var price = data.price;
gtag('event', 'conversion', {
'send_to': 'AW-808125221/scGdCITB2-8BEKWGrIED',
'value': price,
'currency': 'USD',
'transaction_id': data.receipt
          });




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

$('.sku').click(function(){
var skid = $("#sku_id").val();
var sname = $("#sku_name").val();
var sprice = $("#sku_price").val();
$.post("https://pay.kaiserfitapp.com/stripe/skuCreateLive.php",{'id': skid,'name': sname,'price': sprice},function(data) {
    console.log(data);
$('#skus').trigger("reset");
// $("#ldr").removeClass("glyphicon-alert");
//$("#ldr").addClass("glyphicon-ok");

    //$("#modPurchase").modal('hide');
});
});


$('.u4-check').click(function(){



          var track = $(this).data('track');
var dd = {'action': 'uLoad','fpage': track,'tokenx': tokenx, 'user_action': 'skipped'};  

$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripetest/db.php',
crossDomain: true,
data: dd,
dataType: 'json',
success: function(response) {
console.log(response.data);

 u4ia();
},
error: function(response){
console.log(response.data);
  u4ia();
}
});

}); //end u4check

$('.skip').click(function(){

var track = $(this).data('track');
console.log(track);
var dd = {'action': 'uLoad','fpage': track,'tokenx': tokenx, 'user_action': 'skipped'};  

$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripetest/db.php',
crossDomain: true,
data: dd,
dataType: 'json',
success: function(data) {

console.log(data);

if (track === "U1D1") { 
    window.location.href="qf-ds-2.html";    
}
if (track === "U1D2"){
    window.location.href="qf-ds-3.html";
}

 if (track === "U1D3"){
window.location.href="/thank-you.html";
}
if (track === "U2"){
window.location.href="/u3-collagen";
}
if (track === "U3"){
window.location.href="/u4-biotics";
}
if (track === "U4"){
window.location.href="/thank-you.html";
}



},
error: function(data){

console.log(data);

if (track === "U1D1") { 
    window.location.href="qf-ds-2.html";    
}
if (track === "U1D2"){
    window.location.href="qf-ds-3.html";
}
if (track === "U1D3"){
window.location.href="/thankyou-page-stripe";
}
 if (track === "U1D3"){
window.location.href="/thankyou-page-stripe";
}
if (track === "U2"){
window.location.href="/u3-collagen";
}
if (track === "U3"){
window.location.href="/u4-biotics";
}
if (track === "U4"){
window.location.href="/thankyou-page-stripe";
}
}
});





});//end skip



//dskip function
$('.dskip').click(function(){
var track = $(this).data('track');

var dd = {'action': 'uLoad','fpage': track,'tokenx': tokenx, 'user_action': 'skipped'};  

$.ajax({
type: 'POST',
url: 'https://pay.kaiserfitapp.com/stripetest/db.php',
crossDomain: true,
data: dd,
dataType: 'json',
success: function(data) {
console.log("success");
switch (track) {
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
  u4ia();
  break;
case "U4D1":
  window.location.href = "/thankyou-page-stripe";
      break;
default: 
  break;
  
  
        } //end switch


},
error: function(data){
console.log("fail");
switch (track) {
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
  u4ia();
  break;
case "U4D1":
  window.location.href = "/thankyou-page-stripe";
      break;
default: 
  break;
  
  
        } //end switch

      }
}); //end ajax





});
//end dskip

});
