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
            'ruluko, sans-serif': '<script src=\"http://use.edgefonts.net/ruluko:n4:all.js\"></script>',
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
                            id: 'BackgroundCircle',
                            type: 'ellipse',
                            rect: ['0px', '-1500px', '595px', '595px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.60162603661297',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'YearTitle',
                            type: 'text',
                            rect: ['116px', '127px', '390px', '107px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: doppio-one, sans-serif; font-size: 100px; color: rgb(213, 253, 52);\">1979</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],[],[],['0']]
                        },
                        {
                            id: 'SubTitle',
                            type: 'text',
                            rect: ['116px', '257px', '390px', '36px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: ruluko, sans-serif;\">BORN OF THE NEW LEGEND</span></p>",
                            align: "left",
                            font: ['ruluko, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Content',
                            type: 'text',
                            rect: ['116px', '306px', '390px', '108px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 14px;\">The 1973 Australian Open was a tennis tournament played on outdoor grass courts at the Kooyong Stadium in Melbourne in Australia and was held from 26 December 1972 to 1 January 1973. It was the 61st edition of the Australian Open and the first Grand Slam tournament of the year.&nbsp;Melbourne in Australia and was held from 26 December 1972 to 1 January 1973.&nbsp;</span></p>",
                            align: "left",
                            font: ['dosis, sans-serif', [30, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "14px", "", "none"],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'Line',
                            type: 'rect',
                            rect: ['116px', '297px', '385px', '3px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0']]
                        },
                        {
                            id: 'ReadMore',
                            display: 'block',
                            type: 'text',
                            rect: ['116px', '403px', '147px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​+ Read More</p>",
                            align: "left",
                            font: ['dosis, sans-serif', [24, "px"], "rgba(255,255,255,1)", "100", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1','0']]
                        }
                    ],
                    style: {
                        '${Stage-HistoryYearInfo}': {
                            isStage: true,
                            rect: ['null', 'null', '1px', '1px', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid82",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutBack",
                            "${Content}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1817",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1818",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1819",
                            "msTransformOrigin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1820",
                            "-o-transform-origin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1821",
                            "transform-origin",
                            1000,
                            0,
                            "linear",
                            "${YearTitle}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid108",
                            "scaleY",
                            2000,
                            1000,
                            "easeOutBack",
                            "${ReadMore}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "-webkit-transform-origin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1822",
                            "-moz-transform-origin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1823",
                            "-ms-transform-origin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1824",
                            "msTransformOrigin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1825",
                            "-o-transform-origin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1826",
                            "transform-origin",
                            1250,
                            0,
                            "easeOutQuart",
                            "${SubTitle}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid63",
                            "scaleX",
                            1750,
                            1000,
                            "easeOutCirc",
                            "${Line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "-webkit-transform-origin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1827",
                            "-moz-transform-origin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1828",
                            "-ms-transform-origin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1829",
                            "msTransformOrigin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1830",
                            "-o-transform-origin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1831",
                            "transform-origin",
                            1750,
                            0,
                            "easeOutQuart",
                            "${Line}",
                            [0,50],
                            [0,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid104",
                            "-webkit-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1832",
                            "-moz-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1833",
                            "-ms-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1834",
                            "msTransformOrigin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1835",
                            "-o-transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1836",
                            "transform-origin",
                            2000,
                            0,
                            "easeOutBack",
                            "${ReadMore}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1043",
                            "opacity",
                            0,
                            0,
                            "easeOutBack",
                            "${BackgroundCircle}",
                            '0.60162603661297',
                            '0.60162603661297'
                        ],
                        [
                            "eid967",
                            "top",
                            0,
                            1000,
                            "easeOutBack",
                            "${BackgroundCircle}",
                            '-1500px',
                            '0px'
                        ],
                        [
                            "eid79",
                            "-webkit-transform-origin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1837",
                            "-moz-transform-origin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1838",
                            "-ms-transform-origin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1839",
                            "msTransformOrigin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1840",
                            "-o-transform-origin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1841",
                            "transform-origin",
                            1250,
                            0,
                            "easeOutBack",
                            "${Content}",
                            [50,0],
                            [50,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid50",
                            "scaleY",
                            1250,
                            1000,
                            "easeOutQuart",
                            "${SubTitle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1237",
                            "top",
                            1750,
                            0,
                            "easeOutCirc",
                            "${Line}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid1766",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${ReadMore}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "scaleX",
                            1000,
                            750,
                            "easeOutQuart",
                            "${YearTitle}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HistoryYearInfo_edgeActions.js");
})("OTF-HistoryYearInfo");
