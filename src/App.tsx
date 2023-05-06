import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Category from "./Category";


function App() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://xcool.in/api/test5m23",
      headers: {
        token: "1|FWItRXH5DCAN9rjBjIhfH9KMnprvKZweoK2Jfi5T",
        Authorization: "Bearer 1|FWItRXH5DCAN9rjBjIhfH9KMnprvKZweoK2Jfi5T",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <Box>
      {data ?
        data.data &&
        data.data.filter(
            (music: { type: string; parentId: any }) =>
              music.type === "Category" && !music.parentId
          )
          .map((musicCard: { id?: any; name?: any }) => {
            return (
              <span key={musicCard?.id}>
                <Card
                  sx={{
                    margin: "1em",
                    width: "50%",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.64) 0px 3px 8px",
                    backgroundColor: "rgb(43, 34, 69)",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {musicCard?.name}
                    </Typography>
                  </CardContent>
                </Card>
                <Category data={data} musicCard={musicCard} />
              </span>
            );
          }) : <Typography variant="h4">Loading...</Typography>}
    </Box>
  );
}

export default App;
