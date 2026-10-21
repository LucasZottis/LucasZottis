const fullCmd = "systemctl status app.service";
  const typedEl = document.getElementById('typed');
  const fillEl = document.getElementById('fill');
  const pctEl = document.getElementById('pct');
  const statusEl = document.getElementById('status');

  let i = 0;
  function typeChar() {
    if (i <= fullCmd.length) {
      typedEl.textContent = fullCmd.slice(0, i);
      i++;
      setTimeout(typeChar, 45);
    } else {
      setTimeout(runProgress, 300);
    }
  }

  const steps = [
    [20, "compilando"],
    [45, "publicando imagem"],
    [70, "subindo container"],
    [90, "aguardando health check"],
    [97, "quase lá"]
  ];

  function runProgress() {
    let idx = 0;
    function next() {
      if (idx >= steps.length) return;
      const [value, label] = steps[idx];
      fillEl.style.width = value + "%";
      pctEl.textContent = value + "%";
      statusEl.textContent = label;
      idx++;
      setTimeout(next, 1400);
    }
    next();
  }

  typeChar();