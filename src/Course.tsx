import React from "react";
import SubCourse from "./SubCourse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CourseProps {
    data: {
        data: any;
      };
  item: {
    id: React.Key | null | undefined;
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}

const Course: React.FC<CourseProps> = ({ data, item }) => {
  return (
    <>
      {" "}
      {data.data
        .filter(
          (e: {
            category_id: React.Key | null | undefined;
            type: string;
            parentId: any;
          }) =>
            item.id === e.category_id &&
            e.type !== "Category" &&
            !e.parentId
        )
        .map((course: { id: string; name: string }) => {
          return (
            <span key={course.id}>
              <Card
                sx={{
                  margin: "1em",
                  marginLeft: "3.5em",
                  width: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.64) 0px 3px 8px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(158, 71, 132)",
                  color: "white",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {course.name}
                  </Typography>
                </CardContent>
              </Card>
              <SubCourse course={course.id} data={data} />
            </span>
          );
        })}
    </>
  );
};

export default Course;
