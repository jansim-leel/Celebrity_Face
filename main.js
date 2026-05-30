const questionBanks = {
    "teen": [
        "학교나 학원에서 마주치면 먼저 아는 척을 하나요?",
        "급식 시간에 내 주변에 앉으려고 하나요?",
        "쉬는 시간마다 내 자리 근처로 오나요?",
        "수업 시간에 몰래 쳐다보다가 눈이 마주친 적이 있나요?",
        "수행평가나 숙제를 핑계로 연락을 하나요?",
        "체육 시간이나 동아리 활동 때 나를 유독 챙겨주나요?",
        "내 매점 심부름이나 소소한 부탁을 잘 들어주나요?",
        "시험 기간에 같이 공부하자고 하거나 필기를 빌려달라고 하나요?",
        "등하굣길에 우연히 마주치는 일이 잦은가요?",
        "SNS 스토리나 게시물에 칼답이나 반응을 잘 해주나요?",
        "나한테만 간식을 몰래 챙겨준 적이 있나요?",
        "친구들이 우리 둘을 엮을 때 당황하거나 싫어하지 않나요?",
        "내 이름이 들어간 별명을 부르며 장난을 치나요?",
        "학원 끝나고 같이 가자고 기다린 적이 있나요?",
        "내가 아플 때 진심으로 걱정하며 보건실에 가라고 하나요?",
        "내 프사가 바뀌면 바로 언급하거나 물어보나요?",
        "방학 때도 심심하다며 먼저 선톡을 하나요?",
        "자신이 좋아하는 아이돌이나 게임 이야기를 나에게만 공유하나요?",
        "나랑 같은 반이나 팀이 되고 싶다는 말을 한 적이 있나요?",
        "졸업 후에도 계속 연락하고 싶다는 뉘앙스를 풍기나요?"
    ],
    "standard": [
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
    ],
    "mature": [
        "퇴근 후나 주말에도 업무 외적인 연락이 오나요?",
        "회식 자리에서 항상 내 근처에 앉으려고 하나요?",
        "사적인 고민이나 커리어에 대한 진지한 대화를 나누나요?",
        "내가 피곤해 보이면 커피나 간식을 챙겨주나요?",
        "업무 중 실수를 했을 때 유독 나를 감싸주거나 도와주나요?",
        "사석에서 따로 식사나 술 한잔하자고 제안하나요?",
        "나의 사소한 취향(좋아하는 커피, 향기 등)을 기억하나요?",
        "경조사나 특별한 날에 개인적으로 연락을 하나요?",
        "나의 미래 계획이나 가치관에 대해 물어보나요?",
        "다른 동료들에게는 엄격해도 나에게는 부드럽게 대하나요?",
        "출장이나 외부 미팅 때 나랑 같이 가고 싶어 하나요?",
        "사적인 자리에서 자신의 약점을 보여주기도 하나요?",
        "내가 추천한 책이나 영화를 보고 후기를 남기나요?",
        "말투에서 나를 존중하고 아끼는 게 느껴지나요?",
        "연락할 때 이모티콘이나 부드러운 말투를 사용하나요?",
        "나의 퇴근길이나 귀갓길을 걱정해 주나요?",
        "본인의 가족이나 친한 친구 이야기를 들려주나요?",
        "바쁜 와중에도 나의 연락에는 꼭 답장을 해주나요?",
        "같이 있으면 시간이 금방 간다는 말을 한 적이 있나요?",
        "내일 또 보자는 말이 단순히 인사처럼 들리지 않나요?"
    ]
};

const results = [
    { level: 0, title: "완벽한 타인", desc: "상대방은 당신에 대해 아직 큰 관심이 없어 보여요. 조금 더 시간을 두고 친해질 기회를 만들어보세요.", tip: "조급해하지 마세요. 인연은 생각지도 못한 순간에 찾아온답니다.", color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
    { level: 1, title: "스쳐가는 인연", desc: "서로 얼굴은 알지만 사적인 감정은 거의 없는 상태입니다. 인사를 나누며 천천히 다가가 보세요.", tip: "가벼운 눈인사부터 시작해 보는 건 어떨까요?", color: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
    { level: 2, title: "아는 사이", desc: "어색함은 없지만 특별한 호감보다는 '지인' 정도로 생각하고 있을 확률이 높습니다.", tip: "함께 공감할 수 있는 관심사를 찾아보세요.", color: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
    { level: 3, title: "편한 친구", desc: "당신을 편한 대화 상대로 느끼고 있습니다. 호감으로 발전할 수 있는 가능성은 열려 있어요!", tip: "편안함 속에 설렘 한 스푼을 더해보세요.", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { level: 4, title: "미묘한 기류", desc: "단순한 친구 이상의 감정이 조금씩 싹트고 있네요. 서로 눈치를 보고 있을 수도 있습니다.", tip: "상대방의 작은 신호에 귀를 기울여 보세요.", color: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
    { level: 5, title: "설레는 호감", desc: "상대방은 당신에게 확실히 호감을 느끼고 있습니다. 조만간 기분 좋은 일이 생길지도 몰라요!", tip: "당신의 진심을 보여줄 때가 다가오고 있어요.", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { level: 6, title: "확실한 그린라이트", desc: "이건 99% 호감입니다! 누가 먼저 고백해도 이상하지 않은 상태네요. 용기를 내보세요.", tip: "더 이상 고민하지 말고 먼저 손을 내밀어 보세요.", color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
    { level: 7, title: "이미 내 마음속 연인", desc: "상대방은 이미 당신을 연인처럼 생각하고 있습니다. 사랑이 가득한 앞날을 응원합니다!", tip: "오늘 당장 보고 싶다고 말해보는 건 어떨까요?", color: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)" }
];

let currentQuestions = [];
let currentPage = 0;
let userAnswers = [];
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
    
    // Select question bank
    if (selectionData.age === '10s') {
        currentQuestions = questionBanks.teen;
    } else if (selectionData.age === '20s') {
        currentQuestions = questionBanks.standard;
    } else {
        currentQuestions = questionBanks.mature;
    }

    userAnswers = new Array(currentQuestions.length).fill(null);
    currentPage = 0;
    
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
    const questionsToShow = currentQuestions.slice(startIndex, endIndex);

    quizContainer.innerHTML = '';
    questionsToShow.forEach((q, i) => {
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
    const percent = (totalAnswered / currentQuestions.length) * 100;
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
    const normalizedScore = Math.round((totalScore / 80) * 100);
    
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
    document.getElementById('vibe-tip-text').innerText = result.tip;
    
    // Result Scene Setup
    const scene = document.getElementById('result-scene');
    scene.style.background = result.color;

    const mySeed = `my-${selectionData.myGender}-${selectionData.age}`;
    const targetSeed = `target-${selectionData.targetGender}-${selectionData.age}-${level}`;
    
    // Using Lorelei for very cute and expressive characters
    const myAvatarUrl = `https://api.dicebear.com/7.x/lorelei/svg?seed=${mySeed}`;
    const targetAvatarUrl = `https://api.dicebear.com/7.x/lorelei/svg?seed=${targetSeed}`;
    
    const heartIcon = level > 4 ? '❤️' : (level > 2 ? '❓' : '❄️');

    scene.innerHTML = `
        <div class="vibe-badge">Today's Vibe</div>
        <div class="heart-icon-overlay">${heartIcon}</div>
        <div class="pixel-pair">
            <div class="avatar-wrap">
                <img src="${myAvatarUrl}" alt="나">
                <span>나</span>
            </div>
            <div class="avatar-wrap">
                <img src="${targetAvatarUrl}" alt="그 사람">
                <span>그 사람</span>
            </div>
        </div>
    `;

    showPage('result-page');
}

restartBtn.addEventListener('click', () => {
    currentPage = 0;
    userAnswers = [];
    selectionData = { myGender: null, targetGender: null, age: '20s' };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    showPage('landing-page');
});
