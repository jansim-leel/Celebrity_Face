const questionBanks = {
    "10s": [
        "눈이 마주치면 피하거나, 반대로 빤히 쳐다보나요?",
        "SNS 스토리나 게시물에 유독 반응이 빠르고 댓글을 자주 다나요?",
        "사소한 장난을 치거나 나만 아는 별명으로 부르나요?",
        "내가 있는 곳 근처에 우연인 척 자주 나타나나요?",
        "시험 기간이나 휴일에도 '심심하다'며 먼저 연락을 하나요?",
        "나에게만 간식이나 소소한 물건을 챙겨준 적이 있나요?",
        "단둘이 게임을 하거나, 전화 통화를 길게 한 적이 있나요?",
        "다른 친구와 있을 때보다 나랑 있을 때 더 텐션이 높거나 부끄러워하나요?",
        "내가 좋아하는 아이돌, 유튜버 등에 관심을 보이며 말을 거나요?",
        " '너 같은 친구 있으면 좋겠다'는 식의 뉘앙스를 풍기나요?",
        "내 프사가 바뀌면 바로 언급하거나 물어보나요?",
        "학원이나 방과 후에 같이 가자고 기다린 적이 있나요?",
        "내가 아플 때 진심으로 걱정하며 DM이나 연락을 하나요?",
        "자신이 좋아하는 노래나 영상을 나에게만 공유하나요?",
        "나랑 같은 팀이나 조가 되고 싶다는 말을 한 적이 있나요?",
        "졸업이나 종강 후에도 계속 연락하고 싶다는 말을 하나요?",
        "내 주변 친구들에게 나의 평소 모습을 물어본 적이 있나요?",
        "사람 많은 곳에서 나를 지켜주거나 챙겨주는 행동을 하나요?",
        "나의 사소한 습관이나 특징을 따라하기도 하나요?",
        "질투하는 듯한 반응을 보인 적이 있나요?"
    ],
    "20s": [
        "늦은 밤이나 새벽에 개인적인 연락을 주고받나요?",
        "자신의 일상 사진(오늘 먹은 음식, 풍경 등)을 먼저 보내주나요?",
        " '단둘이' 술이나 커피를 마시자는 제안을 자연스럽게 하나요?",
        "내가 예뻐 보이거나 멋져 보이는 날을 바로 알아채고 칭찬하나요?",
        "나의 이상형이나 과거 연애 스타일에 대해 궁금해하며 물어보나요?",
        "술자리나 모임에서 항상 내 옆자리나 근처에 앉으려 하나요?",
        " '뭐해?'라는 연락이 특별한 용건 없이도 자주 오나요?",
        "나의 취미나 관심사를 본인도 같이 해보고 싶어 하나요?",
        "헤어질 때 '집에 도착하면 연락해'라며 걱정해 주나요?",
        "대화 중에 은근슬쩍 가벼운 스킨십(손 크기 비교, 어깨 툭 등)이 있나요?",
        "내가 추천한 영화나 전시회를 같이 보러 가자고 하나요?",
        "바쁜 와중에도 답장 속도가 일관되게 빠른가요?",
        "나의 SNS 게시물에 좋아요를 가장 먼저 누르거나 댓글을 다나요?",
        "자신의 친한 친구들에게 나를 소개하거나 언급한 적이 있나요?",
        "나의 사소한 변화(향수, 액세서리 등)를 금방 알아차리나요?",
        "둘이서 찍은 사진을 개인 소장하거나 공유하고 싶어 하나요?",
        "나에게만 유독 관대하거나 장난을 많이 치나요?",
        "내가 좋아하는 취향의 장소를 미리 알아보고 같이 가자고 하나요?",
        "미래의 특정 시점에 함께 무언가를 하자는 약속을 하나요?",
        "대화가 끊기지 않게 질문을 계속 이어가려고 노력하나요?"
    ],
    "30s": [
        "바쁜 일상 중에도 답장이 끊기지 않고 성의 있게 오나요?",
        "자신의 미래 계획이나 인생 가치관에 대해 진지하게 이야기하나요?",
        "내가 예전에 무심코 했던 작은 말들을 기억하고 챙겨주나요?",
        "본인의 평소 생활 반경(단골집, 친한 친구 등)에 나를 노출시키나요?",
        "피곤한 상황에서도 나를 만나기 위해 기꺼이 시간을 내나요?",
        " '언제 한번 보자'가 아니라, 구체적인 날짜와 장소를 먼저 제안하나요?",
        "나의 커리어나 고민에 대해 단순한 위로 이상의 실질적인 응원을 해주나요?",
        "말투나 태도에서 나를 '존중받아야 할 한 사람'으로 대하는 게 느껴지나요?",
        "자신의 약점이나 깊은 속마음을 나에게는 솔직하게 털어놓나요?",
        " '우리'라는 단어를 써서 미래의 활동을 이야기한 적이 있나요?",
        "갑작스러운 선물보다는 나에게 정말 필요한 것을 고민해서 주나요?",
        "나의 가족이나 주변 사람들에 대해 조심스럽게 관심을 보이나요?",
        "대화 중에 나의 눈을 피하지 않고 집중해서 들어주나요?",
        "자신의 일과를 보고하듯 자연스럽게 공유하나요?",
        "내가 아프거나 힘들 때 실질적인 도움을 주려고 노력하나요?",
        "함께 있을 때 휴대폰을 거의 보지 않고 나에게 집중하나요?",
        "본인의 경제적 상황이나 현실적인 부분들을 솔직히 말하나요?",
        "나의 취향을 존중하며 본인의 스타일을 조금씩 맞추려 하나요?",
        "갈등이 생겼을 때 회피하지 않고 성숙하게 대화로 풀려 하나요?",
        "나를 만나는 것을 단순한 즐거움 이상의 가치로 여기는 것 같나요?"
    ],
    "40s": [
        "화려한 데이트보다 나랑 대화하는 것 자체를 즐거워하는 게 느껴지나요?",
        "나의 건강이나 컨디션을 세심하게 살피고 걱정해 주나요?",
        "서로의 독립적인 생활을 존중하면서도 항상 연결되어 있다는 느낌을 주나요?",
        "갑작스러운 변화보다 꾸준하고 일관된 태도로 나를 대하나요?",
        "내가 힘들 때 묵묵히 내 편이 되어주고 든든한 버팀목이 되어주나요?",
        "본인의 가족이나 소중한 사람들에 대한 이야기를 자연스럽게 들려주나요?",
        "나의 사소한 취향(좋아하는 차, 음악 등)을 기억하고 배려해 주나요?",
        "대화의 주제가 가벼운 농담을 넘어 삶의 깊은 통찰로 이어지나요?",
        "함께 있을 때 억지로 무언가를 하지 않아도 마음이 편안한가요?",
        " '고맙다', '고생했다'는 식의 따뜻한 감정 표현을 자주 하나요?",
        "나의 삶의 방식이나 가치관을 있는 그대로 인정해 주나요?",
        "본인의 바쁜 일정 속에서도 나의 존재를 항상 우선순위에 두나요?",
        "특별한 날이 아니더라도 정성 어린 손편지나 메시지를 주나요?",
        "우리의 관계가 장기적으로 지속되기를 바라는 마음을 내비치나요?",
        "나의 작은 성취를 본인의 일처럼 진심으로 기뻐해 주나요?",
        "함께 여행을 가거나 새로운 취미를 시작하자는 제안을 하나요?",
        "말하기 어려운 고민도 나에게는 편안하게 털어놓나요?",
        "나를 대할 때 배려심 깊은 행동들이 몸에 배어 있나요?",
        "자신의 공간이나 삶의 중요한 부분에 나를 기꺼이 들여놓나요?",
        "단순한 호감을 넘어 깊은 신뢰 관계를 형성하려 노력하나요?"
    ],
    "50s+": [
        "비슷한 취미(산책, 여행, 운동 등)를 함께하며 시간을 보내고 싶어 하나요?",
        "매일의 안부를 묻는 것이 습관처럼 자연스럽고 다정한가요?",
        "서로의 자녀나 가족 문제를 이야기하며 조언을 구하거나 공감하나요?",
        "맛있는 음식이나 좋은 곳을 보면 내 생각을 먼저 하나요?",
        "나의 아픈 곳이나 건강 상태를 본인의 일처럼 신경 써주나요?",
        "대화할 때 나의 의견을 끝까지 경청하고 존중해 주는 태도를 보이나요?",
        " '남은 인생을 함께 즐겁게 보내고 싶다'는 뉘앙스를 전달하나요?",
        "특별한 날이 아니어도 서로의 일상을 공유하는 것에 행복을 느끼나요?",
        "나를 대할 때 긴장감보다는 깊은 신뢰와 편안함이 느껴지나요?",
        "먼 곳으로의 여행이나 새로운 배움을 함께 하자고 제안하나요?",
        "서로의 삶을 응원하며 긍정적인 에너지를 주고받나요?",
        "소소한 일상의 기쁨을 나랑 함께 나눌 때 가장 행복해 보이나요?",
        "나의 존재 자체가 본인에게 큰 힘이 된다고 말해주나요?",
        "말하지 않아도 서로의 마음을 이해하는 듯한 눈빛을 보내나요?",
        "앞으로의 삶에서 서로가 서로에게 든든한 동반자가 되길 원하나요?",
        "함께 늙어가는 과정에 대해 따뜻하고 희망적으로 이야기하나요?",
        "나의 사소한 도움에도 진심으로 감사하며 보답하려 하나요?",
        "자연 속에서의 여유나 조용한 시간을 나랑 공유하고 싶어 하나요?",
        "서로의 상처나 과거를 보듬어주는 성숙한 태도를 보이나요?",
        "지금 이 순간, 함께 있는 시간의 소중함을 자주 표현하나요?"
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
    currentQuestions = questionBanks[selectionData.age] || questionBanks["20s"];

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

// 픽셀 아트 엔진 (초정밀 1px 단위 렌더링)
function generateMiniMe(gender, age, level, isTarget) {
    const colors = getAgePalette(age, gender, isTarget);
    const mood = getSceneMood(level);
    const facing = isTarget ? mood.targetTurn : mood.myTurn;
    const flip = facing < 0 ? 'scaleX(-1)' : 'scaleX(1)';
    
    // 싸이월드/바람의나라 스타일: 1px 외곽선 + 3단 명암 + 정교한 눈코입
    // viewBox를 40x60으로 설정하여 1단위가 실제 1픽셀처럼 보이게 함
    return `
    <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" style="transform: ${flip}; width: 100%; height: 100%;">
        <!-- 그림자 -->
        <ellipse cx="20" cy="56" rx="10" ry="2" fill="rgba(0,0,0,0.1)"/>
        
        <g class="mini-character">
            <!-- 하체 (바지/치마) -->
            <rect x="14" y="42" width="12" height="12" fill="${colors.bottom}"/>
            <rect x="13" y="42" width="1" height="11" fill="${colors.outline}"/>
            <rect x="26" y="42" width="1" height="11" fill="${colors.outline}"/>
            <rect x="14" y="53" width="12" height="1" fill="${colors.outline}"/>
            <!-- 다리 구분선 -->
            <rect x="19" y="46" width="2" height="8" fill="${colors.outline}" opacity="0.3"/>

            <!-- 상체 (옷) -->
            <rect x="12" y="30" width="16" height="13" fill="${colors.top}"/>
            <rect x="12" y="30" width="16" height="2" fill="white" opacity="0.2"/> <!-- 하이라이트 -->
            <rect x="11" y="31" width="1" height="12" fill="${colors.outline}"/>
            <rect x="28" y="31" width="1" height="12" fill="${colors.outline}"/>
            <rect x="12" y="42" width="16" height="1" fill="${colors.outline}"/>
            
            <!-- 팔 -->
            <rect x="8" y="31" width="3" height="10" fill="${colors.skin}"/>
            <rect x="7" y="31" width="1" height="10" fill="${colors.outline}"/>
            <rect x="29" y="31" width="3" height="10" fill="${colors.skin}"/>
            <rect x="32" y="31" width="1" height="10" fill="${colors.outline}"/>

            <!-- 머리 (얼굴) -->
            <rect x="12" y="10" width="16" height="20" fill="${colors.skin}"/>
            <!-- 얼굴 굴곡/명암 -->
            <rect x="12" y="26" width="16" height="4" fill="black" opacity="0.05"/>
            <!-- 외곽선 -->
            <rect x="11" y="12" width="1" height="18" fill="${colors.outline}"/>
            <rect x="28" y="12" width="1" height="18" fill="${colors.outline}"/>
            <rect x="12" y="29" width="16" height="1" fill="${colors.outline}"/>
            
            <!-- 정교한 눈 (싸이월드 스타일) -->
            <g class="eyes">
                <rect x="16" y="19" width="2" height="3" fill="${colors.outline}"/>
                <rect x="16" y="19" width="1" height="1" fill="white" opacity="0.8"/> <!-- 눈동자 광택 -->
                <rect x="22" y="19" width="2" height="3" fill="${colors.outline}"/>
                <rect x="22" y="19" width="1" height="1" fill="white" opacity="0.8"/>
            </g>
            
            <!-- 코와 입 -->
            <rect x="19" y="23" width="2" height="1" fill="${colors.outline}" opacity="0.2"/>
            <rect x="18" y="26" width="4" height="1" fill="${colors.outline}" opacity="0.5"/>

            <!-- 머리카락 (스타일별 차별화) -->
            <g class="hair">
                <rect x="10" y="8" width="20" height="8" fill="${colors.hair}"/>
                <rect x="11" y="7" width="18" height="1" fill="${colors.hair}"/>
                <rect x="13" y="6" width="14" height="1" fill="${colors.hair}"/>
                <!-- 머릿결 디테일 -->
                <rect x="12" y="8" width="16" height="1" fill="white" opacity="0.1"/>
                ${gender === 'female' ? `
                    <rect x="10" y="16" width="3" height="18" fill="${colors.hair}"/>
                    <rect x="27" y="16" width="3" height="18" fill="${colors.hair}"/>
                    <rect x="9" y="16" width="1" height="17" fill="${colors.outline}"/>
                    <rect x="30" y="16" width="1" height="17" fill="${colors.outline}"/>
                ` : `
                    <rect x="10" y="12" width="2" height="4" fill="${colors.hair}"/>
                    <rect x="28" y="12" width="2" height="4" fill="${colors.hair}"/>
                `}
                <!-- 상단 외곽선 -->
                <rect x="13" y="5" width="14" height="1" fill="${colors.outline}"/>
            </g>

            <!-- 홍조 (호감도에 따라) -->
            ${level >= 4 ? `
                <rect x="13" y="22" width="2" height="1" fill="#ffb6c1" opacity="0.8"/>
                <rect x="25" y="22" width="2" height="1" fill="#ffb6c1" opacity="0.8"/>
            ` : ''}
        </g>
    </svg>`;
}

function getAgePalette(age, gender, isTarget) {
    const palettes = {
        "10s": { hair: "#3a2a24", top: "#a5d8ff", bottom: "#4c6ef5", skin: "#ffe3d5", outline: "#2b1d18" },
        "20s": { hair: "#4d3a31", top: "#63e6be", bottom: "#5c7cfa", skin: "#fff0e6", outline: "#1f1512" },
        "30s": { hair: "#2b1d18", top: "#ffadad", bottom: "#495057", skin: "#fff5f0", outline: "#1a110e" },
        "40s": { hair: "#1a110e", top: "#ffd8a8", bottom: "#343a40", skin: "#fff9f5", outline: "#000000" },
        "50s+": { hair: "#495057", top: "#d0ebff", bottom: "#212529", skin: "#ffffff", outline: "#000000" }
    };
    const p = palettes[age] || palettes["20s"];
    // 타겟일 경우 색상을 약간 다르게 (구분용)
    if (isTarget) {
        return { ...p, top: gender === 'female' ? '#ffc9c9' : '#a5d8ff' };
    }
    return p;
}

function getSceneMood(level) {
    const moods = [
        { face: "shy", pose: "apart", distance: 100, myTurn: -1, targetTurn: 1, note: "아직은 서로 멀리서 지켜보는 단계예요.", icon: "cloud" },
        { face: "calm", pose: "wave", distance: 80, myTurn: 1, targetTurn: -1, note: "가벼운 인사를 나눌 수 있는 지인 사이!", icon: "spark" },
        { face: "calm", pose: "chat", distance: 60, myTurn: 1, targetTurn: -1, note: "조금씩 대화가 이어지는 편안한 사이예요.", icon: "chat" },
        { face: "smile", pose: "chat", distance: 40, myTurn: 1, targetTurn: -1, note: "웃음이 끊이지 않는 즐거운 대화가 오가네요.", icon: "chat" },
        { face: "shySmile", pose: "bashful", distance: 25, myTurn: 1, targetTurn: -1, note: "서로를 의식하기 시작한 미묘한 설렘!", icon: "spark" },
        { face: "happy", pose: "gift", distance: 15, myTurn: 1, targetTurn: -1, note: "진심을 담은 작은 신호들이 오가고 있어요.", icon: "heart" },
        { face: "happy", pose: "hand", distance: 5, myTurn: 1, targetTurn: -1, note: "누가 봐도 확실한 호감, 곧 좋은 소식이 들리겠네요!", icon: "hearts" },
        { face: "love", pose: "couple", distance: 0, myTurn: 1, targetTurn: -1, note: "이미 서로의 마음속에 깊이 자리 잡은 두 사람.", icon: "hearts" }
    ];
    return moods[level];
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
    
    // 미니룸 스타일 배경 생성
    scene.innerHTML = `
        <div class="mini-room" style="background: #f0e6d6; border: 4px solid #c9b9a5; position: relative; height: 180px; overflow: hidden; image-rendering: pixelated;">
            <div class="room-floor" style="position: absolute; bottom: 0; width: 100%; height: 60px; background: #e2d3bc; border-top: 2px solid #c9b9a5;"></div>
            <div class="room-window" style="position: absolute; top: 20px; right: 30px; width: 40px; height: 50px; background: #fff; border: 2px solid #c9b9a5; box-shadow: inset 0 0 10px rgba(0,0,0,0.05);"></div>
            
            <div class="minimi-stage" style="position: absolute; bottom: 10px; width: 100%; display: flex; justify-content: center; align-items: flex-end;">
                <div class="minimi-wrap" style="transform: translateX(-${mood.distance}px)">
                    ${generateMiniMe(selectionData.myGender, selectionData.age, level, false)}
                </div>
                <div class="minimi-wrap" style="transform: translateX(${mood.distance}px)">
                    ${generateMiniMe(selectionData.targetGender, selectionData.age, level, true)}
                </div>
            </div>
        </div>
        <p class="scene-note" style="margin-top: 15px; font-size: 0.9rem; color: #666;">${mood.note}</p>
    `;

    showPage('result-page');
}

restartBtn.addEventListener('click', () => {
    currentPage = 0; userAnswers = [];
    selectionData = { myGender: null, targetGender: null, age: '20s' };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    showPage('landing-page');
});


restartBtn.addEventListener('click', () => {
    currentPage = 0; userAnswers = [];
    selectionData = { myGender: null, targetGender: null, age: '20s' };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    showPage('landing-page');
});
