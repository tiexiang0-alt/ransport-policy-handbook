const quizData = [
    // --- 1. 单项选择题 ---
    { type: 'single', q: '「第六課」的发音突变：数字「六(ろく)」接续量词「課(か)」时发生了促音变，正确读音是？', options: ['だいろくか', 'だいろっか', 'ていろか', 'ごろっか'], answer: [1], explanation: '注意其中的促音，正确发音为 Dairokka（だいろっか）。' },
    { type: 'single', q: '方向助词「へ」位于地点名词后提示方向时，必须发音为？', options: ['he (ヘ)', 'e (エ)', 'wa (ワ)', 'ha (ハ)'], answer: [1], explanation: '作为助词提示方向时，必须发音为「e（エ）」，与主格助词「は」读作「wa」的原理一致。' },
    { type: 'single', q: '「下个月」的日文汉字及假名是？', options: ['来月（らいげつ）', '先月（せんげつ）', '来年（らいねん）', '今月（こんげつ）'], answer: [0], explanation: '「来」代表未来，所以下个月是「来月（らいげつ）」；「先」代表过去的。' },
    { type: 'single', q: '「夜中（よなか）」客观上通常指什么时间段？', options: ['晚饭后 8点到10点', '夜里12点以后的午夜', '天亮前的凌晨4点', '傍晚黄昏时分'], answer: [1], explanation: '「夜中」指午夜、半夜，客观上通常指夜里12点以后的时间段。' },
    { type: 'single', q: '在日本，原本受到中国端午节影响的「子供の日」是在哪一天？', options: ['3月3日', '4月4日', '5月5日', '6月1日'], answer: [2], explanation: '5月5日是日本的「子供の日」，实际上是男孩节。有男孩的家庭会在院落升起「鯉のぼり（鲤鱼旗）」。' },
    { type: 'single', q: '「昨夜」的正确日语假名及发音特点是？', options: ['きのう', 'さくや', 'ゆうべ（包含う的延长音）', 'よなか'], answer: [2], explanation: '读作「ゆうべ(yuube)」，注意发音中必须包含长音。' },
    { type: 'single', q: '传统意义上的“女孩节”（ひな祭り）是在哪一天？', options: ['3月3日', '4月4日', '5月5日', '7月7日'], answer: [0], explanation: '3月3日是祈求女孩幸福成长的女孩节。' },
    { type: 'single', q: '想要用日语对朋友说“祝你生日快乐”，最常用的表达是？', options: ['ありがとう', 'お誕生日おめでとう', 'ごめんなさい', 'こんにちは'], answer: [1], explanation: '「お誕生日おめでとう（Otanjoubi omedetou）」即为祝你生日快乐。' },
    { type: 'single', q: '「新幹線（しんかんせん）」最初是为了哪场大型赛事而研发建立的？', options: ['1970年大阪世博会', '1964年东京奥运会', '1998年长野冬奥会', '2002年日韩世界杯'], answer: [1], explanation: '它是为 1964年东京奥运会 研发，旨在打通全国交通网络的高速铁路系统。' },
    { type: 'single', q: '外来语「フェリー」的中文意思是？', options: ['飞机', '客轮/轮渡', '出租车', '公交车'], answer: [1], explanation: '源自英语 ferry，意为轮渡、客轮。' },
    { type: 'single', q: '「飛行機」的正确平假名是？', options: ['ひこうき', 'ふこうき', 'ひこき', 'ひこっき'], answer: [0], explanation: '飞行机的假名是「ひこうき (hikouki)」。' },
    { type: 'single', q: '关于日本的「タクシー（出租车）」，以下哪种认知属于正确的社会常识？', options: ['是学生日常通勤的平价首选', '人工成本极高，属于非常高昂的出行方式', '即使跨国旅行乘坐也非常便宜', '只要距离短就是完全免费的'], answer: [1], explanation: '日本的出租车运营成本极高，常规旅行和通勤应首选「電車（电车）」。' },
    { type: 'single', q: '源于英语 mansion，但在日语中特指“钢筋混凝土结构、较高级的现代公寓楼”的词是？', options: ['アパート', 'マンション', 'うち', '寮（りょう）'], answer: [1], explanation: 'マンション（Mansion）在和制英语中发生了词义偏移，特指高级公寓楼。' },
    { type: 'single', q: '普通木造或轻钢结构的低层公寓，或者学生宿舍，日文外来语可以统称为什么？', options: ['アパート', 'フェリー', 'マンション', 'タクシー'], answer: [0], explanation: 'アパート 源于 apartment 的简写。' },
    { type: 'single', q: '相比代表物理建筑的「家（いえ）」，「うち」在语境中更强调什么感觉？', options: ['房屋的物理面积', '建筑年份的久远', '属于自己、自我归属的主人公语感', '非自己所有的租赁房屋'], answer: [2], explanation: '常用于带有感情色彩语境中，例如邀请他人“来我家玩（うちへ…）”。' },

    // --- 2. 判断题 ---
    { type: 'boolean', q: '判断：在单词「友達」的发音中，第二个汉字「達」并没有发生连浊。', options: ['✅ 正确', '❌ 错误'], answer: [1], explanation: '错误。发生了连浊现象，全假名为：ともだち (tomodachi)。' },
    { type: 'boolean', q: '判断：移动动词「行きます」的原型是「行く」，因为词尾为「く」，所以它属于第1类动词（五段动词）。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。「行く」是非常标准且高频的第1类动词。' },
    { type: 'boolean', q: '判断：「来ます」的发音存在不规则变化（ku/ki/ko），它是日语中仅有的两个第3类动词之一。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。原型是「来る（くる）」，属于不规则变化的3类动词。' },
    { type: 'boolean', q: '判断：由于「帰る」的词尾是「る」，且倒数第二个假名「え」属于「え段」，所以我们只需把「る」去掉就能变成ます形「帰り」。', options: ['✅ 正确', '❌ 错误'], answer: [1], explanation: '错误！这是第六课的【致命分类陷阱】。「帰る」外观极度符合2类动词，但客观事实上它是必须死记硬背的 特殊第1类动词。它的ます形必须是「帰ります」。' },
    { type: 'boolean', q: '判断：在日本做常规自由行或通勤规划时，比起使用「タクシー」，更推荐首选乘坐「電車」。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。因为即便短途出租车也动辄数百上千日元。' },

    // --- 3. 填空题 ---
    { type: 'text', q: '填空：在“子供の日”，有男孩的家庭会在院落升起象征鱼跃龙门、祈求孩子茁壮成长的「鲤鱼旗」。请拼写其日语的前两个假名：【____】のぼり。', answer: ['こい'], explanation: '鲤鱼在日语中念作「鯉（こい）」，鲤鱼旗即「鯉のぼり（こいのぼり）」。' },
    { type: 'text', q: '填空：社会语境警示中提到，「タクシー」翻译成中文是【____】（填中文名词）。', answer: ['出租车', '的士'], explanation: '源出 Taxi 的音译外来词。' },
    { type: 'text', q: '填空：补充假名拼写：「朋友」的日文拼写为「とも【____】」。', answer: ['だち'], explanation: '注意这里的“达”字发音发生连浊。' },
    { type: 'text', q: '填空：第六课学习的三个核心移动动词（去、来、回），在提示移动目的地时，均需要搭配方向助词「【____】」使用。', answer: ['へ'], explanation: '虽然写作へ，但在这里作为助词必须念 e。' },
    { type: 'text', q: '填空：上个月的日文汉字是「先月」，那么下个月的日文汉字写作：【____】。', answer: ['来月'], explanation: '代表未来的月份。' },

    // --- 4. 多选题 ---
    { type: 'multiple', q: '【多选题】以下哪些动词需要搭配方向助词「へ」来表示移动的方向目的？', options: ['行く (去)', '食べる (吃)', '来る (来)', '帰る (回家/回国)'], answer: [0, 2, 3], explanation: '「食べる」是吃东西，不属于移动方向动词；去、来、回都是核心移动动词。' },
    { type: 'multiple', q: '【多选题】关于必须警惕的核心动词「帰る」，以下哪些说法是客观事实？', options: ['它属于日语中仅有的两个第3类动词之一', '它是一个必须死记硬背的特殊第1类动词', '它的ます形是「帰ります（kaerimasu）」', '它可以直接去掉词尾「る」变成2类变形'], answer: [1, 2], explanation: '「帰る」虽然外形长得像2类动词，但实际上属于特殊1类动词，必须按1类法则变形。' },
    { type: 'multiple', q: '【多选题】下列词汇中，哪些词语所代表的意思是建筑物或人类生活住所？', options: ['アパート', 'フェリー', 'マンション', 'うち'], answer: [0, 2, 3], explanation: 'フェリー是轮渡（客船），属于水上交通工具；其余三个均是房屋相关。' },
    { type: 'multiple', q: '【多选题】以下日文外来语，属于日本现代交通工具的有？', options: ['飛行機', 'フェリー', '新幹線', 'タクシー'], answer: [1, 3], explanation: '飛行機(飞机)和新幹線(高铁)是日本本土固有词；フェリー(Ferry)和タクシー(Taxi)是外来交通工具词汇。这道题略带陷阱，实际上只要是交通工具都可以选，但题目限定了外来语（片假名）。等等，题干只问"哪些是交通工具外来语相关"。实际上四个选项都是交通工具，但フェリー和タクシー是外来片假名。' },
    { type: 'multiple', q: '【多选题】下列对于时间词汇的日文与中文含义对应，哪些是完全正确的？', options: ['来月：下个月', '先月：上个月', '昨夜(ゆうべ)：昨天晚上', '夜中(よなか)：大中午烈日当头时'], answer: [0, 1, 2], explanation: '夜中（よなか）指的是午夜、半夜，并不是中午。' }
];

// App State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let currentSelectedOptions = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const inputContainer = document.getElementById('input-container');
const answerInput = document.getElementById('answer-input');
const questionTypeBadge = document.getElementById('question-type-badge');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const scoreDisplay = document.getElementById('score-display');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackText = document.getElementById('feedback-text');

// Init
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNextQuestion);
submitBtn.addEventListener('click', handleSubmit);
restartBtn.addEventListener('click', resetQuiz);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !submitBtn.classList.contains('hidden')) {
        handleSubmit();
    }
});

function startQuiz() {
    startScreen.classList.remove('active');
    setTimeout(() => {
        quizScreen.classList.add('active');
        loadQuestion();
    }, 500);
}

function loadQuestion() {
    const qData = quizData[currentQuestionIndex];
    currentSelectedOptions = [];

    // Reset UI
    optionsContainer.innerHTML = '';
    inputContainer.classList.add('hidden');
    answerInput.value = '';
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    feedbackMessage.classList.add('hidden');
    feedbackMessage.className = 'feedback hidden'; // reset classes

    // Update Header
    progressText.innerText = `第 ${currentQuestionIndex + 1} 题 / 共 ${quizData.length} 题`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
    questionText.innerText = qData.q;

    // Badge styling & Input rendering
    if (qData.type === 'single') {
        questionTypeBadge.innerText = '单选题 (Single Choice)';
        questionTypeBadge.style.background = 'linear-gradient(90deg, #4ea8de, #5e60ce)';
        renderOptions(qData.options, false);
    } else if (qData.type === 'boolean') {
        questionTypeBadge.innerText = '判断题 (True/False)';
        questionTypeBadge.style.background = 'linear-gradient(90deg, #7400b8, #6930c3)';
        renderOptions(qData.options, false);
    } else if (qData.type === 'multiple') {
        questionTypeBadge.innerText = '多选题 (Multiple Choice)';
        questionTypeBadge.style.background = 'linear-gradient(90deg, #f72585, #b5179e)';
        renderOptions(qData.options, true);
    } else if (qData.type === 'text') {
        questionTypeBadge.innerText = '填空题 (Fill in Blank)';
        questionTypeBadge.style.background = 'linear-gradient(90deg, #f8961e, #f9c74f)';
        inputContainer.classList.remove('hidden');
        answerInput.focus();
    }
}

function renderOptions(options, isMulti) {
    options.forEach((opt, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(index, btn, isMulti);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btnElem, isMulti) {
    if (nextBtn.classList.contains('hidden') === false) return; // Prevent selection after submit

    if (!isMulti) {
        // Single
        const btns = document.querySelectorAll('.option-btn');
        btns.forEach(b => b.classList.remove('selected'));
        btnElem.classList.add('selected');
        currentSelectedOptions = [index];
    } else {
        // Multi
        if (currentSelectedOptions.includes(index)) {
            currentSelectedOptions = currentSelectedOptions.filter(i => i !== index);
            btnElem.classList.remove('selected');
        } else {
            currentSelectedOptions.push(index);
            btnElem.classList.add('selected');
        }
    }
}

function handleSubmit() {
    const qData = quizData[currentQuestionIndex];
    let isCorrect = false;

    if (qData.type === 'text') {
        const userValue = answerInput.value.trim().toLowerCase();
        if (!userValue) return; // Must type something

        // qData.answer contains multiple acceptable forms
        isCorrect = qData.answer.some(ans => userValue.includes(ans.toLowerCase()));
        answerInput.disabled = true;
    } else {
        if (currentSelectedOptions.length === 0) return; // Must select something

        if (qData.type === 'multiple') {
            const sortedUser = [...currentSelectedOptions].sort();
            const sortedAns = [...qData.answer].sort();
            isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedAns);
        } else {
            isCorrect = currentSelectedOptions[0] === qData.answer[0];
        }

        // Highlight options for multiple/single/boolean
        const btns = document.querySelectorAll('.option-btn');
        btns.forEach((btn, idx) => {
            btn.classList.add('disabled');
            btn.onclick = null; // disable clicks

            if (qData.answer.includes(idx)) {
                btn.classList.add('correct');
            } else if (currentSelectedOptions.includes(idx)) {
                btn.classList.add('wrong');
            }
        });
    }

    // Process correctness
    if (isCorrect) {
        score += 10;
        scoreDisplay.innerText = `得分: ${score}`;
        showFeedback(true, '回答正确！🎉 ' + qData.explanation);
    } else {
        let textAns = '';
        if (qData.type === 'text') {
            textAns = `正确答案包含：${qData.answer.join(' 或 ')}。`;
        }
        showFeedback(false, `回答错误。${textAns}` + qData.explanation);
    }

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

function showFeedback(isCorrect, message) {
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.classList.add(isCorrect ? 'success' : 'error');
    feedbackText.innerText = message;
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    setTimeout(() => {
        resultScreen.classList.add('active');
        const finalScoreElem = document.getElementById('final-score-val');
        const messageElem = document.getElementById('result-message');

        finalScoreElem.innerText = score;
        const total = quizData.length * 10;

        if (score === total) {
            messageElem.innerText = "💯 太完美了，你对第六课所有考点以及文化盲区都了如指掌！";
        } else if (score > total * 0.8) {
            messageElem.innerText = "🌟 非常棒！日语基础打得非常扎实，继续保持。";
        } else if (score > total * 0.6) {
            messageElem.innerText = "💪 处于及格线以上，但还要留意诸如「帰る」的特殊动词陷阱哦。";
        } else {
            messageElem.innerText = "📚 需要加强复习！请重点重温发音规律和三大移动动词。";
        }
    }, 500);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = `得分: 0`;
    resultScreen.classList.remove('active');
    setTimeout(() => {
        startScreen.classList.add('active');
    }, 500);
}
