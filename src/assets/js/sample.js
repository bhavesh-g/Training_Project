
$("#buttontrainsearch").click(function()
{
    
    $("#buttontrainsearch").html("Loading...");
    document.getElementById('respara').innerHTML= "";
    var x=document.getElementById('input').value;
    var url="https://api.railwayapi.com/v2/suggest-train/train/"+x+"/apikey/YOUR_API_KEY_HERE/";
    $.get(url, function(data, status){
    $("#buttontrainsearch").html("Go!");
            
    if((data.trains).length==0)
        {
            $("#buttontrainsearch").html("Go!");
            document.getElementById('respara').innerHTML= "<span class=' lead'>No result found, Try another search.</span>";
        }
    data.trains.forEach(function(k)
        {
     
             var xx=("<p>"+"<span style='padding-left:5px;padding-right:5px;border-radius:20px;background-color:#007bff;color:white;' class='lead'>"+k.number+"</span> "+"<span class='lead' >"+" <span style='color:white;'>___</span>"+k.name+"</span></p><hr>");
             document.getElementById('respara').innerHTML= (document.getElementById('respara').innerHTML)+xx;
        });});
    $("#resdiv").css({"visibility":"visible"});
       
});
//-------------------------------------------------------------------------------------------------------------------------------------

$("#buttonstncode").click(function(){

    $("#buttonstncode").html("Loading...");
    document.getElementById('resparastncode').innerHTML= "";
  
    
    var x=document.getElementById('inputstncode').value;
    
    var url="https://api.railwayapi.com/v2/name-to-code/station/"+x+"/apikey/YOUR_API_KEY_HERE/";

        
    $.get(url, function(data, status){
        $("#buttonstncode").html("Go!");
        
        if((data.stations).length==0)
        {
            $("#buttonstncode").html("Go!");
            document.getElementById('resparastncode').innerHTML= "<span class=' lead'>No result found, Try another search.</span>";
        }
    data.stations.forEach(function(k) {
     
     var xx=("<p>"+"<span style='padding-left:5px;padding-right:5px;border-radius:20px;background-color:#6ec30c;color:white;' class='lead'>"+k.code+"</span> "+"<span class='lead' >"+" <span style='color:white;'>___</span>"+k.name+"</span></p><hr>");
     document.getElementById('resparastncode').innerHTML= (document.getElementById('resparastncode').innerHTML)+xx;
    });
        });
        $("#resdivstncode").css({"visibility":"visible"});
       
    });
//-------------------------------------------------------------------------------------------------------------------------------------

$("#buttonpnr").click(function(){
    
           
      
          
            
                var x=document.getElementById('inputpnr').value;
                if(x!=''){
          
                    $("#buttonpnr").html("Loading...");
                var url="https://api.railwayapi.com/v2/pnr-status/pnr/"+x+"/apikey/YOUR_API_KEY_HERE/";
           
                    
                $.get(url, function(data, status){
                if(data.response_code=='200'){
               
                $("#boardingstation").html(data.boarding_point.name);
                $("#deststation").html(data.reservation_upto.name);
                $("#doj").html(data.doj);
                $("#trainno").html(data.train.number);
                $("#trainname").html(data.train.name);
                $("#noofpassengers").html(data.total_passengers);

                data.passengers.forEach(function(k){
                   
                    $("#passstatus").append("<li> Current status "+k.current_status+"<br>Booking status "+k.booking_status+"</li>");
                    $("#buttonpnr").html("Go!");
                });

            }
            else{
                $("table").css("visibility","hidden");
                $("#makeitsticky").after("<p class='lead'>No results found.Please recheck the PNR...</p>");
                $("#buttonpnr").html("Loading...");
            } 
                });}
                else{
                    alert("Invalid input.");
                }
               
               
            });
//-------------------------------------------------------------------------------------------------------------------------------------


         /*   function autotodaydateinlivetrain() {
alert("d");
                $(document).ready(function(){
                    var d= new Date();
                    if(Number(d.getMonth())<9){var month;
                        month="0"+d.getMonth();
                  }
                 
                 // $('#inputdatelivetrain').val(d.getDate()+"-"+month+"-"+d.getFullYear());
                 alert(d.getDate()+"-"+month+"-"+d.getFullYear());
                  return (d.getDate()+"-"+month+"-"+d.getFullYear());
                });
                
            }*/
//-------------------------------------------------------------------------------------------------------------------------------------

                $("#buttonlivetrain").click(function()
                {

                    var x=document.getElementById('inputlivetrain').value;
                    var y=$("#inputdatelivetrain").val();
                
                  
                    if(x!=''&& y!=null && x.length==5)
                        {
                        
                      
                      
                     
                            var datex = y.split("-");
                            datex=datex[2]+"-"+datex[1]+"-"+datex[0];
                            $("#buttonlivetrain").html("Loading...");
                            var url="https://api.railwayapi.com/v2/live/train/"+x+"/date/"+String(datex)+"/apikey/YOUR_API_KEY_HERE/";
                           
                            $("#resdivlivetrain").css("borderRadius","0px");
                            $.get(url, function(data, status)
                                    {
                                    
                                        if(data.response_code==200)
                                        {
                                            $("#resdivlivetrain").css("borderRadius","45px");
                                            $("#resparatwolivetrain").html(data.position);
                                            $("#resparalivetrain").html("<span class='badge-primary badge-pill'>Name: </span>"+data.train.name);
                                            $("#resparathreelivetrain").html("<span class='badge-primary badge-pill'>Current Station</span>"+data.current_station.name);
                                            $("#buttonlivetrain").html("Go!");
                                            
                                        }
                                
                                        else
                                        {
                                            $("#resdivlivetrain").css("borderRadius","45px");
                                            $("#resparatwolivetrain").html("No results found.");
                                            $("#resparalivetrain").html("Please recheck the details..");
                                            $("#resparathreelivetrain").html("");
                                            
                                            $("#buttonlivetrain").html("Go!");
                                            
                                        } 
                                    }
                                );
                        }

                        else
                        {
                            alert("Invalid input.");
                        }
                   
                   
                });

//-------------------------------------------------------------------------------------------------------------------------------------              



        function getLocation() {
           
           
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }
      
        function showPosition(position) {
           $("#jumbo").css("background-color", "#007bff");
           $("#mylocbtn").remove();
           $("#tobedropped").remove();
           $("#demo").html("Latitude: <span class=' badge badge-primary badge-pill'>" +  position.coords.latitude + 
            "</span><br>Longitude: <span class='badge badge-primary badge-pill'>" + position.coords.longitude+"</span><br>");
            
           
        }
//-------------------------------------------------------------------------------------------------------------------------------------              

      $("#logindashboardnumber").focus(function(){
        
        $("#infoparaalert").remove();
         
          $("#logindashboardnumber").after("<p id='infoparaalert' style='padding:20px;margin-top:25px;' class='alert-success'><br>This feature is under development.<br>We will make it available in next update!!<br>You can still submit and we will let you know when its Live.</p>");
      });
//-------------------------------------------------------------------------------------------------------------------------------------              


        $(" #loginform input").focus(function(){
           
           /* $('#dynamicdiv').css("borderWidth","2px");
            $('#dynamicdiv').css("borderStyle","solid");
            $('#dynamicdiv').css("borderColor","red");*/
            $('#fixdiva').css("opacity","0.4");
            $('#fixdivb').css("opacity","0.4");
            $('#fixdivc').css("opacity","0.4");
            $('#loginform').css("backgroundColor","#014173");
            $('#loginform').css("color","white");
         
        });

//-------------------------------------------------------------------------------------------------------------------------------------              
        
       function loginformsubmitbutton(){
           
            /* $('#dynamicdiv').css("borderWidth","2px");
             $('#dynamicdiv').css("borderStyle","solid");
             $('#dynamicdiv').css("borderColor","red");*/

             $('#fixdiva').css("opacity","1");
             $('#fixdivb').css("opacity","1");
             $('#fixdivc').css("opacity","1");
            
          
         };

//-------------------------------------------------------------------------------------------------------------------------------------              



        $(" #registerform input").focus(function(){
           
            /* $('#dynamicdiv').css("borderWidth","2px");
             $('#dynamicdiv').css("borderStyle","solid");
             $('#dynamicdiv').css("borderColor","red");*/
             $('#fixdiva').css("opacity","0.4");
             $('#fixdivb').css("opacity","0.4");
             $('#fixdivc').css("opacity","0.4");
             $('#registerform').css("backgroundColor","#014173");
             $('#registerform').css("color","white");
             
            
            
         });
//-------------------------------------------------------------------------------------------------------------------------------------              

        $(".closebutton").click(function(){
            $('#fixdiva').css("opacity","1");
            $('#fixdivb').css("opacity","1");
            $('#fixdivc').css("opacity","1");
            $('#registerform').css("backgroundColor","white");
            $('#registerform').css("color","black");
            $('#loginform').css("backgroundColor","white");
            $('#loginform').css("color","black");

        });
//-------------------------------------------------------------------------------------------------------------------------------------              



        $("#servicefocusbutton").focus(function(){
            $("#servicefocusbutton").remove();
        });

       
        $("#toptextcontainertext h1").click(function(){
            $("#toptextcontainertext h1").after("<audio controls autoplay hidden><source src='assets/audio/train_horn.mp3' type='audio/mpeg'></audio>");
           
        });

//-------------------------------------------------------------------------------------------------------------------------------------              
 
       function x(){ $("#separator").animate({
            
            width: '100%'
        },3000);

        $("#separator").animate({
            
            width: '0%'
  
        },2000);
    }
      
        window.setInterval(x, 1000);
 //-------------------------------------------------------------------------------------------------------------------------------------              
      
        
    $("#buttonlivetrainknowmore").click(function(){
        $("#buttonlivetrainknowmore").html("Loading!!");
        var q=document.getElementById('inputlivetrainknowmore').value;
        if(q.length!=5){alert("Invalid Train number.\nMust be of 5 digits only.");
        $("#buttonlivetrainknowmore").html("Go!");
    }
    else{
       
        var url= "https://api.railwayapi.com/v2/route/train/"+q+"/apikey/YOUR_API_KEY_HERE/";
        
        $.get(url, function(data, status)
        
        {
            if(data.response_code==200)
            {
                $("#response").remove();
               $(".stationname").remove();
               $(".scharr").remove();
               $(".schdep").remove();
                $("#buttonlivetrainknowmore").html("Go!");
               
                $("#tname").css("visibility","visible");
                $("#runson").css("visibility","visible");
                $("#knowmoretable").css("visibility","visible");
                $("#tnamelabel").css("visibility","visible");
                $("#runsonlabel").css("visibility","visible");
                $("#tname").html(data.train.name);

                data.train.days.forEach(function(i)
                {
                    if(i.runs==='Y')
                    {
                        $("#runson").append("<span class='badge badge-primary'>"+i.code+"</span> ");
                    }
                });
            
                
                data.route.forEach(function(k)
                {
                    var sname=k.station.name;
                    var sarr=k.scharr;
                    var sdep=k.schdep;
                    $("#knowmoretable").append("<tr><td class='stationname'>"+sname+"</td><td class='scharr' style='color:yellowgreen;'>"+sarr+"</td><td style='color:orange;' class='schdep'>"+sdep+"</td></tr>");

                });
            }
            else{
          
                $("#buttonlivetrainknowmore").html("Go!");
                $("#tname").css("visibility","hidden");
                $("#runson").css("visibility","hidden");
                $("#knowmoretable").css("visibility","hidden");
                $("#tnamelabel").css("visibility","hidden");
                $("#runsonlabel").css("visibility","hidden");
                $("#tnamelabel").before("<p id='response' class='alert-danger' style='visibility: hidden; margin-top:15px; padding: 4rem 2rem;font-size:x-large;'></p>")
                $("#response").css("visibility","visible");
                $("#response").html("Train number incorrect or doesn't exist. <br>Try Again.<br> You can use our Train Search Service to find Train Number.")
            }
        });
    }
    
    });
    //-------------------------------------------------------------------------------------------------------------------------------------              
