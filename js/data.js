// 试卷资源网站数据
const resources = [
    // 综合资源网站
    {
        id: 1,
        name: "学科网",
        url: "https://www.zxxk.com",
        description: "专业的教学资源网站，提供各年级各科目试卷下载，包含期中期末、月考、模拟考试等各类试卷，大部分免费。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["免费下载", "含答案", "可编辑", "质量高"],
        icon: "fa-globe"
    },
    {
        id: 2,
        name: "百度文库",
        url: "https://wenku.baidu.com",        description: "百度旗下的文档分享平台，拥有海量教育文档，包括各年级试卷、教案、课件等，部分免费下载。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "两者都有",
        features: ["资源丰富", "免费+付费", "在线预览", "下载方便"],
        icon: "fa-file-alt"
    },
    {
        id: 3,
        name: "考试吧",
        url: "https://www.exam8.com",
        description: "专注于各类考试资源，提供中小学各年级试卷下载，包含历年真题、模拟题、单元测试等。",
        grades: ["三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["历年真题", "模拟试题", "免费下载", "答案详解"],
        icon: "fa-file-word"
    },
    {
        id: 4,
        name: "无忧考网",
        url: "https://www.51test.net",
        description: "提供中小学教育资源和试卷下载，涵盖各年级各学科，试卷质量较高，多数免费。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["免费资源", "更新及时", "分类清晰", "下载便捷"],
        icon: "fa-graduation-cap"
    },
    {
        id: 5,
        name: "教习网",
        url: "https://www.51jiaoxi.com",
        description: "教师资源分享平台，提供大量免费试卷、教案、课件下载，适合教师备课使用。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["教师专用", "免费下载", "可编辑", "配套答案"],
        icon: "fa-chalkboard-teacher"
    },
    {
        id: 6,
        name: "绿色圃中小学教育网",
        url: "https://www.lspjy.com",
        description: "专注于中小学教育资源，提供各年级试卷、教案、课件免费下载，资源更新及时。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["完全免费", "资源优质", "更新频繁", "无需注册"],
        icon: "fa-school"
    },
    {
        id: 7,
        name: "第二教育网",
        url: "https://www.dearedu.com",
        description: "提供中小学各年级试卷、教案、课件等资源下载，部分资源需要积分，但有很多免费资源。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["资源丰富", "免费+积分", "质量较高", "分类详细"],
        icon: "fa-book"
    },
    {
        id: 8,
        name: "课件站",
        url: "https://www.ketangzhan.com",
        description: "提供中小学各科试卷、课件、教案下载，界面简洁，资源丰富，支持免费下载。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["免费下载", "无需注册", "资源齐全", "更新及时"],
        icon: "fa-laptop"
    },
    {
        id: 9,
        name: "莲山课件",
        url: "https://www.5ykj.com",
        description: "提供中小学教育资源和试卷下载，包含各年级期中期末试卷、单元测试等，免费资源丰富。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["免费资源", "答案齐全", "可编辑", "下载方便"],
        icon: "fa-file-word"
    },
    {
        id: 10,
        name: "中小学教育网",
        url: "https://www.zxx.edu.cn",
        description: "官方教育网站，提供权威的教学资源和试卷，涵盖中小学各年级各学科。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "PDF",
        features: ["官方资源", "权威可靠", "免费使用", "质量保障"],
        icon: "fa-university"
    },
    {
        id: 11,
        name: "高考资源网",
        url: "https://www.ks5u.com",
        description: "专注于高考资源，提供高三各科目试卷、模拟题、历年真题下载，适合高中教师和学生使用。",
        grades: ["高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["高考专用", "真题模拟", "免费下载", "解析详细"],
        icon: "fa-user-graduate"
    },
    {
        id: 12,
        name: "中学学科网",
        url: "https://www.zxxk.com/subject/",
        description: "学科网的中学部分，专注于初中和高中教育资源，试卷质量高，更新及时。",
        grades: ["初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["中学专用", "免费资源", "答案配套", "可编辑"],
        icon: "fa-book-open"
    },
    {
        id: 13,
        name: "小学资源网",
        url: "https://www.xj63.com",
        description: "专注于小学教育资源，提供一至六年级各科试卷、教案、课件免费下载。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        subjects: ["语文", "数学", "英语"],
        format: "Word",
        features: ["小学专用", "完全免费", "资源优质", "适合教师"],
        icon: "fachild"
    },
    {
        id: 14,
        name: "九年级物理",
        url: "https://www.wuli.com/9",
        description: "专注于初中物理教学资源，提供初三物理试卷、课件、实验视频等免费资源。",
        grades: ["初三"],
        subjects: ["物理"],
        format: "Word",
        features: ["物理专用", "免费下载", "实验视频", "中考复习"],
        icon: "fa-atom"
    },
    {
        id: 15,
        name: "数学资源网",
        url: "https://www.shuxue.com",
        description: "提供中小学数学试卷和教学资源，涵盖各年级，试卷可免费下载，含详细答案。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["数学"],
        format: "Word",
        features: ["数学专用", "免费资源", "答案详细", "题型丰富"],
        icon: "fa-calculator"
    },
    {
        id: 16,
        name: "英语周报",
        url: "https://www.ew.com.cn",
        description: "英语周报官方网站，提供中小学英语试卷、听力材料、阅读训练等免费资源下载。",
        grades: ["三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["英语"],
        format: "两者都有",
        features: ["英语专用", "听力材料", "免费下载", "同步教材"],
        icon: "fa-language"
    },
    {
        id: 17,
        name: "语文资源网",
        url: "https://www.yuwen.com",
        description: "专注于中小学语文教学资源，提供各年级语文试卷、作文素材、阅读理解等免费下载。",
        grades: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文"],
        format: "Word",
        features: ["语文专用", "作文素材", "免费下载", "阅读理解"],
        icon: "fa-pen-fancy"
    },
    {
        id: 18,
        name: "理化生教学网",
        url: "https://www.lihuasheng.com",
        description: "提供初中和高中物理、化学、生物教学资源和试卷下载，适合理科教师使用。",
        grades: ["初二", "初三", "高一", "高二", "高三"],
        subjects: ["物理", "化学", "生物"],
        format: "Word",
        features: ["理科专用", "免费资源", "实验视频", "中考高考"],
        icon: "fa-flask"
    },
    {
        id: 19,
        name: "政史地教学网",
        url: "https://www.zhengshidi.com",
        description: "提供初中和高中政治、历史、地理教学资源和试卷下载，文科教师的好帮手。",
        grades: ["初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["历史", "地理", "政治"],
        format: "Word",
        features: ["文科专用", "免费下载", "复习资料", "中考高考"],
        icon: "fa-globe-americas"
    },
    {
        id: 20,
        name: "黄冈试卷网",
        url: "https://www.hgjyw.com",
        description: "黄冈教育网提供的试卷资源，以黄冈中学的优质试卷为主，涵盖中小学各年级。",
        grades: ["五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        subjects: ["语文", "数学", "英语", "物理", "化学", "生物", "历史", "地理", "政治"],
        format: "Word",
        features: ["黄冈品质", "免费下载", "答案详细", "经典试卷"],
        icon: "fa-award"
    }
];

// 导出数据
window.resources = resources;
