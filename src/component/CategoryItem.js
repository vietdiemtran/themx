import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const CategoryItem = ({ isSelect, onClick, value }) => {
  return (
    <Button
      onClick={onClick}
      size="small"
      sx={{
        backgroundColor: isSelect ? "black" : "#EEEEEE",
        color: isSelect ? "white" : "black",
        borderRadius: 2,
        paddingX: 2,
        marginRight: 1,
        fontWeight: "bold",
        marginTop: 1,
        ":hover": {
          backgroundColor: isSelect ? "#444444" : "#DDDDDD",
        },
      }}
    >
      {value}
    </Button>
  );
};

export default CategoryItem;
