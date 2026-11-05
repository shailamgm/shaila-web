const fs = require("fs");
const path = require("path");

const PORT = 9230;
const BASE = "http://localhost:3129";
const DOWNLOAD_DIR = path.resolve(".dl-test");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function listTargets() {
  return fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
}

async function main() {
  fs.rmSync(DOWNLOAD_DIR, { recursive: true, force: true });
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });

  const targets = await listTargets();
  const page = targets.find((t) => t.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let nextId = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++nextId;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const evaluate = async (expression) => {
    const { result, exceptionDetails } = await send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (exceptionDetails) throw new Error(JSON.stringify(exceptionDetails));
    return result.value;
  };

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: DOWNLOAD_DIR,
  });
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Page.navigate", { url: `${BASE}/es` });
  await sleep(2200);

  const before = (await listTargets()).map((t) => t.id);

  await evaluate(`(() => {
    const a = document.createElement('a');
    a.href = '/cv-shaila-martinez-2026.pdf';
    a.download = 'shailamartinez.pdf';
    a.target = '_blank';
    a.textContent = 'test';
    a.id = 'test-cv';
    document.body.appendChild(a);
    a.click();
    return true;
  })()`);

  await sleep(3000);

  const after = await listTargets();
  const newTargets = after.filter((t) => !before.includes(t.id)).map((t) => ({ id: t.id, type: t.type, url: t.url }));
  const files = fs.existsSync(DOWNLOAD_DIR) ? fs.readdirSync(DOWNLOAD_DIR) : [];

  console.log(JSON.stringify({ newTargets, files }, null, 2));
  ws.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
