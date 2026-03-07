const quizData = [
    // --- 1. 单项选择题 ---
    { type: 'single', q: '韩国的假名是？', options: ['かんこく', 'アメリカ', 'きょうと', 'ぺきん'], answer: [0], explanation: '韩国的假名是「かんこく」。' },
    { type: 'single', q: '表示“法国人”的正确拼写是？', options: ['フランス人', 'フランスじん', 'ふらんす', 'ふらんす人'], answer: [0], explanation: '直接在国名「フランス」后加上「人（じん）」。' },
    { type: 'single', q: '京都的著名地标“千本鸟居”位于哪里？', options: ['伏见稻荷大社', '清水寺', '金阁寺', '龙安寺'], answer: [0], explanation: '伏见稻荷大社以“千本鸟居”闻名。' },
    { type: 'single', q: '以红叶环绕的“清水舞台”闻名的寺庙是？', options: ['清水寺', '伏见稻荷大社', '金阁寺', '龙安寺'], answer: [0], explanation: '清水寺的清水舞台是著名的赏枫圣地。' },
    { type: 'single', q: '代表枯山水庭院之美的是？', options: ['龙安寺', '清水寺', '花见小路', '伏见稻荷大社'], answer: [0], explanation: '金阁寺和龙安寺都是枯山水庭院的代表。' },
    { type: 'single', q: '想要体验传统艺伎文化，应该去京都的哪里？', options: ['花见小路', '清水寺', '金阁寺', '伏见稻荷大社'], answer: [0], explanation: '花见小路是著名的传统艺伎文化街区。' },
    { type: 'single', q: '著名的温泉之乡，可以坐海盗船远眺富士山的是？', options: ['箱根', '银座', '涩谷', '新宿'], answer: [0], explanation: '箱根（はこね）是关东地区高频的短途旅行目的地。' },
    { type: 'single', q: '被誉为东京的“第五大道”，有着四丁目钟楼的是？', options: ['银座', '箱根', '涩谷', '新宿'], answer: [0], explanation: '银座（ぎんざ）是世界级高端购物街区。' },
    { type: 'single', q: '东京年轻人流行文化发源地，有忠犬八公雕像的是？', options: ['涩谷', '银座', '新宿', '箱根'], answer: [0], explanation: '涩谷（しぶや）以十字路口和忠犬八公雕像闻名。' },
    { type: 'single', q: '拥有核心CBD，东京都厅大厦和歌舞伎町的区域是？', options: ['新宿', '涩谷', '银座', '箱根'], answer: [0], explanation: '新宿（しんじゅく）是东京的核心 CBD。' },
    { type: 'single', q: '副词“たしか”在语境中通常表示？', options: ['凭记忆的不确定推断(确实/大概)', '笔直、直接', '一起', '非常'], answer: [0], explanation: '「たしか」用于凭记忆进行不确定的推断。' },
    { type: 'single', q: '“一緒に（いっしょに）”通常和哪个助词连用？', options: ['と', 'へ', 'を', 'に'], answer: [0], explanation: '常与助词「と」连用，如「友達と一緒に行きます」。' },
    { type: 'single', q: '下班离开办公室时，必须对还没下班的同事说的客套话是？', options: ['お先に失礼します', 'お疲れ様でした', '大変ですね', 'こんにちは'], answer: [0], explanation: '「お先に失礼します」意为“我先告辞了”，是职场基本礼仪。' },
    { type: 'single', q: '听到同事抱怨昨晚加班到半夜，你应该回答？', options: ['大変ですね', 'お先に失礼します', 'お疲れ様でした', 'ありがとうございます'], answer: [0], explanation: '「大変ですね」用于表达同情与理解（真够呛）。' },
    { type: 'single', q: '“步行前往”的绝对正确表达是？', options: ['歩いて', '歩きで', '歩くで', '歩いてで'], answer: [0], explanation: '「歩いて」本身已是动词「歩く」的形态变化，绝对不能在后面加「で」。' },

    // --- 2. 判断题 ---
    { type: 'boolean', q: '判断："歩きで" 是正确的“步行去”的表达方式。', options: ['✅ 正确', '❌ 错误'], answer: [1], explanation: '错误。这是致命陷阱词。绝对不能在后面加「で」，正确是「歩いて」。' },
    { type: 'boolean', q: '判断："まっすぐ" (笔直地) 这个词的发音中包含促音停顿。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。发音中包含促音停顿。' },
    { type: 'boolean', q: '判断："佐藤" 的读音中包含长音。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。「とう」是长音。' },
    { type: 'boolean', q: '判断："お疲れ様でした" 只能用于领导对下属的慰问。', options: ['✅ 正确', '❌ 错误'], answer: [1], explanation: '错误。这是日本职场万能交际语，同事之间也可互相使用。' },
    { type: 'boolean', q: '判断：银座周末通常会实行“步行者天国”（车辆禁行）。', options: ['✅ 正确', '❌ 错误'], answer: [0], explanation: '正确。周末银座常有步行者天国。' },

    // --- 3. 填空题 ---
    { type: 'text', q: '填空：美国的片假名是【____】。', answer: ['アメリカ'], explanation: '美国的日文片假名。' },
    { type: 'text', q: '填空：Tokyo的核心CBD位于【____】（填中文地名）。', answer: ['新宿'], explanation: '拥有东京都厅大厦和歌舞伎町。' },
    { type: 'text', q: '填空：韩国的日文念法是【____】（填四个平假名）。', answer: ['かんこく'], explanation: '韩国（かんこく）。' },
    { type: 'text', q: '填空：北海道的平假名全拼是【____】。', answer: ['ほっかいどう'], explanation: '注意其中的促音和长音。' },
    { type: 'text', q: '填空：步行去，日语是【____】（填四字平假名）。', answer: ['あるいて'], explanation: '也就是「歩いて」。' },

    // --- 4. 多选题 ---
    { type: 'multiple', q: '【多选题】以下哪些地标属于“京都”？', options: ['伏见稻荷大社', '清水寺', '花见小路', '箱根温泉'], answer: [0, 1, 2], explanation: '箱根温泉位于关东地区，不在京都（关西）。' },
    { type: 'multiple', q: '【多选题】属于东京核心商圈及文化区的是？', options: ['银座', '涩谷', '新宿', '京都'], answer: [0, 1, 2], explanation: '京都是独立的古都城市。' },
    { type: 'multiple', q: '【多选题】组成日本高频职场寒暄语的有哪些？', options: ['お疲れ様でした', 'お先に失礼します', '大変ですね', 'こんにちは'], answer: [0, 1, 2], explanation: 'こんにちは 是一般的日常问候，前三者是职场高频惯用语。' },
    { type: 'multiple', q: '【多选题】关于“步行去”，下列哪些说法是绝对真理？', options: ['绝对不能加で助词', '正确形态是「歩いて」', '是动词「歩く」的て形变形', '属于利用交通工具的助词'], answer: [0, 1, 2], explanation: '因为已经是动词变形，所以不能用交通工具助词「で」。' },
    { type: 'multiple', q: '【多选题】哪些是属于外来语的国家地区名？', options: ['アメリカ', 'フランス', '韓国', '北京'], answer: [0, 1], explanation: '美国和法国是用片假名书写的外来语，韩国和北京是用汉字词发音。' }
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
            messageElem.innerText = "💯 太完美了，你对Part 2的城市文化和职场用语都了如指掌！";
        } else if (score > total * 0.8) {
            messageElem.innerText = "🌟 非常棒！基础打得非常扎实，继续保持。";
        } else if (score > total * 0.6) {
            messageElem.innerText = "💪 处于及格线以上，但还要留意易错的外来语哦。";
        } else {
            messageElem.innerText = "📚 需要加强复习！请重点重温地名和职场寒暄词。";
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
