const questions = [
    "선톡(먼저 연락)이 자주 오나요?",
    "눈이 마주치는 횟수가 평소보다 많은가요?",
    "사소한 변화(머리 스타일, 옷 등)를 금방 알아채나요?",
    "개인적인 고민이나 일상을 공유하나요?",
    "나의 연락에 답장하는 속도가 빠른 편인가요?",
    "나에 대해 궁금해하며 질문을 많이 하나요?",
    "단둘이 만나자고 제안한 적이 있나요?",
    "다른 사람보다 나에게 더 친절하다고 느끼나요?",
    "SNS 게시물에 반응(좋아요, 댓글 등)을 잘 해주나요?",
    "내가 좋아하는 음식이나 취미를 기억하고 있나요?",
    "대화할 때 몸의 방향이 나를 향해 있나요?",
    "별일 없어도 \"뭐해?\"라고 묻는 연락이 오나요?",
    "은근슬쩍 가벼운 스킨십을 시도한 적이 있나요?",
    "약속을 잡을 때 내 일정에 최대한 맞춰주나요?",
    "우연히 마주치는 일이 자주 발생하나요?",
    "나에게 칭찬을 자주 해주는 편인가요?",
    "여러 명이 모인 자리에서 나를 유독 챙겨주나요?",
    "헤어진 뒤에 집에 잘 들어갔는지 확인 연락을 하나요?",
    "자신의 일상 사진을 나에게 보내주나요?",
    "나에게 장난을 치거나 귀엽게 놀리나요?"
];

const results = [
    { level: 0, title: "완벽한 타인", desc: "상대방은 당신에 대해 아직 큰 관심이 없어 보여요. 조금 더 시간을 두고 친해질 기회를 만들어보세요.", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300" },
    { level: 1, title: "스쳐가는 인연", desc: "서로 얼굴은 알지만 사적인 감정은 거의 없는 상태입니다. 인사를 나누며 천천히 다가가 보세요.", img: "https://images.unsplash.com/photo-1516589174184-c685266d430c?auto=format&fit=crop&q=80&w=300" },
    { level: 2, title: "아는 사이", desc: "어색함은 없지만 특별한 호감보다는 '지인' 정도로 생각하고 있을 확률이 높습니다.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=300" },
    { level: 3, title: "편한 친구", desc: "당신을 편한 대화 상대로 느끼고 있습니다. 호감으로 발전할 수 있는 가능성은 열려 있어요!", img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=300" },
    { level: 4, title: "미묘한 기류", desc: "단순한 친구 이상의 감정이 조금씩 싹트고 있네요. 서로 눈치를 보고 있을 수도 있습니다.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300" },
    { level: 5, title: "설레는 호감", desc: "상대방은 당신에게 확실히 호감을 느끼고 있습니다. 조만간 기분 좋은 일이 생길지도 몰라요!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" },
    { level: 6, title: "확실한 그린라이트", desc: "이건 99% 호감입니다! 누가 먼저 고백해도 이상하지 않은 상태네요. 용기를 내보세요.", img: "https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&q=80&w=300" },
    { level: 7, title: "이미 내 마음속 연인", desc: "상대방은 이미 당신을 연인처럼 생각하고 있습니다. 사랑이 가득한 앞날을 응원합니다!", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300" }
];

let currentPage = 0;
let userAnswers = new Array(questions.length).fill(null);
let selectionData = { myGender: null, targetGender: null, age: '20s' };

// Elements
const pages = document.querySelectorAll('.page');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz-container');
const progress = document.getElementById('progress');

// Initialize Option Buttons
document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        document.querySelectorAll(`.option-btn[data-type="${type}"]`).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectionData[type] = btn.getAttribute('data-value');
    });
});

startBtn.addEventListener('click', () => {
    if (!selectionData.myGender || !selectionData.targetGender) {
        alert('성별을 모두 선택해주세요!');
        return;
    }
    selectionData.age = document.getElementById('age-range').value;
    showPage('quiz-page');
    renderQuiz();
});

function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function renderQuiz() {
    const startIndex = currentPage * 5;
    const endIndex = startIndex + 5;
    const currentQuestions = questions.slice(startIndex, endIndex);

    quizContainer.innerHTML = '';
    currentQuestions.forEach((q, i) => {
        const qIndex = startIndex + i;
        const qElem = document.createElement('div');
        qElem.className = 'question-item';
        qElem.innerHTML = `
            <p>${qIndex + 1}. ${q}</p>
            <div class="answer-options">
                <button class="answer-btn ${userAnswers[qIndex] === 0 ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, 0)">매우 아님</button>
                <button class="answer-btn ${userAnswers[qIndex] === 1 ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, 1)">아님</button>
                <button class="answer-btn ${userAnswers[qIndex] === 2 ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, 2)">보통</button>
                <button class="answer-btn ${userAnswers[qIndex] === 3 ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, 3)">그렇다</button>
                <button class="answer-btn ${userAnswers[qIndex] === 4 ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, 4)">매우 그렇다</button>
            </div>
        `;
        quizContainer.appendChild(qElem);
    });

    updateProgress();
    updateNextBtn();
}

window.selectAnswer = (qIndex, score) => {
    userAnswers[qIndex] = score;
    renderQuiz();
};

function updateProgress() {
    const totalAnswered = userAnswers.filter(a => a !== null).length;
    const percent = (totalAnswered / questions.length) * 100;
    progress.style.width = `${percent}%`;
}

function updateNextBtn() {
    const startIndex = currentPage * 5;
    const currentSectionAnswers = userAnswers.slice(startIndex, startIndex + 5);
    const allAnswered = currentSectionAnswers.every(a => a !== null);
    
    nextBtn.disabled = !allAnswered;
    if (currentPage === 3) {
        nextBtn.innerText = '결과 확인하기';
    } else {
        nextBtn.innerText = `다음 (${currentPage + 1}/4)`;
    }
}

nextBtn.addEventListener('click', () => {
    if (currentPage < 3) {
        currentPage++;
        renderQuiz();
        window.scrollTo(0, 0);
    } else {
        processResult();
    }
});

function processResult() {
    showPage('loading-page');
    setTimeout(() => {
        calculateAndShowResult();
    }, 5000);
}

function calculateAndShowResult() {
    const totalScore = userAnswers.reduce((sum, current) => sum + current, 0);
    // Max score is 20 * 4 = 80. Convert to 0-100 scale.
    const normalizedScore = Math.round((totalScore / 80) * 100);
    
    // Determine level (0-7)
    let level = 0;
    if (normalizedScore > 90) level = 7;
    else if (normalizedScore > 77) level = 6;
    else if (normalizedScore > 64) level = 5;
    else if (normalizedScore > 51) level = 4;
    else if (normalizedScore > 38) level = 3;
    else if (normalizedScore > 25) level = 2;
    else if (normalizedScore > 12) level = 1;
    else level = 0;

    const result = results[level];
    
    document.getElementById('result-title').innerText = result.title;
    document.getElementById('result-level').innerText = `Lv. ${level}`;
    document.getElementById('result-desc').innerText = result.desc;
    document.getElementById('result-score').innerText = normalizedScore;
    document.getElementById('result-img').src = result.img;

    showPage('result-page');
}

restartBtn.addEventListener('click', () => {
    currentPage = 0;
    userAnswers = new Array(questions.length).fill(null);
    selectionData = { myGender: null, targetGender: null, age: '20s' };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    showPage('landing-page');
});
