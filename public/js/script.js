// MBTI测试题目和逻辑

// 12 道二选一题目；每个维度各 3 题，结果不会出现同分。
const questions = [
    {
        id: 1,
        text: "忙碌一周后，你更想怎样恢复精力？",
        dimension: "EI",
        options: [
            { id: "E", label: "约朋友见面或参加活动", description: "在互动中重新充电" },
            { id: "I", label: "留些时间给自己", description: "在安静中恢复状态" }
        ]
    },
    {
        id: 2,
        text: "接触一个新领域时，你通常先关注？",
        dimension: "SN",
        options: [
            { id: "S", label: "具体事实和实际例子", description: "先弄清它现在怎样运作" },
            { id: "N", label: "整体概念和未来可能", description: "先理解它还能发展成什么" }
        ]
    },
    {
        id: 3,
        text: "朋友向你倾诉难题时，你更自然的反应是？",
        dimension: "TF",
        options: [
            { id: "T", label: "一起分析原因和解决办法", description: "帮对方理清问题" },
            { id: "F", label: "先理解并回应对方的感受", description: "让对方感到被支持" }
        ]
    },
    {
        id: 4,
        text: "面对一次旅行，你更喜欢？",
        dimension: "JP",
        options: [
            { id: "J", label: "提前订好行程和住宿", description: "确定的安排更安心" },
            { id: "P", label: "只定大方向，边走边决定", description: "保留变化的空间" }
        ]
    },
    {
        id: 5,
        text: "在不熟悉的聚会里，你通常会？",
        dimension: "EI",
        options: [
            { id: "E", label: "主动认识不同的人", description: "聊天会让我更投入" },
            { id: "I", label: "先观察，再和少数人深入聊", description: "慢慢进入状态更舒服" }
        ]
    },
    {
        id: 6,
        text: "学习一项新技能时，哪种方式更适合你？",
        dimension: "SN",
        options: [
            { id: "S", label: "跟着步骤练习", description: "从可操作的方法开始" },
            { id: "N", label: "先理解原理再自由尝试", description: "掌握思路后举一反三" }
        ]
    },
    {
        id: 7,
        text: "团队意见不一致时，你更看重？",
        dimension: "TF",
        options: [
            { id: "T", label: "方案是否合理有效", description: "用统一标准做判断" },
            { id: "F", label: "方案能否照顾大家", description: "寻找彼此能接受的选择" }
        ]
    },
    {
        id: 8,
        text: "收到一项有截止日期的任务，你通常会？",
        dimension: "JP",
        options: [
            { id: "J", label: "尽早拆分任务并按计划完成", description: "喜欢稳步推进" },
            { id: "P", label: "先探索，临近截止时集中完成", description: "灵感和压力能推动我" }
        ]
    },
    {
        id: 9,
        text: "需要表达想法时，你更习惯？",
        dimension: "EI",
        options: [
            { id: "E", label: "边说边整理思路", description: "交流能帮助我想清楚" },
            { id: "I", label: "想清楚后再开口", description: "先在心里形成完整想法" }
        ]
    },
    {
        id: 10,
        text: "听别人讲一件事时，什么更容易吸引你？",
        dimension: "SN",
        options: [
            { id: "S", label: "清楚的细节和真实经历", description: "内容具体才容易理解" },
            { id: "N", label: "背后的含义和新联想", description: "由此想到更多可能" }
        ]
    },
    {
        id: 11,
        text: "做重要决定时，你通常更信任？",
        dimension: "TF",
        options: [
            { id: "T", label: "逻辑一致的利弊分析", description: "客观标准让我更有把握" },
            { id: "F", label: "自己的价值观和他人感受", description: "内心认同对我更重要" }
        ]
    },
    {
        id: 12,
        text: "周末突然空出一天，你更可能？",
        dimension: "JP",
        options: [
            { id: "J", label: "选一件想做的事并安排好时间", description: "有计划地享受这一天" },
            { id: "P", label: "当天看心情再决定", description: "让这一天自然展开" }
        ]
    }
];

// MBTI类型描述
const mbtiTypes = {
    ISTJ: {
        name: "物流师型",
        description: "安静、严肃，通过专注和负责赢得成功。实际、有序、注重事实，逻辑性强，工作和个人生活都很有条理。"
    },
    ISFJ: {
        name: "守卫者型",
        description: "热情、有责任心、认真，注重细节，关心他人感受，致力于创造和谐的环境，喜欢为他人提供支持。"
    },
    INFJ: {
        name: "提倡者型",
        description: "安静而神秘，具有深刻的洞察力和坚定的理想主义，致力于实现自己的愿景，关心他人成长。"
    },
    INTJ: {
        name: "建筑师型",
        description: "富有想象力和战略性的思想家，具有远见卓识，追求知识，善于分析，独立且坚定。"
    },
    ISTP: {
        name: "鉴赏家型",
        description: "灵活、有忍耐力，是优秀的问题解决者，注重实际经验，善于在行动中学习，喜欢探索新事物。"
    },
    ISFP: {
        name: "探险家型",
        description: "安静、友好、敏感、善良，享受当下，注重个人体验，富有艺术气质，不喜欢冲突。"
    },
    INFP: {
        name: "调停者型",
        description: "理想主义者，忠诚于自己的价值观和他人，寻求意义和联系，富有创造力和洞察力。"
    },
    INTP: {
        name: "逻辑学家型",
        description: "具有创造力的发明家，对知识充满好奇，善于分析，喜欢理论和抽象概念，追求精确。"
    },
    ESTP: {
        name: "企业家型",
        description: "灵活、有魅力，喜欢行动和冒险，善于应对挑战，注重实际，是天生的问题解决者。"
    },
    ESFP: {
        name: "表演者型",
        description: "外向、友好、接受力强，喜欢与人相处，注重体验，富有活力和热情，善于娱乐他人。"
    },
    ENFP: {
        name: "竞选者型",
        description: "热情、有创造力、充满活力，喜欢探索可能性，善于激励他人，富有想象力。"
    },
    ENTP: {
        name: "辩论家型",
        description: "聪明、好奇、善于言辞，喜欢挑战和创新，富有战略思维，善于发现问题并解决。"
    },
    ESTJ: {
        name: "总经理型",
        description: "实际、现实主义者，善于组织和管理，注重效率和结果，是天生的领导者。"
    },
    ESFJ: {
        name: "执政官型",
        description: "热心、有责任心、合作，注重和谐和秩序，善于与人相处，喜欢为他人服务。"
    },
    ENFJ: {
        name: "主人公型",
        description: "富有魅力和鼓舞力的领导者，关心他人成长，善于理解和激励他人，具有远见。"
    },
    ENTJ: {
        name: "指挥官型",
        description: "果断、有领导力，善于战略规划和组织，富有远见，喜欢挑战，追求卓越。"
    }
};

// 测试状态
const STORAGE_KEY = "mbtiTestProgressV2";
const emptyScores = () => ({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
let currentQuestionIndex = 0;
let answers = {};
let dimensionsCountAll = emptyScores();

const introSection = document.getElementById("intro");
const testSection = document.getElementById("test");
const loadingSection = document.getElementById("loading");
const startTestBtn = document.getElementById("start-test");
const continueTestBtn = document.getElementById("continue-test");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressFill = document.getElementById("progress");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const prevQuestionBtn = document.getElementById("prev-question");
const nextQuestionBtn = document.getElementById("next-question");

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentQuestionIndex, answers }));
}

function rebuildScores() {
    dimensionsCountAll = emptyScores();
    Object.values(answers).forEach(answer => {
        if (answer && Object.hasOwn(dimensionsCountAll, answer.optionId)) {
            dimensionsCountAll[answer.optionId] += 1;
        }
    });
}

function loadProgress() {
    try {
        const progress = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!progress || typeof progress.answers !== "object") return false;

        answers = progress.answers;
        currentQuestionIndex = Math.min(Math.max(Number(progress.currentQuestionIndex) || 0, 0), questions.length - 1);
        rebuildScores();
        return Object.keys(answers).length > 0;
    } catch {
        localStorage.removeItem(STORAGE_KEY);
        return false;
    }
}

function init() {
    totalQuestionsEl.textContent = questions.length;
    startTestBtn.addEventListener("click", startTest);
    continueTestBtn.addEventListener("click", continueTest);
    prevQuestionBtn.addEventListener("click", prevQuestion);
    nextQuestionBtn.addEventListener("click", nextQuestion);

    if (loadProgress()) continueTestBtn.classList.remove("hidden");
}

function openTest() {
    introSection.classList.remove("active");
    introSection.classList.add("hidden");
    testSection.classList.remove("hidden");
    testSection.classList.add("active");
    showQuestion();
}

function startTest() {
    currentQuestionIndex = 0;
    answers = {};
    dimensionsCountAll = emptyScores();
    localStorage.removeItem(STORAGE_KEY);
    openTest();
}

function continueTest() {
    openTest();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    optionsContainer.replaceChildren();

    question.options.forEach((option, optionIndex) => {
        const optionEl = document.createElement("button");
        optionEl.type = "button";
        optionEl.className = "option";
        optionEl.dataset.optionId = option.id;
        optionEl.setAttribute("aria-pressed", "false");
        optionEl.innerHTML = `
            <div class="option-label">${option.label}</div>
            <div class="option-description">${option.description}</div>
        `;
        optionEl.addEventListener("click", () => selectOption(option.id, optionIndex));
        optionsContainer.appendChild(optionEl);
    });

    const savedAnswer = answers[question.id];
    if (savedAnswer) {
        const selected = optionsContainer.children[savedAnswer.optionIndex];
        if (selected) {
            selected.classList.add("selected");
            selected.setAttribute("aria-pressed", "true");
        }
    }

    prevQuestionBtn.classList.toggle("hidden", currentQuestionIndex === 0);
    nextQuestionBtn.disabled = !savedAnswer;
    nextQuestionBtn.textContent = currentQuestionIndex === questions.length - 1 ? "查看结果" : "下一题";
    updateProgress();
}

function selectOption(optionId, optionIndex) {
    const questionId = questions[currentQuestionIndex].id;
    answers[questionId] = { optionId, optionIndex };
    rebuildScores();

    Array.from(optionsContainer.children).forEach((option, index) => {
        const selected = index === optionIndex;
        option.classList.toggle("selected", selected);
        option.setAttribute("aria-pressed", String(selected));
    });

    nextQuestionBtn.disabled = false;
    saveProgress();
}

function nextQuestion() {
    if (!answers[questions[currentQuestionIndex].id]) return;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1;
        saveProgress();
        showQuestion();
        return;
    }

    localStorage.removeItem(STORAGE_KEY);
    showResults();
}

function prevQuestion() {
    if (currentQuestionIndex === 0) return;
    currentQuestionIndex -= 1;
    saveProgress();
    showQuestion();
}

function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    progressFill.style.width = `${(answeredCount / questions.length) * 100}%`;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
}

function showResults() {
    testSection.classList.remove("active");
    testSection.classList.add("hidden");
    loadingSection.classList.remove("hidden");
    loadingSection.classList.add("active");

    setTimeout(() => {
        createResultSection(calculateMBTIType());
        loadingSection.classList.remove("active");
        loadingSection.classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("result").classList.add("active");
    }, 700);
}

function calculateMBTIType() {
    return [
        dimensionsCountAll.E > dimensionsCountAll.I ? "E" : "I",
        dimensionsCountAll.S > dimensionsCountAll.N ? "S" : "N",
        dimensionsCountAll.T > dimensionsCountAll.F ? "T" : "F",
        dimensionsCountAll.J > dimensionsCountAll.P ? "J" : "P"
    ].join("");
}

// 生成详细的性格分析
function generatePersonalityInsights(mbtiType) {
    // 根据不同的MBTI类型生成不同的分析
    const insights = {
        // ISTJ - 物流师型
        ISTJ: {
            coreTraits: [
                "注重实际，脚踏实地",
                "严谨细致，注重细节",
                "有责任感，可靠稳定",
                "喜欢按计划行事，不喜欢意外变化",
                "重视传统和秩序"
            ],
            careerFit: "ISTJ类型的人适合需要组织、细节和可靠性的工作环境。他们擅长处理实际问题，能够系统地完成任务，并且重视规则和秩序。",
            suitableCareers: ["会计师", "审计师", "工程师", "项目经理", "行政管理人员", "教师", "警察"],
            relationships: "在人际关系中，ISTJ通常是可靠的朋友和伴侣。他们可能不善于表达情感，但会通过实际行动来关心他人。他们重视长期稳定的关系，并且会认真履行自己的承诺。",
            growthTips: [
                "尝试接受一些灵活性和变化，这可能会带来新的机会",
                "学会表达自己的情感，而不仅仅是通过行动",
                "在做决策时，可以考虑更多的可能性，而不仅仅是传统方法",
                "给自己一些放松和娱乐的时间，避免过度工作"
            ]
        },
        
        // ISFJ - 守卫者型
        ISFJ: {
            coreTraits: [
                "富有同情心，关心他人",
                "有责任心，乐于助人",
                "注重细节，认真细致",
                "重视和谐，不喜欢冲突",
                "善于照顾他人"
            ],
            careerFit: "ISFJ类型的人适合需要关怀、服务和组织能力的工作。他们擅长照顾他人，能够创造和谐的工作环境，并且注重细节。",
            suitableCareers: ["护士", "教师", "社会工作者", "行政助理", "图书管理员", "客服代表", "营养师"],
            relationships: "在人际关系中，ISFJ是温暖、关怀的朋友和伴侣。他们善于倾听，会为他人着想，并且会尽力满足他人的需求。他们重视稳定和安全感，并且会为维护关系而努力。",
            growthTips: [
                "学会设定个人边界，避免过度付出",
                "尝试表达自己的需求和想法，而不仅仅是关注他人",
                "在必要时学会面对冲突，而不是一味回避",
                "给自己一些时间和空间，关注个人成长"
            ]
        },
        
        // INFJ - 提倡者型
        INFJ: {
            coreTraits: [
                "富有洞察力和直觉",
                "理想主义，有强烈的价值观",
                "善于理解他人，富有同理心",
                "有创造力，追求意义和深度",
                "喜欢帮助他人成长"
            ],
            careerFit: "INFJ类型的人适合需要创造力、洞察力和帮助他人的工作。他们擅长理解复杂的人际关系，能够看到事物的深层含义，并且致力于实现自己的理想。",
            suitableCareers: ["心理咨询师", "社会工作者", "作家", "艺术家", "教育工作者", "人力资源", "精神健康顾问"],
            relationships: "在人际关系中，INFJ是真诚、深刻的朋友和伴侣。他们寻求有意义的连接，并且会深入了解他人的内心世界。他们重视信任和真诚，并且会为关系带来深度和理解。",
            growthTips: [
                "学会接受现实的局限性，不必总是追求完美",
                "给自己时间休息和充电，避免过度消耗",
                "在表达想法时，尝试更加直接和具体",
                "学会欣赏当下，而不仅仅是关注未来的理想"
            ]
        },
        
        // INTJ - 建筑师型
        INTJ: {
            coreTraits: [
                "富有战略思维和远见",
                "独立思考，善于分析",
                "追求知识和效率",
                "自信果断，目标明确",
                "喜欢挑战和解决复杂问题"
            ],
            careerFit: "INTJ类型的人适合需要战略思维、分析能力和创新的工作。他们擅长解决复杂问题，能够看到事物的全局和长远影响，并且追求高效和创新。",
            suitableCareers: ["科学家", "工程师", "战略规划师", "企业家", "技术专家", "研究员", "财务分析师"],
            relationships: "在人际关系中，INTJ是独立、理性的朋友和伴侣。他们重视智力交流和共同成长，并且希望关系能够有深度和意义。他们可能不善于表达情感，但会以实际行动支持他人。",
            growthTips: [
                "学会耐心倾听他人的想法，即使与自己不同",
                "在做决策时，考虑他人的感受和需求",
                "尝试放松和享受生活中的简单乐趣",
                "学会接受不完美，不必总是追求最优解"
            ]
        },
        
        // ISTP - 鉴赏家型
        ISTP: {
            coreTraits: [
                "灵活适应，善于应对变化",
                "注重实际，动手能力强",
                "冷静理性，善于解决问题",
                "喜欢探索和尝试新事物",
                "独立，注重个人空间"
            ],
            careerFit: "ISTP类型的人适合需要灵活性、实际操作能力和解决问题能力的工作。他们擅长在实践中学习，能够应对突发情况，并且喜欢动手解决问题。",
            suitableCareers: ["工程师", "技术员", "侦探", "运动员", "手工艺人", "机械师", "软件开发者"],
            relationships: "在人际关系中，ISTP是独立、务实的朋友和伴侣。他们重视自由和空间，并且会通过实际行动来表达关心。他们可能不善于表达情感，但会在需要时提供实际帮助。",
            growthTips: [
                "尝试在做决定前考虑长期影响，而不仅仅是当下",
                "学会表达自己的情感和想法，而不仅仅是行动",
                "在团队合作中，学会更加耐心和包容",
                "给自己设定一些长期目标，避免过于随性"
            ]
        },
        
        // ISFP - 探险家型
        ISFP: {
            coreTraits: [
                "温和友善，富有同情心",
                "注重个人体验，享受当下",
                "有创造力，善于发现美",
                "灵活适应，不喜欢压力",
                "重视个人价值观"
            ],
            careerFit: "ISFP类型的人适合需要创造力、灵活性和关怀的工作。他们擅长发现和创造美，能够与他人建立温暖的连接，并且喜欢在轻松的环境中工作。",
            suitableCareers: ["艺术家", "设计师", "音乐家", "兽医", "园艺师", "厨师", "瑜伽教练"],
            relationships: "在人际关系中，ISFP是温暖、包容的朋友和伴侣。他们重视和谐和真诚，并且会尊重他人的独特性。他们可能不善于表达强烈的情感，但会通过日常的关怀来表达爱意。",
            growthTips: [
                "学会设定个人目标，并且坚持追求",
                "在必要时学会面对挑战，而不是回避",
                "尝试表达自己的想法和需求，而不仅仅是接受他人",
                "在做决策时，考虑长远影响，而不仅仅是当下感受"
            ]
        },
        
        // INFP - 调停者型
        INFP: {
            coreTraits: [
                "理想主义，富有同理心",
                "重视个人价值观和意义",
                "有创造力，善于想象",
                "温和友善，尊重他人",
                "追求自我实现和成长"
            ],
            careerFit: "INFP类型的人适合需要创造力、同理心和意义的工作。他们擅长理解他人的情感和需求，能够为工作带来深度和意义，并且喜欢在支持性的环境中工作。",
            suitableCareers: ["作家", "艺术家", "心理咨询师", "社会工作者", "教师", "环保活动家", "非营利组织工作者"],
            relationships: "在人际关系中，INFP是真诚、理想主义的朋友和伴侣。他们寻求深度和真实的连接，并且会为关系带来理解和支持。他们重视信任和共同的价值观，并且会为维护关系而努力。",
            growthTips: [
                "学会接受现实的不完美，不必总是追求理想",
                "在做决策时，考虑实际因素，而不仅仅是情感和价值观",
                "尝试更加直接地表达自己的想法和需求",
                "给自己设定一些具体的、可实现的目标"
            ]
        },
        
        // INTP - 逻辑学家型
        INTP: {
            coreTraits: [
                "好奇爱思考，善于分析",
                "重视逻辑和理性",
                "富有创造力，喜欢探索新想法",
                "独立，喜欢独处思考",
                "追求精确和知识"
            ],
            careerFit: "INTP类型的人适合需要分析能力、创造力和独立思考的工作。他们擅长解决复杂问题，能够提出创新的解决方案，并且喜欢探索新的知识和想法。",
            suitableCareers: ["科学家", "程序员", "数学家", "哲学家", "工程师", "研究员", "技术顾问"],
            relationships: "在人际关系中，INTP是理性、好奇的朋友和伴侣。他们重视智力交流和共同探索，并且希望关系能够有深度和刺激。他们可能不善于表达情感，但会以自己的方式关心他人。",
            growthTips: [
                "学会关注他人的情感需求，而不仅仅是理性思考",
                "在做决策时，考虑实际应用，而不仅仅是理论",
                "尝试更加耐心地解释自己的想法，避免过于抽象",
                "学会在团队中更加合作和包容"
            ]
        },
        
        // ESTP - 企业家型
        ESTP: {
            coreTraits: [
                "活力充沛，喜欢行动",
                "灵活适应，善于应对挑战",
                "务实，注重实际结果",
                "善于社交，有魅力",
                "喜欢冒险和新体验"
            ],
            careerFit: "ESTP类型的人适合需要活力、适应性和实际能力的工作。他们擅长应对突发情况，能够在压力下保持冷静，并且喜欢与他人互动和解决实际问题。",
            suitableCareers: ["销售人员", "企业家", "运动员", "警察", "消防员", "演员", "旅游顾问"],
            relationships: "在人际关系中，ESTP是热情、有趣的朋友和伴侣。他们喜欢社交和新体验，并且会为关系带来活力和刺激。他们可能不善于处理深度情感，但会以行动表达关心。",
            growthTips: [
                "学会在做决定前考虑长期后果，而不仅仅是当下",
                "尝试更加耐心地倾听他人，而不仅仅是表达自己",
                "在必要时学会计划和组织，而不仅仅是即兴发挥",
                "学会关注他人的情感需求，而不仅仅是实际帮助"
            ]
        },
        
        // ESFP - 表演者型
        ESFP: {
            coreTraits: [
                "热情友好，善于社交",
                "乐观开朗，喜欢享受生活",
                "注重体验，活在当下",
                "有魅力，善于娱乐他人",
                "灵活适应，不喜欢约束"
            ],
            careerFit: "ESFP类型的人适合需要社交能力、活力和创造力的工作。他们擅长与他人互动，能够创造愉快的工作环境，并且喜欢在轻松的氛围中工作。",
            suitableCareers: ["演员", "主持人", "销售人员", "客户服务", "活动策划", "旅游顾问", "教师"],
            relationships: "在人际关系中，ESFP是热情、友善的朋友和伴侣。他们喜欢社交和分享快乐，并且会为关系带来温暖和活力。他们重视当下的体验，并且会真诚地表达自己的情感。",
            growthTips: [
                "学会设定一些长期目标，并且坚持追求",
                "在做决策时，考虑长远影响，而不仅仅是当下感受",
                "尝试更加深入地理解他人的情感，而不仅仅是表面",
                "在必要时学会面对困难，而不是回避"
            ]
        },
        
        // ENFP - 竞选者型
        ENFP: {
            coreTraits: [
                "热情活力，富有创造力",
                "理想主义，充满激情",
                "善于社交，有感染力",
                "好奇爱探索，喜欢新想法",
                "善于理解和激励他人"
            ],
            careerFit: "ENFP类型的人适合需要创造力、社交能力和理想主义的工作。他们擅长与他人建立连接，能够提出创新的想法，并且喜欢在有意义的环境中工作。",
            suitableCareers: ["市场营销", "公关", "作家", "教师", "社会工作者", "企业家", "顾问"],
            relationships: "在人际关系中，ENFP是热情、理想主义的朋友和伴侣。他们寻求深度和有意义的连接，并且会为关系带来活力和灵感。他们重视真诚和成长，并且会鼓励他人追求梦想。",
            growthTips: [
                "学会专注和坚持，避免过于分散精力",
                "在做决策时，考虑实际因素，而不仅仅是热情和理想",
                "尝试更加耐心地完成细节工作，而不仅仅是提出想法",
                "学会接受现实的局限性，不必总是追求完美"
            ]
        },
        
        // ENTP - 辩论家型
        ENTP: {
            coreTraits: [
                "聪明好奇，善于分析",
                "喜欢挑战和辩论",
                "富有创造力，善于创新",
                "灵活适应，善于应对变化",
                "有说服力，善于表达"
            ],
            careerFit: "ENTP类型的人适合需要创造力、分析能力和挑战的工作。他们擅长解决复杂问题，能够提出创新的解决方案，并且喜欢在动态的环境中工作。",
            suitableCareers: ["企业家", "律师", "科学家", "发明家", "市场营销", "顾问", "记者"],
            relationships: "在人际关系中，ENTP是聪明、有趣的朋友和伴侣。他们喜欢智力挑战和交流，并且会为关系带来刺激和新想法。他们重视独立和自由，并且希望关系能够有深度和变化。",
            growthTips: [
                "学会专注和坚持，避免过于分散精力",
                "在与他人交流时，学会更加耐心和倾听",
                "在做决策时，考虑他人的感受和需求",
                "尝试更加注重细节和实际执行，而不仅仅是提出想法"
            ]
        },
        
        // ESTJ - 总经理型
        ESTJ: {
            coreTraits: [
                "实际务实，注重结果",
                "善于组织和管理",
                "果断高效，注重效率",
                "有责任感，可靠稳定",
                "重视规则和秩序"
            ],
            careerFit: "ESTJ类型的人适合需要组织能力、领导力和实际操作能力的工作。他们擅长管理和执行，能够确保任务按时完成，并且喜欢在结构化的环境中工作。",
            suitableCareers: ["管理者", "企业家", "律师", "警察", "军人", "财务经理", "行政主管"],
            relationships: "在人际关系中，ESTJ是可靠、负责的朋友和伴侣。他们重视传统和稳定，并且会认真履行自己的承诺。他们可能不善于表达情感，但会以实际行动支持他人。",
            growthTips: [
                "学会接受一些灵活性和变化，这可能会带来新的机会",
                "尝试更加耐心地倾听他人的想法，即使与自己不同",
                "在做决策时，考虑他人的感受和需求",
                "学会放松和享受生活，避免过度工作"
            ]
        },
        
        // ESFJ - 执政官型
        ESFJ: {
            coreTraits: [
                "热情友好，善于社交",
                "有责任心，乐于助人",
                "重视和谐，善于合作",
                "注重细节，认真细致",
                "善于照顾他人"
            ],
            careerFit: "ESFJ类型的人适合需要社交能力、关怀和组织能力的工作。他们擅长与他人建立连接，能够创造和谐的工作环境，并且喜欢为他人提供帮助。",
            suitableCareers: ["教师", "护士", "社会工作者", "客户服务", "人力资源", "活动策划", "行政助理"],
            relationships: "在人际关系中，ESFJ是温暖、关怀的朋友和伴侣。他们重视和谐和连接，并且会尽力满足他人的需求。他们善于照顾他人，并且会为维护关系而努力。",
            growthTips: [
                "学会设定个人边界，避免过度付出",
                "尝试表达自己的需求和想法，而不仅仅是关注他人",
                "在必要时学会面对冲突，而不是一味回避",
                "给自己一些时间和空间，关注个人成长"
            ]
        },
        
        // ENFJ - 主人公型
        ENFJ: {
            coreTraits: [
                "热情友好，富有魅力",
                "善于理解和激励他人",
                "理想主义，有远见",
                "有责任感，乐于助人",
                "善于社交，有领导力"
            ],
            careerFit: "ENFJ类型的人适合需要领导力、社交能力和理想主义的工作。他们擅长理解和激励他人，能够创造积极的工作环境，并且喜欢为他人的成长和发展提供支持。",
            suitableCareers: ["教师", "心理咨询师", "管理者", "社会工作者", "公关", "人力资源", "培训师"],
            relationships: "在人际关系中，ENFJ是温暖、有洞察力的朋友和伴侣。他们善于理解他人的情感和需求，并且会为关系带来深度和支持。他们重视成长和连接，并且会鼓励他人追求梦想。",
            growthTips: [
                "学会设定个人边界，避免过度付出",
                "尝试更加关注自己的需求和感受，而不仅仅是他人",
                "在做决策时，考虑实际因素，而不仅仅是情感和理想",
                "给自己时间休息和充电，避免过度消耗"
            ]
        },
        
        // ENTJ - 指挥官型
        ENTJ: {
            coreTraits: [
                "果断高效，有领导力",
                "善于战略规划和组织",
                "自信坚定，目标明确",
                "喜欢挑战，追求卓越",
                "理性客观，善于分析"
            ],
            careerFit: "ENTJ类型的人适合需要领导力、战略思维和决策能力的工作。他们擅长制定和执行计划，能够带领团队实现目标，并且喜欢在具有挑战性的环境中工作。",
            suitableCareers: ["企业家", "管理者", "律师", "政治家", "工程师", "财务总监", "战略顾问"],
            relationships: "在人际关系中，ENTJ是自信、有远见的朋友和伴侣。他们重视效率和成长，并且会为关系带来方向和动力。他们可能不善于表达情感，但会以实际行动支持他人。",
            growthTips: [
                "学会更加耐心地倾听他人的想法，即使与自己不同",
                "在做决策时，考虑他人的感受和需求",
                "尝试更加直接地表达自己的情感，而不仅仅是理性",
                "学会放松和享受生活，避免过度工作"
            ]
        }
    };
    
    // 返回对应MBTI类型的分析，如果没有找到则返回默认分析
    return insights[mbtiType] || {
        coreTraits: ["你是一个独特的个体，拥有自己的优点和特点"],
        careerFit: "根据你的兴趣和能力，有很多职业适合你探索。",
        suitableCareers: ["探索你的兴趣和激情所在"],
        relationships: "在人际关系中，保持真实的自己，并且尊重他人的独特性。",
        growthTips: ["持续学习和成长，不断探索新的可能性"]
    };
}

// 创建结果部分
function createResultSection(mbtiType) {
    const main = document.querySelector('main');
    
    // 创建结果部分
    const resultSection = document.createElement('section');
    resultSection.id = 'result';
    resultSection.classList.add('hidden');
    
    const typeInfo = mbtiTypes[mbtiType];
    
    // 生成详细的性格分析
    const personalityInsights = generatePersonalityInsights(mbtiType);
    
    resultSection.innerHTML = `
        <div class="card">
            <div class="result-container">
                <h2>你的MBTI性格类型是</h2>
                <div class="personality-type">${mbtiType}</div>
                <h3>${typeInfo.name}</h3>
                <p class="personality-description">${typeInfo.description}</p>
                
                <div class="dimensions">
                    <div class="dimension">
                        <div class="dimension-name">能量来源</div>
                        <div class="dimension-result">${dimensionsCountAll.E > dimensionsCountAll.I ? '外向 (E)' : '内向 (I)'}</div>
                        <div class="dimension-scores">
                            <span class="score">E: ${dimensionsCountAll.E}</span>
                            <span class="score-separator">|</span>
                            <span class="score">I: ${dimensionsCountAll.I}</span>
                        </div>
                    </div>
                    <div class="dimension">
                        <div class="dimension-name">信息获取</div>
                        <div class="dimension-result">${dimensionsCountAll.S > dimensionsCountAll.N ? '感觉 (S)' : '直觉 (N)'}</div>
                        <div class="dimension-scores">
                            <span class="score">S: ${dimensionsCountAll.S}</span>
                            <span class="score-separator">|</span>
                            <span class="score">N: ${dimensionsCountAll.N}</span>
                        </div>
                    </div>
                    <div class="dimension">
                        <div class="dimension-name">决策方式</div>
                        <div class="dimension-result">${dimensionsCountAll.T > dimensionsCountAll.F ? '思考 (T)' : '情感 (F)'}</div>
                        <div class="dimension-scores">
                            <span class="score">T: ${dimensionsCountAll.T}</span>
                            <span class="score-separator">|</span>
                            <span class="score">F: ${dimensionsCountAll.F}</span>
                        </div>
                    </div>
                    <div class="dimension">
                        <div class="dimension-name">生活方式</div>
                        <div class="dimension-result">${dimensionsCountAll.J > dimensionsCountAll.P ? '判断 (J)' : '感知 (P)'}</div>
                        <div class="dimension-scores">
                            <span class="score">J: ${dimensionsCountAll.J}</span>
                            <span class="score-separator">|</span>
                            <span class="score">P: ${dimensionsCountAll.P}</span>
                        </div>
                    </div>
                </div>
                
                <!-- 详细性格分析部分 -->
                <div class="personality-insights">
                    <h3>详细性格分析</h3>
                    
                    <div class="insight-section">
                        <h4>核心性格特点</h4>
                        <ul class="insight-list">
                            ${personalityInsights.coreTraits.map(trait => `<li>${trait}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="insight-section">
                        <h4>职业适合度</h4>
                        <p>${personalityInsights.careerFit}</p>
                        <div class="career-examples">
                            <strong>适合的职业：</strong>${personalityInsights.suitableCareers.join('、')}
                        </div>
                    </div>
                    
                    <div class="insight-section">
                        <h4>人际关系</h4>
                        <p>${personalityInsights.relationships}</p>
                    </div>
                    
                    <div class="insight-section">
                        <h4>个人成长建议</h4>
                        <ul class="insight-list">
                            ${personalityInsights.growthTips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <button id="share-result" class="btn-secondary">分享给好友</button>
                <button id="restart-test" class="btn-primary">重新测试</button>
            </div>
        </div>
    `;
    
    main.appendChild(resultSection);
    
    // 添加重新测试按钮事件
    document.getElementById('restart-test').addEventListener('click', restartTest);
    
    // 添加分享按钮事件
    document.getElementById('share-result').addEventListener('click', shareResult);


}

// 分享结果
function shareResult() {
    // 获取当前MBTI类型
    const mbtiType = calculateMBTIType();
    const typeInfo = mbtiTypes[mbtiType];
    
    // 构建分享文本
    const shareText = `我刚刚完成了MBTI性格测试，结果是${mbtiType} - ${typeInfo.name}！快来一起测试看看你的性格类型吧！`;
    
    // 构建分享链接（使用当前页面URL）
    const shareUrl = window.location.href;
    
    // 检查浏览器是否支持原生分享API
    if (navigator.share) {
        navigator.share({
            title: 'MBTI性格测试结果',
            text: shareText,
            url: shareUrl
        })
        .then(() => {
            console.log('分享成功');
        })
        .catch((error) => {
            console.log('分享失败', error);
            fallbackShare(shareText, shareUrl);
        });
    } else {
        // 如果不支持原生分享API，使用降级方案
        fallbackShare(shareText, shareUrl);
    }
}

// 降级分享方案
function fallbackShare(text, url) {
    // 创建一个临时的文本区域用于复制文本
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text + '\n' + url;
    tempTextArea.style.position = 'fixed';
    tempTextArea.style.left = '-999999px';
    tempTextArea.style.top = '-999999px';
    document.body.appendChild(tempTextArea);
    tempTextArea.focus();
    tempTextArea.select();
    
    try {
        // 尝试复制文本
        document.execCommand('copy');
        alert('分享内容已复制到剪贴板，请粘贴发送给好友！');
    } catch (err) {
        console.error('复制失败', err);
        alert('分享失败，请手动复制以下内容：\n' + text + '\n' + url);
    }
    
    // 移除临时文本区域
    document.body.removeChild(tempTextArea);
}

// 重新测试
function restartTest() {
    // 重置变量
    currentQuestionIndex = 0;
    answers = {};
    dimensionsCountAll = emptyScores();
    
    // 清除保存的进度
    localStorage.removeItem(STORAGE_KEY);
    
    // 移除结果部分
    const resultSection = document.getElementById('result');
    if (resultSection) {
        resultSection.remove();
    }
    
    // 显示介绍部分
    loadingSection.classList.remove('active');
    loadingSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    introSection.classList.add('active');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);