/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'doppio-one, sans-serif': '<script src=\"http://use.edgefonts.net/doppio-one:n4:all.js\"></script>',
            'dosis, sans-serif': '<script src=\"http://use.edgefonts.net/dosis:n8,n3,n2,n7,n6,n4,n5:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.4.js"
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
                            id: 'BG_Images',
                            symbolName: 'BG_Images',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'VenueStage',
                            symbolName: 'VenueStage',
                            type: 'rect',
                            rect: ['-1', '-56', '1920', '1191', 'auto', 'auto']
                        },
                        {
                            id: 'Menu',
                            type: 'image',
                            rect: ['1775px', '47px', '64px', '112px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Menu.svg",'0px','0px']
                        },
                        {
                            id: 'Timeline',
                            type: 'image',
                            rect: ['129px', '124px', '150px', '150px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Venue.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">HISTORY EVENTS</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">VENUE</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage-VenueEvent}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(51,51,51,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    data: [
                            [ "eid946", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${VenueStage}', [] ] ],
                            [ "eid15845", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BG_Images}', [0] ] ]
                    ]
                }
            },
            "VenueStage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.00486', '0']],
                            rect: ['133px', '0px', '762px', '569px', 'auto', 'auto'],
                            userClass: 'StadiumInset',
                            type: 'image',
                            id: 'Milton2',
                            opacity: '0',
                            clip: 'rect(0px 205.99951171875px 569px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/Milton.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.002', '0']],
                            rect: ['273px', '0px', '917px', '569px', 'auto', 'auto'],
                            userClass: 'StadiumInset',
                            type: 'image',
                            id: 'MelPark',
                            opacity: '0',
                            clip: 'rect(0px 269px 569px 66px)',
                            fill: ['rgba(0,0,0,0)', 'images/MelPark.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.00373', '0']],
                            rect: ['338px', '0px', '869px', '569px', 'auto', 'auto'],
                            userClass: 'StadiumInset',
                            type: 'image',
                            id: 'WCity',
                            opacity: '0',
                            clip: 'rect(7.875411033630371px 409px 569px 204px)',
                            fill: ['rgba(0,0,0,0)', 'images/WCity.JPG', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['677px', '0px', '1372px', '569px', 'auto', 'auto'],
                            userClass: 'StadiumInset',
                            type: 'image',
                            id: 'Koo',
                            opacity: '0',
                            clip: 'rect(0px 278px 569px 70px)',
                            fill: ['rgba(0,0,0,0)', 'images/Koo.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['869px', '0px', '1012px', '569px', 'auto', 'auto'],
                            userClass: 'StadiumInset',
                            type: 'image',
                            id: 'Rod',
                            opacity: '0',
                            clip: 'rect(0px 910px 569px 86px)',
                            fill: ['rgba(0,0,0,0)', 'images/Rod.jpg', '0px', '0px']
                        },
                        {
                            rect: ['131px', '757px', '1648px', '190px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'BG',
                            opacity: '0.75',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['152', '1200px', '164', '130', 'auto', 'auto'],
                            id: 'MilGroup',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '85px', '163px', '45px', 'auto', 'auto'],
                                id: '_1969',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(213, 253, 52); font-family: dosis, sans-serif; font-size: 20px;\">1969</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '164px', '110px', 'auto', 'auto'],
                                id: 'Milton',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Milton Tennis Court</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['356', '1200px', '164', '147', 'auto', 'auto'],
                            id: 'MelGroup',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '85px', '158px', '62px', 'auto', 'auto'],
                                id: '_1988',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(213, 253, 52); font-family: dosis, sans-serif; font-size: 20px;\">1988-Present</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '164px', '62px', 'auto', 'auto'],
                                id: 'Melbourne',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Melbourne </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Park</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['562', '1200px', '158', '147', 'auto', 'auto'],
                            id: 'WhiteGroup',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '85px', '158px', '62px', 'auto', 'auto'],
                                id: '_1970',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(213, 253, 52); font-family: dosis, sans-serif; font-size: 20px;\">1970- 1971</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '158px', '62px', 'auto', 'auto'],
                                id: 'WhiteCity',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">White City</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Court</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['768', '1200px', '158', '147', 'auto', 'auto'],
                            id: 'KooGroup',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '85px', '158px', '62px', 'auto', 'auto'],
                                id: '_1972',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(213, 253, 52); font-family: dosis, sans-serif; font-size: 20px;\">1972- 1987</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '158px', '62px', 'auto', 'auto'],
                                id: 'Kooyong',
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Kooyong</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Court</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['980', '1200px', '158', '147', 'auto', 'auto'],
                            id: 'RodGroup',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '85px', '158px', '62px', 'auto', 'auto'],
                                id: '_BasicInfo',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(213, 253, 52); font-family: dosis, sans-serif; font-size: 20px;\">Basic Information</span></p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                rect: ['0px', '0px', '158px', '62px', 'auto', 'auto'],
                                id: 'RodLaver',
                                text: '<p style=\"margin: 0px; color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">Rod Laver</p><p style=\"margin: 0px; color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 30px;\">​Arena</p>',
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'BGText',
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            id: 'BGText'
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            display: 'none',
                            symbolName: 'pop_4',
                            rect: ['153px', '401px', '691', '932', 'auto', 'auto'],
                            id: 'ElseSym'
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            display: 'none',
                            symbolName: 'ROD',
                            rect: ['69', '123', '1044', '932', 'auto', 'auto'],
                            id: 'RodSym'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1191px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: false,
                    data: [
                        [
                            "eid1026",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16058",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16059",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16060",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16061",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16062",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${WCity}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7261",
                            "opacity",
                            1250,
                            1000,
                            "easeOutQuart",
                            "${MilGroup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6933",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${WCity}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3497",
                            "top",
                            125,
                            1000,
                            "easeOutBack",
                            "${MelPark}",
                            '0px',
                            '378px'
                        ],
                        [
                            "eid1023",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16063",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16064",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16065",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16066",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16067",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Koo}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5149",
                            "top",
                            1375,
                            1000,
                            "easeOutCirc",
                            "${MelGroup}",
                            '1200px',
                            '800px'
                        ],
                        [
                            "eid9604",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${BGText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9603",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ElseSym}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6929",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${Milton2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3493",
                            "top",
                            0,
                            1000,
                            "easeOutBack",
                            "${Milton2}",
                            '0px',
                            '378px'
                        ],
                        [
                            "eid2720",
                            "scaleY",
                            1250,
                            1000,
                            "easeOutQuart",
                            "${BG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid990",
                            "scaleY",
                            250,
                            1000,
                            "easeOutBack",
                            "${WCity}",
                            '0',
                            '1.01582'
                        ],
                        [
                            "eid1025",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16068",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16069",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16070",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16071",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16072",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rod}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7265",
                            "opacity",
                            1750,
                            1000,
                            "easeOutQuart",
                            "${RodGroup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3495",
                            "top",
                            500,
                            1000,
                            "easeOutBack",
                            "${Rod}",
                            '0px',
                            '378px'
                        ],
                        [
                            "eid7262",
                            "opacity",
                            1250,
                            1000,
                            "easeOutQuart",
                            "${BG}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid6932",
                            "opacity",
                            500,
                            1000,
                            "easeOutBack",
                            "${Rod}",
                            '0',
                            '1'
                        ],
                        [
                            "eid988",
                            "scaleY",
                            375,
                            1000,
                            "easeOutBack",
                            "${Koo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7263",
                            "opacity",
                            1375,
                            1000,
                            "easeOutQuart",
                            "${MelGroup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1022",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16073",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16074",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16075",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16076",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16077",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Milton2}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5150",
                            "top",
                            1500,
                            1000,
                            "easeOutCirc",
                            "${WhiteGroup}",
                            '1200px',
                            '800px'
                        ],
                        [
                            "eid5151",
                            "top",
                            1750,
                            1000,
                            "easeOutCirc",
                            "${RodGroup}",
                            '1200px',
                            '800px'
                        ],
                        [
                            "eid2718",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16078",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16079",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16080",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16081",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16082",
                            "transform-origin",
                            1000,
                            0,
                            "easeOutQuad",
                            "${BG}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5148",
                            "top",
                            1625,
                            1000,
                            "easeOutCirc",
                            "${KooGroup}",
                            '1200px',
                            '800px'
                        ],
                        [
                            "eid989",
                            "scaleY",
                            500,
                            1000,
                            "easeOutBack",
                            "${Rod}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3494",
                            "top",
                            375,
                            1000,
                            "easeOutBack",
                            "${Koo}",
                            '0px',
                            '378px'
                        ],
                        [
                            "eid6930",
                            "opacity",
                            375,
                            1000,
                            "easeOutBack",
                            "${Koo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1024",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16083",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16084",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16085",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16086",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16087",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${MelPark}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7264",
                            "opacity",
                            1500,
                            1000,
                            "easeOutQuart",
                            "${WhiteGroup}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3496",
                            "top",
                            250,
                            1000,
                            "easeOutBack",
                            "${WCity}",
                            '0px',
                            '369px'
                        ],
                        [
                            "eid9602",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${RodSym}",
                            'none',
                            'none'
                        ],
                        [
                            "eid987",
                            "scaleY",
                            0,
                            1000,
                            "easeOutBack",
                            "${Milton2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6931",
                            "opacity",
                            125,
                            1000,
                            "easeOutBack",
                            "${MelPark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid991",
                            "scaleY",
                            125,
                            1000,
                            "easeOutBack",
                            "${MelPark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5152",
                            "top",
                            1250,
                            1000,
                            "easeOutCirc",
                            "${MilGroup}",
                            '1200px',
                            '800px'
                        ],
                        [
                            "eid7266",
                            "opacity",
                            1625,
                            1000,
                            "easeOutQuart",
                            "${KooGroup}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "pop_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Milton',
                            display: 'none',
                            opacity: '0',
                            rect: ['331px', '-24px', '518', '816', 'auto', 'auto'],
                            symbolName: 'Milton'
                        },
                        {
                            type: 'rect',
                            id: 'White',
                            display: 'none',
                            opacity: '0',
                            rect: ['91', '178', '518', '816', 'auto', 'auto'],
                            symbolName: 'White'
                        },
                        {
                            type: 'rect',
                            id: 'Kooyong',
                            display: 'none',
                            opacity: '0',
                            rect: ['91', '178', '518', '754', 'auto', 'auto'],
                            symbolName: 'Kooyong'
                        },
                        {
                            type: 'rect',
                            id: 'MelbournePark',
                            display: 'none',
                            opacity: '0',
                            rect: ['91', '178px', '518', '754', 'auto', 'auto'],
                            symbolName: 'melbourne'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '691px', '932px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    labels: {
                        "Milton": 1000,
                        "White": 2500,
                        "Kooyong": 4000,
                        "Melbourne": 5500
                    },
                    data: [
                        [
                            "eid609",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Kooyong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Kooyong}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10948",
                            "display",
                            5000,
                            0,
                            "easeOutBack",
                            "${Kooyong}",
                            'block',
                            'block'
                        ],
                        [
                            "eid457",
                            "display",
                            5128,
                            0,
                            "linear",
                            "${Kooyong}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10949",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${Kooyong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10950",
                            "display",
                            7000,
                            0,
                            "easeOutBack",
                            "${Kooyong}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9311",
                            "opacity",
                            1000,
                            1000,
                            "easeOutBack",
                            "${Milton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid607",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12332",
                            "display",
                            845,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid606",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Milton}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10936",
                            "display",
                            2000,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'block',
                            'block'
                        ],
                        [
                            "eid453",
                            "display",
                            2118,
                            0,
                            "linear",
                            "${Milton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10937",
                            "display",
                            3500,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10938",
                            "display",
                            4000,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10939",
                            "display",
                            5000,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10940",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10941",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10952",
                            "display",
                            7000,
                            0,
                            "easeOutBack",
                            "${Milton}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9318",
                            "opacity",
                            5500,
                            1000,
                            "easeOutBack",
                            "${MelbournePark}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9316",
                            "opacity",
                            4000,
                            1000,
                            "easeOutBack",
                            "${Kooyong}",
                            '0',
                            '1'
                        ],
                        [
                            "eid608",
                            "display",
                            0,
                            0,
                            "linear",
                            "${MelbournePark}",
                            'none',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${MelbournePark}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10953",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${MelbournePark}",
                            'block',
                            'block'
                        ],
                        [
                            "eid459",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${MelbournePark}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            0,
                            0,
                            "linear",
                            "${White}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10943",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${White}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10942",
                            "display",
                            3500,
                            0,
                            "easeOutBack",
                            "${White}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10944",
                            "display",
                            3637,
                            0,
                            "easeOutBack",
                            "${White}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10945",
                            "display",
                            5000,
                            0,
                            "easeOutBack",
                            "${White}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10946",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${White}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10947",
                            "display",
                            6500,
                            0,
                            "easeOutBack",
                            "${White}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10951",
                            "display",
                            7000,
                            0,
                            "easeOutBack",
                            "${White}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9314",
                            "opacity",
                            2500,
                            1000,
                            "easeOutBack",
                            "${White}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "melbourne": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['300px', '-64px', '373px', '60px', 'auto', 'auto'],
                            align: 'right',
                            id: '_1969Copy4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 26px; font-family: dosis, sans-serif;\">1988 - Present</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['167px', '-20px', '506px', '80px', 'auto', 'auto'],
                            align: 'left',
                            id: 'melbourne',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 40px; text-transform: uppercase;\">Melbourne Park</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['719px', '-64px', '518px', '329px', 'auto', 'auto'],
                            overflow: 'scroll',
                            id: 'Text_melbourne',
                            userClass: 'noHorizonScroll hideScroll',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 20px;\">The decision to relocate the Grand Slam event to a location within walking distance of the CBD - on Crown Land -  served as one of the pavestones that consecutive Victorian Governments would lay in order to develop a strong sporting narrative in the city. The transition from the genteel club structure of Kooyong to a modern appeal that set the tone for widespread developments in the sport of tennis - including the introduction of retractable roofed stadiums - dramatically shifted the standing of the tournament in Melbourne. While its viability was on the rocks before the move, the continual investment in new facilities enable the city strong retention of the tournament for many years to come.​​</span></p>'
                        },
                        {
                            rect: ['1405px', '-109px', '45px', '45px', 'auto', 'auto'],
                            id: 'close_btn_rCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '754px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Kooyong": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['312px', '-64px', '363px', '60px', 'auto', 'auto'],
                            align: 'left',
                            id: '_1972',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 24px; font-family: dosis, sans-serif;\">1972 - 1987  Melbourne</span> </p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['169px', '-20px', '506px', '80px', 'auto', 'auto'],
                            align: 'right',
                            id: 'kooyong',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-size: 40px;\">Kooyong</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['719px', '-64px', '518px', '321px', 'auto', 'auto'],
                            overflow: 'scroll',
                            id: 'Text_kooyong',
                            userClass: 'noHorizonScroll hideScroll',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 20px;\">The tournament’s venture to Melbourne’s eastern suburbs were certainly complicated by confusion over the best point in the calendar to hold the tournament, given the lack of interest seen from many of the world’s top players. During this period, players such as Johan Kriek, Chris O’Neil - Australia’s last homegrown singles champion - Brian Teacher and Barbara Jordan all hoisted their respective trophies from rather humble backgrounds. In the end, continual commercial pressures, increasing prizemoney and the need for dramatic expansion in order to cater for a rapidly professionalising sport saw the tournament leave the hallowed turf of Kooyong for greener pastures once a new site close to the CBD was secured.</span><span style=\"font-family: dosis, sans-serif;\"> </span>  </p>'
                        },
                        {
                            rect: ['1395px', '-109px', '45px', '45px', 'auto', 'auto'],
                            id: 'close_btn_rCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '754px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "White": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['426px', '-64px', '254px', '60px', 'auto', 'auto'],
                            align: 'right',
                            id: '_1970',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-family: dosis, sans-serif;\">1970 - 1971  Sydney ​</span> </p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['167px', '-19px', '506px', '80px', 'auto', 'auto'],
                            align: 'right',
                            id: 'white',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-size: 40px;\">White City</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            id: 'Text_white',
                            opacity: '1',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px; font-family: dosis, sans-serif;\">Before the Australian Open made its seemingly permanent move to Melbourne, the Open endured a brief stint at Sydney’s White City, a facility boasting a 25,000 seat centre court. Primarily used for the NSW Open and Davis Cup ties, the grounds played host to Ken Rosewall’s final Australian Open triumph, while Margaret Court won her third consecutive Open Era Australian crown.​</span> </p>',
                            align: 'left',
                            userClass: 'noHorizonScroll hideScroll',
                            rect: ['718px', '-64px', '518px', '585px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            rect: ['1385px', '-99px', '45px', '45px', 'auto', 'auto'],
                            id: 'close_btn_rCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '816px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Milton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['268px', '138px', '254px', '60px', 'auto', 'auto'],
                            align: 'left',
                            id: '_1969',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 28px;\">1969 - Brisbane</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-20px', '183px', '506px', '80px', 'auto', 'auto'],
                            align: 'left',
                            id: 'milton',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-size: 40px;\">Milton Tennis Courts</span></p>',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            id: 'Text_milton',
                            opacity: '1',
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 20px;\">The only year of the Open Era in which the Sunshine State would host Australia’s premier tennis tournament, the Milton courts scarcely attracted major crowds during the Golden Era of Australian tennis. While fans were rewarded for their perseverance with a memorable final between Australian evergreens Rod Laver and Ken Rosewall, the tournament generating a loss of $13,500 - a figure that quadrupled the winner’s cheque Laver would receive.&nbsp;</span></p>',
                            align: 'left',
                            userClass: 'noHorizonScroll hideScroll',
                            rect: ['478px', '138px', '566px', '585px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            rect: ['1175px', '101px', '45px', '45px', 'auto', 'auto'],
                            id: 'close_btn_r',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '518px', '816px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ROD": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1609px', '303px', '45px', '45px', 'auto', 'auto'],
                            type: 'image',
                            id: 'close_btn',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        },
                        {
                            rect: ['125px', '348px', '742px', '99px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: doppio-one, sans-serif; font-size: 60px; text-transform: uppercase;\">Rod Laver Arena</span></p>',
                            id: 'Heading',
                            opacity: '1',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Subtitle',
                            opacity: '1',
                            rect: ['129px', '314px', '310px', '64px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 30px;\">Basic information&nbsp;</span></p>'
                        },
                        {
                            type: 'text',
                            id: 'BodyText',
                            opacity: '1',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['128px', '426px', '846px', '311px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            overflow: 'scroll',
                            display: 'none',
                            userClass: 'noHorizonScroll hideScroll',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 24px;\">In 1988 the Australian Open was officially moved from Kooyong to it’s current home at Melbourne Park. Show court one was titled Margaret Court Arena on 12 January 2003 as a tribute to Australian tennis legend Margaret Court who amassed a record 64 titles in singles, doubles and mixed games during her career.In 2010 it was announced that Margaret Court Arena would undergo a significant redevelopment as part of a $700 million Melbourne park upgrade. The capacity of the court was increased by 1500 to 7500 and included a redeveloped retractable roof, the fastest of its kind. The first stage of the Melbourne Park redevelopment cost $363 million and was completed in time for the 2015 Australian Open. The new features include eight new indoor and 13 outdoor courts, a footbridge and multi-level parking with space for 1000 cars and 28 buses.Stage two of the development is set to begin following the 2016 Australian Open with a completion date of 2020. The second stage focuses on Rod Laver Arena, which will stay open throughout the works. The $338 million dollar plan will introduce more amenities, improvements to public and player areas, a new function centre and a permanent broadcast media compound.Originally known as Flinders Park, Rod Laver arena has been the main venue for the Australian Open since 1988. With a seating capacity of 15,000 and more than one million visitors per year, Rod Laver is one of the busiest arenas in the world and was a finalist in Pollstar’s 2013 International Venue of the Year. The $94 million initial development of the stadium was followed by a $23 million project, effectively doubling the size of Melbourne Park, in time for the 1996 Australian Open. One of the key features of any major tennis title is the surface being played on. Until 2007 the Rod Laver arena had Rebound Ace, a hardcourt composed of polyurethane rubber, fibreglass and other materials. Some players complained that the surface became sticky&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"font-family: dosis, sans-serif; font-size: 24px;\">in high temperatures and made play dangerous. In 2008 Rebound Ace was replaced with it’s current bright blue plexicushion surface, which gives a more predictable bounce and allows safer matches with fewer variables. The Kooyong Tennis club was the home of Australian tennis. In 1927 20 courts, as well as clubhouses and a concrete stadium, were built in order to host the first Australian championship.</span></p>'
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0',
                            rect: ['1028px', '426px', '676px', '311px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            userClass: 'noHorizonScroll hideScroll',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  Construction began in 1985. </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  Construction completed 1988 </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  First opened 11 January 1988 </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  Original cost: $94 million ($230 million in 2015 dollars) </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  Architect: Peddle Thorp Learmonth (architecture firm) </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 24px; font-family: dosis, sans-serif;\">●  Capacity: 50,000 ●  Surface: Plexicushion</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1044px', '932px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid8212",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${BodyText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8216",
                            "display",
                            10,
                            0,
                            "easeOutBack",
                            "${BodyText}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8290",
                            "display",
                            20,
                            0,
                            "easeOutBack",
                            "${BodyText}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8214",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Heading}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8218",
                            "display",
                            10,
                            0,
                            "easeOutBack",
                            "${Heading}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8292",
                            "display",
                            20,
                            0,
                            "easeOutBack",
                            "${Heading}",
                            'none',
                            'block'
                        ],
                        [
                            "eid934",
                            "opacity",
                            10,
                            990,
                            "easeOutBack",
                            "${BodyText}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid935",
                            "opacity",
                            10,
                            990,
                            "easeOutBack",
                            "${close_btn}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid14303",
                            "opacity",
                            10,
                            10,
                            "easeOutBack",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14304",
                            "opacity",
                            20,
                            980,
                            "easeOutBack",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid937",
                            "opacity",
                            10,
                            990,
                            "easeOutBack",
                            "${Subtitle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid936",
                            "opacity",
                            10,
                            990,
                            "easeOutBack",
                            "${Heading}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid8213",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Subtitle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8217",
                            "display",
                            10,
                            0,
                            "easeOutBack",
                            "${Subtitle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8291",
                            "display",
                            20,
                            0,
                            "easeOutBack",
                            "${Subtitle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14297",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14298",
                            "display",
                            10,
                            0,
                            "easeOutBack",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14299",
                            "display",
                            20,
                            0,
                            "easeOutBack",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8215",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${close_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8219",
                            "display",
                            10,
                            0,
                            "easeOutBack",
                            "${close_btn}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8293",
                            "display",
                            20,
                            0,
                            "easeOutBack",
                            "${close_btn}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "BGText": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '0']],
                            rect: ['131px', '378px', '1648px', '569px', 'auto', 'auto'],
                            id: 'Select',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid525",
                            "-webkit-transform-origin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16088",
                            "-moz-transform-origin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16089",
                            "-ms-transform-origin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16090",
                            "msTransformOrigin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16091",
                            "-o-transform-origin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16092",
                            "transform-origin",
                            250,
                            0,
                            "linear",
                            "${Select}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid527",
                            "scaleY",
                            250,
                            1250,
                            "easeOutBack",
                            "${Select}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BG_Images": {
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
                            id: 'BG_Image0',
                            opacity: '1',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-06.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'BG_Image1',
                            opacity: '1',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-82px', '-60px', '2060px', '1180px', 'auto', 'auto'],
                            opacity: '0.2991452991453',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid307",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${BG_Image0}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid312",
                            "opacity",
                            1000,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image0}",
                            '1',
                            '0.25'
                        ],
                        [
                            "eid313",
                            "opacity",
                            3500,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image0}",
                            '0.250000',
                            '1'
                        ],
                        [
                            "eid306",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid310",
                            "opacity",
                            1000,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1',
                            '0.75'
                        ],
                        [
                            "eid311",
                            "opacity",
                            3500,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '0.75',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("VenueEvent_edgeActions.js");
})("OTF-VenueEvent");
