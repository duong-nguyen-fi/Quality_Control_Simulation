
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
                    var url = "url(red.jpg)";
                    $(this).css("background-image", url);
                    var pos = $(this).position().left;
                    totalScore +=1;
                    console.log(pos);
                    console.log("------------------");
                    $("#score").text(totalScore+" ");
                });

            };

            this.speed = 1.5;
            this.Move = function()
            {   
                
                if (this.x < this.maxX)
                {
                    $(this.div).css("left", this.x+=this.speed);
                }
                else
                {
                
                    $(this.div).remove();
                }

            };
            
       }

      

       function update()
       {
            
            
            var washer;
            if ( frameCount ==0 ||gapBetween(160))
            {
                washer = new Washer();
                washers.push(washer);
                washer.CreateNew();
                
            }
            frameCount++;



            for (var i=0; i<washers.length;i++)
            {

                washers[i].Move();
                

            }

       }

      


       function gapBetween(n)
       {
            if ((frameCount / n) % 1 == 0) {return true;}
            return false;
       }
                $(document).ready

                
                


