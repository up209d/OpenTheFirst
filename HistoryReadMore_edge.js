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
                            id: 'Readmore',
                            symbolName: 'Readmore',
                            type: 'rect',
                            rect: ['411', '40', '1473', '1000', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage-HistoryReadMore}': {
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
            "ReadMore": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1095px', '1000px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            id: 'MoreInfo',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['89px', '89px', '400px', '106px', 'auto', 'auto'],
                            textStyle: ['', '', '98px', '', ''],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Year',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 123px; font-family: doppio-one, sans-serif;\">1973</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['96px', '199px', '400px', '38px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Subtitle',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 31px;\">BORN OF THE NEW LEGEND</span></p>',
                            type: 'text'
                        },
                        {
                            rect: ['96px', '246px', '382px', '3px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            id: 'BlackLine',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            id: 'Photos',
                            type: 'group',
                            rect: ['527px', '100px', '471', '1012', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '248px', '160px', 'auto', 'auto'],
                                id: 'CHP_Export_105718875',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_105718875.jpg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '594px', '471px', '418px', 'auto', 'auto'],
                                type: 'image',
                                id: 'CHP_Export_3042265_2012',
                                opacity: '0',
                                clip: 'rect(35px 467px 188px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_3042265_2012.jpg', '0px', '0px']
                            },
                            {
                                rect: ['-1px', '403px', '471px', '333px', 'auto', 'auto'],
                                transform: [[], [], [], ['0.99572']],
                                type: 'image',
                                id: 'CHP_Export_3303529',
                                opacity: '0',
                                clip: 'rect(23px 467px 218px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_3303529.jpg', '0px', '0px']
                            },
                            {
                                rect: ['256px', '238px', '209px', '221px', 'auto', 'auto'],
                                type: 'image',
                                id: 'CHP_Export_3318160',
                                opacity: '0',
                                clip: 'rect(33.666748046875px 209px 181px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_3318160.jpg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '166px', '248px', '253px', 'auto', 'auto'],
                                id: 'CHP_Export_3319116',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_3319116.jpg', '0px', '0px']
                            },
                            {
                                rect: ['256px', '0px', '209px', '264px', 'auto', 'auto'],
                                type: 'image',
                                id: 'CHP_Export_3335899',
                                opacity: '0',
                                clip: 'rect(0px 209px 264px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/test/CHP_Export_3335899.jpg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1025px', '43px', '32px', '32px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Close_Button',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'ReadMore_button',
                            symbolName: 'ReadMore_button_1',
                            cursor: 'pointer',
                            rect: ['95px', '834px', '187', '34', 'auto', 'auto']
                        },
                        {
                            rect: ['98px', '272px', '382px', '516px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px;\">The 1973 Australian Open was a tennis tournament played on outdoor grass courts at the Kooyong Stadium in Melbourne in Australia and was held from 26 December 1972 to 1 January 1973. It was the 61st edition of the Australian Open and the first Grand Slam tournament of the year. As we count down to French Open 2012, tennis.com.au will feature some of the best Australian achievements at Roland Garros. The highlights will be revealed in chronological order and when all 20 have been named, you get the chance to vote for your No.1 achievement. Almost a dozen years separated the top two seeds in the women’s singles at Roland Garros in.</span></p>',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1100px', '1100px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid606",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${CHP_Export_3335899}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid284",
                            "opacity",
                            1000,
                            1000,
                            "easeOutBack",
                            "${ReadMore_button}",
                            '0',
                            '1'
                        ],
                        [
                            "eid748",
                            "top",
                            4000,
                            0,
                            "easeOutBack",
                            "${ReadMore_button}",
                            '834px',
                            '834px'
                        ],
                        [
                            "eid294",
                            "scaleX",
                            0,
                            1500,
                            "easeOutQuad",
                            "${BlackLine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${Year}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid291",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid764",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid765",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid766",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid767",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid768",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBack",
                            "${BlackLine}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid287",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${Close_Button}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid282",
                            "opacity",
                            0,
                            2000,
                            "easeOutBack",
                            "${BlackLine}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid608",
                            "opacity",
                            250,
                            1000,
                            "linear",
                            "${CHP_Export_3319116}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid611",
                            "opacity",
                            250,
                            1000,
                            "linear",
                            "${CHP_Export_3318160}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid283",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${Subtitle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid609",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${CHP_Export_3303529}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid607",
                            "opacity",
                            750,
                            1000,
                            "linear",
                            "${CHP_Export_3042265_2012}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid610",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${CHP_Export_105718875}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "Evenmore": {
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
                            id: 'andmore',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '711px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'group',
                            id: 'Group',
                            opacity: '0',
                            rect: ['0', '36', '688', '910', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'GrayBKCopy',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                rect: ['0px', '696px', '688px', '214px', 'auto', 'auto'],
                                fill: ['rgba(246,246,246,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'GrayBK',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                rect: ['0px', '301px', '688px', '214px', 'auto', 'auto'],
                                fill: ['rgba(246,246,246,1.00)']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'RESULT',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 72px; font-family: doppio-one, sans-serif; text-transform: uppercase;\">Result</span></p>',
                                rect: ['76px', '29px', '430px', '132px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: '_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['76px', '165px', '193px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Mens_Single',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 24.62px;\">MEN’S SINGLE​​​</span></p>',
                                rect: ['105px', '171px', '147px', '34px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: '_2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['76px', '326px', '237px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Womens_Single',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 24.62px;\">WOMEN\'S SINGLE​​​</span></p>',
                                rect: ['105px', '332px', '193px', '34px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: '_3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['76px', '525px', '205px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Mens_Double',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 25px;\">MEN’S DOUBLE​</span></p>',
                                rect: ['105px', '531px', '193px', '34px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: '_4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['71px', '727px', '248px', '45px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,1)']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'Womens_Double',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 25px;\">WOMEN\'S DOUBLE​</span></p>',
                                rect: ['100px', '732px', '193px', '34px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_1-1',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                                rect: ['144px', '228px', '175px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_1-2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                                rect: ['144px', '262px', '116px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_2-1',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                                rect: ['144px', '395px', '169px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_2-2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                                rect: ['144px', '429px', '116px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_3-1',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                                rect: ['144px', '594px', '175px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_3-2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                                rect: ['144px', '628px', '116px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_4-1',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                                rect: ['144px', '793px', '175px', '20px', 'auto', 'auto']
                            },
                            {
                                font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: '_4-2',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                                rect: ['144px', '827px', '116px', '20px', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'MS_Score',
                                symbolName: 'Score',
                                rect: ['363px', '228px', '289', '56', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'WS_Score',
                                symbolName: 'Score',
                                rect: ['363', '395px', '289', '56', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'MD_Score',
                                symbolName: 'Score',
                                rect: ['363', '594px', '289', '56', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'rect',
                                id: 'WD_Score',
                                symbolName: 'Score',
                                rect: ['363', '793px', '289', '56', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                type: 'image',
                                rect: ['648px', '0px', '32px', '32px', 'auto', 'auto'],
                                id: 'Close_Button',
                                opacity: '1',
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '711px', '1000px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid714",
                            "opacity",
                            382,
                            1000,
                            "easeOutQuad",
                            "${WS_Score}",
                            '0',
                            '1'
                        ],
                        [
                            "eid662",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuad",
                            "${Group}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid713",
                            "opacity",
                            250,
                            1000,
                            "easeOutQuad",
                            "${MD_Score}",
                            '0',
                            '1'
                        ],
                        [
                            "eid712",
                            "opacity",
                            120,
                            1000,
                            "easeOutQuad",
                            "${MS_Score}",
                            '0',
                            '1'
                        ],
                        [
                            "eid711",
                            "opacity",
                            500,
                            1000,
                            "easeOutQuad",
                            "${WD_Score}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "EvenMore": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '112px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['12px', '10px', '94px', '32px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px; text-transform: uppercase;\">Even &nbsp;More​</span></p>',
                            id: 'EvenMore',
                            textStyle: ['', '', '', '', 'none'],
                            display: 'block',
                            type: 'text'
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['16px', '10px', '80px', '32px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-size: 18px; text-transform: uppercase;\">That\'s ALL</span></p>',
                            id: 'ThatsAll',
                            textStyle: ['', '', '', '', 'none'],
                            display: 'none',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '113px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: false,
                    labels: {
                        "back": 4000,
                        "back2": 4500
                    },
                    data: [
                        [
                            "eid88",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${ThatsAll}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid87",
                            "width",
                            4000,
                            0,
                            "linear",
                            "${ThatsAll}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid91",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${ThatsAll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "background-color",
                            4000,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid98",
                            "display",
                            4000,
                            0,
                            "easeInOutBack",
                            "${EvenMore}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Score": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-1-1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            rect: ['0px', '28px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-2-1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(225,225,225,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            align: 'center',
                            rect: ['0px', '3px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            rect: ['53px', '0px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-1-2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            rect: ['53px', '28px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-2-2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(225,225,225,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            align: 'center',
                            rect: ['53px', '2px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            align: 'center',
                            rect: ['0px', '32px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            rect: ['107px', '0px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-1-3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            rect: ['107px', '28px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-2-3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(225,225,225,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            align: 'center',
                            rect: ['107px', '3px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            align: 'center',
                            rect: ['53px', '32px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            rect: ['161px', '0px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-1-4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            rect: ['161px', '28px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-2-4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(225,225,225,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy6',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            align: 'center',
                            rect: ['107px', '32px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            align: 'center',
                            rect: ['161px', '2px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            rect: ['247px', '0px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-1-6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(213,253,52,1.00)']
                        },
                        {
                            rect: ['247px', '28px', '42px', '28px', 'auto', 'auto'],
                            id: '_1-2-5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(76,196,207,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            align: 'center',
                            rect: ['161px', '32px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            rect: ['226px', '0px', '2px', '56px', 'auto', 'auto'],
                            id: 'BlackLine',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">3</span></p>',
                            align: 'center',
                            rect: ['247px', '4px', '42px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'TextCopy9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">1</span></p>',
                            align: 'center',
                            rect: ['247px', '32px', '42px', '20px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '289px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

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
                            stroke: [4, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['16px', '38px', '48px', '3px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['16px', '39px', '48px', '3px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            id: 'RectangleCopy',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
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
            "ReadMore_button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-family: ruluko, sans-serif;\">Read More</span></p>',
                            type: 'text',
                            rect: ['42px', '2px', '145px', '32px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.37209', '0.37209']],
                            id: 'Pluse',
                            symbolName: 'Pluse',
                            rect: ['-27px', '-27px', '86', '86', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '187px', '34px']
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
            "Readmore": {
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
                            id: 'ReadMore_Right',
                            symbolName: 'ReadMore_Right',
                            opacity: '0',
                            rect: ['762', '0', '711', '1000', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ReadMore_Left',
                            symbolName: 'ReadMore_Left',
                            opacity: '0',
                            rect: ['0', '0', '1100', '1000', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1473px', '1000px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid735",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${ReadMore_Left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid736",
                            "opacity",
                            0,
                            0,
                            "easeOutQuad",
                            "${ReadMore_Right}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "ReadMore_Left": {
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
                            transform: [[], [], [], ['1.00457']],
                            overflow: 'hidden',
                            id: 'ReadMore',
                            symbolName: 'ReadMore',
                            opacity: '1',
                            rect: ['0px', '0px', '1095', '1000', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1100px', '1000px']
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
            "ReadMore_Right": {
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
                            id: 'Evenmore',
                            symbolName: 'Evenmore',
                            rect: ['0px', '0px', '711', '1000', 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '711px', '1000px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                            [ "eid273", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Evenmore}', [] ] ]
                    ]
                }
            },
            "PhotoShows": {
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
                            rect: [null, null, '1114px', '1012px']
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
            "ReadMore_button_1": {
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
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; font-family: ruluko, sans-serif;\">Read More</span></p>',
                            rect: ['42px', '-1px', '145px', '32px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            rect: ['-27px', '-27px', '86', '86', 'auto', 'auto'],
                            id: 'Pluse',
                            symbolName: 'Pluse',
                            type: 'rect',
                            transform: [[], [], [], ['0.37209', '0.37209']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '187px', '34px']
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
            "Pluse_1": {
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
                            rect: ['20px', '42px', '48px', '3px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['20px', '43px', '48px', '3px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HistoryReadMore_edgeActions.js");
})("OTF-HistoryReadMore");
