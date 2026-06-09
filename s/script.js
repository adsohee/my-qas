const API = "/api";

const apiFetch = (url, options = {}) =>
  fetch(url, {
    credentials: "include",
    ...options
  });

  /* 상단 탭 버튼 아이콘 */

const FAVORITE_TAB_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="23"
  height="23"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a.53.53 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
</svg>
`;

const NOTE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
`;

const LINK_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="23"
  height="23"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
</svg>
`;

const PHRASE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-icon lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
`;

const FILE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-icon lucide-folder-open"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>
`;

const TYPES = {

  favorite: {
    icon: FAVORITE_TAB_ICON,
    name: "즐겨찾기"
  },

  note: {
    icon: NOTE_ICON,
    name: "메모"
  },

  link: {
    icon: LINK_ICON,
    name: "링크"
  },

  phrase: {
    icon: PHRASE_ICON,
    name: "문구"
  },

  file: {
    icon: FILE_ICON,
    name: "파일"
  }

};

/* 기능 버튼 아이콘 */


const DELETE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M18 6 6 18"/>
  <path d="m6 6 12 12"/>
</svg>
`;

const COPY_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
</svg>
`;

const FAVORITE_ICON = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="15"
  height="15"
  viewBox="0 0 24 24"
  fill="currentColor"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round">
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
</svg>
`;


const category =
  new URLSearchParams(location.search)
    .get("category") || "default";

const memoInput =
  document.getElementById(
    "memoInput"
  );

const addMemoBtn =
  document.getElementById(
    "addMemoBtn"
  );

const memoList =
  document.getElementById(
    "memoList"
  );

loadMemos();

addMemoBtn.addEventListener(
  "click",
  addMemo
);

const linkTitleInput =
  document.getElementById(
    "linkTitleInput"
  );

const linkUrlInput =
  document.getElementById(
    "linkUrlInput"
  );

const addLinkBtn =
  document.getElementById(
    "addLinkBtn"
  );

  const addPhraseBtn =
  document.getElementById(
    "addPhraseBtn"
  );

const phraseList =
  document.getElementById(
    "phraseList"
  );

addLinkBtn.addEventListener(
  "click",
  addLink
);

linkUrlInput.addEventListener(
  "keydown",
  (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      addLink();

    }

  }
);


addPhraseBtn.addEventListener(
  "click",
  addPhrase
);


const searchInput =
  document.getElementById(
    "searchInput"
  );

const searchPage =
  document.getElementById(
    "searchPage"
  );

const searchResults =
  document.getElementById(
    "searchResults"
  );



async function addMemo() {

const memo =
  memoInput.value.trim();

if (!memo) {
  return;
}

await fetch(`${API}/items`, {

    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

body: JSON.stringify({
  type: "note",
  title: memo,
  content: ""
})

  });

  memoInput.value = "";

  loadMemos();

}

async function loadMemos() {

const res =
  await apiFetch(
    `${API}/items`
  );

const data =
  await res.json();

memoList.innerHTML = "";

const memos =
  data.filter(
    item => item.type === "note"
  );

memos.forEach(item => {

    const date =
      new Date(
        item.created_at
      );

    const formattedDate =
  `${String(date.getMonth()+1).padStart(2,"0")}.${String(date.getDate()).padStart(2,"0")}. ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;

memoList.innerHTML += `

<div
  class="memo-item"
  id="item-${item.id}"
>

  <div class="memo-main">

    <span
      class="memo-title">
      ${item.title}
    </span>

  </div>

  <div class="memo-meta">

    <span class="memo-date">
      ${formattedDate}
    </span>

    <button
      class="memo-favorite ${
        item.favorite ? "active" : ""
      }"
      onclick="toggleFavorite(this, '${item.id}')"
    >
      ${FAVORITE_ICON}
    </button>

        <button
      class="icon-btn"
      onclick="deleteItem('${item.id}')"
    >
      ${DELETE_ICON}
    </button>



  </div>

</div>

`;

  });

}

memoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addMemo();
  }
});



async function toggleFavorite(
  button,
  id
) {

  const favorite =
    button.classList.contains("active")
      ? 0
      : 1;

  try {

await fetch(`${API}/items/${id}`, {

      method: "PATCH",

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        favorite
      })

    });

loadMemos();
loadLinks();
loadFavorites();

  } catch (err) {

    console.error(err);

  }

}

let currentPage = "favorite";

function showPage(page) {

document
  .querySelectorAll(".top-tab")
  .forEach(tab =>
    tab.classList.remove("active")
  );

const tabMap = {
  favorite: "favoriteTab",
  memo: "noteTab",
  link: "linkTab",
  phrase: "phraseTab"
};

document
  .getElementById(tabMap[page])
  ?.classList.add("active");


  currentPage = page;

  const favoritePage =
    document.getElementById(
      "favoritePage"
    );

  const memoPage =
    document.getElementById(
      "memoPage"
    );

    const linkPage =
  document.getElementById(
    "linkPage"
  );

  const phrasePage =
  document.getElementById(
    "phrasePage"
  );

favoritePage.style.display =
  "none";

memoPage.style.display =
  "none";

linkPage.style.display =
  "none";

phrasePage.style.display =
  "none";  
  
if (page === "favorite") {

  favoritePage.style.display =
    "block";

  loadFavorites();

}

  if (page === "memo") {

    memoPage.style.display =
      "block";

  }

if (page === "link") {

  linkPage.style.display =
    "block";

  loadLinks();

}

if (page === "phrase") {

  phrasePage.style.display =
    "block";

  loadPhrases();

}


}


showPage("favorite");
loadFavorites();


async function loadFavorites() {

const res =
  await fetch(
    `${API}/items`
  );

  const data =
    await res.json();

  const favoriteList =
    document.getElementById(
      "favoriteList"
    );

  favoriteList.innerHTML = "";

  const favorites =
    data.filter(
      item => item.favorite
    );

  favorites.forEach(item => {

favoriteList.innerHTML += `
<div class="memo-item">

  <div class="memo-main">

<span class="memo-title">
  ${item.title}
</span>

  </div>

</div>
`;

  });

}

async function addLink() {

  const title =
    linkTitleInput.value.trim();

  const url =
    linkUrlInput.value.trim();

  if (!title || !url) {
    return;
  }

  await fetch(`${API}/items`, {

    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify({
      type: "link",
      title,
      url
    })

  });

  linkTitleInput.value = "";
  linkUrlInput.value = "";

  loadLinks();

}

async function loadLinks() {

  const res =
    await fetch(
      `${API}/items`
    );

  const data =
    await res.json();

  const linkList =
    document.getElementById(
      "linkList"
    );

  linkList.innerHTML = "";

  const links =
    data.filter(
      item => item.type === "link"
    );

links.forEach(item => {

linkList.innerHTML += `

<div
  class="memo-item"
  id="item-${item.id}"
>
<div class="link-line">

  <div class="memo-main">

    <span
      class="memo-title"
      onclick="window.open('${item.url}','_blank')"
    >
      ${item.title}
    </span>

    <span class="memo-dot">·</span>

<span
  class="memo-content link-copy"
  onclick="copyLink('${item.url}')"
>
  ${item.url}
</span>

  </div>

  <div class="memo-meta">

    <button
      class="memo-favorite ${
        item.favorite ? "active" : ""
      }"
      onclick="toggleFavorite(this, '${item.id}')"
    >
      ${FAVORITE_ICON}
    </button>

    <button
      class="icon-btn"
      onclick="deleteItem('${item.id}')"
    >
      ${DELETE_ICON}
    </button>

  </div>

</div>

`;

});

}

async function addPhrase() {

  await fetch(`${API}/items`, {

    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify({
      type: "phrase",
      content: ""
    })

  });

  loadPhrases();

}

async function loadPhrases() {

  const res =
    await fetch(
      `${API}/items`
    );

  const data =
    await res.json();

  phraseList.innerHTML = "";

  const phrases =
    data.filter(
      item => item.type === "phrase"
    );

  phrases.forEach(item => {

phraseList.innerHTML += `


<div
  class="phrase-item"
  id="item-${item.id}"
>

<textarea
  class="phrase-box"
  data-id="${item.id}"
>${item.content || ""}</textarea>

<div class="phrase-actions">

<button
  class="icon-btn"
  onclick="copyPhrase('${item.id}')"
>
  ${COPY_ICON}
</button>

<button
  class="icon-btn"
  onclick="deleteItem('${item.id}')"
>
  ${DELETE_ICON}
</button>

</div>

</div>

`;

  });

document
  .querySelectorAll(".phrase-box")
  .forEach(box => {


box.style.height = "auto";
box.style.height =
  box.scrollHeight + "px";

    let timer;

box.addEventListener(
  "input",
  () => {

    console.log("입력감지");

    clearTimeout(timer);
box.style.height = "auto";
box.style.height =
  box.scrollHeight + "px";
    timer =
      setTimeout(() => {

        console.log("자동저장실행");

        savePhrase(box);

      }, 1000);

  }
);

  });


}

async function savePhrase(box) {

  const id = box.dataset.id;
  const content = box.value;

  const res = await fetch(
    `${API}/items/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content
      })
    }
  );

  const text = await res.text();

  console.log(text);

}async function copyPhrase(id) {

  const box =
    document.querySelector(
      `[data-id="${id}"]`
    );

  await navigator.clipboard.writeText(
    box.value
  );

  showToast("Copied!");

}

async function copyLink(url) {

  await navigator.clipboard.writeText(
    url
  );

  showToast("Copied!");

}

async function deleteItem(id) {

  await fetch(
    `${API}/items/${id}`,
    {
      method: "DELETE"
    }
  );

  showToast("Deleted.");

  loadMemos();
  loadLinks();
  loadPhrases();
  loadFavorites();

}


function showToast(text) {

  const toast =
    document.getElementById(
      "toast"
    );

  toast.textContent =
    text;

  toast.classList.add(
    "show"
  );

  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 1000);

}

/* 검색 이벤트 */

searchInput.addEventListener(
  "input",
  searchItems
);

/* 검색 함수 추가 */

async function searchItems() {

  const keyword =
    searchInput.value
      .trim()
      .toLowerCase();

      favoritePage.style.display =
  "none";

memoPage.style.display =
  "none";

linkPage.style.display =
  "none";

phrasePage.style.display =
  "none";

searchPage.style.display =
  "block";

if (!keyword) {

  searchPage.style.display =
    "none";

  showPage(currentPage);

  return;
}

  const res =
    await fetch(`${API}/items`);

  const data =
    await res.json();

  const notes =
    data.filter(item =>
      item.type === "note" &&
      (
        item.title?.toLowerCase().includes(keyword) ||
        item.content?.toLowerCase().includes(keyword)
      )
    );

  const links =
    data.filter(item =>
      item.type === "link" &&
      (
        item.title?.toLowerCase().includes(keyword) ||
        item.url?.toLowerCase().includes(keyword)
      )
    );

  const phrases =
    data.filter(item =>
      item.type === "phrase" &&
      (
        item.content?.toLowerCase().includes(keyword)
      )
    );

  renderSearchResults(
    notes,
    links,
    phrases
  );

}

/* 결과 렌더 함수 추가 */
function renderSearchResults(
  notes,
  links,
  phrases
) {

  searchPage.style.display =
    "block";

  searchResults.innerHTML = "";

  if (
    notes.length === 0 &&
    links.length === 0 &&
    phrases.length === 0
  ) {

    searchResults.innerHTML =
      `<div class="search-item">
        No results
      </div>`;

    return;
  }

  if (notes.length) {

    searchResults.innerHTML +=
      `<div class="search-group">
        <div class="search-title">
${TYPES.note.icon}
        </div>
        ${
notes.map(item => `
  <div
    class="search-item"
    onclick="goToItem(
      'memo',
      '${item.id}'
    )"
  >

            
              ${item.title}
              <div class="search-sub">
                ${item.content}
              </div>
            </div>
          `).join("")
        }
      </div>`;
  }

  if (links.length) {

    searchResults.innerHTML +=
      `<div class="search-group">
        <div class="search-title">
          ${TYPES.link.icon}
        </div>
        ${
          links.map(item => `
<div
  class="search-item"
  onclick="goToItem(
    'link',
    '${item.id}'
  )"
>
              ${item.title}
              <div class="search-sub">
                ${item.url}
              </div>
            </div>
          `).join("")
        }
      </div>`;
  }

  if (phrases.length) {

    searchResults.innerHTML +=
      `<div class="search-group">
        <div class="search-title">
       ${TYPES.phrase.icon}
        </div>
        ${
          phrases.map(item => `
<div
  class="search-item"
  onclick="goToItem(
    'phrase',
    '${item.id}'
  )"
>
              ${item.content}
            </div>
          `).join("")
        }
      </div>`;
  }

}
/* 클릭 바로 가기 */
function goToItem(
  page,
  id
) {

  searchInput.value = "";

  searchPage.style.display =
    "none";

  showPage(page);

  setTimeout(() => {

    const target =
      document.getElementById(
        `item-${id}`
      );

    if (!target) return;

    
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 200);

}

/* 상단 탭 아이콘 관련 */
document.getElementById(
  "favoriteTab"
).innerHTML =
  TYPES.favorite.icon;

document.getElementById(
  "noteTab"
).innerHTML =
  TYPES.note.icon;

document.getElementById(
  "linkTab"
).innerHTML =
  TYPES.link.icon;

document.getElementById(
  "phraseTab"
).innerHTML =
  TYPES.phrase.icon;

document.getElementById(
  "fileTab"
).innerHTML =
  TYPES.file.icon;
