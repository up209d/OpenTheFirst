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
                            id: 'PlayerInfo',
                            symbolName: 'Readmore',
                            type: 'rect',
                            rect: ['411px', '40px', '1473', '1000', 'auto', 'auto'],
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${Stage-PlayerInformation}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
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
                            type: 'rect',
                            id: 'PlayerInfoBK',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            rect: ['0px', '0px', '1095px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Name',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 50px; font-family: doppio-one, sans-serif; text-transform: uppercase;\">Roger</span><span style=\"font-size: 130px; font-family: doppio-one, sans-serif; text-transform: uppercase;\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 130px; font-family: doppio-one, sans-serif; text-transform: uppercase;\">Federer</span></p>',
                            rect: ['68px', '18px', '1016px', '227px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['80px', '245px', '411px', '55px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​BORN OF THE NEW LEGEND</p>',
                            opacity: '0',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Subtitle',
                            font: ['ruluko, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['78px', '282px', '400px', '4px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'BlackLine',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            overflow: 'scroll',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​The 1973 Australian Open was a tennis tournament played on outdoor grass courts at the Kooyong Stadium in Melbourne in Australia and was held from 26 December 1972 to 1 January 1973. It was the 61st edition of the Australian Open and the first Grand Slam tournament of the year. As we count down to French Open 2012, tennis.com.au will feature some of the best Australian achievements at Roland Garros. The highlights will be revealed in chronological order and when all 20 have been named, you get the chance to vote for your No.1 achievement. Almost a dozen years separated the top two seeds in the women’s singles at Roland Garros in 1973. Australian Margaret Court, aged 30, sat atop the heap, while 19-year-old American Chris Evert was seeded second.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">The wildly talented Evert had raced up the rankings thanks to her poise, consistency and heavy ground strokes. In 1973 Evert was yet to win her first singles major, but the teenager was on the cusp of one of the great tennis careers.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Court, as was generally her way, only gave up one set on her way to the final. On the other side of the draw, the American’s path to the final was even smoother – the stingy starlet didn’t drop a set before the final against Court.\n\nDespite having beaten her before, </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Evert was unable to repeat the dose in a major final.\n\nEvert outplayed Court in an opening set tiebreak, but Court turned the tables in the second set, winning the ensuing tiebreak. In the third, Court edged out Evert 6-7 7-6 6-4 to win the Roland Garros singles title for the fifth and final time.\n\nCourt would also win the doubles – with Virginia Wade over Francoise Durr and Betty Stove – to claim her 13th French Open crown (five singles, four doubles and four mixed), which is a record that still stands today.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A few months later Court won the US Open to finish 1973 as the No.1 player. It would prove to be her last victory in a major singles final.She retired from professional tennis in 1975 but her name continues to be raised when talk turns to the greats of the game despite it being more than 30 years since she last struck a ball in competition.\n\n</p>',
                            rect: ['81px', '308px', '410px', '568px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1095px', '1000px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    labels: {
                        "Year": 1250,
                        "Line": 1750,
                        "Text": 2000
                    },
                    data: [
                        [
                            "eid30",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${Name}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "top",
                            2218,
                            0,
                            "linear",
                            "${Subtitle}",
                            '245px',
                            '245px'
                        ],
                        [
                            "eid62",
                            "top",
                            2218,
                            0,
                            "linear",
                            "${Text}",
                            '308px',
                            '308px'
                        ],
                        [
                            "eid56",
                            "top",
                            2218,
                            0,
                            "linear",
                            "${BlackLine}",
                            '282px',
                            '282px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${BlackLine}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid61",
                            "left",
                            2218,
                            0,
                            "linear",
                            "${Text}",
                            '81px',
                            '81px'
                        ],
                        [
                            "eid53",
                            "width",
                            2218,
                            0,
                            "linear",
                            "${Text}",
                            '410px',
                            '410px'
                        ],
                        [
                            "eid60",
                            "left",
                            2218,
                            0,
                            "linear",
                            "${BlackLine}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${Subtitle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "width",
                            4250,
                            0,
                            "linear",
                            "${Name}",
                            '1016px',
                            '1016px'
                        ],
                        [
                            "eid54",
                            "left",
                            2218,
                            0,
                            "linear",
                            "${Subtitle}",
                            '80px',
                            '80px'
                        ],
                        [
                            "eid64",
                            "height",
                            2218,
                            0,
                            "linear",
                            "${Text}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${Text}",
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
                            type: 'rect',
                            id: 'GrayBKCopy',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            rect: ['0px', '732px', '688px', '214px', 'auto', 'auto'],
                            fill: ['rgba(246,246,246,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'GrayBK',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            rect: ['0px', '337px', '688px', '214px', 'auto', 'auto'],
                            fill: ['rgba(246,246,246,1.00)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'RESULT',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 72px; font-family: doppio-one, sans-serif; text-transform: uppercase;\">Result</span></p>',
                            rect: ['76px', '65px', '430px', '132px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: '_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['76px', '201px', '193px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Mens_Single',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 24.62px;\">MEN’S SINGLE​​​</span></p>',
                            rect: ['105px', '207px', '147px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: '_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['76px', '362px', '237px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Womens_Single',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 24.62px;\">WOMEN\'S SINGLE​​​</span></p>',
                            rect: ['105px', '368px', '193px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: '_3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['76px', '561px', '205px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Mens_Double',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 25px;\">MEN’S DOUBLE​</span></p>',
                            rect: ['105px', '567px', '193px', '34px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: '_4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['71px', '763px', '248px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Womens_Double',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 25px;\">WOMEN\'S DOUBLE​</span></p>',
                            rect: ['100px', '768px', '193px', '34px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_1-1',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                            rect: ['144px', '264px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_1-2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                            rect: ['144px', '298px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_2-1',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                            rect: ['144px', '431px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_2-2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                            rect: ['144px', '465px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_3-1',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                            rect: ['144px', '630px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_3-2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                            rect: ['144px', '664px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_4-1',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">John Newcombe&nbsp;</span></p>',
                            rect: ['144px', '829px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: '_4-2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 500;\">Onny Parun</span></p>',
                            rect: ['144px', '863px', '116px', '20px', 'auto', 'auto']
                        },
                        {
                            id: 'MS_Score',
                            symbolName: 'Score',
                            type: 'rect',
                            rect: ['363px', '264px', '289', '56', 'auto', 'auto']
                        },
                        {
                            id: 'WS_Score',
                            symbolName: 'Score',
                            type: 'rect',
                            rect: ['363', '431px', '289', '56', 'auto', 'auto']
                        },
                        {
                            id: 'MD_Score',
                            symbolName: 'Score',
                            type: 'rect',
                            rect: ['363', '630px', '289', '56', 'auto', 'auto']
                        },
                        {
                            id: 'WD_Score',
                            symbolName: 'Score',
                            type: 'rect',
                            rect: ['363', '829px', '289', '56', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '711px', '1000px']
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
                            type: 'text',
                            rect: ['12px', '10px', '94px', '32px', 'auto', 'auto'],
                            display: 'block',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 18px; text-transform: uppercase;\">Even &nbsp;More​</span></p>',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'EvenMore',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['16px', '10px', '80px', '32px', 'auto', 'auto'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-size: 18px; text-transform: uppercase;\">That\'s ALL</span></p>',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'ThatsAll',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['0px', '3px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['53px', '2px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            id: 'TextCopy4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '32px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            id: 'TextCopy5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['107px', '3px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            id: 'TextCopy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['53px', '32px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            id: 'TextCopy8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['107px', '32px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            id: 'TextCopy6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['161px', '2px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">40</span></p>',
                            id: 'TextCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['161px', '32px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">15</span></p>',
                            id: 'TextCopy7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['226px', '0px', '2px', '56px', 'auto', 'auto'],
                            id: 'BlackLine',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['247px', '4px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">3</span></p>',
                            id: 'TextCopy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['247px', '32px', '42px', '20px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px;\">1</span></p>',
                            id: 'TextCopy9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['dosis, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
                            stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [4, 'rgba(255,255,255,0.00)', 'none'],
                            rect: ['20px', '42px', '48px', '3px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            rect: ['20px', '43px', '48px', '3px', 'auto', 'auto'],
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
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​<span style=\"text-transform: uppercase; color: rgb(255, 255, 255); font-family: ruluko, sans-serif;\">Read More</span></p>',
                            rect: ['42px', '2px', '145px', '32px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                            id: 'PlayerInfo',
                            symbolName: 'PlayerInfo',
                            opacity: '1',
                            rect: ['-303', '77', '1251', '869', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'CarrerHiglight',
                            symbolName: 'CarrerHiglight',
                            opacity: '1',
                            rect: ['973', '77', '430', '869', 'auto', 'auto']
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
                    duration: 5500,
                    autoPlay: false,
                    data: [
                            [ "eid1380", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${CarrerHiglight}', [] ] ],
                            [ "eid1381", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PlayerInfo}', [] ] ]
                    ]
                }
            },
            "PlayerInfo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1251px', '869px', 'auto', 'auto'],
                            id: 'PlayerInfo',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            id: 'Name',
                            symbolName: 'Name',
                            rect: ['55', '40px', '681', '180', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Bar',
                            symbolName: 'Bar',
                            rect: ['1133', '93', '75', '104', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['63px', '196px', '1145px', '2px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['522px', '784px', '40px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'S_Winner_data',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 30px; color: rgb(35, 214, 220);\">86</span></p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['528px', '707px', '48px', '53px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 41px; font-family: dosis, sans-serif; color: rgb(35, 214, 220); font-weight: 700;\">1</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['545px', '707px', '20px', '29px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; color: rgb(35, 214, 220); font-size: 14px;\">ST</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['381px', '518px', '92px', '30px', 'auto', 'auto'],
                            id: 'S_GreenRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(212,253,51,1.00)']
                        },
                        {
                            rect: ['auto', '518px', '92px', '30px', '490px', 'auto'],
                            id: 'D_GreenRectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(212,253,51,1.00)']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['681px', '515px', '74px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Double',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 18px; font-family: dosis, sans-serif; text-transform: uppercase;\">DouBleS</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['396px', '515px', '62px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Single',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 18px; font-family: dosis, sans-serif; background-color: rgba(0, 0, 0, 0);\">SINGLES</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['393px', '585px', '62px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'S_RateWin',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">RATE WIN</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['390px', '720px', '112px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'S_HIGHEST_RANKING',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">HIGHEST RANKING</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['392px', '785px', '92px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'S_WINNER_TIME',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">WINNER TIME</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['683px', '585px', '62px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'D_RateWin',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">RATE WIN</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['680px', '720px', '112px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'D_HIGHEST_RANKING',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">HIGHEST RANKING</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['682px', '785px', '92px', '30px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'D_WINNER_TIME',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif;\">WINNER TIME</span></p>',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 14px;\">Began playing tennis at age eight...Mother, Lynette, is South African and father, Robert, is Swiss and they met on a business trip (they both worked for a pharmaceutical company)...Has one sister Diana, who is two years older...Idol growing up was Boris Becker and favorite player was Pete Sampras...Compiled outstanding junior results, finishing as No. 1 junior in the world in 1998...Won Wimbledon junior singles (d. Labadze) and doubles titles (w/O. Rochus) that year...One of four players (Edberg, Cash, Borg) to win junior and men’s title at Wimbledon...Also reached final at US Open (l. to Nalbandian) and SF at Australian Open in ‘98...Closed junior career with title at Orange Bowl in Miami (d. Coria).\n\nEnjoys sitting on the beach, playing cards and table tennis, is a fervent fan of hometown football team FC Basel...Has a flair for aesthetics and class...In 2003, initiated Roger Federer Foundation which supports disadvantaged children in South Africa and promotes sport for young people...</span></p><p style=\"margin: 0px;\"><span style=\"font-family: dosis, sans-serif; font-size: 14px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: dosis, sans-serif; font-size: 14px;\">Enjoys being an ambassador for global promotion of tennis and is inspired by the cultural diversity of the world...Donated several autographed items to various fundraising auctions and made a personal donation to tsunami relief efforts in January 2005...In addition, helped organise All-Star Rally for Relief, an exhibition event in Indian Wells, Calif., with proceeds to benefit UNICEF’s tsunami efforts.\n\nIn March 2005, he made a surprise visit to children in townships near Port Elizabeth, South Africa and in November 2005, his parents opened a multipurpose sports site that consists of two tennis courts, a basketball and netball court as well as a football ground in small municipality of Zwide...In September 2005, autographed racquet used in US Open final to ATP’s TennisKatrina.com on-line auction for the American Red Cross’ Hurricane Katrina relief efforts and it fetched a winning bid of $25,665...In November 2004, was on hand at United Nations in New York to announce 2005 as “International Year of Sport and Physical Education” with U.N. Secretary General Kofi Annan...In April 2006, named UNICEF Goodwill Ambassador.\n\nCarried Swiss flag in opening ceremonies of Athens Olympics in 2004 and Beijing Olympics in 2008 (on his birthday)...Named ATP Player of Year and earned Stefan Edberg Sportsmanship award from 2004-09, \'11-14 and ATPWorldTour.com fans’ favourite from 2003-14...I.T.W.A. Player of the Year and Ambassador for Tennis award winner in 2004-06...Named 2003 \"Swiss of the Year\" by his country’s TV audience...Won Laureus World Sportsman of Year from 2004-07...Close friend of Vogue Editor-In-Chief Anna Wintour...She has attended his matches at Wimbledon and the US Open and he accompanied her to Fashion Week in New York City following 2006 US Open...Named GQ’s \"International Man of the Year\" for 2005 in Germany...Speaks English, German, Swiss German, French and some Swedish and Italian...Fitness trainer is Pierre Paganini...Golf superstar Tiger Woods attended ’06 US Open final and both athletes met for first time.\nReceived 2006 Arthur Ashe Humanitarian of Year award and named 2006-07 BBC Sports Overseas Personality of Year (also in \'04)...In October 2007, voted No. 30 in a list of \"the 100 most influential people in the world of sports\" in BusinessWeek Magazine in U.S. (one of six athletes in Top 30)...Named in Time Magazine\'s \"100 Most Influential People in World\" in May 14, 2007 issue...Recipient of U.S. Academy Outstanding Athlete in 2005-06 presented by USA Today and MSNBC (voted by fans)...Had a stamp of him released by Swiss Post on April 10, 2007 in his birthplace of Basel.\nElected to ATP Player Council in June 2008, serving as President...Wife, Mirka (Vavrinec) is a former WTA Tour player and they met at 2000 Sydney Olympic Games...They married on Apr. 11, 2009 in Basel...Twin daughters, Charlene Riva and Myla Rose (born July 23, 2009)...Twin sons, Leo and Lenny (born May 6, 2014)...\nIn 2013, he received Stefan Edberg Sportsmanship Award for the ninth time and selected as ATPWorldTour.com Fans’ Favourite presented by Moët &amp; Chandon for a record 11th consecutive year...Has won a record\n\nWorks with Swiss Davis Cup captain Severin Luthi (since 2008) and Stefan Edberg (for 10 weeks in 2014)…Fitness trainer is Pierre Paganini.</span></p>',
                            userClass: 'hideScroll',
                            overflow: 'scroll',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '249px', '870px', '186px', 'auto', 'auto'],
                            id: 'PB_Text'
                        },
                        {
                            type: 'text',
                            id: 'Years_Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Australian Open:  2004, 2006, 2007, 2010\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Roland Garos: 2009\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Wimbledon: 2003, 2004, 2005, 2006, </span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2007, 2009, 2012\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">U.S Open: 2004, 2005, 2006, 2007, 2008​</span></p>',
                            rect: ['64px', '687px', '290px', '137px', 'auto', 'auto'],
                            overflow: 'visible',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            opacity: '0'
                        },
                        {
                            rect: ['381px', '454px', '178px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'BlackRectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['396px', '462px', '147px', '28px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'CAREER_STATS',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">CAREER STATS​</span></p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['64px', '215px', '415px', '38px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'PERSONAL_BIOGRAPHY',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​PERSONAL BIOGRAPHY</p>',
                            type: 'text'
                        },
                        {
                            rect: ['63px', '448px', '171px', '38px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Information',
                            text: '<p style=\"margin: 0px;\"><span style=\"text-transform: uppercase;\">Information</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['63px', '655px', '415px', '38px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'YEARS_OF_GRAND_SLAM',
                            opacity: '1.000000',
                            text: '<p style=\"margin: 0px;\">YEARS OF GRAND SLAM​</p>',
                            type: 'text'
                        },
                        {
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['63px', '475px', '291px', '168px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            overflow: 'visible',
                            id: 'Info_Text',
                            text: '<p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Nationality: Switzerland\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Date of Birth : 08.08.1981\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Gender: Male\nAge: 34\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Weight: 187 Lbs - 85 Kg\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Height: 6’ 1” - 185 cm\n</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 14px;\">Plays: Right Hand - One Handed Back Hand​</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'S_Rate_Data',
                            symbolName: 'S_Rate_Data',
                            rect: ['477px', '563px', '188', '137', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'D_Rate_data',
                            symbolName: 'D_Rate_data',
                            opacity: '0',
                            rect: ['762px', '563px', '188', '137', 'auto', 'auto']
                        },
                        {
                            rect: ['565px', '789px', '100px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['ruluko, sans-serif', [11, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: '_ATP_world_TourGrand_Slam',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 11px; color: rgb(35, 214, 220);\">​</span><span style=\"font-size: 11px; font-family: dosis, sans-serif; color: rgb(35, 214, 220);\">​ATP world Tour</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 11px; font-family: dosis, sans-serif; color: rgb(35, 214, 220);\">​Grand Slam</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['819px', '784px', '40px', '30px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'D_Winner_data',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 30px; color: rgb(35, 214, 220);\">8</span></p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['829px', '707px', '48px', '53px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text3Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 41px; font-family: dosis, sans-serif; color: rgb(35, 214, 220); font-weight: 700;\">24</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['877px', '707px', '20px', '29px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text4Copy',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; color: rgb(35, 214, 220); font-size: 14px;\">TH</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'Arrow',
                            symbolName: 'Arrow',
                            rect: ['544px', '738px', '428', '22', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['863px', '789px', '117px', '28px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['ruluko, sans-serif', [11, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: '_ATP_world_TourGrand_Slam_2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 11px; color: rgb(35, 214, 220);\">​</span><span style=\"font-size: 11px; font-family: dosis, sans-serif; color: rgb(35, 214, 220);\">​ATP world Tour</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 11px; font-family: dosis, sans-serif; color: rgb(35, 214, 220);\">​Grand Slam</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['1181px', '40px', '32px', '32px', 'auto', 'auto'],
                            type: 'image',
                            id: 'Close_Button1',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        },
                        {
                            id: 'PlayerPhotos',
                            type: 'group',
                            rect: ['934', '250', '303', '583', 'auto', 'auto'],
                            c: [
                            {
                                transform: [[], [], [], ['1.37168', '1.39119']],
                                rect: ['39px', '379px', '226px', '168px', 'auto', 'auto'],
                                type: 'image',
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'PlayerPhoto-03',
                                opacity: '0',
                                clip: 'rect(0px 201.06752014160156px 168px 30.18058204650879px)',
                                fill: ['rgba(0,0,0,0)', 'images/Player/RogerFederer/Photo-03.jpeg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['1.10377', '1.0566']],
                                rect: ['163px', '178px', '106px', '159px', 'auto', 'auto'],
                                type: 'image',
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'PlayerPhoto-02',
                                opacity: '0',
                                clip: 'rect(0px 104px 159px 5.3828125px)',
                                fill: ['rgba(0,0,0,0)', 'images/Player/RogerFederer/Photo-02.jpeg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['1.07108', '1.0566']],
                                rect: ['39px', '178px', '119px', '159px', 'auto', 'auto'],
                                type: 'image',
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'PlayerPhoto-01',
                                opacity: '0',
                                clip: 'rect(0px 115.2265625px 159px 3.390625px)',
                                fill: ['rgba(0,0,0,0)', 'images/Player/RogerFederer/Photo-01.jpeg', '0px', '0px']
                            },
                            {
                                transform: [[], [], [], ['1.0566', '1.0566']],
                                rect: ['45px', '4px', '232px', '159px', 'auto', 'auto'],
                                type: 'image',
                                filter: [0, 0, 1, 1, 0, 0, 1, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'PlayerPhoto-00',
                                opacity: '0',
                                clip: 'rect(0px 220.53125px 159px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/Player/RogerFederer/Photo-00.jpeg', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1251px', '869px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: false,
                    data: [
                        [
                            "eid162",
                            "opacity",
                            500,
                            500,
                            "easeInBack",
                            "${Single}",
                            '0',
                            '1'
                        ],
                        [
                            "eid174",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${D_WINNER_TIME}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${D_Rate_data}",
                            '0',
                            '1'
                        ],
                        [
                            "eid366",
                            "opacity",
                            0,
                            500,
                            "easeInOutBack",
                            "${Close_Button1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "opacity",
                            750,
                            1000,
                            "easeInBack",
                            "${PlayerPhoto-02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${Text4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid638",
                            "scaleX",
                            0,
                            500,
                            "easeOutQuad",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${BlackRectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${YEARS_OF_GRAND_SLAM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            1000,
                            1000,
                            "easeInBack",
                            "${YEARS_OF_GRAND_SLAM}",
                            '1.000000',
                            '0.98'
                        ],
                        [
                            "eid176",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${D_HIGHEST_RANKING}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            500,
                            500,
                            "easeInBack",
                            "${Double}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${Information}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${D_RateWin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid635",
                            "scaleY",
                            0,
                            0,
                            "easeOutQuad",
                            "${Rectangle4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${PERSONAL_BIOGRAPHY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1936",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${Info_Text}",
                            '475px',
                            '475px'
                        ],
                        [
                            "eid190",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${D_Winner_data}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1935",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${Years_Text}",
                            '687px',
                            '687px'
                        ],
                        [
                            "eid164",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${S_WINNER_TIME}",
                            '0',
                            '1'
                        ],
                        [
                            "eid524",
                            "opacity",
                            500,
                            1000,
                            "easeInBack",
                            "${PlayerPhoto-00}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1934",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${YEARS_OF_GRAND_SLAM}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid1933",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${Information}",
                            '448px',
                            '448px'
                        ],
                        [
                            "eid179",
                            "opacity",
                            500,
                            500,
                            "easeInBack",
                            "${S_GreenRectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "opacity",
                            500,
                            500,
                            "easeInBack",
                            "${D_GreenRectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid525",
                            "opacity",
                            750,
                            1000,
                            "easeInBack",
                            "${PlayerPhoto-01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${S_HIGHEST_RANKING}",
                            '0',
                            '1'
                        ],
                        [
                            "eid523",
                            "opacity",
                            1000,
                            1000,
                            "easeInBack",
                            "${PlayerPhoto-03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid316",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${Arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${S_RateWin}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            1000,
                            500,
                            "easeInBack",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            500,
                            1000,
                            "easeInBack",
                            "${PB_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid602",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1937",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1938",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1939",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1940",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1941",
                            "transform-origin",
                            0,
                            0,
                            "easeOutBounce",
                            "${Rectangle4}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid142",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${CAREER_STATS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            1000,
                            500,
                            "easeInBack",
                            "${S_Winner_data}",
                            '0',
                            '1'
                        ],
                        [
                            "eid187",
                            "opacity",
                            1000,
                            500,
                            "easeInBack",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            500,
                            1000,
                            "easeInBack",
                            "${Years_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${_ATP_world_TourGrand_Slam}",
                            '0',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${S_Rate_Data}",
                            '0',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            500,
                            1000,
                            "easeInBack",
                            "${Info_Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            750,
                            500,
                            "easeInBack",
                            "${_ATP_world_TourGrand_Slam_2}",
                            '0',
                            '1'
                        ],
                            [ "eid1028", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Name}', [] ] ],
                            [ "eid1031", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Bar}', [] ] ],
                            [ "eid1030", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${D_Rate_data}', [] ] ],
                            [ "eid1029", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${S_Rate_Data}', [] ] ],
                            [ "eid1032", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Arrow}', [] ] ]
                    ]
                }
            },
            "Bar": {
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
                            rect: ['0px', '0px', '9px', '104px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(104px 9px 104px 0px)',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['21px', '65px', '9px', '38px', 'auto', 'auto'],
                            id: 'Rectangle5Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(38px 9px 38px 0px)',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['44px', '41px', '9px', '63px', 'auto', 'auto'],
                            id: 'Rectangle5Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(63px 9px 63px 0px)',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['66px', '18px', '9px', '86px', 'auto', 'auto'],
                            id: 'Rectangle5Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(86px 9px 86px 0px)',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid105",
                            "clip",
                            500,
                            1250,
                            "easeOutBounce",
                            "${Rectangle5}",
                            [104,9,104,0],
                            [0,9,104,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid107",
                            "clip",
                            611,
                            1389,
                            "easeOutBounce",
                            "${Rectangle5Copy}",
                            [38,9,38,0],
                            [0,9,38,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid109",
                            "clip",
                            750,
                            1500,
                            "easeOutBounce",
                            "${Rectangle5Copy2}",
                            [63,9,63,0],
                            [0,9,63,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid111",
                            "clip",
                            872,
                            1628,
                            "easeOutBounce",
                            "${Rectangle5Copy3}",
                            [86,9,86,0],
                            [0,9,86,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "S_Rate_Data": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'WIN_Number',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif; font-weight: 700; color: rgb(35, 214, 220);\">1035</span></p>',
                            rect: ['0px', '0px', '48px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'WIN',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(35, 214, 220); font-size: 9px; font-family: dosis, sans-serif;\">WIN</span></p>',
                            rect: ['0px', '19px', '37px', '18px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Lose_Number',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(56, 56, 56); font-size: 14px; font-family: dosis, sans-serif;\">233</span></p>',
                            rect: ['115px', '89px', '48px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(56,56,56,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Lose',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 9px; font-family: dosis, sans-serif; text-transform: uppercase;\">Lose</span></p>',
                            rect: ['115px', '108px', '37px', '33px', 'auto', 'auto']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['24px', '31px', '85px', '85px', 'auto', 'auto'],
                            id: 'WinEllipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 85px 85px 0px)',
                            fill: ['rgba(35,214,220,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['24px', '31px', '85px', '85px', 'auto', 'auto'],
                            id: 'WinEllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(-3.5625px 85px 85px 0px)',
                            fill: ['rgba(56,56,56,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '188px', '137px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid134",
                            "rotateZ",
                            1750,
                            750,
                            "easeInOutBack",
                            "${WinEllipseCopy}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid127",
                            "clip",
                            1000,
                            1000,
                            "easeInOutBack",
                            "${WinEllipseCopy}",
                            [-3.5625,85,85,0],
                            [58,85,85,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid133",
                            "rotateZ",
                            1750,
                            750,
                            "easeInOutBack",
                            "${WinEllipse}",
                            '0deg',
                            '-30deg'
                        ]
                    ]
                }
            },
            "D_Rate_data": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'WIN_NumberCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 14px; font-family: dosis, sans-serif; font-weight: 700; color: rgb(35, 214, 220);\">129</span></p>',
                            rect: ['0px', '0px', '48px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'WINCopy2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(35, 214, 220); font-size: 9px; font-family: dosis, sans-serif;\">WIN</span></p>',
                            rect: ['0px', '19px', '37px', '18px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Lose_NumberCopy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\"><span style=\"color: rgb(56, 56, 56); font-size: 14px; font-family: dosis, sans-serif;\">88</span></p>',
                            rect: ['115px', '85px', '48px', '30px', 'auto', 'auto']
                        },
                        {
                            font: ['ruluko, sans-serif', [24, 'px'], 'rgba(56,56,56,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'LoseCopy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 9px; font-family: dosis, sans-serif; text-transform: uppercase;\">Lose</span></p>',
                            rect: ['115px', '104px', '37px', '33px', 'auto', 'auto']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['21px', '31px', '85px', '85px', 'auto', 'auto'],
                            id: 'WinEllipseCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 85px 85px 0px)',
                            fill: ['rgba(35,214,220,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['21px', '31px', '85px', '85px', 'auto', 'auto'],
                            id: 'WinEllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(40px 85px 85px 0px)',
                            fill: ['rgba(56,56,56,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '188px', '137px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid139",
                            "rotateZ",
                            1750,
                            750,
                            "easeInOutBack",
                            "${WinEllipseCopy2}",
                            '0deg',
                            '-30deg'
                        ],
                        [
                            "eid422",
                            "clip",
                            0,
                            0,
                            "easeInOutBack",
                            "${WinEllipseCopy2}",
                            [-1.734375,85,85,0],
                            [-1.734375,85,85,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid130",
                            "clip",
                            1000,
                            1000,
                            "easeInOutBack",
                            "${WinEllipseCopy2}",
                            [-1.734375,85,85,0],
                            [40,85,85,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid140",
                            "rotateZ",
                            1750,
                            750,
                            "easeInOutBack",
                            "${WinEllipseCopy3}",
                            '0deg',
                            '-30deg'
                        ]
                    ]
                }
            },
            "Name": {
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
                            id: 'FirstName',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['6px', '-1px', '146px', '53px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 37.5px; text-transform: uppercase;\">Roger</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'Sub',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['6px', '120px', '515px', '53px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​THE ARTIST - THE CHAMPION - THE LEGEND<span style=\"font-size: 20px; text-transform: uppercase;\"></span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'FamilyName',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['doppio-one, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['0px', '13px', '681px', '107px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 98px; font-family: doppio-one, sans-serif; text-transform: uppercase; font-weight: 700;\">Federer</span></p>',
                            opacity: '0',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '681px', '180px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid511",
                            "opacity",
                            0,
                            500,
                            "easeInBack",
                            "${FamilyName}",
                            '0',
                            '1'
                        ],
                        [
                            "eid513",
                            "opacity",
                            0,
                            1000,
                            "easeInBack",
                            "${FirstName}",
                            '0',
                            '1'
                        ],
                        [
                            "eid512",
                            "opacity",
                            0,
                            750,
                            "easeInBack",
                            "${Sub}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CarrerHiglight": {
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
                            id: 'CarrerHighlight',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '430px', '869px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'text',
                            id: 'Carrer',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['32px', '44px', '153px', '32px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 27px;\">CAREER</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'Highlight',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['doppio-one, sans-serif', [60, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['28px', '62px', '381px', '65px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: doppio-one, sans-serif; font-size: 60px; font-weight: 700;\">HIGHLIGHT</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            type: 'text',
                            id: 'PERSONAL_HISTORY_TIMELINE',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['31px', '128px', '349px', '28px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: ruluko, sans-serif; font-size: 18px;\">PERSONAL HISTORY TIMELINE</span></p>',
                            opacity: '0',
                            align: 'left'
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['32px', '156px', '336px', '2px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            rect: ['365px', '32px', '32px', '32px', 'auto', 'auto'],
                            id: 'Close_Button2',
                            opacity: '1',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/svg/Close.svg', '0px', '0px']
                        },
                        {
                            userClass: 'hideScroll',
                            rect: ['32', '195', '336', '623', 'auto', 'auto'],
                            id: 'TextScroll',
                            symbolName: 'TextScroll',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '430px', '869px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid554",
                            "opacity",
                            1000,
                            500,
                            "easeInOutBack",
                            "${TextScroll}",
                            '0',
                            '1'
                        ],
                        [
                            "eid363",
                            "opacity",
                            1000,
                            500,
                            "easeInOutBack",
                            "${Close_Button2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1942",
                            "-moz-transform-origin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1943",
                            "-ms-transform-origin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1944",
                            "msTransformOrigin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1945",
                            "-o-transform-origin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1946",
                            "transform-origin",
                            500,
                            0,
                            "easeInOutBack",
                            "${Rectangle3}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid560",
                            "opacity",
                            250,
                            500,
                            "easeOutQuad",
                            "${PERSONAL_HISTORY_TIMELINE}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid558",
                            "scaleX",
                            500,
                            750,
                            "easeOutQuad",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid566",
                            "opacity",
                            0,
                            750,
                            "easeOutQuad",
                            "${Carrer}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            0,
                            500,
                            "easeOutQuad",
                            "${Highlight}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "Timeline": {
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
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['23px', '124px', '1px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['23px', '338px', '1px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['23px', '555px', '1px', '65px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['-33px', '44px', '113px', '47px', 'auto', 'auto'],
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​2014</p>',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-33px', '242px', '113px', '47px', 'auto', 'auto'],
                            id: 'Text12Copy',
                            text: '<p style=\"margin: 0px;\">​2013</p>',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['-33px', '466px', '113px', '47px', 'auto', 'auto'],
                            id: 'Text12Copy2',
                            text: '<p style=\"margin: 0px;\">​2012</p>',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['64px', '0px', '254px', '181px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text13',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 14px;\">Swiss superstar finished in Top 2 for 10th time, highlighted by 5 titles, including 2 ATP Masters 1000 crowns. Also won a 1st Davis Cup title for Switzerland. The oldest player (33) to finish in Top 2 in Emirates ATP Rankings history (since ’73) and 1st to finish in Top 10 for 13 years in a row since Lendl from 1980-92...Led Tour in match wins (73), matches played (85), ATP Masters 1000 wins (28, along with Djokovic) and final appearances (11)...</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['64px', '209px', '254px', '181px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text13Copy',
                            text: '<p style=\"margin: 0px;\">​The oldest player to finish in Top 10 since Andre Agassi (35) in 2005 and 1st to finish in Top 10 for 12 years in a row since Pete Sampras from 1990-2001. Streak of 11 Top 5 finishes in a row came to an end with No. 6 finish…Captured lone title in June at Halle (d. Youzhny), his 13th career grass court title (13-5 in grass court finals) and 77th career title (tied J. McEnroe for No. 3 in Open Era titles list)<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            rect: ['64px', '433px', '254px', '181px', 'auto', 'auto'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text13Copy2',
                            text: '<p style=\"margin: 0px;\">​The Swiss won 6 titles in 10 finals, plus silver medal at London Olympics, and returned to No. 1 before finishing in Top 2 for 9th time in 10 years. Oldest at No. 2 since Agassi (32) in ‘02...Broke Sampras’ record of 286 weeks at No. 1 on July 16, 1 week after record-tying 7th Wimbledon title (d. Murray), his all-time best 17th Grand Slam crown. Held No. 1 for 17 weeks (302 in career) before Djokovic took over on Nov. 5<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '336px', '620px']
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
            "Arrow": {
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
                            rect: ['0px', '8px', '17px', '18px', 'auto', 'auto'],
                            id: 'Up_arrow',
                            opacity: '0',
                            clip: 'rect(18.40625px 17px 18px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/svg/RankInfo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['411px', '8px', '17px', '18px', 'auto', 'auto'],
                            id: 'Up_arrow2',
                            opacity: '0',
                            clip: 'rect(18.23974609375px 17px 18px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/svg/RankInfo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Up_arrow_Left',
                            opacity: '0',
                            rect: ['0px', '4px', '17px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/svg/RankInfo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Up_arrow_Right',
                            opacity: '0',
                            rect: ['335px', '4px', '17px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/svg/RankInfo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '589px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 5500,
                    autoPlay: false,
                    data: [
                        [
                            "eid505",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${Up_arrow_Left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid278",
                            "opacity",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            2500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            3000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            4000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid311",
                            "opacity",
                            4500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '1',
                            '0'
                        ],
                        [
                            "eid312",
                            "opacity",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '0',
                            '0'
                        ],
                        [
                            "eid313",
                            "opacity",
                            5500,
                            0,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid389",
                            "left",
                            2500,
                            0,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '335px',
                            '335px'
                        ],
                        [
                            "eid279",
                            "top",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid295",
                            "top",
                            3000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid296",
                            "top",
                            4000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid297",
                            "top",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid280",
                            "top",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid304",
                            "top",
                            3000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid305",
                            "top",
                            4000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid306",
                            "top",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Left}",
                            '4px',
                            '-1px'
                        ],
                        [
                            "eid235",
                            "top",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid239",
                            "top",
                            2750,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid241",
                            "top",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid243",
                            "top",
                            4250,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid245",
                            "top",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid238",
                            "top",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid240",
                            "top",
                            2750,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid242",
                            "top",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid244",
                            "top",
                            4250,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid246",
                            "top",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '8px',
                            '-2px'
                        ],
                        [
                            "eid506",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${Up_arrow2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid183",
                            "opacity",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid213",
                            "opacity",
                            2500,
                            250,
                            "easeInBack",
                            "${Up_arrow2}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid215",
                            "opacity",
                            2750,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid216",
                            "opacity",
                            3250,
                            250,
                            "easeInBack",
                            "${Up_arrow2}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid219",
                            "opacity",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid220",
                            "opacity",
                            4000,
                            250,
                            "easeInBack",
                            "${Up_arrow2}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            4250,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            4750,
                            250,
                            "easeInBack",
                            "${Up_arrow2}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid247",
                            "opacity",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid504",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${Up_arrow_Right}",
                            '0',
                            '0'
                        ],
                        [
                            "eid277",
                            "opacity",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid285",
                            "opacity",
                            2500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid287",
                            "opacity",
                            3000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid289",
                            "opacity",
                            4000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid290",
                            "opacity",
                            4500,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid291",
                            "opacity",
                            5000,
                            500,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '0',
                            '0'
                        ],
                        [
                            "eid292",
                            "opacity",
                            5500,
                            0,
                            "easeInBack",
                            "${Up_arrow_Right}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "opacity",
                            0,
                            0,
                            "easeOutBounce",
                            "${Up_arrow}",
                            '0',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            2000,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            2500,
                            250,
                            "easeInBack",
                            "${Up_arrow}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            2750,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid218",
                            "opacity",
                            3250,
                            250,
                            "easeInBack",
                            "${Up_arrow}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            3500,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            4000,
                            250,
                            "easeInBack",
                            "${Up_arrow}",
                            '1.000000',
                            '0'
                        ],
                        [
                            "eid225",
                            "opacity",
                            4250,
                            500,
                            "easeInBack",
                            "${Up_arrow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid226",
                            "opacity",
                            4750,
                            250,
                            "easeInBack",
                            "${Up_arrow}",
                            '1.000000',
                            '0'
                        ]
                    ]
                }
            },
            "TextScroll": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['23px', '113px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy2',
                            text: '<p style=\"margin: 0px;\">​2014</p>',
                            rect: ['-33px', '33px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '0px', '272px', '81px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 14px;\">Swiss superstar finished in Top 2 for 10th time, highlighted by 5 titles, including 2 ATP Masters 1000 crowns. Also won a 1st Davis Cup title for Switzerland.</span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '267px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy',
                            text: '<p style=\"margin: 0px;\">​2013</p>',
                            rect: ['-33px', '191px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '158px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​The oldest player to finish in Top 10 since Andre Agassi (35) in 2005 and 1st to finish in Top 10 for 12 years in a row since Pete Sampras from 1990-2001. Streak of 11 Top 5 finishes in a row came to an end with No. 6 finish.<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '434px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​2012</p>',
                            rect: ['-33px', '345px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '317px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​The Swiss won 6 titles in 10 finals, plus silver medal at London Olympics, and returned to No. 1 before finishing in Top 2 for 9th time in 10 years. Oldest at No. 2 since Agassi (32) in ‘02...Broke Sampras’ record of 286 weeks.<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '595px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy4',
                            text: '<p style=\"margin: 0px;\">​2011</p>',
                            rect: ['-33px', '506px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy4',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '478px', '272px', '145px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​The Swiss won 6 titles in 10 finals, plus silver medal at London Olympics, and returned to No. 1 before finishing in Top 2 for 9th time in 10 years. Oldest at No. 2 since Agassi (32) in ‘02...Broke Sampras’ record of 286 weeks.<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '764px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy12',
                            text: '<p style=\"margin: 0px;\">​2010</p>',
                            rect: ['-33px', '675px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy12',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '647px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span>The oldest player (33) to finish in Top 2 in Emirates ATP Rankings history (since ’73) and 1st to finish in Top 10 for 13 years in a row since Lendl from 1980-92...Led Tour in match wins (73), matches played (85), ATP Masters 1000 wins (28, along with Djokovic) and final appearances (11)...</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​</p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '925px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy11',
                            text: '<p style=\"margin: 0px;\">​2009</p>',
                            rect: ['-33px', '836px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy11',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '808px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​The Swiss won 6 titles in 10 finals, plus silver medal at London Olympics, and returned to No. 1 before finishing in Top 2 for 9th time in 10 years. Oldest at No. 2 since Agassi (32) in ‘02...Broke Sampras’ record of 286 weeks.<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '1090px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy10',
                            text: '<p style=\"margin: 0px;\">​2008</p>',
                            rect: ['-33px', '1001px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy10',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '973px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Captured lone title in June at Halle (d. Youzhny), his 13th career grass court title (13-5 in grass court finals) and 77th career title (tied J. McEnroe for No. 3 in Open Era titles list)</p>',
                            opacity: '1',
                            align: 'left'
                        },
                        {
                            rect: ['23px', '1258px', '1px', '28px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle4Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text12Copy9',
                            text: '<p style=\"margin: 0px;\">​2007</p>',
                            rect: ['-33px', '1169px', '113px', '47px', 'auto', 'auto'],
                            opacity: '1',
                            align: 'left',
                            font: ['doppio-one, sans-serif', [44, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'text',
                            id: 'Text13Copy9',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['dosis, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['64px', '1141px', '272px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​No. 1 on July 16, 1 week after record-tying 7th Wimbledon title (d. Murray), his all-time best 17th Grand Slam crown. Held No. 1 for 17 weeks (302 in career) before Djokovic took over on Nov. 5<span style=\"font-family: dosis, sans-serif; font-size: 14px;\"></span></p>',
                            opacity: '1',
                            align: 'left'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'scroll',
                            rect: [null, null, '336px', '623px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("PlayerInformation_edgeActions.js");
})("OTF-PlayerInformation");
