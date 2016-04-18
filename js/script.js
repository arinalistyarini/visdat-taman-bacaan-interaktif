$(function () {
	Site.init();
});


/* ------ ALL FUNCTIONS GO HERE ------ */
var Site = {
	init: function () {
		Site.createHorizontalChart(); // create horizontal chart @ div#horizontal-chart snippet.html
		Site.createStackedChart(); // create stacked bar chart @ div#bar-chart snippet.html
		Site.createSimpleBarChart(); // create simple bar chart @ div#simple-bar-chart snippet.html
	},

	createHorizontalChart: function() {
		// dataset
		var rawData = [
		    [51725, 6], //Komik kecil
		    [19682, 5],  //Novel
		    [4040, 4],   //Komik Besar
		    [1743, 3],    //Majalah
		    [1657, 2],  //Bacaan Populer
		    [1099, 1],      //Komik Lain
		    [696, 0]    //Lain-lain
		];	 
		var dataSet = [
		    { label: "Precious Metal Price", data: rawData, color: "#89cf89" }
		];
		var ticks = [
		    [0, "Lain-lain"], [1, "Komik Lain"], [2, "Bacaan Populer"], [3, "Majalah"], [4, "Komik Besar"], [5, "Novel"], [6, "Komik Kecil"]
		];

		//options
		var options = {
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                align: "center",
                barWidth: 0.39,
                horizontal: true,
                fillColor: "#89cf89"
            },
            xaxis: {
                axisLabelUseCanvas: true,
                axisLabelPadding: 10,
                max: 55000,
                tickColor: "#ccc",
                color: "#444",
                tickSize: 5000
            },
            yaxis: {
                axisLabelUseCanvas: true,
                axisLabelPadding: 3,
                tickLength: 0,
                ticks: ticks,
                color: "#444"
            },
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: 0
            }
        };

        $.plot($("#horizontal-chart"), dataSet, options);


        var previousPoint = null,
    		previousLabel = null;
        function showTooltip(x, y, color, contents) {
		    $('<div id="tooltip">' + contents + '</div>').css({
		        position: 'absolute',
		        display: 'none',
		        top: y - 40,
		        left: x - 120,
		        border: '2px solid ' + color,
		        padding: '9px',
		            'font-size': '9px',
		            'border-radius': '5px',
		            'background-color': '#fff',
		            'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
		            'text-align': 'center',
		        opacity: 0.9
		    }).appendTo("body").fadeIn(200);
		}


		$("#horizontal-chart").on("plothover", function (event, pos, item) {
		    if (item) {
		        if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
		            previousPoint = item.dataIndex;
		            previousLabel = item.series.label;
		            $("#tooltip").remove();

		            var x = item.datapoint[0];
		            var y = item.datapoint[1];

		            var color = item.series.color;             

		            showTooltip(item.pageX,
		            item.pageY,
		            color,
		                "<strong>" + item.series.yaxis.ticks[y].label + "</strong><br>" + x + " buah");
		        }
		    } else {
		        $("#tooltip").remove();
		        previousPoint = null;
		    }
		});
	},

	createStackedChart: function() {
		var tepatWaktu = [
			[1420045200000, 9202], 
			[1422723600000, 8130],  
			[1425142800000, 7558], 
			[1427821200000, 7722], 
			[1430413200000, 7635],
			[1433091600000, 9134],
			[1435683600000, 6011],
			[1438362000000, 7953],
			[1441040400000, 6972],
			[1443632400000, 7678],
			[1446310800000, 5163],
			[1448902800000, 7318]
		];
	    var terlambat = [
	    	[1420045200000, 4710], 
	    	[1422723600000, 3497], 
	    	[1425142800000, 3913], 
	    	[1427821200000, 3634], 
	    	[1430413200000, 3629],
	    	[1433091600000, 4025],
			[1435683600000, 2420],
			[1438362000000, 3875],
			[1441040400000, 2995],
			[1443632400000, 3112],
			[1446310800000, 3166],
			[1448902800000, 3756]
	    	];
	    //var bar_customised_3 = [[1388534400000, 80], [1391212800000, 40], [1393632000000, 47], [1396310400000, 22], [1398902400000, 24]];
	 
	    var data = [
	        { label: "Tepat waktu", data: tepatWaktu },
	        { label: "Terlambat", data: terlambat },
	        //{ label: "Series 3", data: bar_customised_3 }
	    ];
	 
	    $.plot($("#bar-chart"), data, {
	        series: {
	            bars: {
	                show: true,
	                barWidth: 14*23*80*80*350,
	                lineWidth: 0,
	                order: 1,
	                fillColor: {
	                    colors: [{
	                        opacity: 1
	                    }, {
	                        opacity: 1
	                    }]
	                }
	            }
	        },
	        xaxis: {
	            mode: "time",
	            min: 1418808400000,
	            max: 1450112400000,
	            tickLength: 0,
	            tickSize: [1, "month"],
	            axisLabelUseCanvas: true,
	            axisLabelPadding: 1,
	        },
	        yaxis: {
	            axisLabel: 'Value',
	            axisLabelUseCanvas: true,
	        },
	        grid: {
	            hoverable: true,
	            borderWidth: 0
	        },
	        legend: {
	            backgroundColor: "#EEE",
	            labelBoxBorderColor: "none"
	        },
	        colors: ["#89cf89", "#df5842"]
	    });
	 
	    function show_tooltip(x, y, contents) {
	        $('<div id="bar_tooltip">' + contents + '</div>').css({
	            top: y - 45,
	            left: x - 28,
	            position: 'absolute',
		        display: 'none',
		        border: '2px solid #444',
		        padding: '9px',
		            'font-size': '9px',
		            'border-radius': '5px',
		            'background-color': '#fff',
		            'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
		            'text-align': 'center',
		        opacity: 0.9
	        }).appendTo("body").fadeIn(200);
	    }
	 
	    function get_month_name(month_timestamp) {
	        var month_date = new Date(month_timestamp);
	        var month_numeric = month_date.getMonth();
	        var month_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	        var month_string = month_array[month_numeric];
	 
	        return month_string;
	    }
	 
	    var previous_point = null;
	    var previous_label = null;
	     
	    $("#bar-chart").on("plothover", function (event, pos, item) {
	        if (item) {
	            if ((previous_point != item.dataIndex) || (previous_label != item.series.label)) {
	                previous_point = item.dataIndex;
	                previous_label = item.series.label;
	  
	                $("#bar_tooltip").remove();
	  
	                var x = get_month_name(item.series.data[item.dataIndex][0]),
	                    y = item.datapoint[1],
	                    z = item.series.color;
	  
	                show_tooltip(item.pageX, item.pageY,
	                    "<div style='text-align: center;'><b>" + item.series.label + "</b><br />" + x + ": " + y + "</div>",
	                    z);
	            }
	        } else {
	            $("#bar_tooltip").remove();
	            previous_point = null;
	            previous_label = null;
	        }
	    });
	},

	createSimpleBarChart: function() {
		var data = [
			[0, 1349],
			[1, 68472],
			[2, 18449],
			[3, 26028],
			[4, 1858],
			[5, 617],
			[6, 213],
			[7, 15906],
			[8, 0],
			[9, 22],
			[10, 65],
			[11, 0],
			[12, 0],
			[13, 0],
			[14, 194],
		];
        var dataset = [{ label: "2012 Average Temperature", data: data, color: "#89cf89" }];
 		

        var options = {
            series: {
                bars: {
                    show: true,
                    lineWidth: 0,
                    fill: "#89cf89",
        			fillColor: "#89cf89"
                }
            },
            bars: {
                align: "center",
                barWidth: 0.5,
                fillColor: "#89cf89",

            },
            xaxis: {
                tickSize: 1,
                axisLabelUseCanvas: false,
                axisLabelFontSizePixels: 12,
                tickLength: 0
            },
            yaxis: {
            	tickSize: 5000,
            },
            legend: {
                show: false,
            },
            grid: {
                hoverable: true,
                borderWidth: 0
            }
        };

        $.plot($("#simple-bar-chart"), dataset, options);

        var previousPoint = null, previousLabel = null;

        function showTooltip(x, y, contents) {
		    $('<div id="tooltip">' + contents + '</div>').css({
		        position: 'absolute',
		        display: 'none',
		        top: y - 40,
		        left: x - 120,
		        border: '2px solid #444',
		        padding: '9px',
		            'font-size': '9px',
		            'border-radius': '5px',
		            'background-color': '#fff',
		            'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
		            'text-align': 'center',
		        opacity: 0.9
		    }).appendTo("body").fadeIn(200);
		}


		$("#simple-bar-chart").on("plothover", function (event, pos, item) {
		    if (item) {
                if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
                    previousPoint = item.dataIndex;
                    previousLabel = item.series.label;
                    $("#tooltip").remove();

                     var x = item.datapoint[0];
                        var y = item.datapoint[1];
 
 
                        //console.log(item.series.xaxis.ticks[x].label);                
 
                        showTooltip(item.pageX,
                        item.pageY,
                        item.series.xaxis.ticks[x+1].label + " : <strong>" + y + "</strong> °C");
                }
            } else {
                $("#tooltip").remove();
                previousPoint = null;
            }
		});
	}
}