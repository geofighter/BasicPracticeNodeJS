const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    "message": "Principal Path"
  });
});

app.get('/cars', (req, res) => {
  res.json(
    [
      {
        "id": 1,
        "team": "RedBull",
        "tyres": "Pirelli"
      },
      {
        "id": 2,
        "team": "Ferrari",
        "tyres": "Pirelli"
      },
      {
        "id": 3,
        "team": "Aston Martin",
        "tyres": "Pirelli"
      },
      {
        "id": 4,
        "team": "McLaren",
        "tyres": "Pirelli"
      },
      {
        "id": 5,
        "team": "Mercedes",
        "tyres": "Pirelli"
      },
    ]
  );
});

app.get('/car/:id', (req, res) => {
  const { id } = req.params;
  const data = {
    "id": 5,
    "team": "Mercedes",
    "tyres": "Pirelli"
  };
  const message = {
    "message": "Car not found :("
  }

  id == data.id ? res.json(data) : res.json(message);

});

app.listen(port, () => {
  console.log(`Basic API runs on port: ${port}`);
});
