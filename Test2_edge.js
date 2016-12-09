/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
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
                            id: 'IntroAniTouch2',
                            type: 'video',
                            tag: 'video',
                            rect: ['0px', '0px', '1920', '1080', 'auto', 'auto'],
                            opacity: '1',
                            source: ['images/IntroAniTouch.mp4',vid+"IntroAniTouch.mp4"],
                            preload: 'auto',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Logo',
                            type: 'image',
                            rect: ['427px', '63px', '1084px', '732px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"svg/Logo.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(255,255,255,1.00)", 0, 0, 0]
                        },
                        {
                            id: 'Menu',
                            type: 'image',
                            rect: ['1775px', '47px', '64px', '112px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Menu.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['741px', '625px', '518px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">TAP TO BEGIN</span></p>",
                            font: ['dosis, sans-serif', [28, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 17000,
                    autoPlay: true,
                    data: [
                        [
                            "eid196",
                            "opacity",
                            7000,
                            1000,
                            "swing",
                            "${Text}",
                            '0',
                            '0.7479674796748'
                        ],
                        [
                            "eid197",
                            "opacity",
                            8000,
                            1000,
                            "swing",
                            "${Text}",
                            '0.747967004776001',
                            '0.3'
                        ],
                        [
                            "eid198",
                            "opacity",
                            9000,
                            2000,
                            "swing",
                            "${Text}",
                            '0.30000001192092896',
                            '0.5'
                        ],
                        [
                            "eid199",
                            "opacity",
                            11000,
                            2000,
                            "swing",
                            "${Text}",
                            '0.5',
                            '0.3'
                        ],
                        [
                            "eid200",
                            "opacity",
                            13000,
                            2000,
                            "swing",
                            "${Text}",
                            '0.30000001192092896',
                            '0.5'
                        ],
                        [
                            "eid201",
                            "opacity",
                            15000,
                            2000,
                            "swing",
                            "${Text}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid162",
                            "filter.drop-shadow.color",
                            6500,
                            0,
                            "easeOutBack",
                            "${Logo}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid193",
                            "top",
                            7000,
                            2000,
                            "easeOutBack",
                            "${Text}",
                            '625px',
                            '682px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            7000,
                            868,
                            "easeOutBack",
                            "${IntroAniTouch2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid190",
                            "filter.blur",
                            6500,
                            500,
                            "easeOutBack",
                            "${IntroAniTouch2}",
                            '0.000000px',
                            '10px'
                        ],
                        [
                            "eid155",
                            "opacity",
                            6500,
                            500,
                            "easeOutBack",
                            "${Logo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid161",
                            "filter.drop-shadow.blur",
                            6500,
                            750,
                            "easeInOutQuad",
                            "${Logo}",
                            '0.000000px',
                            '15px'
                        ],
                        [
                            "eid163",
                            "filter.drop-shadow.blur",
                            7250,
                            750,
                            "easeInOutQuad",
                            "${Logo}",
                            '15px',
                            '0px'
                        ],
                            [ "eid30", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${IntroAniTouch2}', [] ] ],
                            [ "eid164", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BG_Images}', [0] ] ]
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
                            rect: ['-746', '962', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'BG_Image1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['-82px', '-60px', '2060px', '1180px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.2991452991453',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: true,
                    data: [
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
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid311",
                            "opacity",
                            4500,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid171",
                            "scaleY",
                            1000,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            4500,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleX",
                            1000,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid173",
                            "scaleX",
                            4500,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid185",
                            "filter.blur",
                            1000,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '0px',
                            '15px'
                        ],
                        [
                            "eid187",
                            "filter.blur",
                            4500,
                            3500,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            '15px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Test2_edgeActions.js");
})("OTF-Intro");
