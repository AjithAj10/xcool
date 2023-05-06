import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface SubCourseProps {
  data: {
    data: {
      id: string;
      parentId: string;
      name: string;
      type: string;
      category_id: string;
    }[];
  };
  course: string;
 
}

const SubCourse: React.FC<SubCourseProps> = ({ data, course }) => {
  return (
    <>
      {data.data
        .filter(
          (superChild) =>
            superChild.parentId === course && superChild.parentId
        )
        .map((subChild) => {
          return (
            <Card
              key={subChild.id}
              sx={{
                margin: "1em",
                marginLeft:'5.4em',
                width: "50%",borderRadius:'10px',
                boxShadow: 'rgba(0, 0, 0, 0.74) 0px 3px 8px',
                backgroundColor: 'rgb(220, 108, 138)', color:'white'
                
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  {subChild.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
}

export default SubCourse;
