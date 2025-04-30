// Data/DataStore.js

const DataStore = {
  Visitors: {
    "Today": {
      data: [{ date: "April 29", value: 580 }],
      total: 580,
      percentChange: 12,
      previous: 518
    },
    "Yesterday": {
      data: [{ date: "April 28", value: 518 }],
      total: 518,
      percentChange: -15,
      previous: 610
    },
    "This week": {
      data: [
        { date: "April 23", value: 890 },
        { date: "April 24", value: 1100 },
        { date: "April 25", value: 950 },
        { date: "April 26", value: 780 },
        { date: "April 27", value: 610 },
        { date: "April 28", value: 518 },
        { date: "April 29", value: 580 }
      ],
      total: 5428,
      percentChange: 87,
      previous: 2904
    },
    "Last week": {
      data: [
        { date: "April 16", value: 420 },
        { date: "April 17", value: 380 },
        { date: "April 18", value: 410 },
        { date: "April 19", value: 450 },
        { date: "April 20", value: 398 },
        { date: "April 21", value: 420 },
        { date: "April 22", value: 426 }
      ],
      total: 2904,
      percentChange: 32,
      previous: 2200
    },
    "Last 7 days": {
      data: [
        { date: "April 23", value: 890 },
        { date: "April 24", value: 1100 },
        { date: "April 25", value: 950 },
        { date: "April 26", value: 780 },
        { date: "April 27", value: 610 },
        { date: "April 28", value: 518 },
        { date: "April 29", value: 580 }
      ],
      total: 5428,
      percentChange: 87,
      previous: 2904
    },
    "Last 30 days": {
      data: [
        { date: "Mar 1", value: 400 },
        { date: "Mar 2", value: 600 },
        { date: "Mar 3", value: 900 },
        { date: "Mar 4", value: 1200 },
        { date: "Mar 5", value: 1100 },
        { date: "Mar 6", value: 900 },
        { date: "Mar 7", value: 850 },
        { date: "Mar 8", value: 700 },
        { date: "Mar 9", value: 800 },
        { date: "Mar 10", value: 1300 },
        { date: "Mar 11", value: 1000 },
        { date: "Mar 12", value: 900 },
        { date: "Mar 13", value: 950 },
        { date: "Mar 14", value: 800 },
        { date: "Mar 15", value: 850 },
        { date: "Mar 16", value: 700 },
        { date: "Mar 17", value: 900 },
        { date: "Mar 18", value: 1000 },
        { date: "Mar 19", value: 1100 },
        { date: "Mar 20", value: 1800 },
        { date: "Mar 21", value: 1200 },
        { date: "Mar 22", value: 800 },
        { date: "Mar 23", value: 900 },
        { date: "Mar 24", value: 1100 },
        { date: "Mar 25", value: 1300 },
        { date: "Mar 26", value: 1000 },
        { date: "Mar 27", value: 1200 },
        { date: "Mar 28", value: 900 },
        { date: "Mar 29", value: 1100 },
        { date: "Mar 30", value: 1600 }
      ],
      total: 13490,
      percentChange: 469,
      previous: 897
    }
  },
  
  Connections: {
    "Today": {
      data: [{ date: "April 29", value: 230 }],
      total: 230,
      percentChange: 15,
      previous: 200
    },
    "Yesterday": {
      data: [{ date: "April 28", value: 200 }],
      total: 200,
      percentChange: -8,
      previous: 218
    },
    "This week": {
      data: [
        { date: "April 23", value: 310 },
        { date: "April 24", value: 3850 },
        { date: "April 25", value: 320 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 2550 },
        { date: "April 28", value: 20 },
        { date: "April 29", value: 230 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last week": {
      data: [
        { date: "April 16", value: 185 },
        { date: "April 17", value: 172 },
        { date: "April 18", value: 190 },
        { date: "April 19", value: 210 },
        { date: "April 20", value: 178 },
        { date: "April 21", value: 180 },
        { date: "April 22", value: 183 }
      ],
      total: 1298,
      percentChange: 28,
      previous: 1015
    },
    "Last 7 days": {
      data: [
        { date: "April 23", value: 310 },
        { date: "April 24", value: 380 },
        { date: "April 25", value: 320 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 250 },
        { date: "April 28", value: 200 },
        { date: "April 29", value: 230 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last 30 days": {
      data: [
        { date: "Mar 1", value: 150 },
        { date: "Mar 2", value: 220 },
        { date: "Mar 3", value: 310 },
        { date: "Mar 4", value: 450 },
        { date: "Mar 5", value: 420 },
        { date: "Mar 6", value: 3805 },
        { date: "Mar 7", value: 350 },
        { date: "Mar 8", value: 290 },
        { date: "Mar 9", value: 330 },
        { date: "Mar 10", value: 480 },
        { date: "Mar 11", value: 4109 },
        { date: "Mar 12", value: 370 },
        { date: "Mar 13", value: 390 },
        { date: "Mar 14", value: 320 },
        { date: "Mar 15", value: 340 },
        { date: "Mar 16", value: 280 },
        { date: "Mar 17", value: 350 },
        { date: "Mar 18", value: 410 },
        { date: "Mar 19", value: 4350 },
        { date: "Mar 20", value: 620 },
        { date: "Mar 21", value: 480 },
        { date: "Mar 22", value: 320 },
        { date: "Mar 23", value: 360 },
        { date: "Mar 24", value: 430 },
        { date: "Mar 25", value: 51 },
        { date: "Mar 26", value: 4150 },
        { date: "Mar 27", value: 470 },
        { date: "Mar 28", value: 360 },
        { date: "Mar 29", value: 4450 },
        { date: "Mar 30", value: 580 }
      ],
      total: 5180,
      percentChange: 289,
      previous: 1330
    }
  },
  
  Interactions: {
    "Today": {
      data: [{ date: "April 29", value: 920 }],
      total: 920,
      percentChange: 9,
      previous: 844
    },
    "Yesterday": {
      data: [{ date: "April 28", value: 844 }],
      total: 844,
      percentChange: -12,
      previous: 960
    },
    "This week": {
      data: [
        { date: "April 23", value: 310 },
        { date: "April 24", value: 3850 },
        { date: "April 25", value: 3065 },
        { date: "April 26", value: 245 },
        { date: "April 27", value: 2550 },
        { date: "April 28", value: 2065 },
        { date: "April 29", value: 2307 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last week": {
      data: [
        { date: "April 16", value: 97 },
        { date: "April 17", value: 255 },
        { date: "April 18", value: 190 },
        { date: "April 19", value: 652 },
        { date: "April 20", value: 178 },
        { date: "April 21", value: 180 },
        { date: "April 22", value: 153 }
      ],
      total: 1298,
      percentChange: 28,
      previous: 1015
    },
    "Last 7 days": {
      data: [
        { date: "April 23", value: 785 },
        { date: "April 24", value: 584 },
        { date: "April 25", value: 259 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 684 },
        { date: "April 28", value: 200 },
        { date: "April 29", value: 655 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last 30 days": {
      data: [
        { date: "Mar 1", value: 680 },
        { date: "Mar 2", value: 980 },
        { date: "Mar 3", value: 1420 },
        { date: "Mar 4", value: 1850 },
        { date: "Mar 5", value: 1720 },
        { date: "Mar 6", value: 1480 },
        { date: "Mar 7", value: 1320 },
        { date: "Mar 8", value: 1100 },
        { date: "Mar 9", value: 1250 },
        { date: "Mar 10", value: 1980 },
        { date: "Mar 11", value: 1560 },
        { date: "Mar 12", value: 1400 },
        { date: "Mar 13", value: 1480 },
        { date: "Mar 14", value: 1280 },
        { date: "Mar 15", value: 1350 },
        { date: "Mar 16", value: 1150 },
        { date: "Mar 17", value: 1420 },
        { date: "Mar 18", value: 1580 },
        { date: "Mar 19", value: 1740 },
        { date: "Mar 20", value: 2720 },
        { date: "Mar 21", value: 1980 },
        { date: "Mar 22", value: 1340 },
        { date: "Mar 23", value: 1480 },
        { date: "Mar 24", value: 1780 },
        { date: "Mar 25", value: 2080 },
        { date: "Mar 26", value: 1680 },
        { date: "Mar 27", value: 1920 },
        { date: "Mar 28", value: 1420 },
        { date: "Mar 29", value: 1740 },
        { date: "Mar 30", value: 2430 }
      ],
      total: 21670,
      percentChange: 378,
      previous: 4530
    }
  },
  
  Impressions: {
    "Today": {
      data: [{ date: "April 29", value: 3520 }],
      total: 3520,
      percentChange: 18,
      previous: 2983
    },
    "Yesterday": {
      data: [{ date: "April 28", value: 2983 }],
      total: 2983,
      percentChange: -8,
      previous: 3242
    },
    "This week": {
      data: [
        { date: "April 23", value: 310 },
        { date: "April 24", value: 3850 },
        { date: "April 25", value: 320 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 2550 },
        { date: "April 28", value: 20 },
        { date: "April 29", value: 230 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last week": {
      data: [
        { date: "April 16", value: 185 },
        { date: "April 17", value: 172 },
        { date: "April 18", value: 190 },
        { date: "April 19", value: 210 },
        { date: "April 20", value: 178 },
        { date: "April 21", value: 180 },
        { date: "April 22", value: 183 }
      ],
      total: 1298,
      percentChange: 28,
      previous: 1015
    },
    "Last 7 days": {
      data: [
        { date: "April 23", value: 785 },
        { date: "April 24", value: 584 },
        { date: "April 25", value: 259 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 684 },
        { date: "April 28", value: 200 },
        { date: "April 29", value: 655 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last 30 days": {
      data: [
        { date: "Mar 1", value: 1830 },
        { date: "Mar 2", value: 2650 },
        { date: "Mar 3", value: 3750 },
        { date: "Mar 4", value: 4980 },
        { date: "Mar 5", value: 4620 },
        { date: "Mar 6", value: 3920 },
        { date: "Mar 7", value: 3540 },
        { date: "Mar 8", value: 2940 },
        { date: "Mar 9", value: 3350 },
        { date: "Mar 10", value: 5240 },
        { date: "Mar 11", value: 4220 },
        { date: "Mar 12", value: 3780 },
        { date: "Mar 13", value: 3960 },
        { date: "Mar 14", value: 3420 },
        { date: "Mar 15", value: 3580 },
        { date: "Mar 16", value: 3040 },
        { date: "Mar 17", value: 3750 },
        { date: "Mar 18", value: 4180 },
        { date: "Mar 19", value: 4620 },
        { date: "Mar 20", value: 7240 },
        { date: "Mar 21", value: 5280 },
        { date: "Mar 22", value: 3550 },
        { date: "Mar 23", value: 3920 },
        { date: "Mar 24", value: 4720 },
        { date: "Mar 25", value: 5480 },
        { date: "Mar 26", value: 4420 },
        { date: "Mar 27", value: 5080 },
        { date: "Mar 28", value: 3750 },
        { date: "Mar 29", value: 4620 },
        { date: "Mar 30", value: 6420 }
      ],
      total: 56980,
      percentChange: 523,
      previous: 9150
    }
  },
  
  France: {
    "Today": {
      data: [{ date: "April 29", value: 120 }],
      total: 120,
      percentChange: 20,
      previous: 100
    },
    "Yesterday": {
      data: [{ date: "April 28", value: 100 }],
      total: 100,
      percentChange: -9,
      previous: 110
    },
    "This week": {
      data: [
        { date: "April 23", value: 310 },
        { date: "April 24", value: 3850 },
        { date: "April 25", value: 3065 },
        { date: "April 26", value: 245 },
        { date: "April 27", value: 2550 },
        { date: "April 28", value: 2065 },
        { date: "April 29", value: 2307 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },
    "Last week": {
      data: [
        { date: "April 16", value: 97 },
        { date: "April 17", value: 255 },
        { date: "April 18", value: 190 },
        { date: "April 19", value: 652 },
        { date: "April 20", value: 178 },
        { date: "April 21", value: 180 },
        { date: "April 22", value: 153 }
      ],
      total: 1298,
      percentChange: 28,
      previous: 1015
    },
    "Last 7 days": {
      data: [
        { date: "April 23", value: 785 },
        { date: "April 24", value: 584 },
        { date: "April 25", value: 259 },
        { date: "April 26", value: 280 },
        { date: "April 27", value: 684 },
        { date: "April 28", value: 200 },
        { date: "April 29", value: 655 }
      ],
      total: 1970,
      percentChange: 52,
      previous: 1298
    },

    "Last 30 days": {
      data: [
        { date: "Mar 1", value: 85 },
        { date: "Mar 2", value: 130 },
        { date: "Mar 3", value: 19 },
        { date: "Mar 4", value: 250 },
        { date: "Mar 5", value: 230 },
        { date: "Mar 6", value: 20 },
        { date: "Mar 7", value: 180 },
        { date: "Mar 8", value: 150 },
        { date: "Mar 9", value: 170 },
        { date: "Mar 10", value: 270 },
        { date: "Mar 11", value: 2108 },
        { date: "Mar 12", value: 1550 },
        { date: "Mar 13", value: 200 },
        { date: "Mar 14", value: 170 },
        { date: "Mar 15", value: 180 },
        { date: "Mar 16", value: 150 },
        { date: "Mar 17", value: 190 },
        { date: "Mar 18", value: 2810 },
        { date: "Mar 19", value: 20 },
        { date: "Mar 20", value: 360 },
        { date: "Mar 21", value: 2650 },
        { date: "Mar 22", value: 180 },
        { date: "Mar 23", value: 190 },
        { date: "Mar 24", value: 4540 },
        { date: "Mar 25", value: 280 },
        { date: "Mar 26", value: 221 },
        { date: "Mar 27", value: 2580 },
        { date: "Mar 28", value: 190 },
        { date: "Mar 29", value: 238 },
        { date: "Mar 30", value: 320 }
      ],
      total: 2905,
      percentChange: 312,
      previous: 705
    }
  }
};

export default DataStore;
