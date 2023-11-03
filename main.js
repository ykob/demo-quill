var button = document.getElementById("submit-button");
var quill = new Quill("#editor", {
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

var submit = () => {
  var delta = quill.getContents();
  var content = JSON.stringify(delta);
  console.log(content);
};

button.addEventListener("click", submit);
