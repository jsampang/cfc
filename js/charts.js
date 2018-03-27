'use strict';
$(document).ready(function () {
	var myChart = echarts.init(document.getElementById('analythics-graph'));
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['Floor Coverings', 'Ceiling Systems', 'Acoustic Wall Panels']
		},
		toolbox: {
			show: false,
			feature: {
				mark: {
					show: true
				},
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar', 'stack', 'tiled']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		color: ["#0073aa", "#59e896", "#2ecc71"],
		calculable: true,
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: 'Acoustic Wall Panels',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					areaStyle: {
						type: 'default'
					}
				}
			},
			data: [10, 12, 21, 54, 260, 830, 710]
		}, {
			name: 'Ceiling Systems',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					areaStyle: {
						type: 'default'
					}
				}
			},
			data: [30, 182, 434, 791, 390, 30, 10]
		}, {
			name: 'Floor Coverings',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					areaStyle: {
						type: 'default'
					}
				}
			},
			data: [1320, 1132, 601, 234, 120, 90, 20]
		}],
		grid: {
			zlevel: 0,
			z: 0,
			x: 40,
			y: 40,
			x2: 40,
			y2: 40,
			backgroundColor: 'rgba(0,0,0,0)',
			borderColor: '#fff',
		},
	};
	myChart.setOption(option);
	$(window).resize(function () {
		$(".resource-barchart1").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
			type: 'bar',
			barWidth: '12px',
			height: '70px',
			barColor: '#04e0b4',
			tooltipClassname: 'abc'
		});
		$(".resource-barchart2").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
			type: 'bar',
			barWidth: '12px',
			height: '70px',
			barColor: '#fcd43d',
			tooltipClassname: 'abc'
		});
		$(".resource-barchart3").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
			type: 'bar',
			barWidth: '12px',
			height: '70px',
			barColor: '#0393d8',
			tooltipClassname: 'abc'
		});
	});
});