// Dev helper: measures LCP/CLS on a throttled mobile profile. Usage: node scripts/measure-lcp.mjs <baseUrl> [paths...]
import { chromium } from "@playwright/test";
const [base = "http://localhost:4173", ...paths] = process.argv.slice(2);
const b = await chromium.launch({ channel: "msedge" });
for (const path of paths.length ? paths : ["/", "/packages", "/work"]) {
  const runs = [];
  for (let i = 0; i < 3; i++) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const p = await ctx.newPage(); const cdp = await ctx.newCDPSession(p);
    await cdp.send("Network.enable");
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 94000 });
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await p.addInitScript(() => {
      window.__lcp = 0; window.__cls = 0;
      new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true });
    });
    await p.goto(base + path, { waitUntil: "load", timeout: 90000 }); await p.waitForTimeout(2500);
    runs.push(await p.evaluate(() => ({ lcp: window.__lcp, cls: window.__cls, video: performance.getEntriesByType("resource").filter(x => x.name.endsWith(".mp4")).length })));
    await ctx.close();
  }
  const med = runs.map(r => r.lcp).sort((a, b) => a - b)[1];
  console.log(`${path.padEnd(18)} LCP ${(med / 1000).toFixed(2)}s (median of 3)  CLS ${Math.max(...runs.map(r => r.cls)).toFixed(3)}  video requested on load: ${runs[0].video > 0}`);
}
await b.close();
