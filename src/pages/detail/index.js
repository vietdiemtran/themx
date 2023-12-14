import {
  FastForward,
  FastRewind,
  Pause,
  PauseCircleFilledOutlined,
  PauseOutlined,
  PlayArrow,
  PlayArrowOutlined,
  PlayCircle,
  PlayLesson,
  SkipNext,
  VolumeUp,
  VolumeUpOutlined,
  VolumeUpRounded,
  VolumeUpSharp,
  VolumeUpTwoTone,
} from "@mui/icons-material";
import { Box, CssBaseline, Grid } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";
import { dataFakeCategory } from "../home/fakeData";
import CategoryItem from "../../component/CategoryItem";

const Detail = () => {
  const [category, setCategory] = useState(0);
  return (
    <Box>
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid height={500} width="auto" sx={{ backgroundColor: "black" }}>
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            // url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            controls={true}
          />

          {dataFakeCategory.map(({ id, value }) => (
            <CategoryItem
              key={id}
              isSelect={category === id}
              value={value}
              onClick={() => {
                setCategory(id);
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
