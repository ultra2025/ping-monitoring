function pingHost() {
  const host = document.getElementById("hostInput").value;
  const resultDiv = document.getElementById("result");

  if (!host) {
    resultDiv.innerText = "Silakan masukkan host.";
    return;
  }

  const startTime = Date.now();

  fetch(`https://${host}`, { mode: 'no-cors' })
    .then(() => {
      const ping = Date.now() - startTime;
      resultDiv.innerText = `✅ ${host} aktif (waktu respons ~${ping} ms)`;
    })
    .catch(() => {
      resultDiv.innerText = `❌ ${host} tidak dapat dijangkau.`;
    });
}
