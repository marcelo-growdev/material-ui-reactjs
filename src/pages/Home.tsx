import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PaperDefault from "../components/PaperDefault/PaperDefault";

const Home: React.FC = () => {
  const test = 0;

  const text = ` Lorem ipsum dolor sit amet consectetur
   adipisicing elit. Nam, rem, corporis recusandae fugit 
   sapiente aut consequuntur corrupti minima velit modi tempora 
   facere autem quia animi perferendis molestias tenetur voluptatem aliquam.
   `;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Home
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PaperDefault elevation={3} title="Primeiro" body={text} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PaperDefault elevation={3} title="Segundo" body={text} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PaperDefault elevation={3} title="Terceiro" body={text} />
      </Grid>
    </Grid>
  );
};

export default Home;
