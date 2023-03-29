import config from "config";

console.log(
  "============================= Fetch ============================="
);

console.log(config.get("URL"));
fetch(config.get("URL"))
  .then((response) => response.text())
  .then((html) => console.log(html))
  .catch((error) => console.error(error));
