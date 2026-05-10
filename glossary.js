const data = window.TERMS_DATA;

const sectionMeta = {
  translations: {
    label: 'Слова и перевод',
    source: data.translations,
  },
  definitions: {
    label: 'Термины и определения',
    source: data.definitions,
  },
  abbreviations: {
    label: 'Аббревиатуры',
    source: data.abbreviations,
  },
};

const els = {
  search: document.querySelector('#glossarySearch'),
  tabs: document.querySelector('#glossaryTabs'),
  status: document.querySelector('#glossaryStatus'),
  list: document.querySelector('#glossaryList'),
};

const state = {
  section: 'translations',
  query: '',
  voices: [],
};

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  state.voices = window.speechSynthesis.getVoices();
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/[ё]/g, 'е')
    .replace(/[“”"'.(),;:!?/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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

function getItemLabel(section, item) {
  if (section === 'translations') return `${item.en} — ${item.ru}`;
  if (section === 'abbreviations') return `${item.abbr} — ${item.full}`;
  return `${item.term} — ${item.definition}`;
}

function audioButton(text, lang, label) {
  return `
    <button class="audio-btn" type="button" data-speak="${escapeAttr(text)}" data-lang="${lang}" aria-label="${escapeAttr(label)}" title="${escapeAttr(label)}">
      ▶
    </button>
  `;
}

function renderTabs() {
  els.tabs.innerHTML = Object.entries(sectionMeta).map(([section, meta]) => `
    <button class="glossary-tab ${state.section === section ? 'active' : ''}" type="button" data-glossary="${section}">
      ${meta.label}
    </button>
  `).join('');
}

function renderRow(section, row) {
  if (section === 'translations') {
    return `
      <article class="glossary-row">
        <span class="row-number">${row.index}</span>
        <strong class="speakable">${audioButton(row.item.en, 'en-US', 'Озвучить английский термин')}${escapeHtml(row.item.en)}</strong>
        <p>${escapeHtml(row.item.ru)}</p>
      </article>
    `;
  }
  if (section === 'abbreviations') {
    return `
      <article class="glossary-row">
        <span class="row-number">${row.index}</span>
        <strong class="speakable">${audioButton(row.item.abbr, 'en-US', 'Озвучить аббревиатуру')}${escapeHtml(row.item.abbr)}</strong>
        <p class="speakable">${audioButton(row.item.full, 'en-US', 'Озвучить расшифровку')}${escapeHtml(row.item.full)}</p>
      </article>
    `;
  }
  return `
    <article class="glossary-row glossary-row-wide">
      <span class="row-number">${row.index}</span>
      <strong class="speakable">${audioButton(row.item.term, 'en-US', 'Озвучить термин')}${escapeHtml(row.item.term)}</strong>
      <p class="speakable">${audioButton(row.item.definition, 'en-US', 'Озвучить определение')}${escapeHtml(row.item.definition)}</p>
    </article>
  `;
}

function speakText(text, lang) {
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    els.status.textContent = 'Озвучка не поддерживается этим браузером.';
    return;
  }
  loadVoices();
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.voice = pickVoice(lang);
  utterance.rate = 0.86;
  utterance.pitch = 1.08;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

function pickVoice(lang) {
  const voices = state.voices.filter((voice) => voice.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
  const preferredNames = [
    'samantha',
    'alex',
    'ava',
    'allison',
    'google us english',
    'microsoft aria',
    'microsoft jenny',
    'daniel',
    'karen',
  ];
  return voices.find((voice) => preferredNames.some((name) => voice.name.toLowerCase().includes(name)))
    || voices.find((voice) => voice.localService)
    || voices[0]
    || null;
}

function renderGlossary() {
  const meta = sectionMeta[state.section];
  const query = normalize(state.query);
  const rows = meta.source
    .map((item, index) => ({ index: index + 1, item, label: getItemLabel(state.section, item) }))
    .filter((row) => !query || normalize(row.label).includes(query));

  renderTabs();
  els.status.textContent = `Показано: ${rows.length} из ${meta.source.length}`;
  els.list.innerHTML = rows.map((row) => renderRow(state.section, row)).join('');
}

els.tabs.addEventListener('click', (event) => {
  const tab = event.target.closest('[data-glossary]');
  if (!tab) return;
  state.section = tab.dataset.glossary;
  state.query = '';
  els.search.value = '';
  renderGlossary();
});

els.search.addEventListener('input', () => {
  state.query = els.search.value;
  renderGlossary();
});

els.list.addEventListener('click', (event) => {
  const button = event.target.closest('[data-speak]');
  if (!button) return;
  speakText(button.dataset.speak, button.dataset.lang || 'en-US');
});

renderGlossary();
loadVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
