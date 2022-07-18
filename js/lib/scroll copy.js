


window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
            var n = document.getElementsByClassName("2pass1");
          
            for(i = 0;i < n.length; ++i) {
                  n[i].classList.remove("dismiss"); 
                n[i].classList.add("mystyle"); 
               
                
            }
            return n;
           
        } else {
            var n = document.getElementsByClassName("2pass1");
            for(i = 0;i < n.length; ++i) {
                  n[i].classList.add("dismiss"); 
                n[i].classList.remove("mystyle"); 
            }
            return n;
      }
});





window.addEventListener("scroll", () => {
            if (window.scrollY > 401) {
                  var x = document.getElementsByClassName("skillBar4Hide");

                  for(i = 0;i < x.length; ++i) {
                        x[i].classList.add("stop4")
                        x[i].classList.add("levelBar")
                        ; 
                                      
                  }
                  return x;
                  
                  } else {
                        var x = document.getElementsByClassName("skillBar4Hide");
                  
                        for(i = 0;i < x.length; ++i) {
                       
                              x[i].classList.remove("stop4");  
                              
                        }
                  return x;     
                  }

});

window.addEventListener("scroll", () => {
      if (window.scrollY > 401) {
            var x = document.getElementsByClassName("skillBar3Hide");

            for(i = 0;i < x.length; ++i) {
                  x[i].classList.add("stop3")
                  x[i].classList.add("levelBar")
                  ; 
                                
            }
            return x;
            
            } else {
                  var x = document.getElementsByClassName("skillBar3Hide");
            
                  for(i = 0;i < x.length; ++i) {
                 
                        x[i].classList.remove("stop3");  
                        
                  }
            return x;     
            }

});


window.addEventListener("scroll", () => {
      if (window.scrollY > 401) {
            var x = document.getElementsByClassName("skillBar5Hide");

            for(i = 0;i < x.length; ++i) {
                  x[i].classList.add("stop5")
                  x[i].classList.add("levelBar")
                  ; 
                                
            }
            return x;
            
            } else {
                  var x = document.getElementsByClassName("skillBar5Hide");
            
                  for(i = 0;i < x.length; ++i) {
                 
                        x[i].classList.remove("stop5");  
                        
                  }
            return x;     
            }

});


/*       window.addEventListener("scroll", () => {
            if (window.scrollY < 390) {
                  var x = document.getElementsByClassName("bottomBar");
                  
                  for(i = 0;i < x.length; ++i) {
                 
                        x[i].classList.add("animSkillS");    
                        
                  }
                  return x;
                  
                  } 
      });

 */




             /* var element = document.getElementById("movingDiv");
              
              element.classList.remove("dismiss");
             element.classList.add("mystyle");
             element.style.opacity="1";
             element.style.marginLeft="0px";
             var element = document.getElementById("movingDiv2");
             element.classList.remove("dismiss");
             element.classList.add("mystyle");
             element.style.opacity="1";
             element.style.marginLeft="0px";
             var element = document.getElementById("movingDiv3");
             element.classList.remove("dismiss");
             element.classList.add("mystyle");
             element.style.opacity="1";
             element.style.marginLeft="0px"; 
             var element = document.getElementsByClassList("er");
             element.classList.remove("dismiss");
             element.classList.add("mystyle");
             element.style.opacity="1";
             element.style.marginLeft="0px";


       
            var element = document.getElementById("movingDiv");
            element.classList.add("dismiss");
           element.classList.remove("mystyle");
           element.style.opacity="0";
           element.style.marginLeft="-500px";
           var element = document.getElementById("movingDiv2");
           element.classList.add("dismiss");
          element.classList.remove("mystyle");
          element.style.opacity="0";
          element.style.marginLeft="-500px";
          var element = document.getElementById("movingDiv3");
          element.classList.add("dismiss");
         element.classList.remove("mystyle");
         element.style.opacity="0";
         element.style.marginLeft="-500px"; 
         var element = document.getElementsByClassList("er");
         element.classList.add("dismiss");
        element.classList.remove("mystyle");
        element.style.opacity="0";
        element.style.marginLeft="-500px";
    }
     */
    


/*     
    

    function dot() {

      e = document.getElementById("message");

      e.classList.add("com-box");
      e.getElementById("message1").style.display = "block";
      document.getElementById("message2").style.display = "block";
     e.getElementById("dot1").style.display = "none";
      document.getElementById("dot2").style.display = "none";
};  */
 
function dotA() {

      ea = document.getElementById("message1");

     ea.classList.add("com-box");
      document.getElementById("message1").style.display = "block";
    document.getElementById("dot1").style.display = "none";


      };

function dot2() {

            e2 = document.getElementById("message2");
      
             e2.classList.add("com-box");
            document.getElementById("message2").style.display = "block";
          document.getElementById("dot2").style.display = "none";
      
      
            };

            function dot22() {

                  e2 = document.getElementById("page2Message2");
            
                   e2.classList.add("com-box");
                  document.getElementById("page2Message2").style.display = "block";
                document.getElementById("dot2").style.display = "none";
            
            
                  };
      


function dot3() {

      e3 = document.getElementById("message3");

     e3.classList.add("com-box");
      document.getElementById("message3").style.display = "block";
      document.getElementById("dot3").style.display = "none";


      };

/*       function dot1close() {
            e = document.getElementById("message")
            e.classList.remove("com-box");
            document.getElementById("dot").style.display = "inline";
            document.getElementById("message").style.display = "none";

            f = document.getElementById("circle")
            f.classList.add("line-off");
            f.classList.remove("circle");
      };
 */

      function dot1close1() {
            eaa = document.getElementById("message1");
            eaa.classList.remove("com-box");
            document.getElementById("dot1").style.display = "inline";
            eaa.style.display = "none";

            faa = document.getElementById("circle1");
         
            faa.classList.remove("circle");
      };

      function dot1close2() {
            ebb = document.getElementById("message2");
             ebb.classList.remove("com-box");
            document.getElementById("dot2").style.display = "inline";
            ebb.style.display = "none";

            fbb = document.getElementById("circle2");
        
            fbb.classList.remove("circle");
                  
      };

      function page1close2() {
            ebb = document.getElementById("message2");
             ebb.classList.remove("com-box");
            document.getElementById("dot2").style.display = "inline";
            ebb.style.display = "none";

            fbb = document.getElementById("page1circle2");
        
            fbb.classList.remove("circle");
                  
      };

      function page2close2() {
            ebb = document.getElementById("page2Message2");
             ebb.classList.remove("com-box");
            document.getElementById("dot2").style.display = "inline";
            ebb.style.display = "none";

            fbb = document.getElementById("circle2");
        
            fbb.classList.remove("circle");
                  
      };

      function dot1close3() {
            ecc = document.getElementById("message3");
            ecc.classList.remove("com-box");
            document.getElementById("dot3").style.display = "inline";
            ecc.style.display = "none";

            fcc = document.getElementById("circle3");
       
            fcc.classList.remove("circle");
                  
      };

      

/* function play() {

      f = document.getElementById("myPlayer").src = "https://player.vimeo.com/video/686458155?h=78a6d434bb?&autoplay=1";
      f.getElementById("myPlayer").load(); 
     
      f.currentTime = 0;
     

}; */

function videoClose() {

      vid = document.getElementById("myPlayer").src = "https://player.vimeo.com/video/686458155?h=78a6d434bb";
      vid.getElementById("myPlayer").load(); 
     
      f.currentTime = 0;
     

};





window.addEventListener("scroll", () => {
             if (window.scrollY > 1400) {
            
                  e = document.getElementById("profileImage");
                  fg = document.getElementById("textProfileShift");

                  e.classList.add("leftShift");
                  e.classList.add("profileImage2");
                  
                  fg.classList.remove("profileText");
                  fg.classList.add("profileTextShift");

               
            
              

             } else {        

                  fg = document.getElementById("textProfileShift");

                  e.classList.remove("leftShift");
                  e.classList.remove("profileImage2");

                  fg.classList.add("profileText");
                  fg.classList.remove("profileTextShift");
                
                  document.getElementsByClassName("profileText").style.display = "none";

             }

      });
      
 window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                  var n = document.getElementById("mainNav");

                  n.classList.add("navShade");

            } else {
                  var n = document.getElementById("mainNav");
                  n.classList.remove("navShade");
            }


      });
      