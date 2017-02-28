var containers = document.getElementsByClassName('chart');

var option = [{
  series: [{
    type: 'liquidFill',
    data: [0.75],
    radius: '100%',
    amplitude: 10,
    outline: {
      show: false
    },
    label: {
      normal: {
        formatter: 'HTML/CSS',
        textStyle: {
          fontSize: 25,
          fontFamily: 'Lobster Two'
        }
      }
    }
  }]
},{
  series: [{
    type: 'liquidFill',
    data: [0.6],
    radius: '100%',
    amplitude: 10,
    outline: {
      show: false
    },
    label: {
      normal: {
        formatter: 'javascript',
        textStyle: {
          fontSize: 25,
          fontFamily: 'Lobster Two'
        }
      }
    }
  }]
},{
  series: [{
    type: 'liquidFill',
    data: [0.65],
    radius: '100%',
    amplitude: 10,
    outline: {
      show: false
    },
    label: {
      normal: {
        formatter: 'Bootstrap',
        textStyle: {
          fontSize: 25,
          fontFamily: 'Lobster Two'
        }
      }
    }
  }]
}];
window.onload = function(){
  var charts = [];
  for (var i=0;i<option.length; ++i){
    var chart = echarts.init(containers[i]);
    chart.setOption(option[i]);
    charts.push(chart);
  }
};