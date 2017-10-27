//Coded by Rahul//
//Contact for more code to rhoskeri50@gmail.com//


window.onload=function(){
var r = document.getElementById("disp");
var s= document.getElementById("disp1");
var t= document.getElementById("disp2");
var u= document.getElementById("disp3");
var v= document.getElementById("disp4");
var w= document.getElementById("disp5");
var x= document.getElementById("disp6");
var y= document.getElementById("disp7");
var z= document.getElementById("disp8");
var a= document.getElementById("disp9");
    
var option={
    timeout:8000,
    enableHighAccuracy:true
};//options


    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition,error,option);
    } //ask permission
    
   

function showPosition(position) 
    {
        var lati=position.coords.latitude;
        var longi=position.coords.longitude;
        console.log(lati);
        console.log(longi);
        jQuery.ajax({
            type:"POST",
            url:"https://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+longi+"&units=metric"+"&APPID=7077abc65cdb45d9c496bc2e25598219",
            
            dataType:"jsonp",
            success:function(data){
            alert("Got the Weather!!!");
                r.innerHTML=data.name; //location
                a.innerHTML=data.sys.country;//country code
                s.innerHTML=data.weather[0].main;//weather main
                t.innerHTML=data.weather[0].description;//weather description
          
                u.innerHTML=data.main.temp+"&degC";//temperature
                v.innerHTML=data.main.temp_max+"&degC";//max temp
                w.innerHTML=data.main.temp_min+"&degC";//min temp
                
                x.innerHTML=data.main.pressure+" "+"hPa";//Pressure
                y.innerHTML=data.main.humidity+" "+"%";//humidity
                z.innerHTML=data.wind.speed+" "+"m/s";//wind speed
                
                
            },
            error:function(data){
            alert("Error");
        }
        });
    }//showPosition
    function userPosition()
    {
      var cty=prompt("Enter the city name");
      console.log(cty);
        if(cty==null){
            alert("Field is empty");
        }
    
        jQuery.ajax({
            type:"POST",
            url:"https://api.openweathermap.org/data/2.5/weather?q="+cty+"&units=metric"+"&APPID=7077abc65cdb45d9c496bc2e25598219",
            dataType:"jsonp",
            success:function(data){
            alert("Got the Weather!!!");
                r.innerHTML=cty; //location
                a.innerHTML=data.sys.country;//country code
                s.innerHTML=data.weather[0].main;//weather main
                t.innerHTML=data.weather[0].description;//weather description
          
                u.innerHTML=data.main.temp+"&degC";//temperature
                v.innerHTML=data.main.temp_max+"&degC";//max temp
                w.innerHTML=data.main.temp_min+"&degC";//min temp
                
                x.innerHTML=data.main.pressure+" "+"hPa";//Pressure
                y.innerHTML=data.main.humidity+" "+"%";//humidity
                z.innerHTML=data.wind.speed+" "+"m/s";//wind speed
                
                
            },
            error:function(){
            alert("Error");
        }
        });
    
 }//userPosition
    
    function error(err){
        switch(err.code)
                {
            case 1:
                userPosition();
                break;
            case 2:
                userPosition();
                break;
            case 3:
                userPosition();
                break;
            default:
                alert("Weather Man could not fetch your location");
                break;
                
                
            }//Switch
        }//fnc error

}//windows onload