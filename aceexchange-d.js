var ttx_pub_code="1206269501";
if("undefined"==typeof ttx_area_info||"null"==typeof ttx_area_info)var ttx_area_info=[];
ttx_area_info.push({area_code:"1474516756",pag:"PAG"});
var ttx_page_url="";



var ttx_total_cookie_name="",ttx_total_result="";
(function(){ttx_total_cookie_name="ttx_t_r";""==ttx_page_url&&(ttx_page_url=document.URL);var b=document.location.protocol+"//cdn-exchange.toastoven.net/cdn/adx/js/rta_all.js";
var a=document.createElement("script");a.type="text/javascript";a.src=b;a.async=!0;
0<document.getElementsByTagName("head").length?document.getElementsByTagName("head")[0].appendChild(a):0<document.getElementsByTagName("body").length&&document.getElementsByTagName("body")[0].appendChild(a)})();var ttx_cb_func=function(){};

			

(function(){
var ttx_pub_code="1206269501";
var ttx_ad_area_code="1474516756";
var ttx_ad_area_pag="PAG";
var ttx_page_url="",ttx_direct_url="";




var ttx_total_cookie_name="ttx_t_r";
var e=function(a){a+="=";for(var c=document.cookie.split(";"),d=0;d<c.length;d++){for(var b=c[d];" "==b.charAt(0);)b=b.substring(1);if(0==b.indexOf(a))return b.substring(a.length,b.length)}return""},f="";try{f=JSON.stringify(JSON.parse(e(ttx_total_cookie_name))[ttx_ad_area_code])}catch(g){}var c="";""==ttx_page_url&&(ttx_page_url=document.URL);""==c&&document.referrer&&(c=document.referrer);var a="//adx-exchange.toast.com/a_request";
a+="?pub_code="+ttx_pub_code+"&area_code="+ttx_ad_area_code+"&pag="+encodeURIComponent(ttx_ad_area_pag);a+="&site_url="+encodeURIComponent("")+"&page_url="+encodeURIComponent(ttx_page_url)+"&refer="+encodeURIComponent(c);a+="&result="+encodeURIComponent(f)+"&bnrs_e="+encodeURIComponent(e("ttx_bnrs_e"))+"&du="+encodeURIComponent(ttx_direct_url);a+="&rndm="+Math.random()+"&cst=";

var fileref=document.createElement('script');
fileref.setAttribute("src", a);
//console.log(fileref);
//console.log(a);
//document.body.appendChild(fileref);
document.getElementById("footer-inner").appendChild(fileref);
//document.getElementById("footer").innerHTML=""+fileref+"";
//write("<script type='text/javascript' src='"+a+"' ><\/script>")

})();
