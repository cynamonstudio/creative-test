/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'font, Arial': '<link rel=\"stylesheet\" href=\"style.css\"></link>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"split-type.min.js",
            js+"gsap.min.js"
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
                            id: 'BACK',
                            type: 'group',
                            rect: ['-567', '-344', '1834', '1808', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['-758px', '0px', '3377px', '1227px', 'auto', 'auto'],
                                fill: ["rgba(171,214,244,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['-758px', '1227px', '3377px', '821px', 'auto', 'auto'],
                                fill: ["rgba(147,183,209,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'TXT',
                            display: 'none',
                            type: 'group',
                            rect: ['-8px', '157', '660', '207', 'auto', 'auto'],
                            transform: [[],[],[],['1.48','1.48']],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['59px', '0px', '567px', '207px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">SALONIKI BIZNESOWE PRZED PODRÓŻĄ​</p>",
                                align: "center",
                                font: ['font, Arial', [53, "px"], "rgba(235,90,55,1.00)", "normal", "none", "", "break-word", ""],
                                textStyle: ["", "", "", "", "uppercase"]
                            }]
                        },
                        {
                            id: 'LOGO',
                            display: 'none',
                            type: 'group',
                            rect: ['170', '41', '344', '74', 'auto', 'auto'],
                            c: [
                            {
                                id: 'logo',
                                type: 'image',
                                rect: ['0px', '0px', '344px', '74px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"logo.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'T1',
                            type: 'group',
                            rect: ['88px', '387px', '470', '46', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['56px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​wygodny wypoczynek</p>",
                                align: "left",
                                userClass: "split",
                                font: ['font, Arial', [32, "px"], "rgba(78,66,97,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'BUBBLE1',
                                type: 'group',
                                rect: ['1px', '16px', '27', '27', 'auto', 'auto'],
                                transform: [[],[],[],['0','0']],
                                c: [
                                {
                                    id: 'Ellipse',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,91,52,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'T2',
                            type: 'group',
                            rect: ['88px', '444px', '523', '46', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2Copy',
                                type: 'text',
                                rect: ['56px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​smaczne posiłki i napoje</p>",
                                align: "left",
                                userClass: "split",
                                font: ['font, Arial', [32, "px"], "rgba(78,66,97,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'BUBBLE2',
                                type: 'group',
                                rect: ['1px', '12px', '27', '27', 'auto', 'auto'],
                                transform: [[],[],[],['0','0']],
                                c: [
                                {
                                    id: 'EllipseCopy',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,91,52,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'T3',
                            type: 'group',
                            rect: ['88px', '500px', '439', '46', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2Copy2',
                                type: 'text',
                                rect: ['56px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​stanowiska do pracy</p>",
                                align: "left",
                                userClass: "split",
                                font: ['font, Arial', [32, "px"], "rgba(78,66,97,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'BUBBLE3',
                                type: 'group',
                                rect: ['1px', '12px', '27', '27', 'auto', 'auto'],
                                transform: [[],[],[],['0','0']],
                                c: [
                                {
                                    id: 'EllipseCopy2',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,91,52,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'B',
                            type: 'rect',
                            rect: ['-338px', '-56px', '1362px', '774px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'BUTTON',
                                type: 'group',
                                rect: ['426px', '848px', '488px', '98px', 'auto', 'auto'],
                                overflow: 'hidden',
                                c: [
                                {
                                    id: 'RoundRect',
                                    type: 'rect',
                                    rect: ['0px', '0px', '487px', '98px', 'auto', 'auto'],
                                    borderRadius: ["20px", "20px", "20px", "20px 20px"],
                                    fill: ["rgba(255,91,52,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Text3',
                                    type: 'text',
                                    rect: ['1px', '0px', '99.8%', '100%', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​SPRAWDŹ TERAZ</p>",
                                    align: "center",
                                    font: ['font, Arial', [38, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "100px", "", "uppercase"]
                                }]
                            }]
                        },
                        {
                            id: 'PLAIN',
                            type: 'group',
                            rect: ['-272px', '730px', '446', '141', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'plain',
                                type: 'image',
                                rect: ['0px', '0px', '446px', '141px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"plain.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'BOTTOM',
                            type: 'group',
                            rect: ['-1325', '1474px', '3384', '817', 'auto', 'auto'],
                            c: [
                            {
                                id: 'GLASS',
                                type: 'group',
                                rect: ['0px', '0px', '3384', '165', 'auto', 'auto'],
                                overflow: 'hidden',
                                c: [
                                {
                                    id: 'glass',
                                    type: 'image',
                                    rect: ['1128px', '4px', '1128px', '165px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"glass.svg",'0px','0px']
                                },
                                {
                                    id: 'glassCopy',
                                    type: 'image',
                                    rect: ['2256px', '4px', '1128px', '165px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"glass.svg",'0px','0px']
                                },
                                {
                                    id: 'glassCopy2',
                                    type: 'image',
                                    rect: ['0px', '4px', '1128px', '165px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"glass.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'FLOOR',
                                type: 'group',
                                rect: ['34px', '165px', '3319', '652', 'auto', 'auto'],
                                opacity: '0.13821138211382',
                                c: [
                                {
                                    id: 'floor',
                                    type: 'image',
                                    rect: ['1097px', '0px', '1125px', '652px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(0,0,0,0)",im+"floor.svg",'0px','0px']
                                },
                                {
                                    id: 'floorCopy',
                                    type: 'image',
                                    rect: ['0px', '0px', '1125px', '652px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(0,0,0,0)",im+"floor.svg",'0px','0px']
                                },
                                {
                                    id: 'floorCopy2',
                                    type: 'image',
                                    rect: ['2194px', '0px', '1125px', '652px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(0,0,0,0)",im+"floor.svg",'0px','0px']
                                }]
                            }]
                        },
                        {
                            id: 'ALL',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '660px', '1200px', 'auto', 'auto'],
                            fill: ["rgba(255,91,52,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'HYMAN',
                                type: 'group',
                                rect: ['225px', '815px', '543', '535', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'MAN',
                                    type: 'image',
                                    rect: ['0px', '0px', '543px', '535px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"MAN.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'CHAIR1',
                                type: 'group',
                                rect: ['48', '1105px', '122', '110', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'chair1',
                                    type: 'image',
                                    rect: ['0px', '0px', '122px', '110px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"chair1.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'CHAIR2',
                                type: 'group',
                                rect: ['247', '1105px', '122', '110', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'chair2',
                                    type: 'image',
                                    rect: ['0px', '0px', '122px', '110px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"chair2.svg",'0px','0px']
                                }]
                            },
                            {
                                id: 'DISC',
                                type: 'group',
                                rect: ['18px', '1171px', '324', '34', 'auto', 'auto'],
                                opacity: '0.62601627300425',
                                c: [
                                {
                                    id: 'Text2Copy3',
                                    type: 'text',
                                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​szczegóły oferty dostępne w regulaminie usługi dostępnej na lotnisko-chopina.pl/pl/fast-track.html</p>",
                                    align: "center",
                                    font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                                }]
                            }]
                        },
                        {
                            id: 'BTN_CTA',
                            type: 'rect',
                            rect: ['-66px', '-39px', '777px', '1288px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '660px', '1200px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8605,
                    autoPlay: true,
                    labels: {
                        "re": 6185
                    },
                    data: [
                        [
                            "eid16",
                            "top",
                            860,
                            385,
                            "easeOutBack",
                            "${CHAIR2}",
                            '1105px',
                            '865px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            590,
                            105,
                            "easeOutExpo",
                            "${PLAIN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            165,
                            265,
                            "linear",
                            "${BACK}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            3460,
                            170,
                            "easeOutBack",
                            "${BUBBLE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "display",
                            100,
                            0,
                            "linear",
                            "${TXT}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "left",
                            590,
                            1410,
                            "easeOutExpo",
                            "${PLAIN}",
                            '-272px',
                            '-122px'
                        ],
                        [
                            "eid17",
                            "top",
                            995,
                            385,
                            "easeOutBack",
                            "${CHAIR1}",
                            '1105px',
                            '865px'
                        ],
                        [
                            "eid54",
                            "display",
                            100,
                            0,
                            "linear",
                            "${LOGO}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "scaleY",
                            1380,
                            790,
                            "easeOutExpo",
                            "${TXT}",
                            '1.48',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            165,
                            265,
                            "linear",
                            "${LOGO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            165,
                            0,
                            "linear",
                            "${ALL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid5",
                            "top",
                            430,
                            360,
                            "easeOutExpo",
                            "${BOTTOM}",
                            '1474px',
                            '714px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1380,
                            175,
                            "linear",
                            "${TXT}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            1380,
                            790,
                            "easeOutExpo",
                            "${TXT}",
                            '1.48',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            995,
                            105,
                            "easeOutExpo",
                            "${CHAIR1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            2810,
                            170,
                            "easeOutBack",
                            "${BUBBLE1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            4140,
                            170,
                            "easeOutBack",
                            "${BUBBLE3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            3460,
                            170,
                            "easeOutBack",
                            "${BUBBLE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            4140,
                            170,
                            "easeOutBack",
                            "${BUBBLE3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            2810,
                            170,
                            "easeOutBack",
                            "${BUBBLE1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            860,
                            105,
                            "easeOutExpo",
                            "${CHAIR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1100,
                            280,
                            "linear",
                            "${HYMAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "left",
                            1100,
                            900,
                            "easeOutCirc",
                            "${HYMAN}",
                            '225px',
                            '155px'
                        ],
                        [
                            "eid44",
                            "top",
                            5145,
                            915,
                            "easeOutExpo",
                            "${BUTTON}",
                            '848px',
                            '648px'
                        ],
                        [
                            "eid46",
                            "top",
                            5560,
                            290,
                            "easeOutCirc",
                            "${Text3}",
                            '120px',
                            '0px'
                        ],
                        [
                            "eid48",
                            "top",
                            6395,
                            230,
                            "easeInQuad",
                            "${Text3}",
                            '0px',
                            '-90px'
                        ],
                        [
                            "eid51",
                            "top",
                            6742,
                            500,
                            "easeOutCirc",
                            "${Text3}",
                            '100px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lotniksko-b_edgeActions.js");
})("EDGE-400296298");
