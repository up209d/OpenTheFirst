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
                            id: 'BG',
                            display: 'none',
                            type: 'rect',
                            rect: ['8px', '10px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0.21138211382114',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'VenueSymbol',
                            symbolName: 'VenueSymbol',
                            type: 'rect',
                            rect: ['1109px', '279px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: ""
                        },
                        {
                            id: 'WinnerSymbol',
                            symbolName: 'WinnerSymbol',
                            type: 'rect',
                            rect: ['1155px', '503px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: ""
                        },
                        {
                            id: 'ResultSymbol',
                            symbolName: 'ResultSymbol',
                            type: 'rect',
                            rect: ['1116px', '730px', '298', '73', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: ""
                        }
                    ],
                    style: {
                        '${Stage-HistoryActionButton}': {
                            isStage: true,
                            rect: ['null', 'null', '1px', '1px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid44",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${BG}",
                            '0.21138211382114',
                            '0.21138211382114'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${BG}",
                            'none',
                            'none'
                        ],
                            [ "eid140", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WinnerSymbol}', [] ] ],
                            [ "eid138", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${VenueSymbol}', [] ] ],
                            [ "eid139", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ResultSymbol}', [] ] ],
                            [ "eid143", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${VenueSymbol}', [] ] ],
                            [ "eid142", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${WinnerSymbol}', [] ] ],
                            [ "eid141", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${ResultSymbol}', [] ] ],
                            [ "eid137", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${VenueSymbol}', [3000] ] ],
                            [ "eid136", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${WinnerSymbol}', [3000] ] ],
                            [ "eid135", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${ResultSymbol}', [3000] ] ]
                    ]
                }
            },
            "ResultSymbol": {
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
                            id: 'ResultIconBackground',
                            opacity: '0.50406504065041',
                            rect: ['-17px', '-36px', '160px', '160px', 'auto', 'auto'],
                            userClass: 'HistoryActionButtons',
                            transform: [[], [], [], ['0', '0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['7px', '-12px', '112px', '112px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'Rank',
                            userClass: 'HistoryActionButtons',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'svg/Rank.svg', '0px', '0px']
                        },
                        {
                            font: ['doppio-one, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            rect: ['210px', '10px', '298px', '73px', 'auto', 'auto'],
                            type: 'text',
                            id: 'ResultText',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif;\">RESULT</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 30px;\">TOURNAMENT RANK</span></p>',
                            userClass: 'HistoryActionButtons'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '400px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid96",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${ResultText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            3250,
                            500,
                            "easeInBack",
                            "${ResultText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "scaleX",
                            1750,
                            750,
                            "easeOutBack",
                            "${Rank}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleX",
                            3250,
                            500,
                            "easeInBack",
                            "${Rank}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "scaleY",
                            1500,
                            750,
                            "easeOutBack",
                            "${ResultIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            3000,
                            500,
                            "easeInBack",
                            "${ResultIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "left",
                            2000,
                            500,
                            "easeOutBack",
                            "${ResultText}",
                            '210px',
                            '160px'
                        ],
                        [
                            "eid117",
                            "left",
                            3250,
                            500,
                            "easeInBack",
                            "${ResultText}",
                            '160px',
                            '210px'
                        ],
                        [
                            "eid38",
                            "scaleX",
                            1500,
                            750,
                            "easeOutBack",
                            "${ResultIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            3000,
                            500,
                            "easeInBack",
                            "${ResultIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid243",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${Rank}",
                            '-12px',
                            '-12px'
                        ],
                        [
                            "eid246",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${Rank}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            1750,
                            750,
                            "easeOutBack",
                            "${Rank}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            3250,
                            500,
                            "easeInBack",
                            "${Rank}",
                            '1',
                            '0'
                        ],
                        [
                            "eid244",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${ResultText}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid242",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${ResultIconBackground}",
                            '-36px',
                            '-36px'
                        ],
                        [
                            "eid245",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${ResultIconBackground}",
                            '-17px',
                            '-17px'
                        ]
                    ]
                }
            },
            "WinnerSymbol": {
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
                            id: 'WinnerIconBackground',
                            opacity: '0.50406504065041',
                            rect: ['-26px', '-33px', '160px', '160px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            userClass: 'HistoryActionButtons',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['-2px', '-9px', '112px', '112px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'Winner',
                            userClass: 'HistoryActionButtons',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'svg/Winner.svg', '0px', '0px']
                        },
                        {
                            rect: ['210px', '10px', '298px', '73px', 'auto', 'auto'],
                            font: ['doppio-one, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            userClass: 'HistoryActionButtons',
                            id: 'WinnerText',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif;\">PLAYERS</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 30px;\">SEASON CHAMPIONS</span></p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid237",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${Winner}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid238",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${WinnerText}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid90",
                            "opacity",
                            1750,
                            500,
                            "easeOutBack",
                            "${WinnerText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "opacity",
                            3250,
                            500,
                            "easeInBack",
                            "${WinnerText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid234",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${Winner}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid233",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${WinnerIconBackground}",
                            '-26px',
                            '-26px'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            1250,
                            750,
                            "easeOutBack",
                            "${WinnerIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "scaleX",
                            3000,
                            500,
                            "easeInBack",
                            "${WinnerIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            1250,
                            750,
                            "easeOutBack",
                            "${WinnerIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "scaleY",
                            3000,
                            500,
                            "easeInBack",
                            "${WinnerIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            1500,
                            750,
                            "easeOutBack",
                            "${Winner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "scaleX",
                            3250,
                            500,
                            "easeInBack",
                            "${Winner}",
                            '1',
                            '0'
                        ],
                        [
                            "eid89",
                            "left",
                            1750,
                            500,
                            "easeOutBack",
                            "${WinnerText}",
                            '210px',
                            '160px'
                        ],
                        [
                            "eid123",
                            "left",
                            3250,
                            500,
                            "easeInBack",
                            "${WinnerText}",
                            '160px',
                            '210px'
                        ],
                        [
                            "eid236",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${WinnerIconBackground}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            1500,
                            750,
                            "easeOutBack",
                            "${Winner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "scaleY",
                            3250,
                            500,
                            "easeInBack",
                            "${Winner}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "VenueSymbol": {
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
                            id: 'VenueIconBackground',
                            opacity: '0.50406504065041',
                            rect: ['-15px', '-33px', '160px', '160px', 'auto', 'auto'],
                            userClass: 'HistoryActionButtons',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            userClass: 'HistoryActionButtons',
                            id: 'VenueIcon',
                            type: 'image',
                            rect: ['9px', '-9px', '112px', '112px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/svg/MoreHistory.svg', '0px', '0px']
                        },
                        {
                            font: ['doppio-one, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif;\">NEWS &amp; EVENTS</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 30px;\">YEAR HIGHLIGHT</span></p>',
                            id: 'VenueText',
                            opacity: '0',
                            rect: ['210px', '10px', '298px', '73px', 'auto', 'auto'],
                            userClass: 'HistoryActionButtons'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid224",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VenueIcon}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid225",
                            "left",
                            0,
                            0,
                            "linear",
                            "${VenueIconBackground}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid19",
                            "scaleX",
                            1000,
                            750,
                            "easeOutBack",
                            "${VenueIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleX",
                            3000,
                            500,
                            "easeInBack",
                            "${VenueIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            1000,
                            750,
                            "easeOutBack",
                            "${VenueIconBackground}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "scaleY",
                            3000,
                            500,
                            "easeInBack",
                            "${VenueIconBackground}",
                            '1',
                            '0'
                        ],
                        [
                            "eid227",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${VenueText}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid228",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${VenueIconBackground}",
                            '-33px',
                            '-33px'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            1250,
                            750,
                            "easeOutBack",
                            "${VenueIcon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            3250,
                            500,
                            "easeInBack",
                            "${VenueIcon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${VenueText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            3250,
                            500,
                            "easeInBack",
                            "${VenueText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "left",
                            1500,
                            500,
                            "easeOutBack",
                            "${VenueText}",
                            '210px',
                            '160px'
                        ],
                        [
                            "eid129",
                            "left",
                            3250,
                            500,
                            "easeInBack",
                            "${VenueText}",
                            '160px',
                            '210px'
                        ],
                        [
                            "eid226",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${VenueIcon}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            1250,
                            750,
                            "easeOutBack",
                            "${VenueIcon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "scaleY",
                            3250,
                            500,
                            "easeInBack",
                            "${VenueIcon}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HistoryActionButton_edgeActions.js");
})("OTF-HistoryActionButton");
