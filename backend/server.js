const express = require("express");
const app = express();

// Middleware en routes hier
app.get("/", (req, res) => {
  res.send("Test ok!!!!!!!!!!!");
});

// Start de server alleen als dit bestand direct wordt uitgevoerd
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Exporteer de app zonder de server te starten
module.exports = app;
