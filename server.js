import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(root, "public")));
app.post("/api", (req, res) => {
  const a = String(req.body.left || "").split(/\r?\n/);
  const b = String(req.body.right || "").split(/\r?\n/);
  const n = Math.max(a.length, b.length);
  const lines = [];
  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) lines.push("  " + (a[i] ?? ""));
    else {
      if (a[i] != null) lines.push("- " + a[i]);
      if (b[i] != null) lines.push("+ " + b[i]);
    }
  }
  res.json({ diff: lines.join("\n") });
});
app.listen(process.env.PORT || 8125);
