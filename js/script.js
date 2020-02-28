new fullpage("#fullpage", {
  sectionsColor: ["#3D5A80", "#98C1D9", "#E0FBFC", "#EE6C4D", "#293241"],
  navigation: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  dragAndMove:true,

  /*
  origin : イベント時のセッションNO
  destination : ?
  direction : イベントのup down
   */
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


function create() {
  var ctx = document.getElementById("c1");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: "",
      datasets: [
        {
          backgroundColor: ["#ee6c4d", "#e0fbfc"],
          borderColor: ["black",'black'],
          data: [70, 30]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: "easeInOutCubic"
      }
    }
  });

  var ctx = document.getElementById("c2");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: "",
      datasets: [
        {
          backgroundColor: ["#ee6c4d", "#e0fbfc"],
          borderColor: ["black",'black'],
          data: [50, 50]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: "easeInOutCubic"
      }
    }
  });

  var ctx = document.getElementById("c3");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: "",
      datasets: [
        {
          backgroundColor: ["#ee6c4d", "#e0fbfc"],
          borderColor: ["black",'black'],
          data: [60, 40]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: "easeInOutCubic"
      }
    }
  });

  var ctx = document.getElementById("c4");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: "",
      datasets: [
        {
          backgroundColor: ["#ee6c4d", "#e0fbfc"],
          borderColor: ["black",'black'],
          data: [40, 60]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: "easeInOutCubic"
      }
    }
  });

  var ctx = document.getElementById("c5");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: "",
      datasets: [
        {
          backgroundColor: ["#ee6c4d", "#e0fbfc"],
          borderColor: ["black",'black'],
          data: [40, 60]
        }
      ]
    },
    options: {
      cutoutPercentage: 70,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: "easeInOutCubic"
      }
    }
  });
};
 