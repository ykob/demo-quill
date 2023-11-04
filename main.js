import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const inputEntryTitle = document.getElementById("entry-title-input");
const button = document.getElementById("submit-button");
const progressOverlay = document.getElementById("progress-overlay");
const quill = new Quill("#editor", {
  modules: {
    clipboard: {
      allowed: {
        tags: ["a", "img", "strong", "p"],
        attributes: ["src", "href", "alt", "target"],
      },
    },
    toolbar: "#toolbar",
  },
  placeholder: "文章を記入してください。",
  theme: "snow",
});
let isSubmitting = false;

const submit = () => {
  if (isSubmitting) {
    return;
  }
  if (inputEntryTitle.value === "") {
    window.alert("タイトルを入力してください。");
    return;
  }
  if (quill.getText().trim() === "") {
    window.alert("本文を入力してください。");
    return;
  }
  window.confirm("この内容で投稿してよろしいですか？");

  const delta = quill.getContents();
  const converter = new QuillDeltaToHtmlConverter(delta.ops);

  isSubmitting = true;
  progressOverlay.classList.add("is-shown");
  console.log(
    converter
      .convert()
      .replace(/<br\/><br\/>/g, "</p><p>")
      .replace(/<p><br\/>/g, "<p>")
      .replace(/<br\/><\/p>/g, "</p>")
  );
  setTimeout(() => {
    isSubmitting = false;
    inputEntryTitle.value = "";
    quill.setContents([{ insert: "\n" }]);
    progressOverlay.classList.remove("is-shown");
    window.scrollTo(0, 0);
  }, 1000);
};

button.addEventListener("click", submit);
