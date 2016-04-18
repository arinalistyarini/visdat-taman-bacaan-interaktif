$(function () {
	Web.init();
});


/* ------ ALL FUNCTIONS GO HERE ------ */
var Web = {
	init: function () {
		Web.createHorizontalChart(); // create horizontal chart @ div#horizontal-chart index.html
	},

	createHorizontalChart: function() {
		// dataset
		var rawData = [
		    [51725, 0], //Komik kecil
		    [19682, 1],  //Novel
		    [4040, 2],   //Komik Besar
		    [1743, 3],    //Majalah
		    [1657, 4],  //Bacaan Populer
		    [1099, 5],      //Komik Lain
		    [696, 6]    //Lain-lain
		];	 
		var dataSet = [
		    { label: "Precious Metal Price", data: rawData, color: "#89cf89" }
		];
		var ticks = [
		    [0, "Komik Kecil"], [1, "Novel"], [2, "Komik Besar"], [3, "Majalah"], [4, "Bacaan Populer"], [5, "Komik Lain"], [6, "Lain-lain"]
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
                barWidth: 0.5,
                horizontal: true,
                fillColor: "#89cf89"
            },
            xaxis: {
                axisLabel: "Price (USD/oz)",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10,
                max: 52000,
                tickColor: "#ccc",
                color: "black"
            },
            yaxis: {
                axisLabel: "Precious Metals",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 3,
                tickLength: 0,
                ticks: ticks,
                color: "black"
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
		        padding: '3px',
		            'font-size': '9px',
		            'border-radius': '5px',
		            'background-color': '#fff',
		            'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
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

		            //console.log(item.series.xaxis.ticks[x].label);               

		            showTooltip(item.pageX,
		            item.pageY,
		            color,
		                item.series.yaxis.ticks[y].label + " : <strong>" + x + "</strong> buah");
		        }
		    } else {
		        $("#tooltip").remove();
		        previousPoint = null;
		    }
		});
	}
}