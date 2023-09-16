var toolbarOptions = ["bold", "italic", "link", "image"];

const quill = new Quill("#editor", {
  modules: {
    syntax: true,
    toolbar: toolbarOptions,
  },
  placeholder: "文章を記入してください。",
  theme: "snow",
});
