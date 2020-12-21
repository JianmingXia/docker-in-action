const Koa = require("koa");
const puppeteer = require("puppeteer-core");
// const command = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const command = 'google-chrome'

const app = new Koa();

app.use(async ctx => {
  console.log(`${new Date()}receiving request....`);
  const browser = await puppeteer.launch({executablePath: command, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto("https://segmentfault.com/", { waitUntil: "networkidle2" });
  const pdf = await page.pdf({ format: "A4" });

  await browser.close();

  ctx.set('Content-Type', 'application/pdf')
  ctx.set('Content-Disposition', 'attachment; filename="test.pdf";')
  ctx.body = pdf;
});

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
