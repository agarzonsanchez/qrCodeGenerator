import { useState } from "react";
import QRCode from "react-qr-code";
import "./index.css";

export default function QrCodeGenerator() {
  // install qrcode generator npm i react-qr-code

  const [input, setInput] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setQrCodeValue(input);
    setInput("");
  }
  return (
    <div>
      <div className="title-style">
        <h1>QR Code Generator</h1>
        <p>Type a word, hit submit and it will generate a QR code.</p>
      </div>

      <div>
        <QRCode size={300} value={qrCodeValue} viewBox={`0 0 256 256`} />
      </div>
      <div className="submit-button-div">
        <input
          className="input-style"
          type="text"
          placeholder="Type a word"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button className="button-style" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
