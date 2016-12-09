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
                            id: 'OTF-BG',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"OTF-BG-01.jpg",'0px','0px'],
                            transform: [[],[],[],['1.1','1.1']]
                        },
                        {
                            id: 'BackgroundLeft',
                            type: 'ellipse',
                            rect: ['-470px', '-280px', '1679px', '1679px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'BackgroundRight',
                            type: 'ellipse',
                            rect: ['680px', '-280px', '1679px', '1679px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.15',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
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
                            fill: ["rgba(0,0,0,0)",im+"svg/Timeline.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">HISTORY TIMELINE</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">YEAR BY YEAR</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage-HistoryBackground}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: false,
                    data: [
                        [
                            "eid22",
                            "scaleY",
                            750,
                            1000,
                            "easeOutCirc",
                            "${BackgroundRight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            6000,
                            0,
                            "easeOutBack",
                            "${BackgroundRight}",
                            '0',
                            '0'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            6500,
                            1000,
                            "easeOutBack",
                            "${BackgroundRight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "left",
                            1000,
                            750,
                            "easeOutCirc",
                            "${BackgroundRight}",
                            '1980px',
                            '680px'
                        ],
                        [
                            "eid14",
                            "scaleX",
                            500,
                            1000,
                            "easeOutCirc",
                            "${BackgroundLeft}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleX",
                            6000,
                            0,
                            "easeOutBack",
                            "${BackgroundLeft}",
                            '1',
                            '0'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            6750,
                            1000,
                            "easeOutBack",
                            "${BackgroundLeft}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${BackgroundRight}",
                            '0.15',
                            '0.15'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            0,
                            5000,
                            "easeOutCubic",
                            "${OTF-BG}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid156",
                            "scaleY",
                            5000,
                            1000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid157",
                            "scaleY",
                            6000,
                            5000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid15",
                            "left",
                            750,
                            750,
                            "easeOutCirc",
                            "${BackgroundLeft}",
                            '-1720px',
                            '-470px'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${BackgroundLeft}",
                            '0.3',
                            '0.3'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            750,
                            1000,
                            "easeOutCirc",
                            "${BackgroundRight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "scaleX",
                            6000,
                            0,
                            "easeOutBack",
                            "${BackgroundRight}",
                            '0',
                            '0'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            6500,
                            1000,
                            "easeOutBack",
                            "${BackgroundRight}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "scaleY",
                            500,
                            1000,
                            "easeOutCirc",
                            "${BackgroundLeft}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            6000,
                            0,
                            "easeOutBack",
                            "${BackgroundLeft}",
                            '1',
                            '0'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            6750,
                            1000,
                            "easeOutBack",
                            "${BackgroundLeft}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            0,
                            5000,
                            "easeOutCubic",
                            "${OTF-BG}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleX",
                            5000,
                            1000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid155",
                            "scaleX",
                            6000,
                            5000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            2000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            5000,
                            0,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '1',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            6000,
                            2000,
                            "easeOutCirc",
                            "${OTF-BG}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HistoryBackground_edgeActions.js");
})("OTF-HistoryBackground");
