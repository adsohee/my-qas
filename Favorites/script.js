const API = "/api";

const apiFetch = (url, options = {}) =>
  fetch(url, {
    credentials: "include",
    ...options
  });

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
  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a.53.53 0 0 0-.494 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.123 2.123 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
</svg>
`;

const linkTitleInput = document.getElementById("linkTitleInput");
const linkUrlInput = document.getElementById("linkUrlInput");
const addLinkBtn = document.getElementById("addLinkBtn");
const linkList = document.getElementById("linkList");
const searchInput = document.getElementById("searchInput");

let draggedItem = null;
const deleteConfirmMap = {};

addLinkBtn.addEventListener("click", addLink);

linkTitleInput.addEventListener("keydown", e => {

  if (e.key === "Enter") {

    e.preventDefault();

    linkUrlInput.focus();

  }

});

linkUrlInput.addEventListener("keydown", async e => {

  if (e.key === "Enter") {

    e.preventDefault();

    await addLink();

    linkTitleInput.focus();

  }

});

searchInput.addEventListener("input", loadLinks);

async function addLink() {

  const title = linkTitleInput.value.trim();
  const url = linkUrlInput.value.trim();

  if (!title || !url) return;

  await apiFetch(`${API}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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

  const res = await apiFetch(`${API}/items`);
  const data = await res.json();

const keyword =
  searchInput.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

  const links = data
    .filter(item => item.type === "link")
    .filter(item => {

      if (!keyword) return true;

return (

  item.title
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(keyword)

  ||

  item.url
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(keyword)

);

    });

  linkList.innerHTML = "";

  links.forEach(item => {

    linkList.innerHTML += `
<div
  class="memo-item"
  draggable="true"
  data-id="${item.id}"
>

  <div class="link-line">

    <div class="memo-main">

      <span
        class="memo-title"
        ondblclick="window.open('${item.url}','_blank')"
      >
        ${item.title}
      </span>

      <span class="memo-dot">·</span>

      <span
        class="memo-content link-copy"
        ondblclick="copyLink('${item.url}')"
      >
        ${item.url}
      </span>

    </div>

    <div class="memo-meta">

      <button
        class="memo-favorite ${item.favorite ? "active" : ""}"
        onclick="toggleFavorite(this,'${item.id}')"
      >
        ${FAVORITE_ICON}
      </button>

      <button
        class="icon-btn"
        onclick="deleteItem(event,'${item.id}')"
      >
        ${DELETE_ICON}
      </button>

    </div>

  </div>

</div>
`;

  });

  enableDragSort();

}

async function toggleFavorite(button,id){

  const favorite =
    button.classList.contains("active")
      ? 0
      : 1;

  await apiFetch(`${API}/items/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      favorite
    })
  });

  loadLinks();

}

async function deleteItem(event,id){

  const btn = event.currentTarget;

  if(!deleteConfirmMap[id]){

    deleteConfirmMap[id]=true;

    btn.textContent="Delete?";

    setTimeout(()=>{

      deleteConfirmMap[id]=false;
      btn.innerHTML=DELETE_ICON;

    },2000);

    return;

  }

  await apiFetch(`${API}/items/${id}`,{
    method:"DELETE"
  });

  showToast("Deleted");

  loadLinks();

}

async function copyLink(url){

  await navigator.clipboard.writeText(url);

  showToast("Copied!");

}

function showToast(text){

  const toast =
    document.getElementById("toast");

  toast.textContent=text;

  toast.classList.add("show");

  setTimeout(()=>{

    toast.classList.remove("show");

  },1000);

}

function enableDragSort(){

  document
    .querySelectorAll(".memo-item")
    .forEach(item=>{

      item.addEventListener("dragstart",()=>{

        draggedItem=item;
        item.classList.add("dragging");

      });

      item.addEventListener("dragend",()=>{

        item.classList.remove("dragging");

      });

      item.addEventListener("dragover",e=>{

        e.preventDefault();

      });

      item.addEventListener("drop",async()=>{

        if(!draggedItem||draggedItem===item)
          return;

        item.parentNode.insertBefore(
          draggedItem,
          item
        );

        const orders=[];

        let order=1;

        document
          .querySelectorAll(".memo-item")
          .forEach(el=>{

            orders.push({
              id:el.dataset.id,
              sort_order:order++
            });

          });

        await apiFetch(
          `${API}/items/reorder`,
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(orders)
          }
        );

      });

    });

}

loadLinks();
searchInput.focus();
