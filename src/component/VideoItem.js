import { AspectRatio, Divider, Typography } from "@mui/joy";
import { CardActionArea, Card, Box } from "@mui/material";
import { useState } from "react";

const VideoItem = ({ title, view, time, onClick, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: {
          xs: "100%",
          md: "100%",
        },
        height: "100%",
      }}
    >
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box width="100%">
          <AspectRatio
            sx={{
              width: {
                xs: "100%",
                md: "100%",
              },
            }}
          >
            {isHovered ? (
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                muted
                autoPlay
              />
            ) : (
              <img src={src} loading="lazy" alt="" />
            )}

            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                backgroundColor: "#222222",
                bottom: 4,
                right: 4,
                paddingLeft: 1,
                paddingRight: 1,
                paddingTop: 0,
                paddingBottom: 0,
                borderRadius: 1,
                color: "white",
                fontWeight: "bold",
              }}
              level="body-xs"
            >
              {time}
            </Typography>
          </AspectRatio>

          <Box sx={{ padding: 2, paddingTop: 1, paddingBottom: 1 }}>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                bgcolor: "white",
                fontWeight: "bold",
              }}
              level="title-md"
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#f0f4f8",
            width: "100%",
            display: "flex",
            padding: 2,
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            {view} views
          </Typography>
          <Divider
            sx={{ marginLeft: 2, marginRight: 2 }}
            orientation="vertical"
          />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            1 hour ago
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default VideoItem;
