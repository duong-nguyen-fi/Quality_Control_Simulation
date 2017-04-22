
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
                $(this.div).click(function(){
                    
                    $(this).css("background", "blue");
                    var pos = $(this).position().left;
                    totalScore +=1;
                    console.log(pos);
                    console.log("------------------");
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
                
                    $(this.div).remove();
                }

            };
            
       }

      

       function update()
       {
            
            
            
            var conveyor;
            var flag = false;
            if ( frameCount ==0 ||gapBetween(160))
            {
                conveyor = new Conveyor();
                conveyors.push(conveyor);
                conveyor.CreateNew();
                
            }
            frameCount++;

            for (var i=0; i<conveyors.length;i++)
            {
                conveyors[i].Move();
            }
            
            var pos = conveyors[1].x;
            if (pos >= conveyors[1].maxX-50)
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
               
                for (var i=0; i<washers.length;i++)
                {

                    washers[i].Move();
                }
            }            

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
                
                    $(this.div).remove();
                }

            };
            
       }

                
                


