// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.getElementById("submit")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
              var message =  document.getElementById("studentname").value;
                
              if (message === res.st1){
                var question1 = res.q1;
                document.getElementById("content")
                .innerHTML = "<h2>"+ question1+"</h2>"

              }
              else if(message === res.st2){
                var question2 = res.q2;
                document.getElementById("content")
                .innerHTML = "<h2>"+question2+"</h2>"
               
              }
              else{
                document.getElementById("content")
                .innerHTML =  "<h2>"+"Student not Found"+"</h2>"
              }
            });
      });
  }
);
