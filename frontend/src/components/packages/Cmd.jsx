import { useState } from "react";

const COPY_RESET_DELAY = 1600;

function copyWithFallback(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  return Promise.resolve();
}

export function Cmd({ value }) {
  const [copyStatus, setCopyStatus] = useState("idle");

  if (!value) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await copyWithFallback(value);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), COPY_RESET_DELAY);
    } catch {
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), COPY_RESET_DELAY);
    }
  };

  const buttonLabel = copyStatus === "copied"
    ? "Copied"
    : copyStatus === "error"
      ? "Error"
      : "Copy";

  return (
    <div className="cmd" role="group" aria-label="Installation command">
      <code className="cmd-value text-size-sm">{value}</code>
      <button
        type="button"
        className="cmd-copy"
        onClick={handleCopy}
        aria-label={`Copy command: ${value}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default Cmd;
