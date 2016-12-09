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
            js+"propeller.js"
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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RotateGroup',
                            type: 'group',
                            rect: ['-192', '-612', '2304', '2304', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Image-1',
                                type: 'ellipse',
                                rect: ['0px', '0px', '2304px', '2304px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-2',
                                type: 'ellipse',
                                rect: ['212px', '212px', '1880px', '1880px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-3',
                                type: 'ellipse',
                                rect: ['317px', '317px', '1671px', '1671px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-4',
                                type: 'ellipse',
                                rect: ['422px', '422px', '1461px', '1461px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-5',
                                type: 'ellipse',
                                rect: ['529px', '529px', '1246px', '1246px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-6',
                                type: 'ellipse',
                                rect: ['643px', '643px', '1018px', '1018px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-7',
                                type: 'ellipse',
                                rect: ['749px', '749px', '806px', '806px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'Image-8',
                                type: 'ellipse',
                                rect: ['855px', '855px', '594px', '594px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "RotatingImages",
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            }]
                        },
                        {
                            id: 'ShadowBG',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0.6',
                            fill: ["rgba(0,0,0,0)",im+"ShadowBG.png",'0px','0px'],
                            userClass: "ShadowBG"
                        },
                        {
                            id: 'TextInfo',
                            symbolName: 'TextInfo',
                            type: 'rect',
                            rect: ['140', '-1700', '1636', '1636', 'auto', 'auto']
                        },
                        {
                            id: 'Timeline',
                            type: 'image',
                            rect: ['129px', '124px', '150px', '150px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Quiz.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 10]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">PLAY A GAME</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">PHOTO PUZZLE</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 10]
                        },
                        {
                            id: 'Menu',
                            type: 'image',
                            rect: ['1775px', '47px', '64px', '112px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Menu.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage-QuizOne}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Popup": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-1080px', '936px', '936px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1.00)']
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
                            "eid7",
                            "top",
                            0,
                            1000,
                            "easeOutBack",
                            "${Ellipse}",
                            '-1080px',
                            '0px'
                        ]
                    ]
                }
            },
            "TextInfo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1636px', '1636px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'BGText',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1636px', '1636px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("QuizOne_edgeActions.js");
})("OTF-QuizOne");
