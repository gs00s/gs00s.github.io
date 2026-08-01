const CONTACT_CODES = {
  email: [103, 97, 98, 111, 114, 46, 115, 111, 111, 115, 46, 100, 101, 118, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109],
  phone: [43, 51, 54, 32, 50, 48, 32, 51, 50, 54, 32, 52, 55, 52, 57],
};

function decode(codes) {
  return codes.map((c) => String.fromCharCode(c)).join("");
}

document.querySelectorAll(".reveal-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const kind = btn.dataset.reveal;
    const value = decode(CONTACT_CODES[kind]);
    const link = document.createElement("a");
    link.className = "value";
    link.textContent = value;
    link.href = kind === "email" ? `mailto:${value}` : `tel:${value.replace(/\s+/g, "")}`;
    btn.replaceWith(link);
  });
});
