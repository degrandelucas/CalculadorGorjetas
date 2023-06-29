function calculateTips(event) {
  event.preventDefault();
  let bill = document
    .getElementById("bill")
    .value.replace(/[.]/g, "")
    .replace(",", ".");
  let service = document.getElementById("service").value;
  let numberPeople = document.getElementById("numberofpeople").value;

  if (numberPeople <= 1) {
    document.getElementById("eachpeople").style.display = "none";
    document.getElementById("TipsTotal").style.display = "block";
  } else {
    document.getElementById("TipsTotal").style.display = "block";
    document.getElementById("eachpeople").style.display = "block";
  }

  let countTotal = parseFloat(bill * service);
  console.log(countTotal.toLocaleString("pt-br", { style: "decimal" }));
  document.getElementById("Tip").innerHTML = countTotal.toLocaleString(
    "pt-br",
    { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
  document.getElementById("Tip").style.display = "inline-block";

  let tipsDiv = parseFloat(countTotal / numberPeople);
  document.getElementById("TipDiv").innerHTML = tipsDiv.toLocaleString(
    "pt-br",
    { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );
  document.getElementById("TipDiv").style.display = "inline-block";
}

document.getElementById("TipsTotal").style.display = "none";
document.getElementById("eachpeople").style.display = "none";
document.getElementById("TipsForm").addEventListener("submit", calculateTips);

$(document).ready(function () {
  $("#bill").mask("000.000.000.000.000,00", { reverse: true });
});
