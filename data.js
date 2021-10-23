var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 925,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9134909635964696,
          "pitch": 0.4366454810507783,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 759.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3520951943237147,
          "pitch": 0.23206996204053,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.2400111186911218,
          "pitch": 0.32726777721507716,
          "rotation": 0,
          "target": "5-bed-1"
        },
        {
          "yaw": 0.022297983632192597,
          "pitch": 0.18333371627497108,
          "rotation": 0,
          "target": "3-suit-room-reception"
        },
        {
          "yaw": -0.1375718443105054,
          "pitch": 0.09599250045278396,
          "rotation": 0,
          "target": "4-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-suit-room-bed-room",
      "name": "suit room bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 925,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8322620089651149,
          "pitch": 0.187718709306413,
          "rotation": 0,
          "target": "3-suit-room-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9525925282745327,
          "pitch": 0.048022276157471566,
          "title": "bath room",
          "text": "attached&nbsp;"
        }
      ]
    },
    {
      "id": "3-suit-room-reception",
      "name": "suit room reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 925,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0904781455844965,
          "pitch": 0.508046404747656,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -0.8025734395601773,
          "pitch": 0.5834683911319853,
          "rotation": 0,
          "target": "2-suit-room-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8349779899761955,
          "pitch": 0.2511097981048458,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bed-1",
      "name": "bed 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 925,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3194553587051523,
          "pitch": 0.3161500281402656,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "faiz residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
