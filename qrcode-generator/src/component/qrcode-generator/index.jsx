import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  // install qrcode generator npm i react-qr-code

  const [input, setInput] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    setQrCodeValue(input);
  }
  return (
    <div>
      <div>
        <h1>QR Code Generator</h1>
      </div>

      <div>
        <QRCode size={300} value={qrCodeValue} viewBox={`0 0 256 256`} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a word"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
