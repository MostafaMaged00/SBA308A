const url = "https://api.thecatapi.com/v1/images/search?limit=5";
const heading = document.createElement("h1");
const ul = document.createElement("ul");
const catImage = document.getElementById("catImage");
const catID = document.getElementById("catID");
const srchbtn = document.getElementById("srch-btn");

// create async function to retrive dat from api
async function getCatData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const catUrl = data[0].url;
    catImage.innerHTML = `<img src="${catUrl}" alt="Random Cat" width="300" />`;
    catID.innerHTML = `<h2>My name is : Cat${data[0].id}</h2>`;
  } catch (error) {
    console.error("Network error:", error);
  }
}

srchbtn.addEventListener("click", getCatData);
