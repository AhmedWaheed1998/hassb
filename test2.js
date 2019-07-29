    $(document).ready(function(){   
      
        $("#c1").slideDown(1000);
        
        $("button").click(function(){
            
            $("#c1").fadeOut(1000,function(){
                
                $("#c2").slideDown(1000);
                
            });
            
        });
        
    });