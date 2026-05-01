let qr; // global variable

function generateQR() {
  let text = document.getElementById("text").value;

  document.getElementById("qrcode").innerHTML = ""; // clear old QR

  if (text.trim() !== "") {
    qr = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 240,
      height: 240,
      colorDark: "#1a237e",   // dark blue
      colorLight: "#fffde7",  // light yellow
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

function downloadQR() {
  let qrContainer = document.getElementById("qrcode").querySelector("canvas") 
                 || document.getElementById("qrcode").querySelector("img");

  if (!qrContainer) {
    alert("⚠️ Please generate a QR code first!");
    return;
  }

  let link = document.createElement("a");
  link.download = "my_qrcode.png";

  if (qrContainer.tagName === "CANVAS") {
    link.href = qrContainer.toDataURL("image/png");
  } else {
    link.href = qrContainer.src;
  }

  link.click();
}
