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
                            id: 'BG',
                            type: 'rect',
                            rect: ['0px', '0px', '1934px', '1080px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'burger',
                            symbolName: 'burger',
                            type: 'rect',
                            rect: ['2258px', '-24px', '63', '49', 'auto', 'auto'],
                            overflow: 'visible',
                            userClass: "noDimensionValue"
                        }
                    ],
                    style: {
                        '${Stage-SideBarMenu}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
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
            "burger": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-278px', '-100', '341px', '1380px', 'auto', 'auto'],
                            id: 'ScrollBlock',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'AO',
                                cursor: 'pointer',
                                rect: ['0px', '0px', '341', '322', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                symbolName: 'AO',
                                userClass: 'noDimensionValue'
                            },
                            {
                                type: 'rect',
                                id: 'Player_',
                                cursor: 'pointer',
                                rect: ['0px', '352px', '341', '322', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                symbolName: 'Player_',
                                userClass: 'noDimensionValue'
                            },
                            {
                                type: 'rect',
                                id: 'Gallery_',
                                cursor: 'pointer',
                                rect: ['0px', '704px', '341', '322', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                symbolName: 'Gallery_',
                                userClass: 'noDimensionValue'
                            },
                            {
                                type: 'rect',
                                id: 'Quiz_',
                                cursor: 'pointer',
                                rect: ['0px', '1057px', '341', '322', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                symbolName: 'Quiz_',
                                userClass: 'noDimensionValue'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid340",
                            "left",
                            0,
                            1000,
                            "easeOutBack",
                            "${AO}",
                            '0px',
                            '-460px'
                        ],
                        [
                            "eid337",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Player_}",
                            '0px',
                            '-460px'
                        ],
                        [
                            "eid338",
                            "left",
                            750,
                            1000,
                            "easeOutBack",
                            "${Quiz_}",
                            '0px',
                            '-460px'
                        ],
                        [
                            "eid339",
                            "left",
                            500,
                            1000,
                            "easeOutBack",
                            "${Gallery_}",
                            '0px',
                            '-460px'
                        ]
                    ]
                }
            },
            "AustralianOpen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '126px', '118px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'AustralianOpen',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Venue.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '11px', '90px', '26px', 'auto', 'auto'],
                            id: 'Venue',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: doppio-one, sans-serif; text-transform: uppercase; font-size: 24px; color: rgb(255, 255, 255);\">Venue</span></p>',
                            font: ['dosis, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['40px', '46px', '90px', '26px', 'auto', 'auto'],
                            id: 'YearByYear',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-family: doppio-one, sans-serif; text-transform: uppercase; font-size: 24px; color: rgb(255, 255, 255);\">Year by Year</span></p>',
                            font: ['dosis, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid8",
                            "filter.grayscale",
                            0,
                            1000,
                            "easeInOutBack",
                            "${AustralianOpen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${AustralianOpen}",
                            '0px',
                            '-83px'
                        ]
                    ]
                }
            },
            "Player": {
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
                            fi: null,
                            id: 'Player',
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '126px', '118px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Player.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid4",
                            "filter.grayscale",
                            2000,
                            1000,
                            "linear",
                            "${Player}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Gallery": {
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
                            fi: null,
                            id: 'Gallery',
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '126px', '118px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Highlights.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "filter.grayscale",
                            3000,
                            1000,
                            "linear",
                            "${Gallery}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Quiz": {
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
                            fi: null,
                            id: 'Quiz',
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['0px', '0px', '126px', '118px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Quiz.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '118px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid6",
                            "filter.grayscale",
                            4000,
                            1000,
                            "linear",
                            "${Quiz}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "AO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Block',
                            rect: ['0', '0', '342', '325', 'auto', 'auto'],
                            c: [
                            {
                                userClass: 'SideMenuImages',
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fi: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'AustralianOpen',
                                type: 'image',
                                rect: ['0px', '0px', '341px', '322px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/AustralianOpen.png', '0px', '0px']
                            },
                            {
                                rect: ['1px', '247px', '341px', '78px', 'auto', 'auto'],
                                userClass: 'RoundBotRec',
                                id: 'Rectangle2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.58)']
                            },
                            {
                                type: 'text',
                                rect: ['63px', '265px', '185px', '48px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">A<span style=\"text-transform: uppercase;\">ustralian Open</span></p>',
                                id: 'Venue',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'left',
                                font: ['dosis, sans-serif', [25, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                            },
                            {
                                type: 'image',
                                id: 'venue_logo',
                                rect: ['30px', '264px', '21px', '33px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/svg/Venue_logo.svg', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'HIGHLIGHTS',
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">Highlights</span></p>',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            display: 'block',
                            rect: ['148px', '246px', '185px', '48px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            rect: ['82px', '33px', '259px', '86px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            display: 'block',
                            fill: ['rgba(41,149,152,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'VENUE',
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">Venue​</span></p>',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            display: 'block',
                            rect: ['148px', '59px', '185px', '48px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            id: 'yearByYears',
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">YEAR BY YEAR</span></p>',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            display: 'block',
                            rect: ['148px', '59px', '185px', '48px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1.07532', '0.69206']],
                            rect: ['104px', '57px', '22px', '39px', 'auto', 'auto'],
                            id: 'arrow2',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Arrow2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid296",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid275",
                            "top",
                            250,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '57px',
                            '57px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${AustralianOpen}",
                            '0px',
                            '-220px'
                        ],
                        [
                            "eid314",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            'block',
                            'block'
                        ],
                        [
                            "eid315",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            'block',
                            'block'
                        ],
                        [
                            "eid320",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid321",
                            "top",
                            250,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid254",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid48",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Venue}",
                            '63px',
                            '-166px'
                        ],
                        [
                            "eid292",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid274",
                            "left",
                            250,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid304",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '0',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid277",
                            "top",
                            250,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid301",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "filter.grayscale",
                            0,
                            1000,
                            "easeInOutBack",
                            "${AustralianOpen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid303",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            'block',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            'block',
                            'block'
                        ],
                        [
                            "eid299",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid281",
                            "top",
                            250,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid251",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid298",
                            "top",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid279",
                            "top",
                            250,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid295",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid280",
                            "left",
                            250,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid51",
                            "top",
                            0,
                            1000,
                            "easeInOutBack",
                            "${venue_logo}",
                            '264px',
                            '265px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '1px',
                            '-220px'
                        ],
                        [
                            "eid316",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            '0',
                            '0'
                        ],
                        [
                            "eid317",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${yearByYears}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${venue_logo}",
                            '30px',
                            '-199px'
                        ],
                        [
                            "eid302",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${VENUE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid293",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid276",
                            "left",
                            250,
                            0,
                            "easeInOutBack",
                            "${VENUE}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid294",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid278",
                            "left",
                            250,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid256",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            'block',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${HIGHLIGHTS}",
                            'block',
                            'block'
                        ],
                        [
                            "eid318",
                            "left",
                            0,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid319",
                            "left",
                            250,
                            0,
                            "easeInOutBack",
                            "${yearByYears}",
                            '148px',
                            '148px'
                        ]
                    ]
                }
            },
            "Player_": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '341', '322', 'auto', 'auto'],
                            id: 'BGPlay',
                            symbolName: 'BGPlay',
                            type: 'rect'
                        },
                        {
                            userClass: 'noDimensionValue',
                            id: 'BG',
                            symbolName: 'BG',
                            rect: ['83', '30', '259', '86', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            userClass: 'noDimensionValue',
                            id: 'btn_AustralianPlayer',
                            symbolName: 'btn_AustralianPlayer',
                            rect: ['150', '144', '163', '161', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            userClass: 'noDimensionValue',
                            id: 'btn_InternationalPlayer',
                            symbolName: 'btn_InternationalPlayer',
                            rect: ['149', '144', '163', '161', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                            [ "eid243", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BG}', [0] ] ],
                            [ "eid244", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${btn_AustralianPlayer}', [0] ] ],
                            [ "eid245", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${btn_InternationalPlayer}', [0] ] ],
                            [ "eid246", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${BGPlay}', [] ] ]
                    ]
                }
            },
            "Gallery_": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Block',
                            rect: ['0', '0', '341', '322', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Highlights',
                                rect: ['0px', '0px', '341px', '322px', 'auto', 'auto'],
                                filter: [0, 0, 1.48, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                boxShadow: ['inset', 15, 3, 25, 0, 'rgba(0,0,0,0.65098)'],
                                userClass: 'SideMenuImages',
                                fi: [0, 0, 1.48, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fill: ['rgba(0,0,0,0)', 'images/Highlights.png', '0px', '0px']
                            },
                            {
                                rect: ['0px', '244px', '341px', '78px', 'auto', 'auto'],
                                userClass: 'RoundBotRec',
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.5922)']
                            },
                            {
                                type: 'image',
                                id: 'Gallery_icon',
                                rect: ['24px', '273px', '34px', '28px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/svg/Gallery_Logo.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['65px', '270px', '100px', '34px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">Gallery</span></p>',
                                id: 'Gallery',
                                textStyle: ['', '', '', '', 'uppercase'],
                                align: 'left',
                                font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['82px', '99px', '259px', '86px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(41,149,152,1)']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1.41667']],
                            rect: ['108px', '128px', '24px', '27px', 'auto', 'auto'],
                            id: 'arrow32',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Arrow2.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['148px', '115px', '109px', '70px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; color: rgb(255, 255, 255);\">GO TO GALLERY</span></p>',
                            display: 'none',
                            font: ['doppio-one, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid95",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Highlights}",
                            '0px',
                            '-221px'
                        ],
                        [
                            "eid112",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Gallery}",
                            '65px',
                            '-156px'
                        ],
                        [
                            "eid121",
                            "filter.grayscale",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Highlights}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Gallery_icon}",
                            '24px',
                            '-197px'
                        ],
                        [
                            "eid122",
                            "filter.contrast",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Highlights}",
                            '1.48',
                            '1'
                        ],
                        [
                            "eid101",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${arrow32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Rectangle}",
                            '0px',
                            '-221px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${arrow32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Quiz_": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Block',
                            rect: ['0', '0', '342', '322', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'Quiz',
                                rect: ['0px', '0px', '341px', '322px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                boxShadow: ['inset', 15, 3, 25, 0, 'rgba(0,0,0,0.65098)'],
                                userClass: 'SideMenuImages',
                                fi: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                fill: ['rgba(0,0,0,0)', 'images/Quiz.png', '0px', '0px']
                            },
                            {
                                rect: ['1px', '244px', '341px', '78px', 'auto', 'auto'],
                                userClass: 'RoundBotRec',
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.5922)']
                            },
                            {
                                type: 'image',
                                id: 'Quiz_icon',
                                rect: ['23px', '265px', '37px', '36px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/svg/Quiz_Logo.svg', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['71px', '265px', '148px', '36px', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 25px;\">SOME FUN</span></p>',
                                id: 'QUIZ_Title',
                                textStyle: ['', '', '', '', 'uppercase'],
                                align: 'left',
                                font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                            }]
                        },
                        {
                            rect: ['82px', '36px', '259px', '86px', 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(41,149,152,1)']
                        },
                        {
                            type: 'text',
                            id: 'QUIZ_1',
                            textStyle: ['', '', '', '', 'uppercase'],
                            rect: ['138px', '63px', '148px', '36px', 'auto', 'auto'],
                            display: 'none',
                            align: 'left',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '200', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 25px; font-weight: 400;\">PUZZLE</span></p>'
                        },
                        {
                            type: 'text',
                            id: 'QUIZ_2',
                            textStyle: ['', '', '', '', 'uppercase'],
                            rect: ['138px', '161px', '148px', '36px', 'auto', 'auto'],
                            display: 'none',
                            align: 'left',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '200', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 25px; font-weight: 400;\">QUIZ</span></p>'
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1.78314', '0.956']],
                            display: 'none',
                            rect: ['99px', '65px', '13px', '28px', 'auto', 'auto'],
                            id: 'arrow4',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Arrow2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid124",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${arrow4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${QUIZ_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${arrow4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid209",
                            "width",
                            0,
                            1102,
                            "easeInOutBack",
                            "${QUIZ_Title}",
                            '148px',
                            '212px'
                        ],
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${QUIZ_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${QUIZ_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Quiz}",
                            '0px',
                            '-222px'
                        ],
                        [
                            "eid139",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${QUIZ_Title}",
                            '71px',
                            '-148px'
                        ],
                        [
                            "eid132",
                            "opacity",
                            500,
                            750,
                            "easeInOutBack",
                            "${QUIZ_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Rectangle2}",
                            '1px',
                            '-222px'
                        ],
                        [
                            "eid118",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${QUIZ_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            500,
                            0,
                            "easeInOutBack",
                            "${QUIZ_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "filter.grayscale",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Quiz}",
                            '1',
                            '0'
                        ],
                        [
                            "eid140",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Quiz_icon}",
                            '23px',
                            '-196px'
                        ]
                    ]
                }
            },
            "btn_AustralianPlayer": {
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
                            id: 'GrandSlam',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-size: 20px;\">GRand Slam</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '0px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'HallOfFrame',
                            textStyle: ['', '', '', '', 'uppercase'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 20px;\">Hall Of Frame</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '60px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'FormGuide',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); text-transform: uppercase; font-size: 20px;\">Form Guide</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '114px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'Australian_Winner',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">Australian Player</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '-103px', '194px', '78px', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '163px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid213",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Australian_Winner}",
                            '0',
                            '0'
                        ],
                        [
                            "eid205",
                            "opacity",
                            250,
                            500,
                            "easeInOutBack",
                            "${Australian_Winner}",
                            '0',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${GrandSlam}",
                            '0',
                            '0'
                        ],
                        [
                            "eid152",
                            "opacity",
                            1250,
                            750,
                            "easeInOutBack",
                            "${GrandSlam}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${FormGuide}",
                            '0',
                            '0'
                        ],
                        [
                            "eid155",
                            "opacity",
                            1750,
                            750,
                            "easeInOutBack",
                            "${FormGuide}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${FormGuide}",
                            'none',
                            'none'
                        ],
                        [
                            "eid229",
                            "display",
                            1750,
                            0,
                            "easeInOutBack",
                            "${FormGuide}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${HallOfFrame}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            1500,
                            0,
                            "easeInOutBack",
                            "${HallOfFrame}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${HallOfFrame}",
                            '0',
                            '0'
                        ],
                        [
                            "eid154",
                            "opacity",
                            1500,
                            750,
                            "easeInOutBack",
                            "${HallOfFrame}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${GrandSlam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid228",
                            "display",
                            1250,
                            0,
                            "easeInOutBack",
                            "${GrandSlam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${Australian_Winner}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${Australian_Winner}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn_InternationalPlayer": {
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
                            id: 'TOP10',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 20px;\">TOP 10</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '0px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'RisingTalent',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; color: rgb(255, 255, 255); font-size: 20px;\">Rising Talent</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '60px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'H2H',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 20px;\">Head To Head</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '114px', '163px', '47px', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'International',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">InTernational</span></p><p style=\"margin: 0px;\"><span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">​Player</span></p>',
                            display: 'none',
                            align: 'left',
                            rect: ['0px', '-103px', '194px', '67px', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '163px', '161px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid232",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${H2H}",
                            'none',
                            'none'
                        ],
                        [
                            "eid236",
                            "display",
                            1750,
                            0,
                            "easeInOutBack",
                            "${H2H}",
                            'none',
                            'block'
                        ],
                        [
                            "eid217",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${TOP10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid157",
                            "opacity",
                            1250,
                            750,
                            "easeInOutBack",
                            "${TOP10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${International}",
                            '0',
                            '0'
                        ],
                        [
                            "eid203",
                            "opacity",
                            250,
                            500,
                            "easeInOutBack",
                            "${International}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${TOP10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            1250,
                            0,
                            "easeInOutBack",
                            "${TOP10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid233",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${RisingTalent}",
                            'none',
                            'none'
                        ],
                        [
                            "eid237",
                            "display",
                            1500,
                            0,
                            "easeInOutBack",
                            "${RisingTalent}",
                            'none',
                            'block'
                        ],
                        [
                            "eid215",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${H2H}",
                            '0',
                            '0'
                        ],
                        [
                            "eid159",
                            "opacity",
                            1750,
                            750,
                            "easeInOutBack",
                            "${H2H}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${International}",
                            'none',
                            'none'
                        ],
                        [
                            "eid235",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${International}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "top",
                            1250,
                            500,
                            "easeInOutBack",
                            "${International}",
                            '50px',
                            '-103px'
                        ],
                        [
                            "eid216",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${RisingTalent}",
                            '0',
                            '0'
                        ],
                        [
                            "eid158",
                            "opacity",
                            1500,
                            750,
                            "easeInOutBack",
                            "${RisingTalent}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BG": {
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
                            rect: ['0px', '0px', '259px', '86px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle4',
                            opacity: '0',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(41,149,152,1)']
                        },
                        {
                            transform: [[], [], [], ['1.07532', '0.69206']],
                            rect: ['21px', '25px', '22px', '39px', 'auto', 'auto'],
                            display: 'none',
                            id: 'arrow2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Arrow2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '259px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid168",
                            "rotateZ",
                            1750,
                            500,
                            "easeInOutBack",
                            "${arrow2}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid218",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid78",
                            "opacity",
                            250,
                            1000,
                            "easeInOutBack",
                            "${arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid241",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${arrow2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            250,
                            0,
                            "easeInOutBack",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "opacity",
                            0,
                            0,
                            "easeInOutBack",
                            "${Rectangle4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid76",
                            "opacity",
                            250,
                            750,
                            "easeInOutBack",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "BGPlay": {
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
                            id: 'Player',
                            rect: ['0px', '0px', '341px', '322px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['inset', 15, 3, 25, 0, 'rgba(0,0,0,0.65098)'],
                            userClass: 'SideMenuImages',
                            fi: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Player.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '244px', '341px', '78px', 'auto', 'auto'],
                            userClass: 'RoundBotRec',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.5922)']
                        },
                        {
                            type: 'image',
                            id: 'Player_icon',
                            rect: ['27px', '272px', '26px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/svg/Player_Logo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'title-Player',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['65px', '273px', '194px', '47px', 'auto', 'auto'],
                            align: 'left',
                            font: ['dosis, sans-serif', [25, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; color: rgb(255, 255, 255);\">​Player</span></p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid73",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Player}",
                            '0px',
                            '-222px'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Player_icon}",
                            '272px',
                            '273px'
                        ],
                        [
                            "eid68",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Rectangle3}",
                            '0px',
                            '-222px'
                        ],
                        [
                            "eid70",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Player_icon}",
                            '27px',
                            '-199px'
                        ],
                        [
                            "eid119",
                            "filter.grayscale",
                            0,
                            1000,
                            "easeInOutBack",
                            "${Player}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "left",
                            0,
                            1000,
                            "easeInOutBack",
                            "${title-Player}",
                            '65px',
                            '-160px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SideBarMenu_edgeActions.js");
})("OTF-SideBarMenu");
