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
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BG',
                            symbolName: 'BG_Ani',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'Timeline',
                            type: 'image',
                            rect: ['129px', '124px', '150px', '150px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"svg/Gallery.svg",'0px','0px'],
                            userClass: "OnTop",
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 10]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">TAKE A LOOK</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">PHOTOS GALLERY</span></p>",
                            userClass: "OnTop",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 10]
                        },
                        {
                            id: 'Next',
                            type: 'image',
                            rect: ['1686px', '510px', '100px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"svg/ArrowW.svg",'0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'Back',
                            type: 'image',
                            rect: ['136px', '510px', '100px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"svg/ArrowW.svg",'0px','0px'],
                            transform: [[],['90'],[],['1','-1']]
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
                        '${Stage-Gallery}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6500,
                    autoPlay: false,
                    data: [
                        [
                            "eid27",
                            "left",
                            1000,
                            1000,
                            "easeOutBack",
                            "${Back}",
                            '136px',
                            '116px'
                        ],
                        [
                            "eid29",
                            "left",
                            1500,
                            1000,
                            "easeOutBack",
                            "${Next}",
                            '1686px',
                            '1706px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1000,
                            1000,
                            "easeOutBack",
                            "${Back}",
                            '0.000000',
                            '0.33'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1500,
                            1000,
                            "easeOutBack",
                            "${Next}",
                            '0.000000',
                            '0.33'
                        ],
                            [ "eid14", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BG}', [] ] ]
                    ]
                }
            },
            "BG_Ani": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.06', '1.06']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'BG_BG',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/GalleryBG.jpg', '0px', '0px']
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
                    duration: 6500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "opacity",
                            0,
                            1250,
                            "easeOutQuad",
                            "${BG_BG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1250,
                            2750,
                            "linear",
                            "${BG_BG}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid31",
                            "opacity",
                            4000,
                            2500,
                            "linear",
                            "${BG_BG}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleY",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${BG_BG}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            1250,
                            2750,
                            "easeOutQuad",
                            "${BG_BG}",
                            '1.05',
                            '1.01'
                        ],
                        [
                            "eid13",
                            "scaleY",
                            4000,
                            2500,
                            "easeOutQuad",
                            "${BG_BG}",
                            '1.01',
                            '1.06'
                        ],
                        [
                            "eid7",
                            "scaleX",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${BG_BG}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            1250,
                            2750,
                            "easeOutQuad",
                            "${BG_BG}",
                            '1.05',
                            '1.01'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            4000,
                            2500,
                            "easeOutQuad",
                            "${BG_BG}",
                            '1.01',
                            '1.06'
                        ],
                        [
                            "eid16",
                            "filter.blur",
                            0,
                            1250,
                            "linear",
                            "${BG_BG}",
                            '5px',
                            '10px'
                        ],
                        [
                            "eid17",
                            "filter.blur",
                            1250,
                            2750,
                            "linear",
                            "${BG_BG}",
                            '10px',
                            '20px'
                        ],
                        [
                            "eid18",
                            "filter.blur",
                            4000,
                            2500,
                            "linear",
                            "${BG_BG}",
                            '20px',
                            '10px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Gallery_edgeActions.js");
})("OTF-Gallery");
