const data = window.TERMS_DATA;

const sectionMeta = {
  translations: {
    label: 'Перевод',
    countLabel: 'терминов',
    source: data.translations,
    prompt: (item, reverse = false) => reverse ? item.ru : item.en,
    answer: (item, reverse = false) => reverse ? item.en : item.ru,
  },
  abbreviations: {
    label: 'Аббревиатуры',
    countLabel: 'аббревиатур',
    source: data.abbreviations,
    prompt: (item, reverse = false) => reverse ? item.full : item.abbr,
    answer: (item, reverse = false) => reverse ? item.abbr : item.full,
  },
  definitions: {
    label: 'Определения',
    countLabel: 'определений',
    source: data.definitions,
    prompt: (item, reverse = false) => reverse ? item.definition : item.term,
    answer: (item, reverse = false) => reverse ? item.term : item.definition,
  },
};

const trainings = [
  ['translations', 'choice', 'Выбор перевода', 'Выберите правильный перевод из четырёх вариантов.'],
  ['translations', 'type', 'Русский → English', 'Введите английский термин по русскому переводу.'],
  ['translations', 'match', 'Сопоставление', 'Соедините английские термины с русскими значениями.'],
  ['definitions', 'choice', 'Выбор определения', 'Найдите верное определение для термина.'],
  ['definitions', 'type', 'Узнать термин', 'Введите термин по его определению.'],
  ['definitions', 'match', 'Термин и определение', 'Соберите пары из терминов и определений.'],
  ['abbreviations', 'choice', 'Расшифровка', 'Выберите правильную полную форму аббревиатуры.'],
  ['abbreviations', 'typeFull', 'Аббревиатура → расшифровка', 'Введите полную форму показанной аббревиатуры.'],
  ['abbreviations', 'type', 'Написать аббревиатуру', 'Введите аббревиатуру по расшифровке.'],
  ['abbreviations', 'match', 'Пары аббревиатур', 'Сопоставьте сокращения с полными названиями.'],
].map(([section, mode, title, description], id) => ({ id, section, mode, title, description }));

const countOptions = {
  choice: [5, 10, 15, 20],
  type: [5, 10, 15, 20],
  typeFull: [5, 10, 15, 20],
  match: [4, 6, 8, 10],
};

const els = {
  grid: document.querySelector('#trainingGrid'),
  overallStats: document.querySelector('#overallStats'),
  quizPanel: document.querySelector('#quizPanel'),
  resultPanel: document.querySelector('#resultPanel'),
  quizSection: document.querySelector('#quizSection'),
  quizTitle: document.querySelector('#quizTitle'),
  progressText: document.querySelector('#progressText'),
  progressBar: document.querySelector('#progressBar'),
  questionArea: document.querySelector('#questionArea'),
  checkBtn: document.querySelector('#checkBtn'),
  nextBtn: document.querySelector('#nextBtn'),
  backBtn: document.querySelector('#backBtn'),
  retryBtn: document.querySelector('#retryBtn'),
  homeBtn: document.querySelector('#homeBtn'),
  resetStatsBtn: document.querySelector('#resetStatsBtn'),
  resultTitle: document.querySelector('#resultTitle'),
  resultText: document.querySelector('#resultText'),
  mistakesList: document.querySelector('#mistakesList'),
  pickerPanel: document.querySelector('#pickerPanel'),
  pickerSection: document.querySelector('#pickerSection'),
  pickerTitle: document.querySelector('#pickerTitle'),
  pickerSearch: document.querySelector('#pickerSearch'),
  pickerStatus: document.querySelector('#pickerStatus'),
  pickerList: document.querySelector('#pickerList'),
  closePickerBtn: document.querySelector('#closePickerBtn'),
  selectAllBtn: document.querySelector('#selectAllBtn'),
  clearSelectionBtn: document.querySelector('#clearSelectionBtn'),
  applySelectionBtn: document.querySelector('#applySelectionBtn'),
  cancelSelectionBtn: document.querySelector('#cancelSelectionBtn'),
};

let state = null;
let pickerState = null;
const customSelections = {};
const statsKey = 'englishControlPracticeStats';

function loadStats() {
  const fallback = { completed: 0, correct: 0, total: 0 };
  try {
    return JSON.parse(localStorage.getItem(statsKey)) || fallback;
  } catch {
    return fallback;
  }
}

function saveStats(stats) {
  localStorage.setItem(statsKey, JSON.stringify(stats));
}

function renderOverallStats() {
  const stats = loadStats();
  const accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  els.overallStats.innerHTML = `
    <div class="score-box"><strong>${stats.completed}</strong><span>тренировок</span></div>
    <div class="score-box"><strong>${stats.correct}/${stats.total}</strong><span>верных ответов</span></div>
    <div class="score-box"><strong>${accuracy}%</strong><span>точность</span></div>
  `;
}

function renderCards() {
  els.grid.innerHTML = trainings.map((training) => {
    const meta = sectionMeta[training.section];
    const options = countOptions[training.mode].filter((count) => count <= meta.source.length);
    const customCount = customSelections[training.id]?.length || 0;
    const defaultCount = customCount ? 'custom' : options[1] || options[0];
    return `
      <article class="training-card">
        <div>
          <div class="card-topline">
            <span class="card-tag">${meta.label}</span>
            <span class="card-count">${meta.source.length} ${meta.countLabel}</span>
          </div>
          <h3>${training.title}</h3>
          <p>${training.description}</p>
        </div>
        <div class="card-controls">
          <label for="count-${training.id}">Количество</label>
          <div class="start-row">
            <select id="count-${training.id}" class="count-select" data-count-for="${training.id}" aria-label="Количество слов">
              ${options.map((count) => `<option value="${count}" ${count === defaultCount ? 'selected' : ''}>${count}</option>`).join('')}
              <option value="all">Все ${meta.source.length}</option>
              <option value="custom" ${defaultCount === 'custom' ? 'selected' : ''} ${customCount ? '' : 'disabled'}>Выбранные${customCount ? `: ${customCount}` : ''}</option>
            </select>
            <button class="primary-btn" type="button" data-training="${training.id}">Начать</button>
          </div>
          <button class="ghost-btn pick-btn" type="button" data-pick="${training.id}">
            ${customCount ? `Изменить выбранные (${customCount})` : 'Выбрать конкретные'}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function sample(array, size) {
  return shuffle(array).slice(0, size);
}

function getItemLabel(section, item) {
  if (section === 'translations') return `${item.en} — ${item.ru}`;
  if (section === 'abbreviations') return `${item.abbr} — ${item.full}`;
  return `${item.term} — ${item.definition}`;
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/[ё]/g, 'е')
    .replace(/[“”"'.(),;:!?/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitAnswers(answer) {
  return String(answer)
    .split(/\s*(?:;|,|\/|\bor\b|\band\b)\s*/i)
    .map(normalize)
    .filter(Boolean);
}

function isCloseAnswer(userAnswer, correctAnswer) {
  const user = normalize(userAnswer);
  const correct = normalize(correctAnswer);
  if (!user) return false;
  if (user === correct) return true;
  const parts = splitAnswers(correctAnswer);
  return parts.some((part) => part.length > 2 && (user === part || user.includes(part) || part.includes(user)));
}

function isReverseTypeQuestion() {
  return state.training.mode === 'type';
}

function startTraining(id, requestedCount) {
  const training = trainings.find((item) => item.id === Number(id));
  const meta = sectionMeta[training.section];
  const fallbackCount = training.mode === 'match' ? 6 : 10;
  const selectedIndices = customSelections[training.id] || [];
  let questions;
  if (requestedCount === 'all') {
    questions = shuffle(meta.source);
  } else if (requestedCount === 'custom') {
    questions = shuffle(selectedIndices.map((index) => meta.source[index]).filter(Boolean));
  } else {
    const questionCount = Math.min(Number(requestedCount) || fallbackCount, meta.source.length);
    questions = sample(meta.source, questionCount);
  }
  if (!questions.length) {
    questions = sample(meta.source, Math.min(fallbackCount, meta.source.length));
  }
  state = {
    training,
    questionCount: questions.length,
    requestedCount,
    meta,
    questions,
    index: 0,
    correct: 0,
    mistakes: [],
    checked: false,
    selected: null,
    matchPairs: {},
    selectedLeft: null,
  };
  document.querySelector('.hero-panel').classList.add('hidden');
  els.grid.classList.add('hidden');
  els.resultPanel.classList.add('hidden');
  els.quizPanel.classList.remove('hidden');
  els.quizSection.textContent = meta.label;
  els.quizTitle.textContent = training.title;
  renderQuestion();
}

function openPicker(id) {
  const training = trainings.find((item) => item.id === Number(id));
  const meta = sectionMeta[training.section];
  const selected = new Set(customSelections[training.id] || []);
  pickerState = {
    training,
    meta,
    selected,
    query: '',
  };
  document.querySelector('.hero-panel').classList.add('hidden');
  els.grid.classList.add('hidden');
  els.quizPanel.classList.add('hidden');
  els.resultPanel.classList.add('hidden');
  els.pickerPanel.classList.remove('hidden');
  els.pickerSection.textContent = meta.label;
  els.pickerTitle.textContent = training.title;
  els.pickerSearch.value = '';
  renderPickerList();
  els.pickerSearch.focus();
}

function renderPickerList() {
  if (!pickerState) return;
  const query = normalize(pickerState.query);
  const rows = pickerState.meta.source
    .map((item, index) => ({ item, index, label: getItemLabel(pickerState.training.section, item) }))
    .filter((row) => !query || normalize(row.label).includes(query));

  els.pickerStatus.textContent = `Выбрано: ${pickerState.selected.size} из ${pickerState.meta.source.length}. Показано: ${rows.length}.`;
  els.pickerList.innerHTML = rows.map((row) => `
    <label class="picker-item">
      <input type="checkbox" data-pick-index="${row.index}" ${pickerState.selected.has(row.index) ? 'checked' : ''} />
      <span>${escapeHtml(row.label)}</span>
    </label>
  `).join('');
}

function closePicker() {
  els.pickerPanel.classList.add('hidden');
  document.querySelector('.hero-panel').classList.remove('hidden');
  els.grid.classList.remove('hidden');
  pickerState = null;
}

function applyPickerSelection() {
  if (!pickerState) return;
  customSelections[pickerState.training.id] = [...pickerState.selected].sort((a, b) => a - b);
  renderCards();
  closePicker();
}

function currentQuestion() {
  return state.questions[state.index];
}

function updateProgress() {
  if (state.training.mode === 'match') {
    els.progressText.textContent = `${state.questions.length} пар`;
    els.progressBar.style.width = state.checked ? '100%' : '0';
    return;
  }
  const total = state.questions.length;
  const current = Math.min(state.index + 1, total);
  els.progressText.textContent = `${current} / ${total}`;
  els.progressBar.style.width = `${((state.index) / total) * 100}%`;
}

function renderQuestion() {
  state.checked = false;
  state.selected = null;
  state.matchPairs = {};
  state.selectedLeft = null;
  els.checkBtn.classList.remove('hidden');
  els.nextBtn.classList.add('hidden');
  els.checkBtn.disabled = false;
  updateProgress();
  if (state.training.mode === 'choice') renderChoiceQuestion();
  if (state.training.mode === 'type' || state.training.mode === 'typeFull') renderTypeQuestion();
  if (state.training.mode === 'match') renderMatchQuestion();
}

function renderChoiceQuestion() {
  const item = currentQuestion();
  const prompt = state.meta.prompt(item);
  const correct = state.meta.answer(item);
  const options = shuffle([
    correct,
    ...sample(state.meta.source.filter((candidate) => state.meta.answer(candidate) !== correct), 3).map((candidate) => state.meta.answer(candidate)),
  ]);
  els.questionArea.innerHTML = `
    <div class="prompt-card">
      <span>Вопрос</span>
      <strong>${escapeHtml(prompt)}</strong>
    </div>
    <div class="options-grid">
      ${options.map((option) => `<button class="option-btn" type="button" data-answer="${escapeAttr(option)}">${escapeHtml(option)}</button>`).join('')}
    </div>
    <div id="feedback"></div>
  `;
}

function renderTypeQuestion() {
  const item = currentQuestion();
  const reverse = isReverseTypeQuestion();
  const prompt = state.meta.prompt(item, reverse);
  els.questionArea.innerHTML = `
    <div class="prompt-card">
      <span>Введите ответ</span>
      <strong>${escapeHtml(prompt)}</strong>
    </div>
    <input class="answer-input" id="answerInput" type="text" autocomplete="off" placeholder="Ваш ответ" />
    <div id="feedback"></div>
  `;
  document.querySelector('#answerInput').focus();
}

function renderMatchQuestion() {
  const items = state.questions;
  const left = items.map((item, index) => ({ index, text: state.meta.prompt(item) }));
  const right = shuffle(items.map((item, index) => ({ index, text: state.meta.answer(item) })));
  els.questionArea.innerHTML = `
    <div class="prompt-card">
      <span>Сопоставление</span>
      <strong>Выберите элемент слева, затем его пару справа</strong>
    </div>
    <div class="match-layout">
      <div class="match-column">
        <h3>Термины</h3>
        ${left.map((item) => `<button class="match-btn" type="button" data-side="left" data-index="${item.index}">${escapeHtml(item.text)}</button>`).join('')}
      </div>
      <div class="match-column">
        <h3>Ответы</h3>
        ${right.map((item) => `<button class="match-btn" type="button" data-side="right" data-index="${item.index}">${escapeHtml(item.text)}</button>`).join('')}
      </div>
    </div>
    <div id="feedback"></div>
  `;
}

function checkAnswer() {
  if (!state || state.checked) return;
  const item = currentQuestion();
  let userAnswer = '';
  let correctAnswer = state.meta.answer(item);
  let ok = false;

  if (state.training.mode === 'choice') {
    userAnswer = state.selected || '';
    ok = userAnswer === correctAnswer;
    markChoiceButtons(correctAnswer, userAnswer);
  }

  if (state.training.mode === 'type' || state.training.mode === 'typeFull') {
    userAnswer = document.querySelector('#answerInput')?.value || '';
    const reverse = isReverseTypeQuestion();
    correctAnswer = state.meta.answer(item, reverse);
    ok = isCloseAnswer(userAnswer, correctAnswer);
  }

  if (state.training.mode === 'match') {
    const total = state.questions.length;
    const matches = Object.entries(state.matchPairs);
    const correctPairs = matches.filter(([left, right]) => Number(left) === Number(right)).length;
    ok = correctPairs === total;
    state.correct += correctPairs;
    userAnswer = matches.length ? `${correctPairs} из ${total} пар` : 'нет ответа';
    correctAnswer = 'Все пары должны совпадать';
    state.questions.forEach((question, index) => {
      if (Number(state.matchPairs[index]) === index) return;
      const chosenIndex = state.matchPairs[index];
      state.mistakes.push({
        prompt: state.meta.prompt(question),
        userAnswer: chosenIndex === undefined ? 'нет ответа' : state.meta.answer(state.questions[chosenIndex]),
        correctAnswer: state.meta.answer(question),
      });
    });
    markMatchButtons();
  }

  state.checked = true;
  els.checkBtn.classList.add('hidden');
  els.nextBtn.classList.remove('hidden');
  els.progressBar.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;

  if (ok && state.training.mode !== 'match') {
    state.correct += 1;
    showFeedback('ok', 'Верно.');
  } else if (ok) {
    showFeedback('ok', 'Все пары собраны верно.');
  } else if (state.training.mode !== 'match') {
    const prompt = state.training.mode === 'type' || state.training.mode === 'typeFull'
      ? state.meta.prompt(item, isReverseTypeQuestion())
      : state.meta.prompt(item);
    state.mistakes.push({ prompt, userAnswer: userAnswer || 'нет ответа', correctAnswer });
    showFeedback('bad', `Ошибка. Правильный ответ: ${escapeHtml(correctAnswer)}`);
  } else {
    showFeedback('bad', `Правильных пар: ${escapeHtml(userAnswer)}.`);
  }
}

function nextQuestion() {
  if (state.training.mode === 'match') {
    finishTraining();
    return;
  }
  if (state.index < state.questions.length - 1) {
    state.index += 1;
    renderQuestion();
  } else {
    finishTraining();
  }
}

function finishTraining() {
  const stats = loadStats();
  stats.completed += 1;
  stats.correct += state.correct;
  stats.total += state.questions.length;
  saveStats(stats);
  renderOverallStats();

  els.quizPanel.classList.add('hidden');
  els.resultPanel.classList.remove('hidden');
  const total = state.questions.length;
  const percent = Math.round((state.correct / total) * 100);
  els.resultTitle.textContent = `${state.correct} из ${total} — ${percent}%`;
  els.resultText.textContent = state.mistakes.length
    ? `Ниже показаны ошибки этой тренировки. Их можно быстро повторить по карточкам.`
    : 'Ошибок нет. Чистая работа.';
  els.mistakesList.innerHTML = state.mistakes.length
    ? state.mistakes.map((mistake) => `
      <article class="mistake-card">
        <strong>${escapeHtml(mistake.prompt)}</strong>
        <p>Ваш ответ: ${escapeHtml(mistake.userAnswer)}</p>
        <p>Правильно: ${escapeHtml(mistake.correctAnswer)}</p>
      </article>
    `).join('')
    : '<div class="feedback ok">Все ответы были правильными.</div>';
}

function showFeedback(type, message) {
  const feedback = document.querySelector('#feedback');
  if (feedback) feedback.innerHTML = `<div class="feedback ${type}">${message}</div>`;
}

function markChoiceButtons(correct, selected) {
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === correct) button.classList.add('correct');
    if (button.dataset.answer === selected && selected !== correct) button.classList.add('wrong');
  });
}

function markMatchButtons() {
  document.querySelectorAll('.match-btn[data-side="left"]').forEach((leftButton) => {
    const left = Number(leftButton.dataset.index);
    const right = Number(state.matchPairs[left]);
    leftButton.classList.add(left === right ? 'correct' : 'wrong');
  });
  document.querySelectorAll('.match-btn[data-side="right"]').forEach((rightButton) => {
    const right = Number(rightButton.dataset.index);
    const paired = Object.entries(state.matchPairs).find(([, value]) => Number(value) === right);
    rightButton.classList.add(paired && Number(paired[0]) === right ? 'correct' : 'wrong');
  });
}

function goHome() {
  els.quizPanel.classList.add('hidden');
  els.resultPanel.classList.add('hidden');
  document.querySelector('.hero-panel').classList.remove('hidden');
  els.grid.classList.remove('hidden');
  els.progressBar.style.width = '0';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#096;');
}

els.grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-training]');
  if (button) {
    const countSelect = document.querySelector(`[data-count-for="${button.dataset.training}"]`);
    startTraining(button.dataset.training, countSelect?.value);
  }
  const pickButton = event.target.closest('[data-pick]');
  if (pickButton) openPicker(pickButton.dataset.pick);
});

els.questionArea.addEventListener('click', (event) => {
  const option = event.target.closest('.option-btn');
  if (option && !state.checked) {
    document.querySelectorAll('.option-btn').forEach((button) => button.classList.remove('selected'));
    option.classList.add('selected');
    state.selected = option.dataset.answer;
  }

  const match = event.target.closest('.match-btn');
  if (!match || state.checked) return;
  const side = match.dataset.side;
  const index = Number(match.dataset.index);
  if (side === 'left') {
    state.selectedLeft = index;
    document.querySelectorAll('.match-btn[data-side="left"]').forEach((button) => button.classList.remove('selected'));
    match.classList.add('selected');
  } else if (state.selectedLeft !== null) {
    state.matchPairs[state.selectedLeft] = index;
    document.querySelectorAll(`.match-btn[data-side="right"]`).forEach((button) => {
      if (Number(button.dataset.index) === index) button.classList.add('selected');
    });
    const leftButton = document.querySelector(`.match-btn[data-side="left"][data-index="${state.selectedLeft}"]`);
    if (leftButton) leftButton.textContent = `${leftButton.textContent.replace(/\s+→.*$/, '')} → ${match.textContent}`;
    state.selectedLeft = null;
    document.querySelectorAll('.match-btn[data-side="left"]').forEach((button) => button.classList.remove('selected'));
  }
});

els.questionArea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && (state?.training.mode === 'type' || state?.training.mode === 'typeFull') && !state.checked) {
    checkAnswer();
  }
});

els.checkBtn.addEventListener('click', checkAnswer);
els.nextBtn.addEventListener('click', nextQuestion);
els.backBtn.addEventListener('click', goHome);
els.homeBtn.addEventListener('click', goHome);
els.retryBtn.addEventListener('click', () => startTraining(state.training.id, state.requestedCount));
els.resetStatsBtn.addEventListener('click', () => {
  saveStats({ completed: 0, correct: 0, total: 0 });
  renderOverallStats();
});
els.closePickerBtn.addEventListener('click', closePicker);
els.cancelSelectionBtn.addEventListener('click', closePicker);
els.applySelectionBtn.addEventListener('click', applyPickerSelection);
els.selectAllBtn.addEventListener('click', () => {
  if (!pickerState) return;
  pickerState.selected = new Set(pickerState.meta.source.map((_, index) => index));
  renderPickerList();
});
els.clearSelectionBtn.addEventListener('click', () => {
  if (!pickerState) return;
  pickerState.selected.clear();
  renderPickerList();
});
els.pickerSearch.addEventListener('input', () => {
  if (!pickerState) return;
  pickerState.query = els.pickerSearch.value;
  renderPickerList();
});
els.pickerList.addEventListener('change', (event) => {
  const checkbox = event.target.closest('[data-pick-index]');
  if (!checkbox || !pickerState) return;
  const index = Number(checkbox.dataset.pickIndex);
  if (checkbox.checked) {
    pickerState.selected.add(index);
  } else {
    pickerState.selected.delete(index);
  }
  els.pickerStatus.textContent = `Выбрано: ${pickerState.selected.size} из ${pickerState.meta.source.length}.`;
});

renderCards();
renderOverallStats();
