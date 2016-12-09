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
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '920px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(30,30,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'SplitLine',
                            type: 'rect',
                            rect: ['461px', '51px', '1px', '500px', 'auto', 'auto'],
                            opacity: '0.93999999761581',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'FemaleBackground',
                            type: 'ellipse',
                            rect: ['590px', '216px', '280px', '280px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "WinnerAvatar",
                            filter: [0, 0, 0.96, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'FemaleText',
                            type: 'text',
                            rect: ['430px', '520px', '600px', '69px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 22px; font-weight: 100;\">FEMALE CHAMPION</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 32px;\">MARIA SHARAPOVA</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", ""],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'MaleBackground',
                            type: 'ellipse',
                            rect: ['50px', '116px', '280px', '280px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "WinnerAvatar",
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 0]
                        },
                        {
                            id: 'MaleText',
                            type: 'text',
                            rect: ['-110px', '30px', '600px', '69px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 22px; font-weight: 100;\">MALE CHAMPION</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 32px;\">ROGER FEDERER</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", ""],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'BackBackground',
                            type: 'ellipse',
                            rect: ['381px', '220px', '160px', '160px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.75',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'BackIcon',
                            type: 'image',
                            rect: ['405px', '244px', '112px', '112px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'svg/Winner.svg','0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'MaleSymbol',
                            symbolName: 'MaleSymbol',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'FemaleSymbol',
                            symbolName: 'FemaleSymbol',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage-HistoryWinner}': {
                            isStage: true,
                            rect: ['null', 'null', '1px', '1px', 'auto', 'auto']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid67",
                            "filter.drop-shadow.offsetV",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            1000,
                            500,
                            "easeOutBack",
                            "${BackIcon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "width",
                            0,
                            0,
                            "easeOutBack",
                            "${SplitLine}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid142",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid147",
                            "filter.drop-shadow.blur",
                            500,
                            500,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid56",
                            "opacity",
                            1000,
                            500,
                            "easeOutBack",
                            "${BackIcon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "filter.drop-shadow.offsetV",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            500,
                            1000,
                            "easeOutBack",
                            "${SplitLine}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid80",
                            "filter.drop-shadow.offsetH",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid37",
                            "top",
                            750,
                            1000,
                            "easeOutBack",
                            "${MaleText}",
                            '220px',
                            '30px'
                        ],
                        [
                            "eid14",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${MaleBackground}",
                            '320px',
                            '50px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            2000,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid140",
                            "filter.contrast",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0.96',
                            '0.96'
                        ],
                        [
                            "eid54",
                            "scaleX",
                            1000,
                            500,
                            "easeOutBack",
                            "${BackIcon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid137",
                            "background-color",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            750,
                            1000,
                            "easeOutBack",
                            "${FemaleText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            750,
                            1000,
                            "easeOutBack",
                            "${FemaleText}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid143",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid146",
                            "filter.drop-shadow.blur",
                            500,
                            500,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0px',
                            '50px'
                        ],
                        [
                            "eid68",
                            "filter.drop-shadow.offsetH",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid136",
                            "background-color",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid131",
                            "rotateZ",
                            500,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid132",
                            "rotateZ",
                            1500,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid78",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "easeOutBack",
                            "${FemaleBackground}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${SplitLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            1000,
                            1120,
                            "easeOutBack",
                            "${SplitLine}",
                            '1',
                            '0.93999999761581'
                        ],
                        [
                            "eid129",
                            "rotateZ",
                            500,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid130",
                            "rotateZ",
                            1500,
                            0,
                            "easeOutBack",
                            "${MaleBackground}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid31",
                            "top",
                            750,
                            1000,
                            "easeOutBack",
                            "${FemaleText}",
                            '320px',
                            '520px'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            750,
                            500,
                            "easeOutBack",
                            "${BackBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            500,
                            2000,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            750,
                            500,
                            "easeOutBack",
                            "${BackBackground}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid2",
                            "scaleY",
                            0,
                            1000,
                            "easeOutBack",
                            "${SplitLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "opacity",
                            750,
                            1000,
                            "easeOutBack",
                            "${MaleText}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            750,
                            1000,
                            "easeOutBack",
                            "${MaleText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${FemaleBackground}",
                            '320px',
                            '590px'
                        ],
                        [
                            "eid48",
                            "scaleY",
                            750,
                            500,
                            "easeOutBack",
                            "${BackBackground}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "FemaleSymbol": {
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
                            id: 'FemaleInfoIconBG',
                            opacity: '0.75',
                            cursor: 'pointer',
                            rect: ['650px', '276px', '160px', '160px', 'auto', 'auto'],
                            type: 'ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            userClass: '',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'FemaleInfo',
                            rect: ['674px', '300px', '112px', '112px', 'auto', 'auto'],
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
                            "eid103",
                            "scaleY",
                            0,
                            500,
                            "easeOutBack",
                            "${FemaleInfoIconBG}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid102",
                            "scaleX",
                            0,
                            500,
                            "easeOutBack",
                            "${FemaleInfoIconBG}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${FemaleInfo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${FemaleInfo}",
                            '0',
                            '1'
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
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            id: 'MaleInfo',
                            rect: ['134px', '200px', '112px', '112px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HistoryWinner_edgeActions.js");
})("OTF-HistoryWinner");
