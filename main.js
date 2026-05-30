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
    { level: 0, title: "완벽한 타인", desc: "상대방은 당신에 대해 아직 큰 관심이 없어 보여요. 조금 더 시간을 두고 친해질 기회를 만들어보세요.", tip: "조급해하지 마세요. 인연은 생각지도 못한 순간에 찾아온답니다.", color: "#eef2f3" },
    { level: 1, title: "스쳐가는 인연", desc: "서로 얼굴은 알지만 사적인 감정은 거의 없는 상태입니다. 인사를 나누며 천천히 다가가 보세요.", tip: "가벼운 눈인사부터 시작해 보는 건 어떨까요?", color: "#e0eafc" },
    { level: 2, title: "아는 사이", desc: "어색함은 없지만 특별한 호감보다는 '지인' 정도로 생각하고 있을 확률이 높습니다.", tip: "함께 공감할 수 있는 관심사를 찾아보세요.", color: "#cfd9df" },
    { level: 3, title: "편한 친구", desc: "당신을 편한 대화 상대로 느끼고 있습니다. 호감으로 발전할 수 있는 가능성은 열려 있어요!", tip: "편안함 속에 설렘 한 스푼을 더해보세요.", color: "#d299c2" },
    { level: 4, title: "미묘한 기류", desc: "단순한 친구 이상의 감정이 조금씩 싹트고 있네요. 서로 눈치를 보고 있을 수도 있습니다.", tip: "상대방의 작은 신호에 귀를 기울여 보세요.", color: "#a1c4fd" },
    { level: 5, title: "설레는 호감", desc: "상대방은 당신에게 확실히 호감을 느끼고 있습니다. 조만간 기분 좋은 일이 생길지도 몰라요!", tip: "당신의 진심을 보여줄 때가 다가오고 있어요.", color: "#ff9a9e" },
    { level: 6, title: "확실한 그린라이트", desc: "이건 99% 호감입니다! 누가 먼저 고백해도 이상하지 않은 상태네요. 용기를 내보세요.", tip: "더 이상 고민하지 말고 먼저 손을 내밀어 보세요.", color: "#f6d365" },
    { level: 7, title: "이미 내 마음속 연인", desc: "상대방은 이미 당신을 연인처럼 생각하고 있습니다. 사랑이 가득한 앞날을 응원합니다!", tip: "오늘 당장 보고 싶다고 말해보는 건 어떨까요?", color: "#ff0844" }
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
    
    if (selectionData.age === '10s') currentQuestions = questionBanks.teen;
    else if (selectionData.age === '20s') currentQuestions = questionBanks.standard;
    else currentQuestions = questionBanks.mature;

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
    const questionsToShow = currentQuestions.slice(startIndex, startIndex + 5);
    quizContainer.innerHTML = '';
    questionsToShow.forEach((q, i) => {
        const qIndex = startIndex + i;
        const qElem = document.createElement('div');
        qElem.className = 'question-item';
        qElem.innerHTML = `
            <p>${qIndex + 1}. ${q}</p>
            <div class="answer-options">
                ${[0,1,2,3,4].map(s => `
                    <button class="answer-btn ${userAnswers[qIndex] === s ? 'selected' : ''}" onclick="selectAnswer(${qIndex}, ${s})">
                        ${['매우 아님','아님','보통','그렇다','매우 그렇다'][s]}
                    </button>
                `).join('')}
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
    progress.style.width = `${(totalAnswered / currentQuestions.length) * 100}%`;
}

function updateNextBtn() {
    const startIndex = currentPage * 5;
    const allAnswered = userAnswers.slice(startIndex, startIndex + 5).every(a => a !== null);
    nextBtn.disabled = !allAnswered;
    nextBtn.innerText = currentPage === 3 ? '결과 확인하기' : `다음 (${currentPage + 1}/4)`;
}

nextBtn.addEventListener('click', () => {
    if (currentPage < 3) { currentPage++; renderQuiz(); window.scrollTo(0, 0); }
    else processResult();
});

function processResult() {
    showPage('loading-page');
    setTimeout(calculateAndShowResult, 5000);
}

function getAgePalette(age, gender, isTarget) {
    const base = {
        skin: "#f5c7a6",
        outline: "#4a3027",
        cheek: "#ef8f8f",
        shoe: "#3d302f"
    };

    const palettes = {
        "10s": {
            hair: gender === "female" ? "#34221f" : "#2d2523",
            top: isTarget ? "#8dc6ff" : "#f28da8",
            bottom: gender === "female" ? "#4b6fb3" : "#30436f",
            accent: "#fff3a6"
        },
        "20s": {
            hair: gender === "female" ? "#5b3528" : "#3d2a24",
            top: isTarget ? "#67b7a5" : "#f08f73",
            bottom: gender === "female" ? "#6f5aa8" : "#435f8a",
            accent: "#ffe1ad"
        },
        "30s": {
            hair: gender === "female" ? "#45312b" : "#322823",
            top: isTarget ? "#6d8fb7" : "#d48791",
            bottom: "#35445f",
            accent: "#f6ead7"
        },
        "40s": {
            hair: gender === "female" ? "#3b302d" : "#2d2927",
            top: isTarget ? "#809672" : "#b47868",
            bottom: "#3e3d55",
            accent: "#eadbc8"
        },
        "50s+": {
            hair: gender === "female" ? "#b8b1a8" : "#aaa39b",
            top: isTarget ? "#7895a4" : "#b9878e",
            bottom: "#4e5061",
            accent: "#f2e6d2"
        }
    };

    return { ...base, ...palettes[age] };
}

function getSceneMood(level) {
    const moods = [
        { face: "shy", pose: "apart", distance: 82, myTurn: -1, targetTurn: 1, note: "두 사람은 아직 서로 다른 곳을 보며 조심스럽게 거리를 두고 있어요.", icon: "cloud" },
        { face: "calm", pose: "wave", distance: 68, myTurn: 1, targetTurn: -1, note: "가볍게 인사할 수 있는 사이처럼, 작은 눈인사가 먼저 보이는 장면이에요.", icon: "spark" },
        { face: "calm", pose: "chat", distance: 56, myTurn: 1, targetTurn: -1, note: "어색함은 줄었지만 아직은 편안한 지인처럼 나란히 서 있어요.", icon: "chat" },
        { face: "smile", pose: "chat", distance: 42, myTurn: 1, targetTurn: -1, note: "둘 다 편하게 웃으며 대화하는 친구 같은 분위기로 가까워졌어요.", icon: "chat" },
        { face: "shySmile", pose: "bashful", distance: 30, myTurn: 1, targetTurn: -1, note: "서로를 의식하며 볼이 살짝 붉어진, 미묘한 설렘이 흐르는 모습이에요.", icon: "spark" },
        { face: "happy", pose: "gift", distance: 18, myTurn: 1, targetTurn: -1, note: "한쪽이 작은 마음을 건네고, 다른 한쪽은 설레는 표정으로 받아들이는 장면이에요.", icon: "heart" },
        { face: "happy", pose: "hand", distance: 7, myTurn: 1, targetTurn: -1, note: "두 사람이 거의 맞닿아 서서 손을 내미는, 확실한 그린라이트 장면이에요.", icon: "hearts" },
        { face: "love", pose: "couple", distance: 0, myTurn: 1, targetTurn: -1, note: "이미 연인처럼 가까이 붙어 하트를 띄우는, 따뜻한 커플 미니미 모습이에요.", icon: "hearts" }
    ];

    return moods[level];
}

function pixelIcon(type) {
    const icons = {
        cloud: `
            <rect x="16" y="24" width="28" height="8" fill="#ffffff" opacity=".75"/>
            <rect x="24" y="18" width="18" height="8" fill="#ffffff" opacity=".75"/>
            <rect x="122" y="34" width="24" height="8" fill="#ffffff" opacity=".65"/>
            <rect x="132" y="28" width="14" height="8" fill="#ffffff" opacity=".65"/>`,
        spark: `
            <rect x="34" y="28" width="4" height="12" fill="#ffe681"/>
            <rect x="30" y="32" width="12" height="4" fill="#ffe681"/>
            <rect x="128" y="24" width="4" height="10" fill="#fff1a8"/>
            <rect x="125" y="27" width="10" height="4" fill="#fff1a8"/>`,
        chat: `
            <rect x="72" y="22" width="26" height="14" fill="#fffaf0"/>
            <rect x="78" y="36" width="6" height="4" fill="#fffaf0"/>
            <rect x="78" y="28" width="4" height="3" fill="#d7bfa7"/>
            <rect x="86" y="28" width="4" height="3" fill="#d7bfa7"/>`,
        heart: `
            <rect x="80" y="24" width="8" height="8" fill="#ff6f91"/>
            <rect x="92" y="24" width="8" height="8" fill="#ff6f91"/>
            <rect x="76" y="32" width="28" height="8" fill="#ff6f91"/>
            <rect x="80" y="40" width="20" height="8" fill="#ff6f91"/>
            <rect x="88" y="48" width="8" height="8" fill="#ff6f91"/>`,
        hearts: `
            <rect x="74" y="18" width="6" height="6" fill="#ff6f91"/>
            <rect x="84" y="18" width="6" height="6" fill="#ff6f91"/>
            <rect x="70" y="24" width="24" height="6" fill="#ff6f91"/>
            <rect x="76" y="30" width="12" height="6" fill="#ff6f91"/>
            <rect x="100" y="30" width="5" height="5" fill="#f7a7bc"/>
            <rect x="108" y="30" width="5" height="5" fill="#f7a7bc"/>
            <rect x="97" y="35" width="19" height="5" fill="#f7a7bc"/>
            <rect x="102" y="40" width="9" height="5" fill="#f7a7bc"/>`
    };

    return icons[type] || "";
}

function generatePixelPerson(gender, age, level, isTarget) {
    const colors = getAgePalette(age, gender, isTarget);
    const mood = getSceneMood(level);
    const face = mood.face;
    const feminine = gender === "female";
    const older = age === "50s+" || age === "40s";
    const teen = age === "10s";
    const facing = isTarget ? mood.targetTurn : mood.myTurn;
    const flip = facing < 0 ? ` transform="translate(48 0) scale(-1 1)"` : "";
    const hairSide = feminine ? `
        <rect x="8" y="18" width="5" height="18" fill="${colors.hair}"/>
        <rect x="35" y="18" width="5" height="18" fill="${colors.hair}"/>
        <rect x="10" y="34" width="4" height="10" fill="${colors.hair}"/>
        <rect x="34" y="34" width="4" height="10" fill="${colors.hair}"/>` : `
        <rect x="11" y="14" width="6" height="6" fill="${colors.hair}"/>
        <rect x="31" y="14" width="5" height="6" fill="${colors.hair}"/>`;
    const hairTop = older ? `
        <rect x="14" y="9" width="20" height="5" fill="#d1cbc3"/>
        <rect x="10" y="14" width="28" height="8" fill="${colors.hair}"/>` : `
        <rect x="13" y="8" width="22" height="6" fill="${colors.hair}"/>
        <rect x="10" y="13" width="28" height="9" fill="${colors.hair}"/>
        <rect x="9" y="19" width="7" height="6" fill="${colors.hair}"/>`;

    const mouth = {
        shy: `<rect x="21" y="31" width="6" height="2" fill="${colors.outline}"/>`,
        calm: `<rect x="20" y="31" width="8" height="2" fill="${colors.outline}"/>`,
        smile: `<rect x="18" y="30" width="3" height="2" fill="${colors.outline}"/><rect x="21" y="32" width="8" height="2" fill="${colors.outline}"/><rect x="29" y="30" width="3" height="2" fill="${colors.outline}"/>`,
        shySmile: `<rect x="19" y="31" width="3" height="2" fill="${colors.outline}"/><rect x="22" y="33" width="6" height="2" fill="${colors.outline}"/><rect x="28" y="31" width="3" height="2" fill="${colors.outline}"/>`,
        happy: `<rect x="18" y="30" width="4" height="2" fill="${colors.outline}"/><rect x="22" y="32" width="8" height="2" fill="${colors.outline}"/><rect x="30" y="30" width="4" height="2" fill="${colors.outline}"/>`,
        love: `<rect x="19" y="31" width="4" height="3" fill="#d94f68"/><rect x="26" y="31" width="4" height="3" fill="#d94f68"/>`
    }[face];

    const blush = level >= 4 ? `
        <rect x="12" y="29" width="5" height="3" fill="${colors.cheek}" opacity=".72"/>
        <rect x="31" y="29" width="5" height="3" fill="${colors.cheek}" opacity=".72"/>` : "";
    const skirt = feminine && age !== "30s" && age !== "40s" ? `
        <rect x="13" y="47" width="22" height="6" fill="${colors.bottom}"/>
        <rect x="11" y="53" width="26" height="5" fill="${colors.bottom}"/>` : `
        <rect x="14" y="47" width="20" height="6" fill="${colors.bottom}"/>`;
    const legs = feminine && age !== "30s" && age !== "40s" ? `
        <rect x="16" y="58" width="5" height="12" fill="${colors.skin}"/>
        <rect x="27" y="58" width="5" height="12" fill="${colors.skin}"/>` : `
        <rect x="15" y="53" width="7" height="17" fill="${colors.bottom}"/>
        <rect x="26" y="53" width="7" height="17" fill="${colors.bottom}"/>`;
    const outfitDetail = teen ? `
        <rect x="13" y="42" width="22" height="3" fill="${colors.accent}"/>
        <rect x="9" y="47" width="4" height="8" fill="#8d6e63"/>` : `
        <rect x="22" y="39" width="4" height="12" fill="${colors.accent}"/>`;

    let arms = `
        <rect x="8" y="40" width="5" height="18" fill="${colors.skin}"/>
        <rect x="35" y="40" width="5" height="18" fill="${colors.skin}"/>`;
    if (mood.pose === "wave" && isTarget) {
        arms = `<rect x="8" y="40" width="5" height="18" fill="${colors.skin}"/><rect x="35" y="34" width="5" height="16" fill="${colors.skin}"/><rect x="38" y="31" width="5" height="5" fill="${colors.skin}"/>`;
    } else if (mood.pose === "gift" && !isTarget) {
        arms = `<rect x="8" y="41" width="5" height="16" fill="${colors.skin}"/><rect x="34" y="42" width="8" height="5" fill="${colors.skin}"/><rect x="39" y="39" width="6" height="6" fill="#ff6f91"/>`;
    } else if (mood.pose === "hand" || mood.pose === "couple") {
        arms = `<rect x="8" y="40" width="5" height="18" fill="${colors.skin}"/><rect x="34" y="43" width="12" height="5" fill="${colors.skin}"/>`;
    }

    return `
    <svg viewBox="0 0 48 76" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" aria-hidden="true">
        <g${flip}>
            <rect x="14" y="10" width="20" height="2" fill="${colors.outline}" opacity=".24"/>
            ${hairTop}
            ${hairSide}
            <rect x="12" y="18" width="24" height="20" fill="${colors.skin}"/>
            <rect x="15" y="21" width="18" height="4" fill="${colors.skin}" opacity=".55"/>
            <rect x="17" y="26" width="4" height="4" fill="${colors.outline}"/>
            <rect x="28" y="26" width="4" height="4" fill="${colors.outline}"/>
            ${mouth}
            ${blush}
            <rect x="13" y="37" width="22" height="13" fill="${colors.top}"/>
            <rect x="11" y="39" width="4" height="10" fill="${colors.top}"/>
            <rect x="33" y="39" width="4" height="10" fill="${colors.top}"/>
            ${outfitDetail}
            ${arms}
            ${skirt}
            ${legs}
            <rect x="13" y="70" width="11" height="4" fill="${colors.shoe}"/>
            <rect x="25" y="70" width="11" height="4" fill="${colors.shoe}"/>
        </g>
    </svg>`;
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
    
    const scene = document.getElementById('result-scene');
    const mood = getSceneMood(level);
    scene.className = `result-scene result-scene-level-${level}`;
    
    scene.innerHTML = `
        <div class="pixel-sky" aria-hidden="true">
            <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                ${pixelIcon(mood.icon)}
                <rect x="0" y="88" width="180" height="32" fill="rgba(255,255,255,.34)"/>
                <rect x="0" y="94" width="180" height="4" fill="rgba(94,72,61,.18)"/>
            </svg>
        </div>
        <div class="minimi-stage">
            <div class="minimi-wrap minimi-me" style="transform: translateX(-${mood.distance}px)">
                <div class="minimi-svg">${generatePixelPerson(selectionData.myGender, selectionData.age, level, false)}</div>
                <div class="minimi-name">나</div>
            </div>
            <div class="minimi-wrap minimi-target" style="transform: translateX(${mood.distance}px)">
                <div class="minimi-svg">${generatePixelPerson(selectionData.targetGender, selectionData.age, level, true)}</div>
                <div class="minimi-name">그 사람</div>
            </div>
        </div>
        <p class="scene-note">${mood.note}</p>
    `;

    showPage('result-page');
}

restartBtn.addEventListener('click', () => {
    currentPage = 0; userAnswers = [];
    selectionData = { myGender: null, targetGender: null, age: '20s' };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    showPage('landing-page');
});
