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
		    [6, "Komik Kecil"], [5, "Novel"], [4, "Komik Besar"], [3, "Majalah"], [2, "Bacaan Populer"], [1, "Komik Lain"], [0, "Lain-lain"]
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
                axisLabelUseCanvas: true,
                axisLabelPadding: 10,
                max: 52000,
                tickColor: "#ccc",
                color: "black"
            },
            yaxis: {
                axisLabelUseCanvas: true,
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

		            //console.log(item.series.xaxis.ticks[x].label);               

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
	}
}