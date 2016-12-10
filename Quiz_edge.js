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
            'dosis, sans-serif': '<script src=\"http://use.edgefonts.net/dosis:n8,n3,n2,n7,n6,n4,n5:all.js\"></script>',
            'ruluko, sans-serif': '<script src=\"http://use.edgefonts.net/ruluko:n4:all.js\"></script>'        },
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
                            id: 'Quiz_Selection',
                            symbolName: 'Quiz_Selection',
                            type: 'rect',
                            rect: ['424px', '386px', '1920', '1080', 'auto', 'auto'],
                            overflow: 'visible'
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
                        '${Stage-QuizTwo}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6307,
                    autoPlay: false,
                    data: [
                            [ "eid336", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Quiz_Selection}', [0] ] ]
                    ]
                }
            },
            "Quiz_Selection": {
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
                            id: 'Quiz_Circle',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['831px', '-44px', '384px', '384px', 'auto', 'auto'],
                            filter: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 20],
                            fi: [0, 0, 1, 0, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 20],
                            fill: ['rgba(0,0,0,0)', 'images/Quiz_Circle.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'QUESTION',
                            textStyle: ['0px', '', '41px', '', ''],
                            font: ['dosis, sans-serif', [31, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['291px', '461px', '654px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin:0px\"><span style=\"letter-spacing: 1px;\">Who was the lastest Australian woman to win a grand slam single title?​</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'QUESTIONCopy',
                            textStyle: ['3px', '', '', '', ''],
                            font: ['doppio-one, sans-serif', [73, 'px'], 'rgba(181,221,52,1.00)', '300', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['156px', '451px', '106px', '110px', 'auto', 'auto'],
                            text: 'Q1',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            transform: [[], ['-180'], [], ['1', '0.38']],
                            rect: ['1458px', '-1141px', '1px', '775px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            textStyle: ['', '', '53px', '', ''],
                            font: ['dosis, sans-serif', [38, 'px'], 'rgba(255,255,255,1.00)', '500', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            rect: ['-280px', '47px', '478px', '299px', 'auto', 'auto'],
                            text: 'Samantha Stosur ( Australian) won the grand slam single title in 2013.',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            text: 'WELL DONE, MATE!',
                            rect: ['-21px', '-236px', '1197px', '163px', 'auto', 'auto'],
                            opacity: '0',
                            align: 'center',
                            font: ['dosis, sans-serif', [81, 'px'], 'rgba(181,221,52,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            textStyle: ['10px', '', '', '', ''],
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            type: 'text',
                            id: 'Text3Copy3',
                            text: '<p style=\"margin:0px\">OOPS, TRY AGAIN...​</p>',
                            rect: ['-21px', '-236px', '1197px', '163px', 'auto', 'auto'],
                            opacity: '0',
                            align: 'center',
                            font: ['dosis, sans-serif', [81, 'px'], 'rgba(181,221,52,1.00)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal'],
                            textStyle: ['5px', '', '', '', ''],
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            type: 'image',
                            id: 'Quiz_Circle2',
                            opacity: '0',
                            cursor: 'pointer',
                            rect: ['-141px', '-44px', '384px', '384px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 20],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,1.00)', 0, 0, 20],
                            fill: ['rgba(0,0,0,0)', 'images/Quiz_Circle2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1920px', '1080px']
                        }
                    }
                },
                timeline: {
                    duration: 5807,
                    autoPlay: false,
                    labels: {
                        "Correct": 5140,
                        "Wrong": 5807
                    },
                    data: [
                        [
                            "eid269",
                            "line-height",
                            2836,
                            0,
                            "easeInOutQuad",
                            "${Text2}",
                            '53px',
                            '53px'
                        ],
                        [
                            "eid250",
                            "width",
                            2989,
                            0,
                            "linear",
                            "${Text3}",
                            '1197px',
                            '1197px'
                        ],
                        [
                            "eid267",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${QUESTION}",
                            '291px',
                            '291px'
                        ],
                        [
                            "eid270",
                            "letter-spacing",
                            2183,
                            0,
                            "linear",
                            "${QUESTION}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid186",
                            "rotateZ",
                            2500,
                            336,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '-135deg',
                            '-180deg'
                        ],
                        [
                            "eid196",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid197",
                            "scaleX",
                            2989,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            750,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '-1141px',
                            '-252px'
                        ],
                        [
                            "eid283",
                            "filter.saturate",
                            2377,
                            565,
                            "easeOutBack",
                            "${Quiz_Circle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid257",
                            "width",
                            1989,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '1197px',
                            '1197px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            750,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "left",
                            500,
                            500,
                            "easeOutBack",
                            "${Quiz_Circle2}",
                            '-141px',
                            '-41px'
                        ],
                        [
                            "eid209",
                            "left",
                            1750,
                            125,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '-41px',
                            '53px'
                        ],
                        [
                            "eid210",
                            "left",
                            1875,
                            125,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '53px',
                            '-102px'
                        ],
                        [
                            "eid215",
                            "left",
                            2000,
                            113,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '-102px',
                            '17px'
                        ],
                        [
                            "eid216",
                            "left",
                            2113,
                            126,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '17px',
                            '-41px'
                        ],
                        [
                            "eid194",
                            "left",
                            2615,
                            374,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '-41px',
                            '-720px'
                        ],
                        [
                            "eid239",
                            "scaleX",
                            2500,
                            489,
                            "easeOutBack",
                            "${Text3}",
                            '1.18',
                            '0.75'
                        ],
                        [
                            "eid181",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${QUESTIONCopy}",
                            '451px',
                            '451px'
                        ],
                        [
                            "eid280",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "linear",
                            "${Quiz_Circle}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid101",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${QUESTION}",
                            '461px',
                            '461px'
                        ],
                        [
                            "eid274",
                            "left",
                            750,
                            500,
                            "easeOutBack",
                            "${Quiz_Circle}",
                            '831px',
                            '731px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Quiz_Circle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid253",
                            "scaleX",
                            1500,
                            489,
                            "easeOutBack",
                            "${Text3Copy3}",
                            '1.18',
                            '0.75'
                        ],
                        [
                            "eid276",
                            "letter-spacing",
                            1836,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid252",
                            "scaleY",
                            1500,
                            489,
                            "easeOutBack",
                            "${Text3Copy3}",
                            '1.18',
                            '0.75'
                        ],
                        [
                            "eid15",
                            "opacity",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            2615,
                            374,
                            "easeInOutQuad",
                            "${Quiz_Circle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid279",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "linear",
                            "${Quiz_Circle2}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid188",
                            "scaleY",
                            2500,
                            336,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '1',
                            '0.38'
                        ],
                        [
                            "eid184",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${QUESTIONCopy}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid337",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${QUESTIONCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            500,
                            500,
                            "easeInOutBack",
                            "${QUESTIONCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid287",
                            "scaleY",
                            2377,
                            305,
                            "easeInBack",
                            "${Quiz_Circle}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid289",
                            "scaleY",
                            2682,
                            260,
                            "easeOutBack",
                            "${Quiz_Circle}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid232",
                            "line-height",
                            2989,
                            0,
                            "easeInQuad",
                            "${QUESTION}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid99",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${QUESTION}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid219",
                            "left",
                            2615,
                            374,
                            "easeOutExpo",
                            "${Text2}",
                            '-280px',
                            '1px'
                        ],
                        [
                            "eid268",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${QUESTIONCopy}",
                            '156px',
                            '156px'
                        ],
                        [
                            "eid278",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "linear",
                            "${Quiz_Circle}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid249",
                            "left",
                            2989,
                            0,
                            "linear",
                            "${Text3}",
                            '-21px',
                            '-21px'
                        ],
                        [
                            "eid277",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "linear",
                            "${Quiz_Circle2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid199",
                            "opacity",
                            2500,
                            489,
                            "linear",
                            "${Text3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            2989,
                            261,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid286",
                            "scaleX",
                            2377,
                            305,
                            "easeInBack",
                            "${Quiz_Circle}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid288",
                            "scaleX",
                            2682,
                            260,
                            "easeOutBack",
                            "${Quiz_Circle}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid240",
                            "scaleY",
                            2500,
                            489,
                            "easeOutBack",
                            "${Text3}",
                            '1.18',
                            '0.75'
                        ],
                        [
                            "eid256",
                            "left",
                            1989,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '-21px',
                            '-21px'
                        ],
                        [
                            "eid254",
                            "opacity",
                            1500,
                            489,
                            "linear",
                            "${Text3Copy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid255",
                            "opacity",
                            1989,
                            183,
                            "linear",
                            "${Text3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "left",
                            0,
                            750,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '1458px',
                            '575px'
                        ],
                        [
                            "eid193",
                            "opacity",
                            2789,
                            200,
                            "easeOutExpo",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${QUESTION}",
                            '0',
                            '0'
                        ],
                        [
                            "eid85",
                            "opacity",
                            500,
                            500,
                            "easeInOutBack",
                            "${QUESTION}",
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
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            type: 'image',
                            id: 'BG_Image0',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/test/BG/BG-00.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            type: 'image',
                            id: 'BG_Image1',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/test/BG/BG-01.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'BG_Image2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/test/BG/BG-01.jpg', '0px', '0px']
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
                            "eid323",
                            "scaleX",
                            1000,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            3500,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid317",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid318",
                            "opacity",
                            1000,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '1',
                            '0.75'
                        ],
                        [
                            "eid319",
                            "opacity",
                            3500,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '0.75',
                            '1'
                        ],
                        [
                            "eid324",
                            "scaleY",
                            1000,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '1',
                            '1.05'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            3500,
                            2500,
                            "easeInOutQuad",
                            "${BG_Image2}",
                            '1.05',
                            '1'
                        ],
                        [
                            "eid315",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${BG_Image0}",
                            'none',
                            'none'
                        ],
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${BG_Image1}",
                            'none',
                            'none'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Quiz_edgeActions.js");
})("OTF-QuizTwo");
