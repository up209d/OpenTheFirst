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
                            id: 'BGImages',
                            symbolName: 'BGImages',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'BGSymbol',
                            symbolName: 'BGSymbol',
                            type: 'rect',
                            rect: ['-1676', '-247', '5262', '1573', 'auto', 'auto']
                        },
                        {
                            id: 'ImagesGroup',
                            type: 'group',
                            rect: ['15px', '355px', '9370', '270', 'auto', 'auto'],
                            c: [
                            {
                                id: 'PlayerImage-00',
                                type: 'ellipse',
                                rect: ['65px', '-45px', '360px', '360px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                opacity: '1',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                userClass: "PlayerImages",
                                filter: [0, 0, 1, 0, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 0, 0, 30],
                                transform: [[],[],[],['0.75','0.75']]
                            }]
                        },
                        {
                            id: 'ButtonsGroup',
                            type: 'group',
                            rect: ['0', '1100px', '32', '32', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Button-00',
                                type: 'ellipse',
                                rect: ['0px', '0px', '26px', '26px', 'auto', 'auto'],
                                cursor: 'pointer',
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [3,"rgba(255,255,255,1.00)","solid"],
                                userClass: "PlayerButtons"
                            }]
                        },
                        {
                            id: 'PlayerBrief',
                            symbolName: 'PlayerBrief',
                            type: 'rect',
                            rect: ['579px', '308px', '360', '360', 'auto', 'auto']
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
                            fill: ["rgba(0,0,0,0)",im+"svg/Winner.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['295px', '159px', '440px', '134px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">GRANDSLAM WINNERS</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif; font-size: 40px;\">CHAMPIONS</span></p>",
                            font: ['dosis, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage-PlayerList}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid2917",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "easeOutBack",
                            "${PlayerImage-00}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid3054",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${PlayerImage-00}",
                            '1',
                            '1'
                        ],
                        [
                            "eid11160",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "linear",
                            "${PlayerImage-00}",
                            '30px',
                            '30px'
                        ]
                    ]
                }
            },
            "BGSymbol": {
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
                            id: 'BackMid-0',
                            opacity: '0',
                            rect: ['1566px', '367px', '740px', '740px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.75', '0.75']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'BackMid-1',
                            opacity: '0',
                            rect: ['2066px', '367px', '740px', '740px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'BackMid-2',
                            opacity: '0',
                            rect: ['2966px', '367px', '740px', '740px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.75', '0.75']],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '5262px', '1573px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid3007",
                            "scaleY",
                            750,
                            1250,
                            "easeOutBack",
                            "${BackMid-0}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid9388",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${BackMid-0}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid9386",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${BackMid-1}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid9387",
                            "top",
                            0,
                            0,
                            "easeOutBack",
                            "${BackMid-2}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid3015",
                            "scaleY",
                            750,
                            1250,
                            "easeOutBack",
                            "${BackMid-2}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid8874",
                            "opacity",
                            750,
                            500,
                            "easeOutBack",
                            "${BackMid-0}",
                            '0',
                            '0.15'
                        ],
                        [
                            "eid8875",
                            "opacity",
                            1250,
                            750,
                            "easeOutBack",
                            "${BackMid-0}",
                            '0.15',
                            '0'
                        ],
                        [
                            "eid8876",
                            "opacity",
                            500,
                            500,
                            "easeOutBack",
                            "${BackMid-1}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid8877",
                            "opacity",
                            1000,
                            750,
                            "easeOutBack",
                            "${BackMid-1}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid8878",
                            "opacity",
                            750,
                            500,
                            "easeOutBack",
                            "${BackMid-2}",
                            '0',
                            '0.15'
                        ],
                        [
                            "eid8879",
                            "opacity",
                            1250,
                            750,
                            "easeOutBack",
                            "${BackMid-2}",
                            '0.15',
                            '0'
                        ],
                        [
                            "eid3006",
                            "scaleX",
                            750,
                            1250,
                            "easeOutBack",
                            "${BackMid-0}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3013",
                            "scaleY",
                            500,
                            1250,
                            "easeOutBack",
                            "${BackMid-1}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid3014",
                            "scaleX",
                            750,
                            1250,
                            "easeOutBack",
                            "${BackMid-2}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3012",
                            "scaleX",
                            500,
                            1250,
                            "easeOutBack",
                            "${BackMid-1}",
                            '0',
                            '1.5'
                        ]
                    ]
                }
            },
            "PlayerBrief": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '0', '0', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'P_Info',
                            id: 'P_Info',
                            type: 'rect'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Orbit',
                            opacity: '0',
                            cursor: 'pointer',
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['-32px', '-32px', '425px', '425px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            display: 'none',
                            userClass: '',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['-46', '166', '28', '28', 'auto', 'auto'],
                            id: 'Bullets',
                            type: 'group',
                            c: [
                            {
                                type: 'ellipse',
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Bullet-00',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['10px', '0px', '18px', '18px', 'auto', 'auto'],
                                userClass: 'PlayerBullets',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['40'], [0, 0, 0], [1, 1, 1]],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Bullet-01',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['10px', '0px', '18px', '18px', 'auto', 'auto'],
                                type: 'ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                userClass: 'PlayerBullets',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['50'], [0, 0, 0], [1, 1, 1]],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Bullet-02',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['10px', '0px', '18px', '18px', 'auto', 'auto'],
                                type: 'ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                userClass: 'PlayerBullets',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        },
                        {
                            type: 'image',
                            id: 'Flag',
                            opacity: '0',
                            rect: ['280px', '54px', '60px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/test/Flag.jpg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            type: 'text',
                            font: ['doppio-one, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'normal'],
                            id: 'GivenName',
                            textStyle: ['3px', '', '', '', ''],
                            text: '<p style=\"margin: 0px;\">​ROGER</p>',
                            rect: ['371px', '52px', '237px', '28px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            type: 'text',
                            font: ['doppio-one, sans-serif', [45, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'normal'],
                            id: 'FamilyName',
                            textStyle: ['0px', '', '', '', ''],
                            text: '<p style=\"margin: 0px;\">FEDERER</p>',
                            rect: ['369px', '66px', '372px', '64px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['373px', '123px', '380px', '3px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Line',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0.5',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            id: 'Location',
                            textStyle: ['', '', '6px', '', 'none'],
                            font: ['doppio-one, sans-serif', [45, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['372px', '132px', '386px', '32px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 20px; font-weight: 100;\">Location: </span><span style=\"font-family: dosis, sans-serif; font-size: 20px; font-weight: 700;\">Basel, Switzerland</span></p>'
                        },
                        {
                            transform: [[], [], [], ['0']],
                            id: 'BriefText',
                            textStyle: ['', '', '6px', '', 'none'],
                            font: ['doppio-one, sans-serif', [45, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['372px', '156px', '386px', '64px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px; line-height: 14px;\">​<span style=\"font-family: dosis, sans-serif; font-weight: 100; font-size: 14px; letter-spacing: 1px;\">A living legend of the game of tennis. He has won&nbsp;\nmore major tournaments than any other male player in history.</span></p>'
                        },
                        {
                            type: 'group',
                            id: 'ReadMore',
                            cursor: 'pointer',
                            rect: ['375', '231', '40', '34', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0', '0', '40', '34', 'auto', 'auto'],
                                id: 'ReadMoreGroup',
                                type: 'group',
                                c: [
                                {
                                    transform: [[], [], [], ['0']],
                                    type: 'text',
                                    id: 'Text',
                                    text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-family: ruluko, sans-serif;\">Read More</span></p>',
                                    font: ['dosis, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                    rect: ['40px', '2px', '145px', '32px', 'auto', 'auto']
                                },
                                {
                                    transform: [[], [], [], ['0', '0.37209']],
                                    id: 'Pluse',
                                    symbolName: 'Pluse',
                                    rect: ['0px', '-27px', '86', '86', 'auto', 'auto'],
                                    type: 'rect'
                                }]
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
                    duration: 2274,
                    autoPlay: false,
                    data: [
                        [
                            "eid4021",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12976",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12977",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12978",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12979",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12980",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BriefText}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4646",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12981",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12982",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12983",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12984",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12985",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12863",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${P_Info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12864",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${P_Info}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4014",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12986",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12987",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12988",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12989",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12990",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${GivenName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5005",
                            "scaleX",
                            1206,
                            659,
                            "easeOutQuad",
                            "${Line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5051",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12991",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12992",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12993",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12994",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12995",
                            "transform-origin",
                            0,
                            0,
                            "easeOutQuad",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4647",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12996",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12997",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12998",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid12999",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13000",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3770",
                            "left",
                            865,
                            635,
                            "easeOutBack",
                            "${Flag}",
                            '280px',
                            '300px'
                        ],
                        [
                            "eid4076",
                            "scaleX",
                            1615,
                            659,
                            "easeOutBack",
                            "${Pluse}",
                            '0',
                            '0.37'
                        ],
                        [
                            "eid4023",
                            "scaleX",
                            1456,
                            659,
                            "easeOutBack",
                            "${BriefText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4078",
                            "scaleX",
                            1365,
                            659,
                            "easeOutBack",
                            "${Location}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3767",
                            "opacity",
                            865,
                            635,
                            "easeOutBack",
                            "${Flag}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4016",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13001",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13002",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13003",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13004",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13005",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Location}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4645",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13006",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13007",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13008",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13009",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13010",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            [1193.33,71.11],
                            [1193.33,71.11],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3258",
                            "opacity",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4642",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-02}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid4018",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13011",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13012",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13013",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13014",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13015",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${FamilyName}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3202",
                            "rotateZ",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-00}",
                            '0deg',
                            '30deg'
                        ],
                        [
                            "eid3256",
                            "rotateZ",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-02}",
                            '0deg',
                            '50deg'
                        ],
                        [
                            "eid3197",
                            "opacity",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4012",
                            "scaleX",
                            1115,
                            659,
                            "easeOutBack",
                            "${GivenName}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3199",
                            "opacity",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-00}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4020",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13016",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13017",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13018",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13019",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13020",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Text}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4644",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-00}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid4017",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13021",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13022",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13023",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13024",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13025",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${Pluse}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3200",
                            "rotateZ",
                            750,
                            1000,
                            "easeOutBack",
                            "${Bullet-01}",
                            '0deg',
                            '40deg'
                        ],
                        [
                            "eid4015",
                            "scaleX",
                            1615,
                            659,
                            "easeOutBack",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6159",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Orbit}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4082",
                            "scaleX",
                            1206,
                            659,
                            "easeOutBack",
                            "${FamilyName}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4643",
                            "left",
                            0,
                            0,
                            "easeOutBack",
                            "${Bullet-01}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "Pluse": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '78px', '78px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            rect: ['16px', '38px', '48px', '3px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            rect: ['16px', '39px', '48px', '3px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '86px', '86px']
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
            "BGImages": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.03', '1.03']],
                            id: 'PlayerListBG',
                            opacity: '1',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/OTF-BG-09.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'BlackScreen',
                            opacity: '0.5',
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
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9797",
                            "opacity",
                            0,
                            1250,
                            "easeOutQuad",
                            "${PlayerListBG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9491",
                            "scaleX",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${PlayerListBG}",
                            '1',
                            '1.03'
                        ],
                        [
                            "eid10050",
                            "scaleX",
                            1250,
                            2000,
                            "easeOutQuad",
                            "${PlayerListBG}",
                            '1.03',
                            '1.02'
                        ],
                        [
                            "eid9493",
                            "scaleX",
                            3250,
                            1750,
                            "easeOutQuad",
                            "${PlayerListBG}",
                            '1.02',
                            '1.03'
                        ],
                        [
                            "eid9492",
                            "scaleY",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${PlayerListBG}",
                            '1',
                            '1.03'
                        ],
                        [
                            "eid10051",
                            "scaleY",
                            1250,
                            2000,
                            "easeOutQuad",
                            "${PlayerListBG}",
                            '1.03',
                            '1.02'
                        ],
                        [
                            "eid9494",
                            "scaleY",
                            3250,
                            1750,
                            "easeOutQuad",
                            "${PlayerListBG}",
                            '1.02',
                            '1.03'
                        ],
                        [
                            "eid10153",
                            "opacity",
                            0,
                            1250,
                            "easeInQuad",
                            "${BlackScreen}",
                            '0',
                            '0.5'
                        ]
                    ]
                }
            },
            "PInfo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1px', '1px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [

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
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            userClass: '',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Group',
                            rect: ['180', '180', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                type: 'ellipse',
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'MaleInfoIconBGCopy',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['-147px', '-146px', '300px', '300px', 'auto', 'auto'],
                                display: 'none',
                                userClass: '',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                transform: [[], [], [], ['0', '0']],
                                id: 'MaleInfoCopy',
                                opacity: '0',
                                cursor: 'pointer',
                                rect: ['-56px', '-56px', '112px', '112px', 'auto', 'auto'],
                                display: 'none',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'svg/Info.svg', '0px', '0px']
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
                            "eid12921",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12922",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${MaleInfoIconBGCopy}",
                            'none',
                            'block'
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
                            '1'
                        ],
                        [
                            "eid12924",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Group}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12925",
                            "display",
                            250,
                            0,
                            "easeOutBack",
                            "${Group}",
                            'none',
                            'block'
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
                            '1'
                        ],
                        [
                            "eid12920",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12923",
                            "display",
                            500,
                            0,
                            "easeOutBack",
                            "${MaleInfoCopy}",
                            'none',
                            'block'
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("PlayerList_edgeActions.js");
})("OTF-PlayerList");
