new fullpage("#fullpage", {
  sectionsColor: ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241"],
  navigation: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  dragAndMove:true,
  verticalCentered:true,
  parallax:true,

  onLeave: function(origin, destination, direction) {
    var leavingSection = this;
    
    //after leaving section 2
    if (origin.index == 1 && direction == "down") {
      create();
    } else if (origin.index == 3 && direction == "up") {
      create();
    }
  }
});

$(window).on('load resize', function () {
  　canvas_resize();
    create();
  });

canvas_resize();
create();

var canvas;
var container;
var myChart;

function canvas_resize(){
  canvas = document.getElementById('c1');
  container = document.getElementById('SKill__Contents__Chart');
  create();
}
 
function create() {
  container = document.getElementById('SKill__Contents__Chart');

  if(myChart)
  {
    myChart.destroy();
  }

   var ctx = canvas.getContext('2d');

   ctx.canvas.width = container.clientWidth;
   ctx.canvas.height = container.clientHeight;

   var fontSize = Math.round(container.clientWidth / 26);

   myChart = new Chart(ctx, {
      type: "horizontalBar", // 水平棒グラフ
      data: {
          labels:  ["C#", "MySQL", "HTML&CSS", "Jquery","Vue.js", "Laravel", "Linux","GitHub","Vps","Aws"],
          datasets: [
              {
                  data: [6, 4, 5, 3, 3,5,4,3,2,2],
                  backgroundColor: ["#ee6c4d", "#ee6c4d", "#ee6c4d", "#ee6c4d", "#ee6c4d", "#ee6c4d","#ee6c4d","#ee6c4d","#ee6c4d","#ee6c4d"]
              }
          ]
      },

      options: {
        legend: {
          display: false
       },
        tooltips: {enabled: false},
        hover: {mode: null},
          responsive: true,
          maintainAspectRatio: true,

          scales: {
            xAxes: [ // Ｘ軸のオプション
                {
                    ticks: {
                        min: 0,
                        max:10,
                        stepSize:1,               
                  }
                }
            ],
            yAxes: [{
              ticks: {
                  fontSize: fontSize
              }
          }]                     
          }
      }
  });
}
