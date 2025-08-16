// MBTI测试题目和逻辑

// 定义测试题目（20个题目，覆盖4个维度，每个题目4个选项）
const questions = [
    {
        id: 1,
        text: "当你要外出一整天，你会？",
        dimension: "JP", // 判断(J) vs 感知(P)
        options: [
            { id: 'J', label: "计划你要做什么和在什么时候做", description: "喜欢有明确安排" },
            { id: 'J', label: "提前准备好所有需要的物品", description: "避免临时手忙脚乱" },
            { id: 'P', label: "说去就去，不做太多计划", description: "享受随机性" },
            { id: 'P', label: "根据当天情况灵活决定", description: "喜欢保持弹性" }
        ]
    },
    {
        id: 2,
        text: "在社交场合中，你通常？",
        dimension: "EI", // 外向(E) vs 内向(I)
        options: [
            { id: 'E', label: "主动与陌生人交谈", description: "享受结识新朋友" },
            { id: 'E', label: "成为谈话的中心", description: "喜欢被关注" },
            { id: 'I', label: "与少数人进行深入交谈", description: "重视深度交流" },
            { id: 'I', label: "观察周围的人和事", description: "喜欢安静地了解" }
        ]
    },
    {
        id: 3,
        text: "当你学习新事物时，你更关注？",
        dimension: "SN", // 感觉(S) vs 直觉(N)
        options: [
            { id: 'S', label: "具体的事实和数据", description: "相信实证" },
            { id: 'S', label: "实际应用和操作方法", description: "重视实用性" },
            { id: 'N', label: "理论框架和概念模型", description: "需要整体理解" },
            { id: 'N', label: "潜在的可能性和联系", description: "喜欢探索未知" }
        ]
    },
    {
        id: 4,
        text: "做决策时，你更依赖？",
        dimension: "TF", // 思考(T) vs 情感(F)
        options: [
            { id: 'T', label: "逻辑分析和客观标准", description: "重视公平公正" },
            { id: 'T', label: "利弊权衡和实际结果", description: "注重实效" },
            { id: 'F', label: "个人价值观和情感", description: "重视内心感受" },
            { id: 'F', label: "对他人的影响和感受", description: "关心他人福祉" }
        ]
    },
    {
        id: 5,
        text: "你认为自己是一个？",
        dimension: "JP",
        options: [
            { id: 'J', label: "较为有条理的人", description: "喜欢秩序和结构" },
            { id: 'J', label: "做事有始有终的人", description: "不喜欢半途而废" },
            { id: 'P', label: "较为随兴所至的人", description: "享受自由" },
            { id: 'P', label: "灵活应变的人", description: "能适应变化" }
        ]
    },
    {
        id: 6,
        text: "当你有空闲时间时，你更可能？",
        dimension: "EI",
        options: [
            { id: 'E', label: "参加社交活动", description: "喜欢和朋友在一起" },
            { id: 'E', label: "外出探索新地方", description: "享受外界刺激" },
            { id: 'I', label: "阅读或独自思考", description: "从内省中获取能量" },
            { id: 'I', label: "进行安静的爱好", description: "喜欢平静环境" }
        ]
    },
    {
        id: 7,
        text: "假如你成为一名老师，你更愿意教授？",
        dimension: "SN",
        options: [
            { id: 'S', label: "以事实为主的课程", description: "重视基础知识" },
            { id: 'S', label: "注重实践的课程", description: "强调动手能力" },
            { id: 'N', label: "涉及理论的课程", description: "喜欢抽象思考" },
            { id: 'N', label: "激发创造力的课程", description: "鼓励创新思维" }
        ]
    },
    {
        id: 8,
        text: "在解决问题时，你更倾向于？",
        dimension: "TF",
        options: [
            { id: 'T', label: "理性分析问题根源", description: "寻求客观解决方案" },
            { id: 'T', label: "直接指出问题所在", description: "不回避矛盾" },
            { id: 'F', label: "考虑他人感受", description: "避免伤害他人" },
            { id: 'F', label: "寻求大家都能接受的方式", description: "重视和谐" }
        ]
    },
    {
        id: 9,
        text: "你通常？",
        dimension: "EI",
        options: [
            { id: 'E', label: "与人容易混熟", description: "社交能力强" },
            { id: 'E', label: "喜欢与人分享经历", description: "外向开朗" },
            { id: 'I', label: "比较沉静或矜持", description: "慢热型" },
            { id: 'I', label: "需要时间了解他人", description: "谨慎交友" }
        ]
    },
    {
        id: 10,
        text: "当你阅读时，你更关注？",
        dimension: "SN",
        options: [
            { id: 'S', label: "具体的细节和事实", description: "喜欢详实描述" },
            { id: 'S', label: "实际案例和应用", description: "重视实用性" },
            { id: 'N', label: "作者的观点和思想", description: "喜欢深度思考" },
            { id: 'N', label: "隐含的意义和启示", description: "重视启发" }
        ]
    },
    {
        id: 11,
        text: "对于工作环境，你更喜欢？",
        dimension: "JP",
        options: [
            { id: 'J', label: "结构清晰，规则明确", description: "喜欢有序环境" },
            { id: 'J', label: "任务明确，目标具体", description: "需要清晰方向" },
            { id: 'P', label: "灵活自由，较少约束", description: "喜欢自主安排" },
            { id: 'P', label: "动态变化，充满挑战", description: "享受变化" }
        ]
    },
    {
        id: 12,
        text: "在评价他人时，你更看重？",
        dimension: "TF",
        options: [
            { id: 'T', label: "能力和成就", description: "重视实际表现" },
            { id: 'T', label: "理性和公正", description: "欣赏客观态度" },
            { id: 'F', label: "善良和同理心", description: "重视内在品质" },
            { id: 'F', label: "真诚和可靠性", description: "信任重要" }
        ]
    },
    {
        id: 13,
        text: "在团队讨论中，你更倾向于？",
        dimension: "EI",
        options: [
            { id: 'E', label: "积极发言，分享想法", description: "喜欢参与讨论" },
            { id: 'E', label: "带动讨论氛围", description: "善于活跃气氛" },
            { id: 'I', label: "认真倾听，深思熟虑", description: "先理解再表达" },
            { id: 'I', label: "会后单独交流", description: "更喜欢小范围" }
        ]
    },
    {
        id: 14,
        text: "当你需要做决定时，你更依赖？",
        dimension: "SN",
        options: [
            { id: 'S', label: "具体的事实和数据", description: "相信眼见为实" },
            { id: 'S', label: "实际经验", description: "依赖过往方法" },
            { id: 'N', label: "直觉和灵感", description: "相信第六感" },
            { id: 'N', label: "长远愿景", description: "关注未来" }
        ]
    },
    {
        id: 15,
        text: "面对变化，你的反应通常是？",
        dimension: "JP",
        options: [
            { id: 'J', label: "尽快制定新计划", description: "需要控制感" },
            { id: 'J', label: "评估变化的影响", description: "有准备应对" },
            { id: 'P', label: "接受变化并适应", description: "视变化为机遇" },
            { id: 'P', label: "灵活调整行动", description: "不抗拒改变" }
        ]
    },
    {
        id: 16,
        text: "在团队合作时，你更可能？",
        dimension: "TF",
        options: [
            { id: 'T', label: "提出客观建议", description: "希望团队改进" },
            { id: 'T', label: "坚持正确观点", description: "重视原则" },
            { id: 'F', label: "支持和鼓励队友", description: "希望每个人都参与" },
            { id: 'F', label: "调解冲突，维护和谐", description: "重视凝聚力" }
        ]
    },
    {
        id: 17,
        text: "在社交活动后，你通常感觉？",
        dimension: "EI",
        options: [
            { id: 'E', label: "精力充沛，满足", description: "从社交中获取能量" },
            { id: 'E', label: "期待下一次聚会", description: "享受互动" },
            { id: 'I', label: "需要时间独处恢复", description: "社交消耗能量" },
            { id: 'I', label: "感到有些疲惫", description: "更喜欢安静" }
        ]
    },
    {
        id: 18,
        text: "在学习新技能时，你更倾向于？",
        dimension: "SN",
        options: [
            { id: 'S', label: "一步一步地练习", description: "重视基础" },
            { id: 'S', label: "模仿成功的例子", description: "学习验证方法" },
            { id: 'N', label: "理解背后的原理", description: "需要整体把握" },
            { id: 'N', label: "尝试创新的应用", description: "探索可能性" }
        ]
    },
    {
        id: 19,
        text: "对于未来规划，你更倾向于？",
        dimension: "JP",
        options: [
            { id: 'J', label: "设定长期目标和计划", description: "喜欢明确方向" },
            { id: 'J', label: "提前准备可能的挑战", description: "未雨绸缪" },
            { id: 'P', label: "保持开放，灵活应对", description: "不喜欢过度规划" },
            { id: 'P', label: "随遇而安，享受当下", description: "重视过程" }
        ]
    },
    {
        id: 20,
        text: "对于日常任务，你通常？",
        dimension: "TF",
        options: [
            { id: 'T', label: "按照优先级和效率处理", description: "重视结果" },
            { id: 'T', label: "分析最优解决方案", description: "追求完美" },
            { id: 'F', label: "考虑任务对他人的影响", description: "关心他人" },
            { id: 'F', label: "根据个人兴趣灵活安排", description: "重视内心感受" }
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

// 全局变量
let currentQuestionIndex = 0;
let answers = {};
let dimensionsCountAllAll = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};
let userGenderDef = 'female'; // 默认性别为女生

// 保存进度到localStorage
function saveProgress() {
    const progress = {
        currentQuestionIndex: currentQuestionIndex,
        answers: answers,
        dimensionsCountAll: dimensionsCountAllAll
    };
    localStorage.setItem('mbtiTestProgress', JSON.stringify(progress));
}

// 从localStorage加载进度
function loadProgress() {
    const savedProgress = localStorage.getItem('mbtiTestProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestionIndex = progress.currentQuestionIndex;
        answers = progress.answers;
        dimensionsCountAll = progress.dimensionsCountAll;
        return true;
    }
    return false;
}

// DOM元素
const introSection = document.getElementById('intro');
const testSection = document.getElementById('test');
const loadingSection = document.getElementById('loading');
const startTestBtn = document.getElementById('start-test');
const continueTestBtn = document.getElementById('continue-test');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const navigationButtons = document.getElementById('navigation-buttons');
const prevQuestionBtn = document.getElementById('prev-question');
const nextQuestionBtn = document.getElementById('next-question');

// 初始化
function init() {
    // 设置总题目数
    totalQuestionsEl.textContent = questions.length;
    
    // 添加事件监听器
    startTestBtn.addEventListener('click', startTest);
    
    // 检查是否有保存的进度
    if (loadProgress() && currentQuestionIndex > 0) {
        // 如果有保存的进度，显示继续测试按钮
        if (continueTestBtn) {
            continueTestBtn.classList.remove('hidden');
            continueTestBtn.addEventListener('click', continueTest);
        }
    }
    
    // 性别选择事件
    document.querySelectorAll('input[name="gender"]').forEach(radio => {
        radio.addEventListener('change', function() {
            userGenderDef = this.value;
        });
    });
}

// 开始测试
function startTest() {
    // 重置进度
    currentQuestionIndex = 0;
    answers = {};
    dimensionsCountAll = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 获取用户选择的性别
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    userGenderDef = selectedGender;
    
    introSection.classList.remove('active');
    introSection.classList.add('hidden');
    testSection.classList.remove('hidden');
    testSection.classList.add('active');
    
    // 显示第一个问题
    showQuestion(questions[currentQuestionIndex]);
    
}

// 继续测试
function continueTest() {
    introSection.classList.remove('active');
    introSection.classList.add('hidden');
    testSection.classList.remove('hidden');
    testSection.classList.add('active');
    
    // 显示当前问题
    showQuestion(questions[currentQuestionIndex]);
}

// 显示问题
function showQuestion(question) {
    // 更新问题文本
    questionText.textContent = question.text;
    
    // 清空选项容器
    optionsContainer.innerHTML = '';
    
    // 创建选项
    question.options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.dataset.optionId = option.id;
        optionEl.dataset.dimension = question.dimension;
        
        optionEl.innerHTML = `
            <div class="option-label">${option.label}</div>
            <div class="option-description">${option.description}</div>
        `;
        
        // 添加点击事件
        optionEl.addEventListener('click', () => selectOption(optionEl));
        
        optionsContainer.appendChild(optionEl);
    });
    
    // 更新进度
    updateProgress();
    
    // 显示/隐藏上一题按钮
    if (prevQuestionBtn) {
        if (currentQuestionIndex > 0) {
            prevQuestionBtn.classList.remove('hidden');
        } else {
            prevQuestionBtn.classList.add('hidden');
        }
        
        // 移除旧的事件监听器，避免重复添加
        prevQuestionBtn.removeEventListener('click', prevQuestion);
        prevQuestionBtn.addEventListener('click', prevQuestion);
    }
    
    // 添加下一题按钮的事件监听
    if (nextQuestionBtn) {
        // 移除旧的事件监听器，避免重复添加
        nextQuestionBtn.removeEventListener('click', nextQuestion);
        nextQuestionBtn.addEventListener('click', nextQuestion);
    }
    
    // 如果有保存的答案，恢复选中状态
    const questionId = question.id;
    if (answers[questionId] && answers[questionId].optionId) {
        const savedOptionId = answers[questionId].optionId;
        const savedDimension = answers[questionId].dimension;
        const savedOptionIndex = answers[questionId].optionIndex;
        
        // 首先移除所有选项的选中状态
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // 获取所有选项元素
        const optionElements = document.querySelectorAll('.option');
        
        // 优先使用保存的选项索引来恢复选中状态
        if (savedOptionIndex !== undefined && savedOptionIndex >= 0 && savedOptionIndex < optionElements.length) {
            optionElements[savedOptionIndex].classList.add('selected');
        } else {
            // 如果没有保存索引或索引无效，则使用optionId和dimension进行匹配
            let foundMatch = false;
            document.querySelectorAll('.option').forEach(option => {
                if (option.dataset.optionId === savedOptionId && 
                    option.dataset.dimension === savedDimension && 
                    !foundMatch) {
                    option.classList.add('selected');
                    foundMatch = true;
                }
            });
        }
    } else {
        // 如果没有保存的答案，确保所有选项都不被选中
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
    }
}

// 选择选项
function selectOption(selectedOption) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // 添加选中状态
    selectedOption.classList.add('selected');
    
    // 保存答案
    const questionId = questions[currentQuestionIndex].id;
    const optionId = selectedOption.dataset.optionId;
    const dimension = selectedOption.dataset.dimension;
    
    // 获取选项在当前问题中的索引，用于准确恢复选中状态
    const optionIndex = Array.from(document.querySelectorAll('.option')).indexOf(selectedOption);
    
    // 如果之前已经回答过这个问题，先减去之前的维度计数
    if (answers[questionId]) {
        const previousOptionId = answers[questionId].optionId;
        dimensionsCountAll[previousOptionId]--;
    }
    
    answers[questionId] = {
        optionId: optionId,
        dimension: dimension,
        optionIndex: optionIndex // 保存用户实际选择的选项索引
    };
    
    // 更新维度计数
    dimensionsCountAll[optionId]++;
    
    // 保存进度
    saveProgress();
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        // 还有下一题
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // 测试完成，显示结果
        // 清除保存的进度，因为测试已完成
        localStorage.removeItem('mbtiTestProgress');
        showResults();
    }
}

// 更新进度条
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
}

// 显示结果
function showResults() {
    // 隐藏测试部分，显示加载部分
    testSection.classList.remove('active');
    testSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    loadingSection.classList.add('active');
    
    // 模拟加载延迟
    setTimeout(() => {
        // 计算MBTI类型
        const mbtiType = calculateMBTIType();
        
        // 创建结果部分
        createResultSection(mbtiType);
        
        // 隐藏加载部分，显示结果部分
        loadingSection.classList.remove('active');
        loadingSection.classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('result').classList.add('active');
    }, 1500);
}

// 返回上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
    }
}

// 计算MBTI类型（考虑性别差异）
function calculateMBTIType() {
    let type = '';
    
    // 计算每个维度的偏好
    type += dimensionsCountAll.E > dimensionsCountAll.I ? 'E' : 'I';
    type += dimensionsCountAll.S > dimensionsCountAll.N ? 'S' : 'N';
    
    // 在TF维度上考虑性别差异
    // 研究表明，女性更偏向情感型(F)，男性更偏向思维型(T)
    let tScore = dimensionsCountAll.T;
    let fScore = dimensionsCountAll.F;
    
    if (userGenderDef === 'female') {
        // 对于女生，略微调整TF维度的计算，使其更容易倾向于F
        fScore += 0.3; // 情感维度加0.3分
    } else if (userGenderDef === 'male') {  
        // 对于男生，略微调整TF维度的计算，使其更容易倾向于T
        tScore += 0.3; // 思维维度加0.3分
    }
    
    type += tScore > fScore ? 'T' : 'F';
    type += dimensionsCountAll.J > dimensionsCountAll.P ? 'J' : 'P';
    
    return type;
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
    dimensionsCountAll = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 清除保存的进度
    localStorage.removeItem('mbtiTestProgress');
    
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