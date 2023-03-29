import axios from "axios";
import config from "config";

let main = async () => {
  try {
    console.log(
      "=============================AXIOS======================================"
    );
    console.log(config.get("URL"));
    let output = await axios.get(config.get("URL"));
    console.log(output.data);
  } catch (error) {
    console.log(error.response.data);
  }
};
main();
