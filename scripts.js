function calculateTips(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let service = document.getElementById("service").value;
  let numberpeople = document.getElementById("numberofpeople").value;

  if (numberpeople <= 1) {
    document.getElementById("eachpeople").style.display = "none";
    document.getElementById("TipsTotal").style.display = "block";
  } else {
    document.getElementById("TipsTotal").style.display = "block";
    document.getElementById("eachpeople").style.display = "block";
  }

  let CountTotal = bill * service;
  CountTotal = CountTotal.toFixed(2);
  document.getElementById("Tip").innerHTML = CountTotal;
  document.getElementById("Tip").style.display = "block";

  let TipsDiv = CountTotal / numberpeople;
  TipsDiv = TipsDiv.toFixed(2);
  document.getElementById("TipDiv").innerHTML = TipsDiv;
  document.getElementById("TipDiv").style.display = "block";
}

document.getElementById("TipsTotal").style.display = "none";
document.getElementById("eachpeople").style.display = "none";
document.getElementById("TipsForm").addEventListener("submit", calculateTips);
