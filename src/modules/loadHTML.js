export default function loadHTML() {
  const content = document.querySelector(".content");
  content.innerHTML += `    <div>This is a test.</div>
    <input id="location">
    <button id="submit">Submit</button>`;
}
