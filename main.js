var toolbarOptions = ["bold", "italic", "image"];
var button = document.getElementById("editor-button");
var quill = new Quill("#editor", {
  modules: {
    clipboard: {
      allowed: {
        tags: ["strong"],
        attributes: [],
      },
    },
    toolbar: toolbarOptions,
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
