// Backsound auto-play saat pertama kali mengklik layar
document.addEventListener('click', function() {
    var bgm = document.getElementById('bgm');
    if(bgm.paused) bgm.play();
}, { once: true });

// Stage Switcher
function nextStage(stageNum) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById('stage' + stageNum).classList.add('active');

    if(stageNum === 6) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

// Stage 0: PIN Lock
const SECRET_PIN = "131106"; // Ganti PIN di sini
let enteredPin = "";

function pressPin(num) {
    if (enteredPin.length < 6) {
        enteredPin += num;
        updatePinDisplay();
    }
    if (enteredPin.length === 6) {
        setTimeout(checkPin, 150);
    }
}

function updatePinDisplay() {
    const display = document.getElementById('pinDisplay');
    display.innerText = enteredPin.padEnd(4, '•');
}

function clearPin() {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDisplay();
}

function checkPin() {
    const errorEl = document.getElementById('pinError');
    if (enteredPin === SECRET_PIN) {
        errorEl.innerText = "";
        nextStage(1);
    } else {
        errorEl.innerText = "PIN salah, coba lagi ya 🤍";
        const display = document.getElementById('pinDisplay');
        display.classList.add('shake');
        setTimeout(() => {
            display.classList.remove('shake');
            enteredPin = "";
            updatePinDisplay();
        }, 400);
    }
}

// Stage 1: Envelope
function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    setTimeout(() => {
        document.getElementById('btn1').style.display = 'inline-block';
    }, 500);
}

// Stage 3: Photos Stack
function nextPhoto() {
    const stack = document.querySelector('.card-stack');
    const cards = stack.querySelectorAll('.polaroid');
    if (cards.length > 1) {
        const topCard = cards[cards.length - 1];
        topCard.style.transform = 'translateY(-150px) rotate(20deg)';
        topCard.style.opacity = '0';
        setTimeout(() => {
            stack.insertBefore(topCard, cards[0]);
            topCard.style.transform = 'rotate(' + (Math.random() * 8 - 4) + 'deg)';
            topCard.style.opacity = '1';
        }, 400);
    }
}

// Stage 4: Candle Blow
function blowCandle() {
    const flame = document.getElementById('flame');
    if (!flame.classList.contains('off')) {
        flame.classList.add('off');
        document.getElementById('cakeInstruction').innerText = "Yummy! Lilin sudah ditiup! 🎂";
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        document.getElementById('btn4').style.display = 'inline-block';
    }
}

// Stage 5: Bubbles
function popBubble(element, message) {
    element.classList.add('popped');
    document.getElementById('wishBox').innerText = message;
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
}

// Stage 6: Gift Box
function openGift() {
    const giftIcon = document.getElementById('giftIcon');
    giftIcon.className = "fa-solid fa-box-open";
    document.getElementById('finalMessage').style.display = 'block';
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
}

// Generate Random Floating Hearts Background
function createHearts() {
    for(let i=0; i<15; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        document.body.appendChild(heart);
    }
}

createHearts();