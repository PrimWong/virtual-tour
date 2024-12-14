var APP_DATA = {
  "scenes": [
    {
      "id": "0-house",
      "name": "house",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8004837368655551,
        "pitch": 0.048092853945970404,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.5027268228129076,
          "pitch": 0.6524414004543573,
          "rotation": 0,
          "target": "1-house-wide"
        },
        {
          "yaw": -2.414452348828611,
          "pitch": 0.44118882806684745,
          "rotation": 0,
          "target": "2-house_side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7043125331842326,
          "pitch": 0.007384677820279961,
          "title": "Thai styled wooden house",
          "text": "Karen people usually live in the wooden house.&nbsp;We aim to preserve the Karen's houses, heritage, and living style in this virtual tour."
        }
      ]
    },
    {
      "id": "1-house-wide",
      "name": "house-wide",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2489053162219417,
          "pitch": 0.24416726310851722,
          "rotation": 0,
          "target": "0-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-house_side",
      "name": "house_side",
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
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9969088510570288,
          "pitch": 0.36614792637478466,
          "rotation": 0,
          "target": "0-house"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "House_Virtual_Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
