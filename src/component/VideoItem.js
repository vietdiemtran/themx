import { AspectRatio, Divider, Typography } from "@mui/joy";
import { CardActionArea, Card, Box } from "@mui/material";

const VideoItem = ({ title, view, time, onClick }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: {
          xs: 320,
          sm: 400,
          md: 420,
          lg: 420,
        },
        marginTop: 2,
        marginRight: 2,
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          justifyContent: "space-between",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <AspectRatio
            sx={{
              width: {
                xs: 320,
                sm: 400,
                md: 420,
                lg: 420,
              },
            }}
            ratio="2"
          >
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
            />
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
            flexDirection: "row",
            justifyContent: "flex-start",
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
