import { Box, Button } from "@mui/material";
import { FC } from "react";
import { Size } from "../../interfaces";

interface Props {
  selectedSize?: Size;
  sizes: Size[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "info" : "primary"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
