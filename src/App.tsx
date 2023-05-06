import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Category from "./Category";

interface cardData {
  id: any;
  name: String;
  teacher: String | null;
  category_id: Number;
  type: any;
  description: String;
  created_at: String;
  updated_at: String;
  prerequisites: String | null;
  parentId: Number | null;
}

function App() {
  const [data, setData] = useState<{ data: cardData[] }>({
    data: [],
  });
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://xcool.in/api/test5m23",
      headers: {
        'token': '1|FWItRXH5DCAN9rjBjIhfH9KMnprvKZweoK2Jfi5T', 
        'Authorization': 'Bearer 1|FWItRXH5DCAN9rjBjIhfH9KMnprvKZweoK2Jfi5T', 
      },
    };

    axios
      .request(config)
      .then((response) => {
        setData(response);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      {data.data
        ?.filter(
          (music: { type: string; parentId: any }) =>
            music.type === "Category" && !music.parentId
        )
        .map((musicCard: { id?: React.Key | null | undefined; name?: any }) => {
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
        })}
    </Box>
  );
}

export default App;
