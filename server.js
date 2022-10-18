const PORT = 8000;
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();

const app = express();
app.get("/flights", (req, res) => {
  const options = {
    url: "https://185fc11c-be89-4d52-b627-5907411bade6-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures",
    headers: {
      accept: "application/json",
      "X-Cassandra-Token":
        "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiJlOTIxMGNiMy1iNDExLTQ4NmMtYjMwOS05N2ZhZmEwY2VjNjUiLCJleHAiOjE2NjYwODUwMzIsIm5iZiI6MCwiaWF0IjoxNjY2MDQ5MDMyLCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiNWMyYjQxYjEtMWRkNS00ODJiLThiMTUtMzc0YjM0ZjEyNWM3IiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjY2MDQ5MDMyLCJzZXNzaW9uX3N0YXRlIjoiNzE5NGQ0NmYtYzdiMC00NGY5LWE0ZDYtNWQzYjFlYTQzM2U2IiwiYWNyIjoiMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6Ikdlb3JnaWUgQWRvbHBoZSIsInByZWZlcnJlZF91c2VybmFtZSI6Imdlb3JnaWVfODQxQHlhaG9vLmNvbSIsImdpdmVuX25hbWUiOiJHZW9yZ2llIiwiZmFtaWx5X25hbWUiOiJBZG9scGhlIiwiZW1haWwiOiJnZW9yZ2llXzg0MUB5YWhvby5jb20ifQ.VMIq9sKmhbihI3nCCn7kLufz3-gfrHKkoWb5GpsVNHF5EcSA-qcG37rrLZi3fYyYMoLS9zIrfMJqJy1MwFWx3DiUt89V6EgKFtDUZcViQXCepmkxLi5_8i3lfP7-kxl1uEaNHYGZk8_J71f4OaY_YZrOqY99B58FnAR6akkUhOD_lkyxNpCZDuBp0MTYssGl6iXO65W5siCIBlXd9-Z-gpxmGDzYtcSgYGMLqXVzmrZ9xZNt7hURqbxBdLc7-0jj3Y3XBvZWHOrVdjqR442CmC2XlYLP12aA-auXjfjwEfROJ8TPy-CEdScwKTJwJqL1o057-9Bp3Gdo0oIfci1piw",
    },
  };
   axios
     .request(options)
     .then((response) => {
       console.log(response.data);
       res.json(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
  
});
app.listen(PORT, () => console.log("running on port " + PORT));
