import { Badge } from './badge';

export const BADGES: Badge[] = [
  { id: 1,
    name: 'SecKC Defcon 26',
    thumb: 'badges/defcon/26/SecKCDC26_P_FZ_700x466.png',
    description: 'Platform: WROOM Esp32 (WiFi, BLE) on board with 42 Charlie Plex LED.  Learn to hack your badge with Hack My Badge Instructions: Adding a LIPO and charger, and the NeoPixel Bling Ring',
    bigImage: 'badges/defcon/26/SecKCDC26_P_B_700x466.png',
    links:[{
      id: 1,
      linkText: 'WROOM ESP32 Document',
      linkUrl: 'http://esp-idf.readthedocs.io/en/latest/hw-reference/modules-and-boards.html',

    }],
    features:[
      'Several different LED patterns',
      'Hackable with Attachable Daughter Board',
      'FTDI connection using Arduino IDE',
      '#BadgeLife Shitty Add-On Connector',
      '2x AAA Battery',
      'Components SMD 1206 and 0603 Foot Print'
    ],
    tags: 'seckc defcon'
  },
  { id: 2,
    name: 'SecKC Speaker Badge',
    thumb: 'badges/seckc/speaker/2018/SecKCSpeaker_Front_700x466.png',
    description: 'Special Gift to Speakers at SecKC Meetings',
    links:[],
    features: [
      'Designed by: @RustyShackleford'
    ],
    bigImage: 'badges/seckc/speaker/2018/SecKCSpeaker_Front_700x466.png',
    tags: 'seckc'
  },
  { id: 3,
    name: 'BSides KC 2018',
    thumb: 'badges/bsides/2018/BSides2018_All_2_700x467.png',
    description: 'A charlieplex array of leds.  A different animation is displayed each time power is cycled or reset button is pressed',
    features: [
      'ATTiny85',
      '20 LED',
      'CharliePlex',
      'SMD 0603'
    ],
    bigImage: 'badges/bsides/2018/BSides2018_All_1_700x467.png',
    links: [{
      id: 1,
      linkText: 'Code Repository',
      linkUrl: 'https://github.com/BadgePiratesLLC/BSides2018'
    },
    {
      id: 2,
      linkText: 'BOM',
      linkUrl: 'assets/docs/bsides/2018/BSides2018_BOM.xlsx'
    },
    {
      id: 3,
      linkText: 'Code Repository',
      linkUrl: 'assets/docs/bsides/2018/BsidesSchematics.zip'
    }],
    tags: 'bsides'
  },
  { id: 4,
    name: 'SecKC Defcon 25',
    thumb: 'badges/defcon/25/Founder.jpg',
    description: 'SecKC DefCon 25 Hand Painted and Numbered Electronic Badge.',
    bigImage: 'badges/defcon/25/Human.jpg',
    links: [{
      id: 1,
      linkText: 'Code Repository',
      linkUrl: 'https://github.com/SecKC/Badge-DC25'
    },{
      id: 2,
      linkText: 'SparkFun Thing Diagram',
      linkUrl: 'https://github.com/flightgod/Badge-DC25/blob/master/References/ESP32ThingV1.pdf'
    },{
      id: 3,
      linkText: 'ESP32 Schematic',
      linkUrl: 'https://github.com/flightgod/Badge-DC25/blob/master/References/esp32-thing-schematic.pdf'
    },{
      id: 4,
      linkText: 'Spark Fun Hookup Guide',
      linkUrl: 'https://learn.sparkfun.com/tutorials/esp32-thing-hookup-guide?_ga=2.126652109.1326075509.1499385392-127753071.1494297406'
    },{
      id: 5,
      linkText: 'SecKC DC25 Badge Pin Out Diagram',
      linkUrl: 'assets/docs/defcon/25/BadgePCB_PinOut.jpg'
    },{
      id: 6,
      linkText: 'Badge Hack Instructions',
      linkUrl: 'https://docs.google.com/presentation/d/13U-f0hymwRhOrym1Y2iHbNA_zLyZ_SQkT3PhYQE_zig/edit?usp=sharing'
    }],
    features: [
      'SparkFun ESP32 Thing',
      'Wifi',
      'BLE',
      '5 Button',
      'lipo Battery',
      '128x64 OLED Screen'
    ],
    tags: 'seckc defcon'
  },
  { id: 5,
    name: 'Top Secret',
    thumb: 'TS1.png',
    description: '[redacted]',
    bigImage: 'TS1.png',
    links: [],
    features: [],
    tags: ''
  }
];
