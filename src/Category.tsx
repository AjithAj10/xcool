import React from "react";
import Course from "./Course";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CategoryProps {
    data: {
        data: any;
      };
    musicCard: any;
  }


const Category: React.FC<CategoryProps> = ({ data, musicCard }) => {
  // const data = useSelector(state => state.musicData)
  return (
    <>
      {" "}
      {data.data
        .filter(
          (e: { type: string; parentId: any }) =>
            e.type === "Category" && e.parentId === musicCard.id
        )
        .map(
          (item: {
            id: React.Key | null | undefined;
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <span key={item.id}>
                <Card
                  sx={{
                    margin: "1em",
                    width: "50%",
                    borderRadius: "10px",
                    marginLeft: "2em",
                    boxShadow: "rgba(0, 0, 0, 0.64) 0px 3px 8px",
                    backgroundColor: "rgb(102, 52, 127)",
                    color: "white",
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
                <Course data={data} item={item} />
              </span>
            );
          }
        )}
    </>
  );
};

export default Category;
