import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const button = document.getElementById("submit-button");
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

const submit = () => {
  const delta = quill.getContents();
  const converter = new QuillDeltaToHtmlConverter(delta.ops);
  console.log(
    converter
      .convert()
      .replace(/<br\/><br\/>/g, "</p><p>")
      .replace(/<p><br\/>/g, "<p>")
      .replace(/<br\/><\/p>/g, "</p>")
  );
};

button.addEventListener("click", submit);
