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
            js+"gsap.min.js",
            "https://unpkg.com/split-type"
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
                            rect: ['-994', '-291px', '2732', '1843', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.3','1.3']],
                            c: [
                            {
                                id: 'back',
                                type: 'image',
                                rect: ['0px', '-50px', '2732px', '1843px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"back.jpg",'0px','0px']
                            }]
                        },
                        {
                            id: 'WRAP',
                            type: 'group',
                            rect: ['0', '-30px', '660', '1200', 'auto', 'auto'],
                            c: [
                            {
                                id: 'ALL',
                                display: 'none',
                                type: 'rect',
                                rect: ['0px', '0px', '660px', '1200px', 'auto', 'auto'],
                                fill: ["rgba(192,192,192,0.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                c: [
                                {
                                    id: 'TXT1',
                                    type: 'rect',
                                    rect: ['-37px', '63px', '789px', '369px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,0)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    c: [
                                    {
                                        id: 'TXT-1',
                                        type: 'group',
                                        rect: ['-262px', '79', '483', '190', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'Text',
                                            type: 'text',
                                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">SZYBKIE</p><p style=\"margin: 0px;\">​PRZEJŚCIE</p>",
                                            align: "left",
                                            userClass: "shadow",
                                            font: ['font, Arial', [79, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"]
                                        }]
                                    },
                                    {
                                        id: 'ARROWS',
                                        type: 'group',
                                        rect: ['-89px', '99px', '75px', '61px', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'arrows',
                                            type: 'image',
                                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                        }]
                                    }]
                                },
                                {
                                    id: 'TXT2',
                                    type: 'rect',
                                    rect: ['-39px', '333px', '789px', '117px', 'auto', 'auto'],
                                    fill: ["rgba(192,192,192,0)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    c: [
                                    {
                                        id: 'TXT-2',
                                        type: 'group',
                                        rect: ['818px', '18', '415', '73', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'TextCopy',
                                            type: 'text',
                                            rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">FAST TRACK</p>",
                                            align: "center",
                                            font: ['font, Arial', [60, "px"], "rgba(240,131,178,1.00)", "700", "none", "", "break-word", "nowrap"],
                                            textStyle: ["0px", "", "", "", ""]
                                        }]
                                    },
                                    {
                                        id: 'ARROWS2',
                                        type: 'group',
                                        rect: ['-222px', '33px', '58px', '47px', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'arrowsCopy',
                                            type: 'image',
                                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                        }]
                                    }]
                                },
                                {
                                    id: 'BUTTON',
                                    type: 'group',
                                    rect: ['35', '914px', '591', '117', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    c: [
                                    {
                                        id: 'RoundRect',
                                        type: 'rect',
                                        rect: ['0px', '0px', '591px', '117px', 'auto', 'auto'],
                                        overflow: 'hidden',
                                        borderRadius: ["31px", "31px", "31px", "31px 31px"],
                                        fill: ["rgba(255,175,0,1.00)"],
                                        stroke: [0,"rgb(0, 0, 0)","none"],
                                        c: [
                                        {
                                            id: 'color',
                                            type: 'image',
                                            rect: ['-26px', '-20px', '651px', '156px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"color.png",'0px','0px']
                                        }]
                                    },
                                    {
                                        id: 'btn-txt',
                                        type: 'group',
                                        rect: ['39', '167px', '511', '61', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'TextCopy2',
                                            type: 'text',
                                            rect: ['13px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                            text: "<p style=\"margin: 0px;\">SPRAWDŹ TERAZ</p>",
                                            align: "center",
                                            userClass: "shadow",
                                            font: ['font, Arial', [51, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"],
                                            textStyle: ["0px", "", "", "", ""]
                                        }]
                                    }]
                                },
                                {
                                    id: 'ONLY',
                                    type: 'group',
                                    rect: ['179', '634px', '296', '61', 'auto', 'auto'],
                                    transform: [[],[],[],['0','0']],
                                    c: [
                                    {
                                        id: 'TextCopy3',
                                        type: 'text',
                                        rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">tylko 30 zł</p>",
                                        align: "center",
                                        userClass: "shadow",
                                        font: ['Verdana, Geneva, sans-serif', [51, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"],
                                        textStyle: ["0px", "", "", "", ""]
                                    }]
                                },
                                {
                                    id: 'T1',
                                    type: 'group',
                                    rect: ['179', '877px', '296', '61', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'text-bullet1',
                                        type: 'text',
                                        rect: ['-105px', '-1px', '835px', '61px', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">dzieci do 13 roku życia gratis​</p>",
                                        align: "left",
                                        userClass: "split",
                                        font: ['font, Arial', [34, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", ""],
                                        textStyle: ["0px", "", "61px", "", ""]
                                    },
                                    {
                                        id: 'A1',
                                        type: 'group',
                                        rect: ['-286px', '12px', '44px', '36px', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'arrowsCopy2',
                                            type: 'image',
                                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                        }]
                                    }]
                                },
                                {
                                    id: 'T2',
                                    type: 'group',
                                    rect: ['179', '947px', '296', '61', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'TextCopy7',
                                        type: 'text',
                                        rect: ['-105px', '-1px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">zyskaj więcej czasu dla siebie​</p>",
                                        align: "left",
                                        userClass: "split",
                                        font: ['font, Arial', [34, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"],
                                        textStyle: ["0px", "", "61px", "", ""]
                                    },
                                    {
                                        id: 'A2',
                                        type: 'group',
                                        rect: ['-166px', '12px', '44px', '36px', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'arrowsCopy4',
                                            type: 'image',
                                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                        }]
                                    }]
                                },
                                {
                                    id: 'T3',
                                    type: 'group',
                                    rect: ['179', '1015px', '296', '61', 'auto', 'auto'],
                                    c: [
                                    {
                                        id: 'TextCopy8',
                                        type: 'text',
                                        rect: ['-105px', '-1px', 'auto', 'auto', 'auto', 'auto'],
                                        text: "<p style=\"margin: 0px;\">dla każdego pasażera​</p>",
                                        align: "left",
                                        userClass: "split",
                                        font: ['font, Arial', [34, "px"], "rgba(255,255,255,1.00)", "700", "none", "", "break-word", "nowrap"],
                                        textStyle: ["0px", "", "61px", "", ""]
                                    },
                                    {
                                        id: 'A3',
                                        type: 'group',
                                        rect: ['-166px', '12px', '44px', '36px', 'auto', 'auto'],
                                        c: [
                                        {
                                            id: 'arrowsCopy3',
                                            type: 'image',
                                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                        }]
                                    }]
                                },
                                {
                                    id: 'ARROW_BIG',
                                    type: 'group',
                                    rect: ['-352px', '222px', '232px', '190px', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'arrowsCopy5',
                                        type: 'image',
                                        rect: ['-0.3%', '-0.5%', '99.8%', '100.2%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                    }]
                                },
                                {
                                    id: 'ARROW_MID1',
                                    type: 'group',
                                    rect: ['-352px', '817px', '232px', '190px', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'arrowsCopy6',
                                        type: 'image',
                                        rect: ['-1.8%', '22.2%', '52.8%', '52.5%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                    }]
                                },
                                {
                                    id: 'ARROW_MID2',
                                    type: 'group',
                                    rect: ['-352px', '889px', '232px', '190px', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'arrowsCopy7',
                                        type: 'image',
                                        rect: ['-1.8%', '22.2%', '52.8%', '52.5%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                    }]
                                },
                                {
                                    id: 'ARROW_MID3',
                                    type: 'group',
                                    rect: ['-352px', '957px', '232px', '190px', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                    {
                                        id: 'arrowsCopy9',
                                        type: 'image',
                                        rect: ['-1.8%', '22.2%', '52.8%', '52.5%', 'auto', 'auto'],
                                        fill: ["rgba(0,0,0,0)",im+"arrows.svg",'0px','0px']
                                    }]
                                }]
                            }]
                        },
                        {
                            id: 'DISC',
                            type: 'group',
                            rect: ['151px', '1147px', '324', '34', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​szczegóły oferty dostępne w regulaminie usługi</p><p style=\"margin: 0px;\">dostępnej na lotnisko-chopina.pl/pl/fast-track.html</p>",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
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
                            fill: ["rgba(84,30,80,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 9814,
                    autoPlay: true,
                    labels: {
                        "re": 7932
                    },
                    data: [
                        [
                            "eid41",
                            "left",
                            4410,
                            149,
                            "linear",
                            "${A1}",
                            '-286px',
                            '-166px'
                        ],
                        [
                            "eid27",
                            "top",
                            3098,
                            284,
                            "easeOutCirc",
                            "${BUTTON}",
                            '914px',
                            '499px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            500,
                            553,
                            "linear",
                            "${BACK}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "opacity",
                            6783,
                            83,
                            "linear",
                            "${ARROW_MID3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            7143,
                            60,
                            "linear",
                            "${ARROW_MID3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "opacity",
                            6943,
                            83,
                            "linear",
                            "${A3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "left",
                            6943,
                            149,
                            "linear",
                            "${A3}",
                            '-286px',
                            '-166px'
                        ],
                        [
                            "eid43",
                            "left",
                            5564,
                            419,
                            "linear",
                            "${ARROW_MID2}",
                            '-352px',
                            '791px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1750,
                            83,
                            "linear",
                            "${TXT-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "left",
                            5750,
                            149,
                            "linear",
                            "${A2}",
                            '-286px',
                            '-166px'
                        ],
                        [
                            "eid21",
                            "left",
                            2242,
                            373,
                            "easeOutCirc",
                            "${ARROWS2}",
                            '-222px',
                            '128px'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            3285,
                            465,
                            "easeOutBack",
                            "${ONLY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "top",
                            3154,
                            254,
                            "linear",
                            "${btn-txt}",
                            '167px',
                            '27px'
                        ],
                        [
                            "eid58",
                            "top",
                            8000,
                            157,
                            "easeInQuad",
                            "${btn-txt}",
                            '27px',
                            '-63px'
                        ],
                        [
                            "eid60",
                            "top",
                            8354,
                            578,
                            "easeOutCirc",
                            "${btn-txt}",
                            '157px',
                            '27px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1435,
                            83,
                            "linear",
                            "${ARROWS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "left",
                            4250,
                            419,
                            "linear",
                            "${ARROW_MID1}",
                            '-352px',
                            '791px'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            500,
                            1410,
                            "easeOutCirc",
                            "${BACK}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            3285,
                            465,
                            "easeOutBack",
                            "${ONLY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "display",
                            27,
                            0,
                            "linear",
                            "${ALL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "opacity",
                            4250,
                            83,
                            "linear",
                            "${ARROW_MID1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            4610,
                            60,
                            "linear",
                            "${ARROW_MID1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            5564,
                            83,
                            "linear",
                            "${ARROW_MID2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            5924,
                            60,
                            "linear",
                            "${ARROW_MID2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid18",
                            "left",
                            1750,
                            313,
                            "easeOutCirc",
                            "${TXT-1}",
                            '-262px',
                            '128px'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2242,
                            83,
                            "linear",
                            "${TXT-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            5750,
                            83,
                            "linear",
                            "${A2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "left",
                            1053,
                            307,
                            "linear",
                            "${ARROW_BIG}",
                            '-352px',
                            '761px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2242,
                            83,
                            "linear",
                            "${ARROWS2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            4410,
                            83,
                            "linear",
                            "${A1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "left",
                            1435,
                            416,
                            "easeOutCirc",
                            "${ARROWS}",
                            '-89px',
                            '531px'
                        ],
                        [
                            "eid52",
                            "left",
                            6783,
                            419,
                            "linear",
                            "${ARROW_MID3}",
                            '-352px',
                            '791px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1053,
                            83,
                            "linear",
                            "${ARROW_BIG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1300,
                            60,
                            "linear",
                            "${ARROW_BIG}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "opacity",
                            3098,
                            57,
                            "linear",
                            "${BUTTON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            500,
                            1410,
                            "easeOutCirc",
                            "${BACK}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid24",
                            "left",
                            2242,
                            373,
                            "easeOutCirc",
                            "${TXT-2}",
                            '818px',
                            '198px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lotniska_a_edgeActions.js");
})("EDGE-400296298");
