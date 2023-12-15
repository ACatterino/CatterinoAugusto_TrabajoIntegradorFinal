import React from "react";
import {useDispatch} from "react-redux"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";



import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { fetchPosts } from "../redux/slices/post";

// Home component
export const Home = () => {
  const dispatch = useDispatch();

React.useEffect(() => {
  dispatch(fetchPosts());
}, [dispatch]);
  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="Nuevos" />
        <Tab label="Populares" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map((_, index) => (
            <Post
              key={index}
              id={index + 1}
              title="Recorriendo Italia"
              imageUrl="https://acortar.link/IbVGDb"
              user={{
                avatarUrl:
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
                fullName: "Lucas",
              }}
              createdAt={"12 de junio de 2023."}
              viewsCount={150}
              commentsCount={3}
              tags={["Italia", "Paseando", "Maravillas"]}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={["Italia", "Paseando", "Maravillas"]}
            isLoading={false}
            key="tags" // Agregar una clave única
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Tomas Gomez",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Hermoso lugar, gracias por compartirlo con nosotros!",
              },
              {
                user: {
                  fullName: "Lucio Tascani",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "Me encanto la foto! disfruten y pasenla lindo!",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
