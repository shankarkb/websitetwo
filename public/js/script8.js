var opn=0;
            
            //alert('welcome');
            /*

            if(jQuery(window).width()<=991)
            {
                if(opn==1){
                  $(".menuitem").css("display","block");
                  
                  $(".menuitemsm").css("display","none");
                  $("#navbar").css("height","280px");
                  $(".menuitemsmx").css("display","block");
                  //alert(jQuery(window).width());
                  }else{
                  //$(".menuitem").css("display","none");
                  $(".menuitemsm").css("display","block");
                  //$(".menuitemsmx").css("display","none");
                  //alert(jQuery(window).width());
                  }
            }else{
                $(".menuitemsm").css("display","none");
            }
            */
            $(document).ready(function(){
                
                $(".menuitemsm").click(function(){
                // 
                //$(this).css("display","block");
                
                $(".menuitem").css("display","block");
                $(".menuitemsm").css("display","none");
                $(".menuitemsmx").css("display","block");
                $("#navbar").css("height","280px");
                opn=1;
                //alert(jQuery(window).width());
                //alert('welcome');
                });

                $(".menuitemsmx").click(function(){
                // 
                $(this).css("display","none");
                
                $(".menuitem").css("display","none");
                $(".menuitemsm").css("display","block");
                $(".menuitemsmx").css("display","none");
                $("#navbar").css("height","100px");
                opn=0;
                //alert(jQuery(window).width());
                //alert('welcome');
                });

              
            });
            var screenwidth=jQuery(window).width();
            
            
              $( window ).resize(function() {
                  /*
                 // alert('welcome');
               // alert(jQuery(window).width());
               screenwidth=jQuery(window).width();
                if(jQuery(window).width()>=992)
              {
                  //alert("900px");
                  $("#navbar").css("height","100px");
                  $(".menuitem").css("display","inline-block");
                  $(".menuitemsm").css("display","none");
                  $(".menuitemsmx").css("display","none");
                  
              }
             */
              if(jQuery(window).width()<768)
              {
                  //alert("900px");
                  
                  if(opn==1){
                     // alert("inline");
                    $(".menuitem").css("display","block");
                    $(".menuitemsm").css("display","none");
                    $("#navbar").css("height","280px");
                    $(".menuitemsmx").css("display","block");
                  }else{
                      //alert('meniiii');
                    $(".menuitem").css("display","none");
                    $(".menuitemsm").css("display","inline-block");
                    $("#navbar").css("height","100px");
                    $(".menuitemsmx").css("display","none");
                 }
                  //alert(jQuery(window).width());
              }else{
                  //alert('pexil');
                  $(".menuitem").css("display","inline-block");
                  $(".menuitemsm").css("display","none");
                  $(".menuitemsmx").css("display","none");
                  $("#navbar").css("height","100px");
                  //alert(jQuery(window).width());
              }
              

              });

            
        
            