(function ($) {

  "use strict";

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  new WOW().init();


  $(window).on('scroll', function () {
    function isScrollIntoView(elem, index) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(window).height() * .5;
      if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
        $(elem).addClass('active');
      }
      if (!(elemBottom <= docViewBottom)) {
        $(elem).removeClass('active');
      }
      var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
      var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * .5;
      $(MainTimelineContainer).find('.inner').css('height', MainTimelineContainerBottom + 'px');
    }
    var timeline = $('#vertical-scrollable-timeline li');
    Array.from(timeline).forEach(isScrollIntoView);
  });

})(window.jQuery);


$(function () {


  // =====================================
  // Profit
  // =====================================
  // var chart = {
  //   series: [{
  //       name: "Earnings this month:",
  //       data: [355, 390, 300, 350, 390, 180, 355, 390]
  //     },
  //     {
  //       name: "Expense this month:",
  //       data: [280, 250, 325, 215, 250, 310, 280, 250]
  //     },
  //   ],

  //   chart: {
  //     type: "bar",
  //     height: 345,
  //     offsetX: -15,
  //     toolbar: {
  //       show: true
  //     },
  //     foreColor: "#adb0bb",
  //     fontFamily: 'inherit',
  //     sparkline: {
  //       enabled: false
  //     },
  //   },


  //   colors: ["#5D87FF", "#49BEFF"],


  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: "35%",
  //       borderRadius: [6],
  //       borderRadiusApplication: 'end',
  //       borderRadiusWhenStacked: 'all'
  //     },
  //   },
  //   markers: {
  //     size: 0
  //   },

  //   dataLabels: {
  //     enabled: false,
  //   },


  //   legend: {
  //     show: false,
  //   },


  //   grid: {
  //     borderColor: "rgba(0,0,0,0.1)",
  //     strokeDashArray: 3,
  //     xaxis: {
  //       lines: {
  //         show: false,
  //       },
  //     },
  //   },

  //   xaxis: {
  //     type: "category",
  //     categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
  //     labels: {
  //       style: {
  //         cssClass: "grey--text lighten-2--text fill-color"
  //       },
  //     },
  //   },


  //   yaxis: {
  //     show: true,
  //     min: 0,
  //     max: 400,
  //     tickAmount: 4,
  //     labels: {
  //       style: {
  //         cssClass: "grey--text lighten-2--text fill-color",
  //       },
  //     },
  //   },
  //   stroke: {
  //     show: true,
  //     width: 3,
  //     lineCap: "butt",
  //     colors: ["transparent"],
  //   },


  //   tooltip: {
  //     theme: "light"
  //   },

  //   responsive: [{
  //     breakpoint: 600,
  //     options: {
  //       plotOptions: {
  //         bar: {
  //           borderRadius: 3,
  //         }
  //       },
  //     }
  //   }]


  // };

  // var chart = new ApexCharts(document.querySelector("#chart"), chart);
  // chart.render();


  // =====================================
  // Breakup
  // =====================================
  // var breakup = {
  //   color: "#adb5bd",
  //   series: [38, 40, 25],
  //   labels: ["2022", "2021", "2020"],
  //   chart: {
  //     width: 180,
  //     type: "donut",
  //     fontFamily: "Plus Jakarta Sans', sans-serif",
  //     foreColor: "#adb0bb",
  //   },
  //   plotOptions: {
  //     pie: {
  //       startAngle: 0,
  //       endAngle: 360,
  //       donut: {
  //         size: '75%',
  //       },
  //     },
  //   },
  //   stroke: {
  //     show: false,
  //   },

  //   dataLabels: {
  //     enabled: false,
  //   },

  //   legend: {
  //     show: false,
  //   },
  //   colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

  //   responsive: [{
  //     breakpoint: 991,
  //     options: {
  //       chart: {
  //         width: 150,
  //       },
  //     },
  //   }, ],
  //   tooltip: {
  //     theme: "dark",
  //     fillSeriesColor: false,
  //   },
  // };

  // var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  // chart.render();



  // // =====================================
  // // Earning
  // // =====================================
  // var earning = {
  //   chart: {
  //     id: "sparkline3",
  //     type: "area",
  //     height: 60,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: "sparklines",
  //     fontFamily: "Plus Jakarta Sans', sans-serif",
  //     foreColor: "#adb0bb",
  //   },
  //   series: [{
  //     name: "Earnings",
  //     color: "#49BEFF",
  //     data: [25, 66, 20, 40, 12, 58, 20],
  //   }, ],
  //   stroke: {
  //     curve: "smooth",
  //     width: 2,
  //   },
  //   fill: {
  //     colors: ["#f3feff"],
  //     type: "solid",
  //     opacity: 0.05,
  //   },

  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     theme: "dark",
  //     fixed: {
  //       enabled: true,
  //       position: "right",
  //     },
  //     x: {
  //       show: false,
  //     },
  //   },
  // };
  // new ApexCharts(document.querySelector("#earning"), earning).render();
})



var options = {
  series: [{
  name: 'experience',
  data: [2.3, 3.1, 4.0, 10.1]
}],
  chart: {
  height: 350,
  type: 'bar',
  height: '210px' ,

},
plotOptions: {
  bar: {
    borderRadius: 4,
    dataLabels: {
      position: 'top', // top, center, bottom
    },
  }
},
dataLabels: {
  enabled: true,
  formatter: function (val) {
    return val + "%";
  },
  offsetY: -20,
  style: {
    fontSize: '12px',
    colors: ["#304758"]
  }
},

sparkline: {
  enabled: true
},

xaxis: {
  categories: [""],
  position: 'top',
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  crosshairs: {
    fill: {
      type: 'gradient',
      gradient: {
        colorFrom: '#EBEFF5',
        colorTo: '#BED1E6',
        stops: [0, 50 ,100],
        opacityFrom: 0.4,
        opacityTo: 0.5,
      }
    }
  },
  tooltip: {
    enabled: true,
  }
},

yaxis: {
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  labels: {
    show: false,
    formatter: function (val) {
      return val + "%";
    }
  },
  title: {
    text: 'Experience Years',
  },


},
colors: ["#8A1245", "#8A1245"],

// title: {
//   text: 'Experience Years',
//   floating: true,
//   offsetY: 330,
//   align: 'center',
//   style: {
//     color: '#444'
//   }
// }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


 
var options = {
  series: [76],
  chart: {
  type: 'radialBar',
  height: '260px' ,
  offsetY: -20,
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
      background: "#231F20",
      strokeWidth: '97%',
      margin: 5, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 1,
        blur: 2
      }
    },
    dataLabels: {
      name: {
        show: false
      },
      value: {
        offsetY: -2,
        fontSize: '22px'
      }
    }
  }
},
grid: {
  padding: {
    top: -10
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    shadeIntensity: 0.4,
    inverseColors: false,
    colorFrom: '#BCBCBC',
    colorTo: '#231F20',
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 50, 53, 91]
  },
},
colors: ["#8A1245", "#8A1245"],
labels: ['Applications'],
};

var chart = new ApexCharts(document.querySelector("#chart-2"), options);
chart.render();

  var earning = {
    chart: {
      type: "area",
      height: 210,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#8A1245",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();

  var sector = {
    chart: {
      type: "area",
      height: 280,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "sectors",
        color: "#8A1245",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#chart-4"), sector).render();



  var optionsQualifications = {
    series: [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }],
    chart: {
    height: 350,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ["#8A1245", "#8A1245"],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
      'Amber',
      ['Peter', 'Brown'],
      ['Mary', 'Evans'],
      ['David', 'Wilson'],
      ['Lily', 'Roberts'], 
    ],
    labels: {
      style: {
        colors: ["#8A1245", "#8A1245"],
        fontSize: '12px'
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#qualifications"), optionsQualifications);
  chart.render();

  var optionsPopular = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width: 380,
    type: 'polarArea',
    colors: ["#8A1245", "#8A1245"],
  },
  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1,
    colors: [ "#231F20","#8A1245","#BA8748"],

  },
  colors: ["#8A1245", "#8A1245"],
  stroke: {
    width: 1,
    colors: ["#8A1245", "#8A1245"],
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#popular"), optionsPopular);
  chart.render();




  var optionsPopular2 = {
    series: [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }],
    chart: {
    height: 350,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ["#8A1245", "#8A1245"],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      ['John', 'Doe'],
      ['Joe', 'Smith'],
      ['Jake', 'Williams'],
      'Amber',
      ['Peter', 'Brown'],
      ['Mary', 'Evans'],
      ['David', 'Wilson'],
      ['Lily', 'Roberts'], 
    ],
    labels: {
      style: {
        colors: ["#8A1245", "#8A1245"],
        fontSize: '12px'
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#popular-2"), optionsPopular2);
  chart.render();