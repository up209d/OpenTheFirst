/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'dosis, sans-serif': '<script src=\"http://use.edgefonts.net/dosis:n8,n3,n2,n7,n6,n4,n5:all.js\"></script>',
            'doppio-one, sans-serif': '<script src=\"http://use.edgefonts.net/doppio-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.4.js",
            js+"jquery.transit.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Circle-RotatingPathOut',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['73px', '24px', '500px', '500px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.15447154471545',
                            fill: ["rgba(115,115,115,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'YearBullets',
                            symbolName: 'YearBullets',
                            type: 'rect',
                            rect: ['73', '24', '525', '500', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['3','3']]
                        },
                        {
                            id: 'DecadeTitle',
                            type: 'text',
                            rect: ['223px', '208px', '200px', '100px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; font-size: 150px; font-weight: bold; line-height: 89px;\"><span style=\"font-size: 140px; font-family: doppio-one, sans-serif;\">88</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "29px", "", "none"]
                        },
                        {
                            id: 'DecadeSubTitle',
                            type: 'text',
                            rect: ['241px', '314px', '162px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif;\">SELECT DECADE</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'IncreaseSymbol',
                            symbolName: 'IncreaseSymbol',
                            type: 'rect',
                            rect: ['286', '160', '73', '50', 'auto', 'auto']
                        },
                        {
                            id: 'DecreaseSymbol',
                            symbolName: 'DecreaseSymbol',
                            type: 'rect',
                            rect: ['286', '340', '73', '50', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage-YearSelector}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '600px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8250,
                    autoPlay: false,
                    data: [
                        [
                            "eid647",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Circle-RotatingPathOut}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2026",
                            "-webkit-transform-origin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35027",
                            "-moz-transform-origin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35028",
                            "-ms-transform-origin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35029",
                            "msTransformOrigin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35030",
                            "-o-transform-origin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35031",
                            "transform-origin",
                            2250,
                            0,
                            "easeOutQuad",
                            "${YearBullets}",
                            [47.62,49.9],
                            [47.62,49.9],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid852",
                            "opacity",
                            250,
                            2000,
                            "easeOutQuad",
                            "${YearBullets}",
                            '0',
                            '1'
                        ],
                        [
                            "eid648",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Circle-RotatingPathOut}",
                            '0.15447154471545',
                            '0.15447154471545'
                        ],
                        [
                            "eid16941",
                            "opacity",
                            2000,
                            2250,
                            "swing",
                            "${DecadeTitle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid34078",
                            "skewX",
                            4250,
                            0,
                            "swing",
                            "${DecadeTitle}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid34418",
                            "scaleX",
                            0,
                            2000,
                            "linear",
                            "${YearBullets}",
                            '3',
                            '1'
                        ],
                        [
                            "eid16942",
                            "opacity",
                            2000,
                            2250,
                            "swing",
                            "${DecadeSubTitle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2028",
                            "rotateZ",
                            0,
                            4250,
                            "easeInOutBack",
                            "${YearBullets}",
                            '0deg',
                            '-360deg'
                        ],
                        [
                            "eid34419",
                            "scaleY",
                            0,
                            2000,
                            "linear",
                            "${YearBullets}",
                            '3',
                            '1'
                        ],
                            [ "eid34810", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${IncreaseSymbol}', [0] ] ],
                            [ "eid34811", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${DecreaseSymbol}', [0] ] ],
                            [ "eid749", "trigger", 250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullets}', [] ] ],
                            [ "eid19544", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${IncreaseSymbol}', [] ] ],
                            [ "eid19543", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${DecreaseSymbol}', [] ] ],
                            [ "eid32486", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullets}', [1000] ] ]
                    ]
                }
            },
            "YearBullet-00": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            userClass: 'BulletArrow',
                            id: 'BulletArrow',
                            type: 'image',
                            rect: ['11px', '14px', '31px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'svg/Arrow.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'YearCircleGlow',
                            opacity: '0',
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'ellipse',
                            stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['0', '0', '50', '50', 'auto', 'auto'],
                            id: 'YearBorder',
                            symbolName: 'YearBorder',
                            type: 'rect'
                        },
                        {
                            rect: ['5px', '10px', '40px', '30px', 'auto', 'auto'],
                            userClass: 'YearText',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif;\">00</span></p>',
                            id: 'YearText',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['-37px', '10px', '40px', '30px', 'auto', 'auto'],
                            userClass: 'YearTextOut',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif;\">00</span></p>',
                            id: 'YearTextOut',
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: false,
                    data: [
                        [
                            "eid1817",
                            "opacity",
                            0,
                            500,
                            "easeInCubic",
                            "${YearText}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4300",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${YearCircleGlow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4301",
                            "opacity",
                            2000,
                            500,
                            "easeOutQuad",
                            "${YearCircleGlow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5965",
                            "opacity",
                            3000,
                            250,
                            "easeInQuad",
                            "${YearCircleGlow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5966",
                            "opacity",
                            3250,
                            250,
                            "easeOutQuad",
                            "${YearCircleGlow}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4588",
                            "border-width",
                            0,
                            0,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid4587",
                            "background-color",
                            0,
                            0,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid4365",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            '0.5',
                            '1.5'
                        ],
                        [
                            "eid5964",
                            "scaleX",
                            3000,
                            500,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid4366",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            '0.5',
                            '1.5'
                        ],
                        [
                            "eid5967",
                            "scaleY",
                            3000,
                            500,
                            "easeOutBack",
                            "${YearCircleGlow}",
                            '0.5',
                            '1.2'
                        ],
                        [
                            "eid16104",
                            "filter.blur",
                            0,
                            4250,
                            "linear",
                            "${YearCircleGlow}",
                            '5px',
                            '4px'
                        ],
                        [
                            "eid16160",
                            "opacity",
                            0,
                            500,
                            "easeInCubic",
                            "${YearTextOut}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4297",
                            "border-color",
                            0,
                            0,
                            "easeInCubic",
                            "${YearCircleGlow}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid16557",
                            "left",
                            2000,
                            0,
                            "easeInBack",
                            "${YearTextOut}",
                            '-37px',
                            '-37px'
                        ],
                            [ "eid9053", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBorder}', [] ] ]
                    ]
                }
            },
            "YearBullets": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '500px', '500px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Circle-RotatingPath',
                            opacity: '0.15447154471545',
                            display: 'none',
                            fill: ['rgba(115,115,115,1.00)']
                        },
                        {
                            type: 'rect',
                            userClass: 'YearBulletAll activated',
                            id: 'YearBullet-00',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-20']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-01',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-40']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-02',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-90']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-03',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-80']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-04',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-100']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-05',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-120']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-06',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-140']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-07',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-160']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-08',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            transform: [[], ['-180']],
                            userClass: 'YearBulletAll',
                            id: 'YearBullet-09',
                            symbolName: 'YearBullet-00',
                            cursor: 'pointer',
                            rect: ['435px', '225px', '50', '50', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '525px', '500px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: false,
                    data: [
                        [
                            "eid17244",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17258",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35032",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35033",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35034",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35035",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35036",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid132",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-06}",
                            '0deg',
                            '-180deg'
                        ],
                        [
                            "eid135",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-09}",
                            '0deg',
                            '-270deg'
                        ],
                        [
                            "eid17240",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid133",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-07}",
                            '0deg',
                            '-210deg'
                        ],
                        [
                            "eid127",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-01}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid17261",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35037",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35038",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35039",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35040",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35041",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-00}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid134",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-08}",
                            '0deg',
                            '-240deg'
                        ],
                        [
                            "eid17264",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35042",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35043",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35044",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35045",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35046",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17246",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17266",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35047",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35048",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35049",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35050",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35051",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-05}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17239",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17238",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-07}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17265",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35052",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35053",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35054",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35055",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35056",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid117",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${YearBullet-00}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid131",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-05}",
                            '0deg',
                            '-150deg'
                        ],
                        [
                            "eid17262",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35057",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35058",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35059",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35060",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35061",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17259",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35062",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35063",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35064",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35065",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35066",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-06}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid236",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Circle-RotatingPath}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17245",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-08}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17267",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35067",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35068",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35069",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35070",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35071",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17241",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-09}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid646",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Circle-RotatingPath}",
                            '0.15447154471545',
                            '0.15447154471545'
                        ],
                        [
                            "eid17243",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17263",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35072",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35073",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35074",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35075",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35076",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-01}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17247",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-04}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid129",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-03}",
                            '0deg',
                            '-90deg'
                        ],
                        [
                            "eid130",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-04}",
                            '0deg',
                            '-120deg'
                        ],
                        [
                            "eid17242",
                            "left",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-03}",
                            '435px',
                            '435px'
                        ],
                        [
                            "eid17260",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35077",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35078",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35079",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35080",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid35081",
                            "transform-origin",
                            0,
                            0,
                            "easeInBack",
                            "${YearBullet-02}",
                            [-390.67,47.33],
                            [-390.67,47.33],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid128",
                            "rotateZ",
                            0,
                            2000,
                            "easeInBack",
                            "${YearBullet-02}",
                            '0deg',
                            '-60deg'
                        ],
                            [ "eid1605", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-09}', [] ] ],
                            [ "eid1613", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-08}', [] ] ],
                            [ "eid1611", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-07}', [] ] ],
                            [ "eid1612", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-06}', [] ] ],
                            [ "eid1610", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-05}', [] ] ],
                            [ "eid1606", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-04}', [] ] ],
                            [ "eid1607", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-03}', [] ] ],
                            [ "eid1608", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-02}', [] ] ],
                            [ "eid1609", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-01}', [] ] ],
                            [ "eid1614", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${YearBullet-00}', [] ] ]
                    ]
                }
            },
            "YearBorder": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'YearCircle',
                            opacity: '0',
                            userClass: 'YearCircle',
                            rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                            stroke: [0, 'rgba(255,255,255,1.00)', 'solid'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1304",
                            "opacity",
                            0,
                            1000,
                            "easeInCubic",
                            "${YearCircle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4126",
                            "background-color",
                            0,
                            2000,
                            "easeInCubic",
                            "${YearCircle}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid4238",
                            "border-width",
                            0,
                            2000,
                            "easeInCubic",
                            "${YearCircle}",
                            '0px',
                            '4px'
                        ]
                    ]
                }
            },
            "DecreaseSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'DecreaseButtonGlow',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '73px', '50px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'svg/Arrow.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            rect: ['0px', '0px', '73px', '50px', 'auto', 'auto'],
                            id: 'DecreaseButton',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/ArrowW.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 1005,
                    autoPlay: false,
                    data: [
                        [
                            "eid18876",
                            "top",
                            0,
                            1005,
                            "swing",
                            "${DecreaseButton}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid30819",
                            "top",
                            0,
                            1005,
                            "swing",
                            "${DecreaseButtonGlow}",
                            '0px',
                            '20px'
                        ],
                        [
                            "eid18816",
                            "opacity",
                            0,
                            1005,
                            "swing",
                            "${DecreaseButton}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30821",
                            "filter.blur",
                            0,
                            0,
                            "swing",
                            "${DecreaseButtonGlow}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid30820",
                            "opacity",
                            0,
                            500,
                            "swing",
                            "${DecreaseButtonGlow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30822",
                            "opacity",
                            500,
                            505,
                            "swing",
                            "${DecreaseButtonGlow}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "IncreaseSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'IncreaseButtonGlow',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '73px', '50px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'svg/Arrow.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '73px', '50px', 'auto', 'auto'],
                            id: 'IncreaseButton',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/ArrowW.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '50px']
                        }
                    }
                },
                timeline: {
                    duration: 1005,
                    autoPlay: false,
                    data: [
                        [
                            "eid18815",
                            "opacity",
                            0,
                            1005,
                            "swing",
                            "${IncreaseButton}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18877",
                            "top",
                            0,
                            1005,
                            "swing",
                            "${IncreaseButton}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid30933",
                            "top",
                            0,
                            1005,
                            "swing",
                            "${IncreaseButtonGlow}",
                            '0px',
                            '-20px'
                        ],
                        [
                            "eid30936",
                            "filter.blur",
                            0,
                            0,
                            "swing",
                            "${IncreaseButtonGlow}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid30934",
                            "opacity",
                            0,
                            500,
                            "swing",
                            "${IncreaseButtonGlow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30935",
                            "opacity",
                            500,
                            505,
                            "swing",
                            "${IncreaseButtonGlow}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("YearSelector_edgeActions.js");
})("OTF-YearSelector");
