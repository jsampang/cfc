'use strict';
$(document).ready(function () {
	Morris.Area({
		element: 'morris-extra-area',
		data: [{
			period: '2011',
			floor: 0,
			wall: 0,
			ceiling: 0
		}, {
			period: '2012',
			floor: 50,
			wall: 15,
			ceiling: 5
		}, {
			period: '2013',
			floor: 20,
			wall: 50,
			ceiling: 65
		}, {
			period: '2014',
			floor: 60,
			wall: 12,
			ceiling: 7
		}, {
			period: '2015',
			floor: 30,
			wall: 20,
			ceiling: 120
		}, {
			period: '2016',
			floor: 25,
			wall: 80,
			ceiling: 40
		}, {
			period: '2017',
			floor: 10,
			wall: 10,
			ceiling: 10
		}],
		lineColors: ['#fb9678', '#7E81CB', '#01C0C8'],
		xkey: 'period',
		ykeys: ['floor', 'wall', 'ceiling'],
		labels: ['Floor', 'Wall', 'Ceiling'],
		pointSize: 0,
		lineWidth: 0,
		resize: true,
		fillOpacity: 0.8,
		behaveLikeLine: true,
		gridLineColor: '#5FBEAA',
		hideHover: 'auto'
	});
});


$(document).ready(function () {
	$(document).ready(function () {
		areaChart();
	});

	function areaChart() {
		window.lineChart = Morris.Line({
			element: 'task-status',
			data: [{
				y: '2006',
				a: 30,
				b: 10
			}, {
				y: '2007',
				a: 28,
				b: 60
			}, {
				y: '2008',
				a: 25,
				b: 20
			}, {
				y: '2009',
				a: 29,
				b: 50
			}, {
				y: '2010',
				a: 35,
				b: 22
			}, {
				y: '2011',
				a: 45,
				b: 70
			}, {
				y: '2012',
				a: 32,
				b: 26
			}, {
				y: '2013',
				a: 19,
				b: 75
			}, {
				y: '2014',
				a: 22,
				b: 35
			}, {
				y: '2015',
				a: 40,
				b: 65
			}, {
				y: '2016',
				a: 25,
				b: 10
			}],
			xkey: 'y',
			redraw: true,
			ykeys: ['a', 'b'],
			hideHover: 'auto',
			labels: ['Series A', 'Series B'],
			lineColors: ['#f1c40f', '#239a55']
		});
	};
	var chart = c3.generate({
		bindto: '#chart',
		color: {
			pattern: ['#239a55', '#0073aa', '#f1c40f']
		},
		data: {
			columns: [["Floor Covering", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2], ["Acoustic Walls", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3], ["Ceiling Systems", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8], ],
			type: 'donut',
			onclick: function (d, i) {
				console.log("onclick", d, i);
			},
			onmouseover: function (d, i) {
				console.log("onmouseover", d, i);
			},
			onmouseout: function (d, i) {
				console.log("onmouseout", d, i);
			}
		},
		donut: {
			title: "Continental Flooring"
		}
	});
	var chart = c3.generate({
		bindto: '#transection',
		data: {
			columns: [['Done', 150], ['Due', 180], ['Hold', 60]],
			type: 'pie',
			onclick: function (d, i) {
				console.log("onclick", d, i);
			},
			onmouseover: function (d, i) {
				console.log("onmouseover", d, i);
			},
			onmouseout: function (d, i) {
				console.log("onmouseout", d, i);
			}
		},
		color: {
			pattern: ['#239a55', '#0073aa', '#f1c40f']
		},
	});
});