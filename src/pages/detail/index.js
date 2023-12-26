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
import { dataFakeCategory, dataFakeVideo } from "../home/fakeData";
import CategoryItem from "../../component/CategoryItem";
import { AspectRatio } from "@mui/joy";
import VideoItem from "../../component/VideoItem";

const Detail = () => {
  const [category, setCategory] = useState(1);
  // const [playing, setPlaying] = useState(false);
  return (
    <Box>
      <CssBaseline />
      <Grid container width="100%" justifyContent="center">
        <Grid
          width={{
            xs: "100%",
            sm: "80%",
            md: "70%",
          }}
        >
          <AspectRatio sx={{ marginBottom: 2 }}>
            <ReactPlayer
              width="100%"
              height="100%"
              playsinline={true}
              // url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
              url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls={true}
            />
          </AspectRatio>

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

          <Grid
            marginTop={1}
            container
            spacing={2}
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {dataFakeVideo.map(({ id, title, view, time, src }) => (
              <Grid item sm={6} md={4} xs={12}>
                <VideoItem
                  key={id}
                  title={title}
                  view={view}
                  time={time}
                  src={src}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
