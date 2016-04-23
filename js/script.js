$(function () {
	Site.init();
});


/* ------ ALL FUNCTIONS GO HERE ------ */
var Site = {
	init: function () {
		//snippet function *cuma testing*
		//fungsi untuk di halaman snippet.html
		Site.createHorizontalChart(); // create horizontal chart @ div#horizontal-chart snippet.html
		Site.createStackedChart(); // create stacked bar chart @ div#bar-chart snippet.html
		Site.createSimpleBarChart(); // create simple bar chart @ div#simple-bar-chart snippet.html

		//fungsi untuk di halaman snippet-filtering.html
		Site.filterKomikNonKomikSnippet(); // filtering komik or nonkomik @ snippet-filtering.html
		Site.createStackedChartFilt(); // create stacked bar chart @ div#bar-chart-filt snippet-filtering.html
		Site.createStackedChartFiltTepatWaktuOnly(); // create stacked bar chart yang terlambat saja @ div#bar-chart-filt snippet-filtering.html
		Site.createStackedChartFiltTerlambatOnly(); // create stacked bar chart yang terlambat saja @ div#bar-chart-filt snippet-filtering.html
		Site.filterTerlambatTepatWaktuChecklist(); //filtering terlambat tepat waktu checklist @ snippet-filtering.html
		Site.createStackedChartFiltGrs(); // create stacked bar chart @ div#bar-chart-filt-grs snippet-filtering.html
		Site.createStackedChartFiltTepatWaktuOnlyGrs(); // create stacked bar chart yang terlambat saja @ div#bar-chart-filt-grs snippet-filtering.html
		Site.createStackedChartFiltTerlambatOnlyGrs(); // create stacked bar chart yang terlambat saja @ div#bar-chart-filt-grs snippet-filtering.html
		Site.filterTerlambatTepatWaktuChecklistGrs(); //filtering terlambat tepat waktu checklist @ snippet-filtering-grs.html

		//fungsi untuk di halaman buku-pitimoss.html
		Site.createJumlahBukuChart(); // chart untuk jenis buku yang ada di pitimoss @ buku-pitimoss.html
		Site.showMoreInfoBukuPitimossPage(); // fungsi collapsible item *show/hide* dari bagian2 yang ada di buku-pitimoss.html
		Site.filterKomikOrNonKomik(); // filter komik, nonkomik, or all @ buku-pitimoss.html

		//fungsi untuk di halaman transaksi-pitimoss.html
		Site.showMoreInfoTransaksiPitimossPage(); // fungsi collapsible item *show/hide* dari bagian2 yang ada di transaksi-pitimoss.html
		Site.createChartOfPengembalianBukuVer1(); // bikin chart pengembalian buku tepat waktu vs terlambat (hanya grafik batang) @ transaksi-pitimoss.html
		Site.createChartOfPengembalianBukuVer2(); // bikin chart pengembalian buku tepat waktu vs terlambat (hanya grafik batang, hanya grafik garis, grafik garis + batang) @ transaksi-pitimoss.html
	},

	//fungsi untuk di halaman snippet.html
	createHorizontalChart: function() {
		//check file name, fungsi baru jalan kalo file htmlnya snippet.html
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet.html") {
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
        }
	},

	createStackedChart: function() {
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet.html") {
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
        }
	},

	createSimpleBarChart: function() {
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet.html") {
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
	},

	//fungsi untuk di halaman snippet-filtering.html
	filterKomikNonKomikSnippet: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
        	$('#filter-komik').show();
			$('#filter-non-komik').hide();

        	$('select.dropdown-filtering').change(function () {
			    var current = this.value;
			    if (current == 'komik') {
			        $('#filter-komik').show();
			        $('#filter-non-komik').hide();
			    }
			    else if (current == 'nonkomik') {
			    	$('#filter-komik').hide();
			        $('#filter-non-komik').show();    
			    }
			});
        }
	},

	createStackedChartFilt: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
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
		    
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu },
		        { label: "Terlambat", data: terlambat }
		    ];
		 
		    $.plot($("#bar-chart-filt"), data, {
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
		     
		    $("#bar-chart-filt").on("plothover", function (event, pos, item) {
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
        }
	},

	createStackedChartFiltTepatWaktuOnly: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
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
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu, color: "#89cf89" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth:  60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#89cf89",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            }
	        };

	        $.plot($("#bar-chart-filt-tepat-waktu"), data, options);
			
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
		     
		    $("#bar-chart-filt-tepat-waktu").on("plothover", function (event, pos, item) {
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
        }
	},

	createStackedChartFiltTerlambatOnly: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
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
		    var data = [
		        { label: "Terlambat", data: terlambat, color: "#df5842" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth: 60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#df5842",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            	max: 10000
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            }
	        };

	        $.plot($("#bar-chart-filt-terlambat"), data, options);
			
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
		     
		    $("#bar-chart-filt-terlambat").on("plothover", function (event, pos, item) {
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
        }
	},

	filterTerlambatTepatWaktuChecklist: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
			$('.filter-all').show();
			$('.filter-tepat-waktu').hide();
			$('.filter-terlambat').hide();

        	$('.input-tepat-waktu').prop('checked', true);
        	$('.input-terlambat').prop('checked', true);

        	$('form.filter-update').change(function () {
        		if($('.input-tepat-waktu').is(':checked') && ($('.input-terlambat').is(':checked'))) {
					$('.input-tepat-waktu').prop('disabled', false);
					$('.input-terlambat').prop('disabled', false);

	        		$('.filter-all').show();
					$('.filter-tepat-waktu').hide();
					$('.filter-terlambat').hide();
				}
				if($('.input-tepat-waktu').is(':checked') && !($('.input-terlambat').is(':checked'))) {
					$('.input-tepat-waktu').prop('disabled', true);

	        		$('.filter-all').hide();
					$('.filter-tepat-waktu').show();
					$('.filter-terlambat').hide();
				}
				if(!($('.input-tepat-waktu').is(':checked')) && ($('.input-terlambat').is(':checked'))) {
					$('.input-terlambat').prop('disabled', true);

	        		$('.filter-all').hide();
					$('.filter-tepat-waktu').hide();
					$('.filter-terlambat').show();
				}
        	});
        }
	},

	createStackedChartFiltGrs: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
        	var datas = [
        		{
	                data: [
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
	                ],
	                label: "Tepat Waktu",
	                color: "#89cf89",
	                lines: {
	                	show: true,
	                	fill: true,
	                	lineWidth: 5
	                },
	                points: {
				        show: true,
				        fillColor: '#89cf89',
				        radius: 5
				    },
				    shadowSize: 0
            	},
            	{
	                data: [
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
	                ],
	                label: "Terlambat",
	                color: "#df5842",
	                lines: {
	                	show: true,
	                	fill: true,
	                	lineWidth: 5
	                },
	                points: {
				        show: true,
				        fillColor: '#df5842',
				        radius: 5
				    },
				    shadowSize: 0
            	}
            ];
        	$.plot("#bar-chart-filt-grs", datas, {
                xaxis: {
                	tickColor: "transparent",
                	/*font: {
						weight:"normal",
						family:"'Montserrat', sans-serif",
						color: "#1a1a1a"
					}*/

					mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: true,
		            axisLabelPadding: 1,
                },
                yaxis: {
			        min: 0,
			        max: 10000,
			        tickSize: 2000,
			        /*font: {
						size:14,
						weight:"normal",
						family:"'Montserrat', sans-serif",
						color: "#1a1a1a"
					}*/
			    },
                grid: {
                	show: true,
                	hoverable: true,
                	borderWidth: 0
                	/*clickable: false,
                	labelMargin: 20,
                	aboveData: true,
                	borderColor: {
                		top: "#ccc",
                		bottom: "#0092a7",
                		left: "transparent",
                		right: "transparent"
                	},
                	borderWidth: 1*/
                },
                tooltip: {
                    show: true,
                    /*content: "<div class='visitor__tooltip'>%x<br><span class='visitor__tooltip--larger'>%y buku</span></div>",
                    defaultTheme: false*/
                },
                legend: {
                    show: true,
                    /*labelFormatter: function(label, series) {
                        return "<span class='legend--formatter-ap'>" + label + "</span>";
                    },
                    background: null,
                    container: $(".chart-ap--domisili-d__legend")*/
                }
            });

        	// versi grafik batang kayak di poster
        	/*var tepatWaktu = [
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
		 
		    $.plot($("#bar-chart-filt-grs"), data, {
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
		     
		    $("#bar-chart-filt-grs").on("plothover", function (event, pos, item) {
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
		    });*/
        }
	},

	createStackedChartFiltTepatWaktuOnlyGrs: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
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
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu, color: "#89cf89" }
		    ];

		    var options = {
	            series: {
	                lines: {
	                    show: true,
	                    fill: true,
	                    lineWidth: 5
	                },
	                points: {
				        show: true,
				        fillColor: '#89cf89',
				        radius: 5
				    },
				    shadowSize: 0
	            },
	            bars: {
	                align: "center",
	                fillColor: "#89cf89",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            	min: 0
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            }
	        };

	        $.plot($("#bar-chart-filt-tepat-waktu-grs"), data, options);
			
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
		     
		    $("#bar-chart-filt-tepat-waktu-grs").on("plothover", function (event, pos, item) {
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
        }
	},

	createStackedChartFiltTerlambatOnlyGrs: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
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
		    var data = [
		        { label: "Terlambat", data: terlambat, color: "#df5842" }
		    ];

		    var options = {
	            series: {
	                lines: {
	                    show: true,
	                    fill: true,
	                    lineWidth: 5
	                },
	                points: {
				        show: true,
				        fillColor: '#df5842',
				        radius: 5
				    },
				    shadowSize: 0
	            },
	            bars: {
	                align: "center",
	                fillColor: "#df5842",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            	max: 10000
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            }
	        };

	        $.plot($("#bar-chart-filt-terlambat-grs"), data, options);
			
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
		     
		    $("#bar-chart-filt-terlambat-grs").on("plothover", function (event, pos, item) {
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
        }
	},

	filterTerlambatTepatWaktuChecklistGrs: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "snippet-filtering.html") {
			$('.filter-all-grs').show();
			$('.filter-tepat-waktu-grs').hide();
			$('.filter-terlambat-grs').hide();

        	$('.input-tepat-waktu-grs').prop('checked', true);
        	$('.input-terlambat-grs').prop('checked', true);

        	$('form.filter-update-grs').change(function () {
        		if($('.input-tepat-waktu-grs').is(':checked') && ($('.input-terlambat-grs').is(':checked'))) {
					$('.input-tepat-waktu-grs').prop('disabled', false);
					$('.input-terlambat-grs').prop('disabled', false);

	        		$('.filter-all-grs').show();
					$('.filter-tepat-waktu-grs').hide();
					$('.filter-terlambat-grs').hide();
				}
				if($('.input-tepat-waktu-grs').is(':checked') && !($('.input-terlambat-grs').is(':checked'))) {
					$('.input-tepat-waktu-grs').prop('disabled', true);

	        		$('.filter-all-grs').hide();
					$('.filter-tepat-waktu-grs').show();
					$('.filter-terlambat-grs').hide();
				}
				if(!($('.input-tepat-waktu-grs').is(':checked')) && ($('.input-terlambat-grs').is(':checked'))) {
					$('.input-terlambat-grs').prop('disabled', true);

	        		$('.filter-all-grs').hide();
					$('.filter-tepat-waktu-grs').hide();
					$('.filter-terlambat-grs').show();
				}
        	});
        }
	},

	//fungsi untuk di halaman buku-pitimoss.html
	createJumlahBukuChart: function(){
		//check file name, fungsi baru jalan kalo file htmlnya buku-pitimoss.html
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "buku-pitimoss.html") {
        	// dataset
			var rawData = [
			    [51725, 6], //Komik kecil
			    [19682, 5], //Novel
			    [4040, 4],  //Komik Besar
			    [1743, 3],  //Majalah
			    [1657, 2],  //Bacaan Populer
			    [1099, 1],  //Komik Lain
			    [696, 0]    //Lain-lain
			];	 
			var dataSet = [
			    { label: "Jumlah Buku Pitimoss Tahun 2015", data: rawData, color: "#89cf89" }
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
	                tickSize: 5000,
	                font: {
						weight:"bold",
						size: 14
					}
	            },
	            yaxis: {
	                axisLabelUseCanvas: true,
	                axisLabelPadding: 3,
	                tickLength: 0,
	                ticks: ticks,
	                color: "#444",
	                font: {
						weight:"bold",
						size: 14
					}
	            },
	            legend: {
	                show: false
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0,
	                labelMargin: 13,
	            },
	            tooltip: {
	            	show: true
	            }
	        };

	        $.plot($("#jumlah-buku-chart"), dataSet, options);
        }
	},

	showMoreInfoBukuPitimossPage: function(){
		//check file name, fungsi baru jalan kalo file htmlnya buku-pitimoss.html
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "buku-pitimoss.html"){
        	// fungsi collapsible item *show/hide* dari jumlah buku pitimoss 2015 @ buku-pitimoss.html
			$('a.hide-show-info-jumlah-buku').click(function(event){
				event.stopPropagation();
				if($(this).children("i.arrow-changeable").hasClass("fa-angle-up")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-up").addClass("fa-angle-down");
	                $(this).parents("div.grid-center").find("div.info-content-jumlah-buku").slideUp();
	            }
	            else if($(this).children("i.arrow-changeable").hasClass("fa-angle-down")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-down").addClass("fa-angle-up");
	                $(this).parents("div.grid-center").find("div.info-content-jumlah-buku").slideDown();
	            }
			});

			// fungsi collapsible item *show/hide* dari buku pinjaman terlaris pitimoss 2015 @ buku-pitimoss.html
			$('a.hide-show-info-terlaris').click(function(event){
				event.stopPropagation();
				if($(this).children("i.arrow-changeable").hasClass("fa-angle-up")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-up").addClass("fa-angle-down");
	                $(this).parents("div.grid-center").find("div.info-content-terlaris").slideUp();
	            }
	            else if($(this).children("i.arrow-changeable").hasClass("fa-angle-down")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-down").addClass("fa-angle-up");
	                $(this).parents("div.grid-center").find("div.info-content-terlaris").slideDown();
	            }
			});
        }
	},

	filterKomikOrNonKomik: function(){
		//check file name, fungsi baru jalan kalo file htmlnya buku-pitimoss.html
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "buku-pitimoss.html"){
        	$('.input-komik').prop('checked', true);
        	$('.input-nonkomik').prop('checked', true);

        	$('.show-all-filter-tahun-2015').show();
			$('.show-komik-or-nonkomik-filter-tahun-2015').hide();

			$('.show-all-filter-januari-2015').hide();
			$('.show-komik-or-nonkomik-filter-januari-2015').hide();

			$('.show-all-filter-februari-2015').hide();
			$('.show-komik-or-nonkomik-filter-februari-2015').hide();

			$('.show-all-filter-maret-2015').hide();
			$('.show-komik-or-nonkomik-filter-maret-2015').hide();

			$('.show-all-filter-april-2015').hide();
			$('.show-komik-or-nonkomik-filter-april-2015').hide();

			$('.show-all-filter-mei-2015').hide();
			$('.show-komik-or-nonkomik-filter-mei-2015').hide();

			$('.show-all-filter-juni-2015').hide();
			$('.show-komik-or-nonkomik-filter-juni-2015').hide();

			$('.show-all-filter-juli-2015').hide();
			$('.show-komik-or-nonkomik-filter-juli-2015').hide();

			$('.show-all-filter-agustus-2015').hide();
			$('.show-komik-or-nonkomik-filter-agustus-2015').hide();

			$('.show-all-filter-september-2015').hide();
			$('.show-komik-or-nonkomik-filter-september-2015').hide();

			$('.show-all-filter-oktober-2015').hide();
			$('.show-komik-or-nonkomik-filter-oktober-2015').hide();

			$('.show-all-filter-november-2015').hide();
			$('.show-komik-or-nonkomik-filter-november-2015').hide();

			$('.show-all-filter-desember-2015').hide();
			$('.show-komik-or-nonkomik-filter-desember-2015').hide();

			$('select.dropdown-filtering-terlaris-2015').change(function () {
			    var current = this.value;
			    if (current == 'sepanjangtahun') {
			    	$('.changeableTitle').html("SEPANJANG TAHUN 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//show sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').show();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
					$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'januari') {
			    	$('.changeableTitle').html("JANUARI 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//show januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').show();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'februari') {
			    	$('.changeableTitle').html("FEBRUARI 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//show februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').show();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'maret') {
			    	$('.changeableTitle').html("MARET 2015");
			    	
			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//show maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').show();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'april') {
			    	$('.changeableTitle').html("APRIL 2015");
			    	
			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').show();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'mei') {
			    	$('.changeableTitle').html("MEI 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//show mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').show();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'juni') {
			    	$('.changeableTitle').html("JUNI 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// show juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').show();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'juli') {
			    	$('.changeableTitle').html("JULI 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// show juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').show();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'agustus') {
			    	$('.changeableTitle').html("AGUSTUS 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// show agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').show();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'september') {
			    	$('.changeableTitle').html("SEPTEMBER 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// show september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').show();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'oktober') {
			    	$('.changeableTitle').html("OKTOBER 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// show oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').show();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'november') {
			    	$('.changeableTitle').html("NOVEMBER 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// show november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').show();

	        		// hide desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').hide();
			    }
			    else if (current == 'desember') {
			    	$('.changeableTitle').html("DESEMBER 2015");

			    	$('.input-komik').prop('disabled', false);
        			$('.input-nonkomik').prop('disabled', false);
			    	$('.input-komik').prop('checked', true);
		        	$('.input-nonkomik').prop('checked', true);

		        	//hide sepanjang2015
		        	$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
	        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
	        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
	        		$('.show-all-filter-tahun-2015').hide();

	        		//hide januari
					$('.show-komik-or-nonkomik-filter-januari-2015').hide();
	        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
	        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
	        		$('.show-all-filter-januari-2015').hide();

	        		//hide februari
	        		$('.show-komik-or-nonkomik-filter-februari-2015').hide();
	        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
	        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
	        		$('.show-all-filter-februari-2015').hide();

	        		//hide maret
	        		$('.show-komik-or-nonkomik-filter-maret-2015').hide();
	        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
	        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
	        		$('.show-all-filter-maret-2015').hide();

	        		//hide april
	        		$('.show-komik-or-nonkomik-filter-april-2015').hide();
	        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
	        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
	        		$('.show-all-filter-april-2015').hide();

	        		//hide mei
	        		$('.show-komik-or-nonkomik-filter-mei-2015').hide();
	        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
	        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
	        		$('.show-all-filter-mei-2015').hide();

	        		// hide juni
	        		$('.show-komik-or-nonkomik-filter-juni-2015').hide();
	        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
	        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
	        		$('.show-all-filter-juni-2015').hide();

	        		// hide juli
	        		$('.show-komik-or-nonkomik-filter-juli-2015').hide();
	        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
	        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
	        		$('.show-all-filter-juli-2015').hide();

	        		// hide agustus
	        		$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
	        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
	        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
	        		$('.show-all-filter-agustus-2015').hide();

	        		// hide september
	        		$('.show-komik-or-nonkomik-filter-september-2015').hide();
	        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
	        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
	        		$('.show-all-filter-september-2015').hide();

	        		// hide oktober
	        		$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
	        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
	        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
	        		$('.show-all-filter-oktober-2015').hide();

	        		// hide november
	        		$('.show-komik-or-nonkomik-filter-november-2015').hide();
	        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
	        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
	        		$('.show-all-filter-november-2015').hide();

	        		// show desember
	        		$('.show-komik-or-nonkomik-filter-desember-2015').hide();
	        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
	        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
	        		$('.show-all-filter-desember-2015').show();
			    }
			});

        	$('form.filter-komik-nonkomik').change(function () {
        		var dropdownValue = $('select.dropdown-filtering-terlaris-2015').val();
        		if(dropdownValue == "sepanjangtahun"){
        			// if dropdown sepanjang tahun 2015
	        		if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-tahun-2015').hide();
		        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.clone-filter-result-tahun-2015');
						$('.show-komik-or-nonkomik-filter-tahun-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-tahun-2015').hide();
		        		$('.filter-komik-tahun-2015-to-clone').appendTo('.clone-filter-result-tahun-2015');
						$('.show-komik-or-nonkomik-filter-tahun-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-tahun-2015').hide();
		        		$('.filter-komik-tahun-2015-to-clone').appendTo('.filter-komik-tahun-2015-to-clone__container');
		        		$('.filter-nonkomik-tahun-2015-to-clone').appendTo('.filter-nonkomik-tahun-2015-to-clone__container');
		        		$('.show-all-filter-tahun-2015').show();
	        		}
        		}
        		else if(dropdownValue == "januari"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-januari-2015').hide();
		        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.clone-filter-result-januari-2015');
						$('.show-komik-or-nonkomik-filter-januari-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-januari-2015').hide();
		        		$('.filter-komik-januari-2015-to-clone').appendTo('.clone-filter-result-januari-2015');
						$('.show-komik-or-nonkomik-filter-januari-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-januari-2015').hide();
		        		$('.filter-komik-januari-2015-to-clone').appendTo('.filter-komik-januari-2015-to-clone__container');
		        		$('.filter-nonkomik-januari-2015-to-clone').appendTo('.filter-nonkomik-januari-2015-to-clone__container');
		        		$('.show-all-filter-januari-2015').show();
	        		}
        		}
        		else if(dropdownValue == "februari"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-februari-2015').hide();
		        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.clone-filter-result-februari-2015');
						$('.show-komik-or-nonkomik-filter-februari-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-februari-2015').hide();
		        		$('.filter-komik-februari-2015-to-clone').appendTo('.clone-filter-result-februari-2015');
						$('.show-komik-or-nonkomik-filter-februari-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-februari-2015').hide();
		        		$('.filter-komik-februari-2015-to-clone').appendTo('.filter-komik-februari-2015-to-clone__container');
		        		$('.filter-nonkomik-februari-2015-to-clone').appendTo('.filter-nonkomik-februari-2015-to-clone__container');
		        		$('.show-all-filter-februari-2015').show();
	        		}
        		}
        		else if(dropdownValue == "maret"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-maret-2015').hide();
		        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.clone-filter-result-maret-2015');
						$('.show-komik-or-nonkomik-filter-maret-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-maret-2015').hide();
		        		$('.filter-komik-maret-2015-to-clone').appendTo('.clone-filter-result-maret-2015');
						$('.show-komik-or-nonkomik-filter-maret-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-maret-2015').hide();
		        		$('.filter-komik-maret-2015-to-clone').appendTo('.filter-komik-maret-2015-to-clone__container');
		        		$('.filter-nonkomik-maret-2015-to-clone').appendTo('.filter-nonkomik-maret-2015-to-clone__container');
		        		$('.show-all-filter-maret-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "april"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-april-2015').hide();
		        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.clone-filter-result-april-2015');
						$('.show-komik-or-nonkomik-filter-april-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-april-2015').hide();
		        		$('.filter-komik-april-2015-to-clone').appendTo('.clone-filter-result-april-2015');
						$('.show-komik-or-nonkomik-filter-april-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-april-2015').hide();
		        		$('.filter-komik-april-2015-to-clone').appendTo('.filter-komik-april-2015-to-clone__container');
		        		$('.filter-nonkomik-april-2015-to-clone').appendTo('.filter-nonkomik-april-2015-to-clone__container');
		        		$('.show-all-filter-april-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "mei"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-mei-2015').hide();
		        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.clone-filter-result-mei-2015');
						$('.show-komik-or-nonkomik-filter-mei-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-mei-2015').hide();
		        		$('.filter-komik-mei-2015-to-clone').appendTo('.clone-filter-result-mei-2015');
						$('.show-komik-or-nonkomik-filter-mei-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-mei-2015').hide();
		        		$('.filter-komik-mei-2015-to-clone').appendTo('.filter-komik-mei-2015-to-clone__container');
		        		$('.filter-nonkomik-mei-2015-to-clone').appendTo('.filter-nonkomik-mei-2015-to-clone__container');
		        		$('.show-all-filter-mei-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "juni"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-juni-2015').hide();
		        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.clone-filter-result-juni-2015');
						$('.show-komik-or-nonkomik-filter-juni-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-juni-2015').hide();
		        		$('.filter-komik-juni-2015-to-clone').appendTo('.clone-filter-result-juni-2015');
						$('.show-komik-or-nonkomik-filter-juni-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-juni-2015').hide();
		        		$('.filter-komik-juni-2015-to-clone').appendTo('.filter-komik-juni-2015-to-clone__container');
		        		$('.filter-nonkomik-juni-2015-to-clone').appendTo('.filter-nonkomik-juni-2015-to-clone__container');
		        		$('.show-all-filter-juni-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "juli"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-juli-2015').hide();
		        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.clone-filter-result-juli-2015');
						$('.show-komik-or-nonkomik-filter-juli-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-juli-2015').hide();
		        		$('.filter-komik-juli-2015-to-clone').appendTo('.clone-filter-result-juli-2015');
						$('.show-komik-or-nonkomik-filter-juli-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-juli-2015').hide();
		        		$('.filter-komik-juli-2015-to-clone').appendTo('.filter-komik-juli-2015-to-clone__container');
		        		$('.filter-nonkomik-juli-2015-to-clone').appendTo('.filter-nonkomik-juli-2015-to-clone__container');
		        		$('.show-all-filter-juli-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "agustus"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-agustus-2015').hide();
		        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.clone-filter-result-agustus-2015');
						$('.show-komik-or-nonkomik-filter-agustus-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-agustus-2015').hide();
		        		$('.filter-komik-agustus-2015-to-clone').appendTo('.clone-filter-result-agustus-2015');
						$('.show-komik-or-nonkomik-filter-agustus-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-agustus-2015').hide();
		        		$('.filter-komik-agustus-2015-to-clone').appendTo('.filter-komik-agustus-2015-to-clone__container');
		        		$('.filter-nonkomik-agustus-2015-to-clone').appendTo('.filter-nonkomik-agustus-2015-to-clone__container');
		        		$('.show-all-filter-agustus-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "september"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-september-2015').hide();
		        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.clone-filter-result-september-2015');
						$('.show-komik-or-nonkomik-filter-september-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-september-2015').hide();
		        		$('.filter-komik-september-2015-to-clone').appendTo('.clone-filter-result-september-2015');
						$('.show-komik-or-nonkomik-filter-september-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-september-2015').hide();
		        		$('.filter-komik-september-2015-to-clone').appendTo('.filter-komik-september-2015-to-clone__container');
		        		$('.filter-nonkomik-september-2015-to-clone').appendTo('.filter-nonkomik-september-2015-to-clone__container');
		        		$('.show-all-filter-september-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "oktober"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-oktober-2015').hide();
		        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.clone-filter-result-oktober-2015');
						$('.show-komik-or-nonkomik-filter-oktober-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-oktober-2015').hide();
		        		$('.filter-komik-oktober-2015-to-clone').appendTo('.clone-filter-result-oktober-2015');
						$('.show-komik-or-nonkomik-filter-oktober-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-oktober-2015').hide();
		        		$('.filter-komik-oktober-2015-to-clone').appendTo('.filter-komik-oktober-2015-to-clone__container');
		        		$('.filter-nonkomik-oktober-2015-to-clone').appendTo('.filter-nonkomik-oktober-2015-to-clone__container');
		        		$('.show-all-filter-oktober-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "november"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-november-2015').hide();
		        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.clone-filter-result-november-2015');
						$('.show-komik-or-nonkomik-filter-november-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-november-2015').hide();
		        		$('.filter-komik-november-2015-to-clone').appendTo('.clone-filter-result-november-2015');
						$('.show-komik-or-nonkomik-filter-november-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-november-2015').hide();
		        		$('.filter-komik-november-2015-to-clone').appendTo('.filter-komik-november-2015-to-clone__container');
		        		$('.filter-nonkomik-november-2015-to-clone').appendTo('.filter-nonkomik-november-2015-to-clone__container');
		        		$('.show-all-filter-november-2015').show();
	        		}
	        	}
	        	else if(dropdownValue == "desember"){
        			if(!($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-nonkomik').prop('disabled', true);

		        		$('.show-all-filter-desember-2015').hide();
		        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.clone-filter-result-desember-2015');
						$('.show-komik-or-nonkomik-filter-desember-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && !($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', true);

		        		$('.show-all-filter-desember-2015').hide();
		        		$('.filter-komik-desember-2015-to-clone').appendTo('.clone-filter-result-desember-2015');
						$('.show-komik-or-nonkomik-filter-desember-2015').show();
	        		}

	        		if(($('.input-komik').is(':checked')) && ($('.input-nonkomik').is(':checked'))) {
	        			$('.input-komik').prop('disabled', false);
	        			$('.input-nonkomik').prop('disabled', false);

						$('.show-komik-or-nonkomik-filter-desember-2015').hide();
		        		$('.filter-komik-desember-2015-to-clone').appendTo('.filter-komik-desember-2015-to-clone__container');
		        		$('.filter-nonkomik-desember-2015-to-clone').appendTo('.filter-nonkomik-desember-2015-to-clone__container');
		        		$('.show-all-filter-desember-2015').show();
	        		}
	        	}
        	});
        }
	},

	//fungsi untuk di halaman transaksi-pitimoss.html
	showMoreInfoTransaksiPitimossPage: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "transaksi-pitimoss.html"){
        	// fungsi collapsible item *show/hide* dari pengembalian buku pitimoss 2015 @ transaksi-pitimoss.html
			$('a.hide-show-info-tepat-waktu-vs-terlambat').click(function(event){
				event.stopPropagation();
				if($(this).children("i.arrow-changeable").hasClass("fa-angle-up")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-up").addClass("fa-angle-down");
	                $(this).parents("div.grid-center").find("div.info-content-tepat-waktu-vs-terlambat").slideUp();
	            }
	            else if($(this).children("i.arrow-changeable").hasClass("fa-angle-down")){
	                $(this).find("i.arrow-changeable").removeClass("fa-angle-down").addClass("fa-angle-up");
	                $(this).parents("div.grid-center").find("div.info-content-tepat-waktu-vs-terlambat").slideDown();
	            }
			});
        }
	},

	createChartOfPengembalianBukuVer1: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "transaksi-pitimoss.html"){
        	/* TERLAMBAT + TEPAT WAKTU - BATANG */
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
		    
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu },
		        { label: "Terlambat", data: terlambat }
		    ];
		 
		    $.plot($("#pengembalian-buku-chart-1"), data, {
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
		        tooltip: {
		        	show: true
		        },
		        colors: ["#89cf89", "#df5842"]
		    });

			/* TEPAT WAKTU - BATANG */
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
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu, color: "#89cf89" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth:  60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#89cf89",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            },
	            tooltip:{
	            	show: true
	            }
	        };

	        $.plot($("#pengembalian-buku-chart-1-tepat-waktu"), data, options);

			/* TERLAMBAT - BATANG */
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
		    var data = [
		        { label: "Terlambat", data: terlambat, color: "#df5842" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth: 60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#df5842",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            	max: 10000
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            },
	            tooltip:{
	            	show: true
	            }
	        };

	        $.plot($("#pengembalian-buku-chart-1-terlambat"), data, options);
        }
	},

	createChartOfPengembalianBukuVer2: function(){
		var windowLoc = $(location).attr('pathname');
        var splitUrlArray = windowLoc.split('/');
        var lastPart = splitUrlArray.pop();
        if(lastPart == "transaksi-pitimoss.html"){
        	/* TERLAMBAT + TEPAT WAKTU - BATANG & GARIS */

			/* TEPAT WAKTU - BATANG & GARIS */

			/* TERLAMBAT - BATANG & GARIS */

			/* TERLAMBAT + TEPAT WAKTU - GARIS */

			/* TEPAT WAKTU - GARIS */

			/* TERLAMBAT - GARIS */

			/* TERLAMBAT + TEPAT WAKTU - BATANG */
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
		    
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu },
		        { label: "Terlambat", data: terlambat }
		    ];
		 
		    $.plot($("#pengembalian-buku-chart-2-batang"), data, {
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
		        tooltip: {
		        	show: true
		        },
		        colors: ["#89cf89", "#df5842"]
		    });

			/* TEPAT WAKTU - BATANG */
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
		    var data = [
		        { label: "Tepat waktu", data: tepatWaktu, color: "#89cf89" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth:  60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#89cf89",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            },
	            tooltip:{
	            	show: true
	            }
	        };

	        $.plot($("#pengembalian-buku-chart-2-tepat-waktu"), data, options);

			/* TERLAMBAT - BATANG */
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
		    var data = [
		        { label: "Terlambat", data: terlambat, color: "#df5842" }
		    ];

		    var options = {
	            series: {
	                bars: {
	                    show: true,
	                    barWidth: 60*60*24*1000*8
	                }
	            },
	            bars: {
	                align: "center",
	                fillColor: "#df5842",
	            },
	            xaxis: {
		            mode: "time",
		            min: 1418808400000,
		            max: 1450112400000,
		            tickLength: 0,
		            tickSize: [1, "month"],
		            axisLabelUseCanvas: false,
		        },
	            yaxis: {
	            	tickSize: 2000,
	            	max: 10000
	            },
	            legend: {
	                show: true,
	            },
	            grid: {
	                hoverable: true,
	                borderWidth: 0
	            },
	            tooltip:{
	            	show: true
	            }
	        };

	        $.plot($("#pengembalian-buku-chart-2-terlambat"), data, options);
        }
	}
}