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
                            id: 'PlayerListBG',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"PlayerListBG.jpg",'0px','0px']
                        },
                        {
                            id: 'GenderSelect',
                            type: 'group',
                            rect: ['147', '844px', '361', '104', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Bullet',
                                type: 'image',
                                rect: ['0px', '8px', '32px', '32px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"svg/Bullet.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: 'GenderText',
                                type: 'text',
                                rect: ['42px', '0px', '250px', '57px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 18px;\">SELECT</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif;\">WINNER GENDER</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "23px", "", ""]
                            },
                            {
                                id: 'MaleButton',
                                type: 'group',
                                rect: ['42px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "GenderButton",
                                c: [
                                {
                                    id: 'TextBG',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(212,253,51,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Male',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px;\">MALE</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'FemaleButton',
                                type: 'group',
                                rect: ['212px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "GenderButton",
                                c: [
                                {
                                    id: 'TextBGF',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(192,192,192,0.10)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Female',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px; color: rgb(255, 255, 255);\">FEMALE</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'NationSelect',
                            type: 'group',
                            rect: ['547px', '844px', '361', '104', 'auto', 'auto'],
                            c: [
                            {
                                id: 'BulletN',
                                type: 'image',
                                rect: ['0px', '8px', '32px', '32px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"svg/Bullet.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: 'Nation',
                                type: 'text',
                                rect: ['42px', '0px', '250px', '57px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif; font-size: 18px;\">SELECT</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: dosis, sans-serif;\">​</span><span style=\"color: rgb(255, 255, 255); font-family: doppio-one, sans-serif;\">WINNER GENDER</span></p>",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "23px", "", ""]
                            },
                            {
                                id: 'AU',
                                type: 'group',
                                rect: ['42px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "NationButton",
                                c: [
                                {
                                    id: 'AUBG',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(212,253,51,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'AUText',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px;\">AU OPEN</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'US',
                                type: 'group',
                                rect: ['212px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "NationButton",
                                c: [
                                {
                                    id: 'USBG',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(192,192,192,0.10)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'USText',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px; color: rgb(255, 255, 255);\">US OPEN</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'UK',
                                type: 'group',
                                rect: ['380px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "NationButton",
                                c: [
                                {
                                    id: 'UKBG',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(192,192,192,0.10)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'UKText',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px; color: rgb(255, 255, 255);\">WIMBELDON</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            },
                            {
                                id: 'FR',
                                type: 'group',
                                rect: ['547px', '72px', '149', '32', 'auto', 'auto'],
                                cursor: 'pointer',
                                userClass: "NationButton",
                                c: [
                                {
                                    id: 'FRBG',
                                    type: 'rect',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(192,192,192,0.10)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'FRText',
                                    type: 'text',
                                    rect: ['0px', '0px', '149px', '32px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: dosis, sans-serif; font-size: 18px; color: rgb(255, 255, 255);\">ROLAND GAROS</span></p>",
                                    align: "left",
                                    font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        }
                    ],
                    style: {
                        '${Stage-PlayerFilter}': {
                            isStage: true,
                            rect: ['null', 'null', '1px', '1px', 'auto', 'auto']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${PlayerListBG}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("PlayerFilter_edgeActions.js");
})("OTF-PlayerFilter");
