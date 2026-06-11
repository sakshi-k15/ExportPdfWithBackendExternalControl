/*import express, { Request, Response } from "express";
import cors from "cors";
import { chromium } from "playwright";

const app = express();

app.use(cors());
app.use(express.json());

// Express endpoints explicitly typed with Request and Response primitives
app.post("/api/generate-pdf", async (req: Request, res: Response) => {
  const { reportUrl, userName } = req.body;

  if (!reportUrl) {
    return res
      .status(400)
      .json({ error: "Missing target reportUrl parameter" });
  }

  let browser;
  try {
    console.log(`Launching headless browser instance for target: ${reportUrl}`);

    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
    });
    const page = await context.newPage();

    await page.goto(reportUrl, { waitUntil: "networkidle" });

    await page.waitForSelector("#pdfTable", {
      state: "visible",
      timeout: 15000,
    });

    await page.waitForTimeout(1500);

    const pdfBuffer = await page.pdf({
      format: "A4",
      landscape: true,
      printBackground: true,
      margin: {
        top: "25mm",
        bottom: "25mm",
        left: "15mm",
        right: "15mm",
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 10px; width: 100%; margin: 0 15mm; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; color: #2d3748;">
          <span style="font-weight: bold; letter-spacing: 0.5px;">BBSO SAFETY REPORT</span>
          <span style="color: #4a5568;">Bagru</span>
        </div>
      `,
      footerTemplate: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 8px; width: 100%; margin: 0 15mm; display: flex; justify-content: space-between; color: #718096; border-top: 1px solid #e2e8f0; padding-top: 5px;">
          <span>Generated On: 2026-06-10 12:20:23</span>
          <span>By: ${userName || "System"}</span>
          <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
      `,
    });

    console.log("PDF layout binary successfully generated");

    res.contentType("application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Playwright Engine Failure Trace:", error);
    res
      .status(500)
      .json({ error: "Failed to accurately compile PDF layout internally." });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `PDF Layout Generation Service running on http://localhost:${PORT}`,
  );
});*/

import express, { Request, Response } from "express";
import cors from "cors";
import { chromium } from "playwright";

// Catch all unexpected errors
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Backend is running");
});

app.post("/api/generate-pdf", async (req: Request, res: Response) => {
  const { reportUrl, userName } = req.body;

  if (!reportUrl) {
    return res.status(400).json({
      error: "reportUrl is required",
    });
  }

  let browser;

  try {
    console.log("================================");
    console.log("PDF Generation Started");
    console.log("URL:", reportUrl);
    console.log("================================");

    browser = await chromium.launch({
      headless: true,
    });

    const page = await browser.newPage();

    await page.goto(reportUrl, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    console.log("Page Loaded:", page.url());

    await page.waitForTimeout(3000);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      landscape: true,
    });

    console.log("PDF Generated Successfully");
    console.log("PDF Size:", pdfBuffer.length);

    const buffer = Buffer.from(pdfBuffer);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

    res.setHeader("Content-Length", buffer.length);

    res.end(buffer);
  } catch (error) {
    console.error("PDF ERROR:", error);

    return res.status(500).json({
      error: "PDF generation failed",
      details: String(error),
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
});

const PORT = 4000;

const server = app.listen(PORT, () => {
  console.log(`PDF Service running on http://localhost:${PORT}`);
});

server.on("error", (err) => {
  console.error("SERVER ERROR:", err);
});

// Keep process alive for debugging
setInterval(() => {
  console.log("Server heartbeat...");
}, 60000);
