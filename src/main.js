import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Anabel Beck",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["test, deploy, lint checks"],
    // Which CI/CD tools do you use in your project?
    tools: "Tekton",
    // What do you want to learn in this workshop?
    expectations: ["get a better understanding of pipelines, learn the basics"],
  },
});
