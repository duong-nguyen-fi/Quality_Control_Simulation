google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawVisualization);

var rows = [];
//rows.push('Lot number','Lower Limit','Upper Limit','Quality');
function drawVisualization() {
  // Some raw data (not necessarily accurate)
  
				//using jquery and ajax to read data echo from data.php and pass it to "jsonData"
	        var jsonData = $.ajax({  
	            url: "getData.php",
	            type: 'POST',
	             data: { 
                      //send POST parameter 
                      id: player_id
                  },
	        	dataType:"json",
	        	async: false,
	        	error: function(responseText)
	        	{
	        		console.log("Chart error");
	        	},
	            success: function(jsonData)
	                {
	                	var options = {
    //seriesType: "line",
						    pointSize: 6,
						    //curveType: 'function',
						    vAxis: {title: 'Quality of product', titleTextStyle: {color: '#FF0000'}},
						    hAxis: {title: 'Lot number', titleTextStyle: {color: '#FF0000'}},
						    series: {1: {type: "steppedArea", color: '#FF0000', visibleInLegend: false, areaOpacity: 0, enableInteractivity: false, lineDashStyle: [4,1]},
						    		 0: {type: "steppedArea", color: '#FF0000', visibleInLegend: false, areaOpacity: 0, enableInteractivity: false, lineDashStyle: [4,1]}
						    }
						};

						var data = new google.visualization.DataTable(jsonData);
						
						data.addColumn("string","Lot number");
						data.addColumn("number","Lower Limit"); // should be constant
						data.addColumn("number","Upper Limit"); // should be constant
						data.addColumn("number","Quality");
						
						
						for (var i=0;i<jsonData.length;i++)
						{
							var row = new Array();
							for (var j =0;j<jsonData[i].length;j++)
							{
							row.push(jsonData[i][j]);
							}
							data.addRow(row);
							

						}
						
						//alert(jsonData[0].length);
						
						var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  						chart.draw(data, options);

  					}
  				}).responseText;

  
}