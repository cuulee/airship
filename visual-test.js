const backstop = require('backstopjs');

backstop('test', {
  config: require("./backstop.config.js")(
    {
      "id": "backstop_default",
      "viewports": [
        {
          "label": "phone",
          "width": 320,
          "height": 480
        },
        {
          "label": "tablet",
          "width": 1024,
          "height": 768
        }
      ],
      "onBeforeScript": "puppet/onBefore.js",
      "onReadyScript": "puppet/onReady.js",
      "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
      },
      "report": ["browser"],
      "engine": "puppeteer",
      "engineOptions": {
        "args": ["--no-sandbox"]
      },
      "asyncCaptureLimit": 5,
      "asyncCompareLimit": 50,
      "debug": false,
      "debugWindow": false
    }
  )
});
