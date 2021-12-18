const IMAGE = document.getElementById("OverwriteMe");
const BASE_URL = "https://thatcopy.pw/catapi/rest/";

async function ChangeKitten() {
  try {
    const API_RETURN = await fetch(BASE_URL);
    const JSON = await API_RETURN.json();
    IMAGE.src = JSON.webpurl;
  } catch (e) {
    console.error(e);
  }
}

ChangeKitten();
