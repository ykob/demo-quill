var toolbarOptions = [
  ["bold", "italic"],
  ["link", "image"],
];

const quill = new Quill("#editor", {
  modules: {
    syntax: true,
    toolbar: toolbarOptions,
  },
  placeholder: "本文を記入してください。",
  theme: "snow",
});
