
       function Washer()
       {
            //create div class item  into washerBox
            this.CreateNew = function()
            {
                this.div = document.createElement("div");
                this.div.setAttribute("class","item");
                $("#washerBox").append($(this.div));
                this.x = $(this.div).position().left;
                this.maxX=  $("#washerBox").width();
                $("#washerBox").resize(function(){
                    this.maxX = this.maxX=  $("#washerBox").width();
                });
                  
                this.punched = false; // check if the washer was punched or not

                $(this.div).click(function(){           
                    $(this).css("background", "blue");
                    var pos = $(this).position().left;
                    totalScore +=1;
                    
                    $("#score").text(totalScore+" ");
                });
            };

            speed = 1.5;
            this.Move = function()
            {   
                
                if (this.x < this.maxX)
                {
                    $(this.div).css("left", this.x+=speed);
                }
                else
                {
                    this.removed = true;
                    $(this.div).remove();
                }

            };
            
       }

       function moveAllConveyors()
       {
           for (var i=0; i<conveyors.length;i++)
            {
                
                conveyors[i].Move();
            }
       }

       function removeWasteConveyors()
       {
           for (var i=0; i<conveyors.length;i++)
           {
                if (conveyors[i].removed == true)
                        conveyors.splice(i,1);
               
           }
       }

       function moveAllWashers()
       {
            for (var i=0; i<washers.length;i++)
                {

                    if (washers[i].removed == true)
                        washers.splice(i,1);
                    washers[i].Move();
                    
                        
                }
       }
      

       function update()
       {
            
            
            
            
            var flag = false;
            if ( frameCount ==0 ||gapBetween(160))
            {
                var conveyor;
                conveyor = new Conveyor();
                conveyors.push(conveyor);
                conveyor.CreateNew();
                
            }
            frameCount++;

            moveAllConveyors();
            
            var pos = conveyors[0].x;
            if (pos >= $("#washerBox").width()-$(".convey").width())
                flag = true;

            if (flag==true)
            {        
                if ( gapBetween(160))
                {
                    var washer;
                    washer = new Washer();
                    washers.push(washer);
                    washer.CreateNew(); 
                }    
               
                moveAllWashers();
            }//if flag
            removeWasteConveyors();            

       }

      


       function gapBetween(n)
       {
            if ((frameCount / n) % 1 == 0) {return true;}
            return false;
       }
       

       function Conveyor()
       {
            //create div class item  into washerBox
            this.CreateNew = function()
            {
                this.div = document.createElement("div");
                this.div.setAttribute("class","convey");
                $("#washerBox").append($(this.div));
                this.x = $(this.div).position().left;
                this.maxX=  $("#washerBox").width();
                $("#washerBox").resize(function(){
                    this.maxX = this.maxX=  $("#washerBox").width();
                });
            };

            speed = 1.5;
            this.Move = function()
            {   
                
                if (this.x < this.maxX)
                {
                    $(this.div).css("left", this.x+=speed);
                }
                else
                {
                    this.removed = true;
                    $(this.div).remove();
                }

            };
            
       }

       function punch () {
            
            $('.puncher').animate({top: 50}, {
                duration: 200,
                complete: function() {
                    $('.puncher').animate({top: -10}, {
                        duration: 200
                    });
                }
            });
        }

       $(document).keydown(function(e) {
                    if (e.keyCode == 32) {
                        punch();
                        var pos = $('.puncher').position().left;
                        for (var i = 0; i<washers.length;i++)
                        {
                          if ((washers[i].x >=pos-$(".item").width()/2 && washers[i].x <=pos+$(".item").width()/2) && (washers[i].punched == false))
                          {
                            intercept(washers[i]);
                          }
                        }
                    }
                });

       function intercept(convey)
       {
                    $(convey.div).css("background", "blue");
                    convey.punched = true;
                    var pos1 = $(convey.div).position().left;
                    var pos2 = $(".puncher").position().left;
                    totalScore +=1;
                    $("#score").text(totalScore+" ");
                    //console.log(Math.abs(pos1-pos2));
                    addData(Math.abs(pos1-pos2));
       }

       function addData(posOffset) 
       {   
       /*
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("Ajax connected");
                    }
                };
                xmlhttp.open("POST", "sendData.php?", true);
                xmlhttp.send();
        */    console.log("Offset: " + posOffset);
              $.ajax({
              type: 'POST',
              data: { 
                      offset: posOffset,
                      id: player_id
                  },
              url: 'sendData.php',
              async: false,

              success: function(result){
                  // call the function that handles the response/results
                  drawVisualization();
                  var player_id = result;
                  console.log("id is " + player_id);
              },

              error: function(){
                  window.alert("Wrong query 'queryDB.php': " + query);
              }
            });
        }//

        
          
          

                
                


