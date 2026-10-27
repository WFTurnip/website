/** 子音の配列 @type {string[]} */
export const consonantArray = ["k", "g", "t", "d", "s", "z", "q", "c", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
/** 子音の概念の配列 @type {string[]} */
export const consonantConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神", "空白", "物質", "過去", "未来", "鎮静", "高揚", "受動", "能動", "創造", "破壊", "流動", "固定"];
/** 子音の発音の配列 @type {string[]} */
export const consonantPronunciationArray = ["k", "g", "t", "d", "s", "z", "\u{0294}", "\u{0295}", "r", "l", "p", "b", "h", "x", "f", "v", "m", "n"];
/** 子音の発音の水平配列 @type {string[]} */
export const consonantPlaceArray = ["喉", "舌", "唇"];
/** 子音の発音の垂直配列 @type {string[]} */
export const consonantRowArray = ["上", "中", "下"];
/** 子音の発音の水平クラス配列 @type {string[]} */
export const consonantPolarityArray = ["弱", "強"];
/** 母音の配列 @type {string[]} */
export const vowelArray = ["a", "e", "i", "o", "u", "w"];
/** 母音の格配列 @type {string[]} */
export const vowelCaseArray = ["否", "与", "属", "対", "主", "流"];
/** 母音の品詞配列 @type {string[]} */
export const vowelPartOfSpeechTypeArray = ["附", "動", "容", "助", "副", "名"];
/** 母音の発音の配列 @type {string[]} */
export const vowelPronunciationArray = ["a", "e", "i", "o", "u", ""];
/** 母音の発音の配列 @type {string[]} */
export const vowelPronunciationReferenceArray = ["a", "e", "i", "o", "u", "\u{2205}"];
/** 母音の高さの配列 @type {string[]} */
export const vowelBacknessArray = ["広", "中", "狭"];
/** 母音円唇真偽配列 @type {string[]} */
export const vowelRoundednessArray = ["非円唇", "円唇"];
/** 母音の品詞の水平配列 @type {string[]} */
export const vowelPartOfSpeechHorizontalTypeArray = ["限定", "動作", "状態"];
/** 母音の品詞の垂直配列 @type {string[]} */
export const vowelPartOfSpeechVerticalTypeArray = ["核", "補助"];
/** 上舌子音の配列 @type {string[]} */
export const upperTongueConsonantArray = ["k", "g", "t", "d", "s", "z"];
/** 中舌子音の配列 @type {string[]} */
export const middleTongueConsonantArray = ["q", "c", "r", "l", "p", "b"];
/** 下舌子音の配列 @type {string[]} */
export const lowerTongueConsonantArray = ["h", "x", "f", "v", "m", "n"];
/** 上舌子音の概念の配列 @type {string[]} */
export const upperTongueConceptArray = ["剥離", "癒着", "乖離", "同一", "肉体", "精神"];
/** 中舌子音の概念の配列 @type {string[]} */
export const middleTongueConceptArray = ["空白", "物質", "過去", "未来", "鎮静", "高揚"];
/** 下舌子音の概念の配列 @type {string[]} */
export const lowerTongueConceptArray = ["受動", "能動", "創造", "破壊", "流動", "固定"];
/** 接辞子音の配列 @type {string[]} */
export const affixConsonantArray = [["k", "g", "t", "d", "s", "z"], ["q", "c", "r", "l", "p", "b"], ["h", "x", "f", "v", "m", "n"]];
/** 接辞子音の配列 @type {string[]} */
export const affixConceptArray = [["剥離", "癒着", "乖離", "同一", "肉体", "精神"], ["空白", "物質", "過去", "未来", "鎮静", "高揚"], ["受動", "能動", "創造", "破壊", "流動", "固定"]];
/** 朗唱符号の配列 @type {string[]} */
export const cantillationMarkArray = ["\u{0301}", "\u{0300}", "\u{0302}", "\u{030c}", "\u{0304}", "\u{0308}", "\u{0307}", "\u{0317}", "\u{0316}", "\u{032d}", "\u{032c}", "\u{0331}", "\u{0324}", "\u{0323}"];
/** 朗唱符号の概念の配列 @type {string[]} */
export const cantillationConceptArray = ["揚", "抑", "昇", "降", "平", "分", "終"];
/** 朗唱符号の高低配列 @type {string[]} */
export const cantillationPitchArray = ["高", "低"];
/** 朗唱符号の発音の配列 @type {string[]} */
export const cantillationPronunciationArray = ["\u{02e6}\u{02e5}", "\u{02e5}\u{02e6}", "\u{02e6}\u{02e5}\u{02e6}", "\u{02e5}\u{02e6}\u{02e5}", "\u{02e5}", "\u{02e5}", "\u{a708}", "\u{02e9}\u{02e8}", "\u{02e8}\u{02e9}", "\u{02e9}\u{02e8}\u{02e9}", "\u{02e8}\u{02e9}\u{02e8}", "\u{02e9}", "\u{02e9}", "\u{a70c}"];
/** 音楽符号の配列 @type {string[]} */
export const notationMarkArray = ["\u{02ca}", "\u{02cf}", "\u{02cb}", "\u{02ce}", "\u{02c6}", "\u{a788}", "\u{02c7}", "\u{02ec}", "\u{02c9}", "\u{02cd}"];
/** 音楽符号の概念の配列 @type {string[]} */
export const notationConceptArray = ["揚", "抑", "昇", "降", "平"];
/** 音楽符号の高低配列 @type {string[]} */
export const notationPitchArray = ["高", "低"];
/** 子音の最小値と最大値のマップ @type {string[]} */
export const minMaxMap = [[-4, -1], [-4, -1], [-3, 0], [-3, 0], [-2, 1], [-2, 1], [-5, -2], [-5, -2], [0, 8], [0, 8], [-1, 2], [-1, 2], [2, 5], [2, 5], [1, 4], [1, 4], [0, 3], [0, 3]];