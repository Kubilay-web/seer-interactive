const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(cors());

app.use((req, res, next) => {
  // Temiz URL oluştur
  const cleanUrl = req.protocol + "://" + req.get("host") + req.path;

  // Eğer sorgu parametreleri varsa yönlendir
  if (req.query && Object.keys(req.query).length > 0) {
    return res.redirect(cleanUrl);
  }

  next(); // İleriye devam et
});

app.use(express.static(path.join(__dirname, "/public")));
app.use("/public", express.static(path.join(__dirname, "public")));

//EN

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "Index", "index.html")
  );
});

app.get("/work/case-studies", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "case-studies", "index.html")
  );
});

app.get("/insights", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "insights", "index.html")
  );
});

app.get("/insights/tag/events-webinars", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "events-webinars", "index.html")
  );
});

app.get("/work/seo", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "events-webinars", "index.html")
  );
});

app.get("/work/paid-media", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "paid-media", "index.html")
  );
});

app.get("/work/analytics", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "analytics", "index.html")
  );
});

app.get("/work/creative", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "creative", "index.html")
  );
});

app.get("/work/cro", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-En", "cro", "index.html"));
});

app.get("/work", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "work", "index.html")
  );
});

app.get("/work/ai", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Index-En", "ai", "index.html"));
});

app.get("/work/technology", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "technology", "index.html")
  );
});

app.get("/people", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "people", "index.html")
  );
});

app.get("/people/team", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "team", "index.html")
  );
});

app.get("/uplift-others", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "uplift-others", "index.html")
  );
});

app.get("/b-corp", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "b-corp", "index.html")
  );
});

app.get("/careers", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "careers", "index.html")
  );
});

app.get("/contact", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "Index-En", "contact", "index.html")
  );
});

//EN

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
