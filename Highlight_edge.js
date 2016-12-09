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
                            id: 'Highlight_All',
                            symbolName: 'Highlight_All',
                            type: 'rect',
                            rect: ['-203px', '96px', '2325', '887', 'auto', 'auto']
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
                            fill: ["rgba(0,0,0,0)",im+"svg/Highlight.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">CLASSIC MATCHES</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">HIGHLIGHT</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage-Highlight}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    data: [
                            [ "eid5072", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BG_Images}', [0] ] ],
                            [ "eid6920", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Highlight_All}', [] ] ]
                    ]
                }
            },
            "text-area": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-96px', '-187px', '752px', '752px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Ellipse',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            font: ['doppio-one, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: 'Rod Laver <br>VS Tony Roche',
                            id: 'name',
                            textStyle: ['', '', '', '', 'uppercase'],
                            opacity: '0',
                            rect: ['84px', '-46px', '300px', '50px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin:0px\">Named the ATP Star of Tomorrow in November 2014, Croatian Borna Coric is well on his way to becoming a household name for tennis fans at the tender age of 18. The former world number one junior recorded impressive wins over Jerzy Janowicz, Ernests Gulbis, Lukas Rosol and Rafael Nadal in 2014 to become the youngest player since Nadal himself in 2003 to break into the top 100 ATP rankings. Coric was also the youngest player to ever beat Rafael Nadal in straight sets. Coric’s meteoric rise appears to have no signs of slowing in 2015, receiving direct entry into a Grand Slam for the first time during the Australian Open and later defeating current world number 3 Andy Murray in the quarter finals of the Dubai Duty Free Tennis Championships.​</p>',
                            rect: ['79px', '77px', '444px', '533px', 'auto', 'auto'],
                            id: 'content',
                            font: ['dosis, sans-serif', [18, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            textStyle: ['1px', '', '20px', '', '']
                        },
                        {
                            rect: ['78px', '54px', '300px', '1px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['596px', '-92px', '30px', '30px', 'auto', 'auto'],
                            type: 'image',
                            display: 'none',
                            id: 'close',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/close.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 1856,
                    autoPlay: false,
                    data: [
                        [
                            "eid2812",
                            "scaleY",
                            0,
                            1500,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            1500,
                            "easeOutBack",
                            "${Ellipse}",
                            '0',
                            '0.65621824186992'
                        ],
                        [
                            "eid3742",
                            "opacity",
                            1500,
                            356,
                            "easeOutBack",
                            "${Ellipse}",
                            '0.6562179923057556',
                            '0.5'
                        ],
                        [
                            "eid3180",
                            "height",
                            750,
                            0,
                            "easeOutQuad",
                            "${close}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid7313",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7314",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7315",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7316",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7317",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7318",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3134",
                            "scaleX",
                            250,
                            1250,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid597",
                            "left",
                            500,
                            0,
                            "easeOutElastic",
                            "${name}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid559",
                            "height",
                            500,
                            0,
                            "easeInOutElastic",
                            "${content}",
                            '533px',
                            '533px'
                        ],
                        [
                            "eid3183",
                            "width",
                            750,
                            0,
                            "easeOutQuad",
                            "${close}",
                            '30px',
                            '30px'
                        ],
                        [
                            "eid595",
                            "left",
                            500,
                            0,
                            "easeOutElastic",
                            "${content}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid588",
                            "opacity",
                            0,
                            0,
                            "easeInOutElastic",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid446",
                            "opacity",
                            250,
                            1250,
                            "easeOutBack",
                            "${Rectangle}",
                            '0',
                            '0.35016514227642'
                        ],
                        [
                            "eid414",
                            "font-size",
                            500,
                            0,
                            "easeInOutElastic",
                            "${name}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid3181",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${close}",
                            '0',
                            '1'
                        ],
                        [
                            "eid644",
                            "top",
                            500,
                            0,
                            "linear",
                            "${name}",
                            '-46px',
                            '-46px'
                        ],
                        [
                            "eid2813",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7319",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7320",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7321",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7322",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7323",
                            "transform-origin",
                            0,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid129",
                            "opacity",
                            250,
                            1250,
                            "easeInOutElastic",
                            "${content}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            250,
                            1250,
                            "linear",
                            "${name}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid359",
                            "top",
                            500,
                            0,
                            "easeInOutElastic",
                            "${content}",
                            '77px',
                            '77px'
                        ],
                        [
                            "eid104",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid2811",
                            "scaleX",
                            0,
                            1500,
                            "easeOutElastic",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3694",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${close}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3696",
                            "display",
                            131,
                            0,
                            "easeOutQuad",
                            "${close}",
                            'none',
                            'none'
                        ],
                        [
                            "eid3695",
                            "display",
                            250,
                            0,
                            "easeOutQuad",
                            "${close}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "left",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid3182",
                            "top",
                            750,
                            0,
                            "easeOutQuad",
                            "${close}",
                            '-92px',
                            '-92px'
                        ],
                        [
                            "eid558",
                            "line-height",
                            500,
                            0,
                            "easeInOutElastic",
                            "${content}",
                            '20px',
                            '20px'
                        ]
                    ]
                }
            },
            "MaleSymbol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'MaleInfoIconBG',
                            opacity: '0.75',
                            cursor: 'pointer',
                            rect: ['110px', '176px', '160px', '160px', 'auto', 'auto'],
                            type: 'ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['134px', '200px', '112px', '112px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'MaleInfo',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'svg/Info.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid90",
                            "scaleX",
                            0,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBG}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBG}",
                            '0',
                            '1.5'
                        ]
                    ]
                }
            },
            "P_Info": {
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
                            id: 'RefCircle',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '360px', '360px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            userClass: '',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['180', '180', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                type: 'ellipse',
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'MaleInfoIconBGCopy',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['-80px', '-80px', '160px', '160px', 'auto', 'auto'],
                                transform: [[], [], [], ['0', '0']],
                                userClass: '',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                type: 'image',
                                rect: ['-56px', '-56px', '112px', '112px', 'auto', 'auto'],
                                transform: [[], [], [], ['0', '0']],
                                id: 'MaleInfoCopy',
                                opacity: '0',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'svg/Info2.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid11495",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11383",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11497",
                            "scaleY",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11385",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11493",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11384",
                            "opacity",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11494",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11387",
                            "opacity",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '0.49593495934959'
                        ],
                        [
                            "eid11391",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${RefCircle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid11389",
                            "scaleX",
                            0,
                            0,
                            "easeOutQuad",
                            "${RefCircle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid11498",
                            "scaleY",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11388",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid11496",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11386",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid6108",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${RefCircle}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "HighLight_PInfo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-80', '-80', '160', '160', 'auto', 'auto'],
                            id: 'Group',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                type: 'ellipse',
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'MaleInfoIconBG',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['-40px', '-40px', '240px', '240px', 'auto', 'auto'],
                                userClass: '',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['24px', '24px', '112px', '112px', 'auto', 'auto'],
                                type: 'image',
                                id: 'MaleInfo',
                                opacity: '0',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/svg/Info.svg', '0px', '0px', '100%', '100%', 'no-repeat']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid4401",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4395",
                            "scaleX",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4403",
                            "opacity",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBG}",
                            '0',
                            '0.49593495934959'
                        ],
                        [
                            "eid4512",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Group}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4513",
                            "display",
                            88,
                            0,
                            "easeOutBack",
                            "${Group}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4514",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${Group}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4399",
                            "scaleY",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4397",
                            "opacity",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4405",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${MaleInfoIconBG}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Highlight_All": {
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
                            align: 'center',
                            text: '<p style=\"margin:0px\"><span style=\"font-size: 250px;\">1969​</span></p>',
                            rect: ['870px', '341px', '570px', '209px', 'auto', 'auto'],
                            id: 'year',
                            font: ['doppio-one, sans-serif', [173, 'px'], 'rgba(255,255,255,0.20)', '300', 'none solid rgb(215, 250, 82)', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            textStyle: ['', '', '220px', '', '']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            rect: ['1633px', '329px', '120px', '274px', 'auto', 'auto'],
                            id: 'icon-arrow-right',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/ArrowW.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-90'], [], ['-1']],
                            type: 'image',
                            rect: ['638px', '329px', '120px', '274px', 'auto', 'auto'],
                            id: 'icon-arrow-left',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/ArrowW.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'V1',
                            cursor: 'pointer',
                            userClass: 'HighlightAvatar',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 30],
                            rect: ['-153px', '190px', '300px', '300px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 30],
                            fill: ['rgba(0,0,0,0)', 'images/Quiz_Circle.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'V2',
                            cursor: 'pointer',
                            userClass: 'HighlightAvatar',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 0],
                            rect: ['2198px', '437px', '300px', '300px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Quiz_Circle2.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'H-Up',
                            rect: ['468px', '248px', '277', '84', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], [], [], ['0']],
                                rect: ['0px', '2px', '277px', '42px', 'auto', 'auto'],
                                type: 'text',
                                id: 'H1-name',
                                text: 'Rod Laver',
                                align: 'left',
                                font: ['doppio-one, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '300', 'none solid rgba(255, 255, 255, 0.109804)', 'normal', 'break-word', 'normal']
                            },
                            {
                                transform: [[], [], [], ['0']],
                                id: 'H1-country',
                                text: '<p style=\"margin:0px\">Australia​</p>',
                                rect: ['0px', '44px', '277px', '42px', 'auto', 'auto'],
                                textStyle: ['2px', '', '', '', ''],
                                font: ['dosis, sans-serif', [19, 'px'], 'rgba(255,255,255,1.00)', '300', 'none solid rgba(255, 255, 255, 0.109804)', 'normal', 'break-word', 'normal'],
                                align: 'left',
                                type: 'text'
                            }]
                        },
                        {
                            type: 'group',
                            id: 'H-Down',
                            rect: ['1418px', '599px', '2', '89', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], [], [], ['0']],
                                rect: ['-275px', '0px', '277px', '42px', 'auto', 'auto'],
                                type: 'text',
                                id: 'H2-name',
                                text: 'Tony Roche',
                                align: 'right',
                                font: ['doppio-one, sans-serif', [30, 'px'], 'rgba(255,255,255,1.00)', '300', 'none solid rgba(255, 255, 255, 0.109804)', 'normal', 'break-word', 'normal']
                            },
                            {
                                transform: [[], [], [], ['0']],
                                id: 'H2-country',
                                text: 'Australia',
                                rect: ['-277px', '42px', '277px', '42px', 'auto', 'auto'],
                                textStyle: ['2px', '', '', '', ''],
                                font: ['dosis, sans-serif', [19, 'px'], 'rgba(255,255,255,1.00)', '300', 'none solid rgba(255, 255, 255, 0.109804)', 'normal', 'break-word', 'normal'],
                                align: 'right',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['1100px', '395px', '130px', '2px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'upper_line',
                            opacity: '0.7008547008547',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['1100px', '517px', '130px', '2px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'bottom_line',
                            opacity: '0.7008547008547',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 20px;\">Tap here</span></p>',
                            rect: ['1076px', '504px', '173px', '28px', 'auto', 'auto'],
                            id: 'MoreClick_Down',
                            font: ['dosis, sans-serif', [19, 'px'], 'rgba(255,255,255,1)', '300', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'rect',
                            id: 'text-area',
                            symbolName: 'text-area',
                            rect: ['875px', '254px', '96', '96', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'VS',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['1022px', '374px', '300px', '163px', 'auto', 'auto'],
                            textStyle: ['', '', '150px', '', ''],
                            transform: [[], [], [], ['0', '0']],
                            font: ['doppio-one, sans-serif', [88, 'px'], 'rgba(215,250,82,1)', '300', 'none solid rgb(215, 250, 82)', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            text: '<p style=\"margin:0px\"><span style=\"font-size: 110px;\">VS</span><span style=\"font-size: 120px;\">​</span></p>'
                        },
                        {
                            type: 'rect',
                            id: 'HighLight_PInfo',
                            symbolName: 'HighLight_PInfo',
                            rect: ['697px', '334px', '0', '0', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'HighLight_PInfo2',
                            symbolName: 'HighLight_PInfo',
                            rect: ['1619px', '587px', '0', '0', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2325px', '887px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid620",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${VS}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid666",
                            "scaleX",
                            250,
                            1000,
                            "easeOutBack",
                            "${VS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2207",
                            "top",
                            0,
                            0,
                            "swing",
                            "${H1-country}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid2204",
                            "left",
                            0,
                            0,
                            "swing",
                            "${H1-name}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid627",
                            "scaleY",
                            0,
                            1000,
                            "easeOutBack",
                            "${year}",
                            '7',
                            '1'
                        ],
                        [
                            "eid618",
                            "scaleX",
                            500,
                            750,
                            "easeOutQuint",
                            "${bottom_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid707",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7324",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7325",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7326",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7327",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7328",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${upper_line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid667",
                            "scaleY",
                            250,
                            1000,
                            "easeOutBack",
                            "${VS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid674",
                            "opacity",
                            1000,
                            1250,
                            "easeOutBack",
                            "${MoreClick_Down}",
                            '0.000000',
                            '0.6'
                        ],
                        [
                            "eid687",
                            "opacity",
                            2250,
                            750,
                            "easeOutBack",
                            "${MoreClick_Down}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid689",
                            "opacity",
                            3000,
                            500,
                            "easeOutBack",
                            "${MoreClick_Down}",
                            '0.000000',
                            '0.6'
                        ],
                        [
                            "eid691",
                            "opacity",
                            3500,
                            500,
                            "easeOutBack",
                            "${MoreClick_Down}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid700",
                            "opacity",
                            4000,
                            500,
                            "easeOutQuad",
                            "${MoreClick_Down}",
                            '0',
                            '0.6'
                        ],
                        [
                            "eid701",
                            "opacity",
                            4500,
                            500,
                            "easeOutQuad",
                            "${MoreClick_Down}",
                            '0.6',
                            '0'
                        ],
                        [
                            "eid625",
                            "scaleX",
                            0,
                            1000,
                            "easeOutBack",
                            "${year}",
                            '7',
                            '1'
                        ],
                        [
                            "eid2673",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid637",
                            "opacity",
                            1000,
                            750,
                            "easeOutBack",
                            "${icon-arrow-left}",
                            '0',
                            '0.5037792325019836'
                        ],
                        [
                            "eid606",
                            "scaleX",
                            500,
                            750,
                            "easeOutBack",
                            "${H1-name}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2671",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-left}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid616",
                            "scaleX",
                            500,
                            750,
                            "easeOutQuint",
                            "${upper_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid603",
                            "left",
                            0,
                            1250,
                            "easeOutBack",
                            "${V1}",
                            '-153px',
                            '547px'
                        ],
                        [
                            "eid2709",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-right}",
                            '1602px',
                            '1540px'
                        ],
                        [
                            "eid2706",
                            "left",
                            1000,
                            750,
                            "easeOutBack",
                            "${icon-arrow-right}",
                            '1540px',
                            '1869px'
                        ],
                        [
                            "eid613",
                            "scaleX",
                            500,
                            750,
                            "easeOutBack",
                            "${H2-name}",
                            '0',
                            '1'
                        ],
                        [
                            "eid599",
                            "left",
                            0,
                            1250,
                            "easeOutBack",
                            "${V2}",
                            '2198px',
                            '1463px'
                        ],
                        [
                            "eid607",
                            "scaleX",
                            500,
                            750,
                            "easeOutBack",
                            "${H1-country}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1466",
                            "left",
                            500,
                            750,
                            "easeOutBack",
                            "${H-Down}",
                            '1888px',
                            '1438px'
                        ],
                        [
                            "eid2206",
                            "top",
                            0,
                            0,
                            "swing",
                            "${H1-name}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid2710",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-left}",
                            '726px',
                            '726px'
                        ],
                        [
                            "eid2708",
                            "left",
                            1000,
                            750,
                            "easeOutBack",
                            "${icon-arrow-left}",
                            '726px',
                            '352px'
                        ],
                        [
                            "eid2205",
                            "left",
                            0,
                            0,
                            "swing",
                            "${H1-country}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2674",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-right}",
                            '0',
                            '0'
                        ],
                        [
                            "eid639",
                            "opacity",
                            1000,
                            750,
                            "easeOutBack",
                            "${icon-arrow-right}",
                            '0',
                            '0.5037792325019836'
                        ],
                        [
                            "eid2672",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${icon-arrow-right}",
                            '329px',
                            '329px'
                        ],
                        [
                            "eid699",
                            "top",
                            750,
                            1000,
                            "easeOutQuad",
                            "${MoreClick_Down}",
                            '479px',
                            '547px'
                        ],
                        [
                            "eid2212",
                            "left",
                            500,
                            750,
                            "easeOutBack",
                            "${H-Up}",
                            '468px',
                            '868px'
                        ],
                        [
                            "eid615",
                            "scaleX",
                            500,
                            750,
                            "easeOutBack",
                            "${H2-country}",
                            '0',
                            '1'
                        ],
                        [
                            "eid629",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${year}",
                            '0',
                            '1'
                        ],
                        [
                            "eid706",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7329",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7330",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7331",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7332",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid7333",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${bottom_line}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-01.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'BG_Image1',
                            opacity: '1',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-08.jpg', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Highlight_edgeActions.js");
})("OTF-Highlight");
