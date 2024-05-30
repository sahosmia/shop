import { Box, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

type PriceFilterProps = {
  minPrice?: number;
  maxPrice?: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice = 0,
  maxPrice = 1000,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  const [value, setValue] = useState<number[]>([minPrice, maxPrice]);
  const theme = useTheme();

  // Sync the local state with props
  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleChange = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    const [newMin, newMax] = newValue;

    if (activeThumb === 0) {
      setValue([Math.min(newMin, value[1]), value[1]]);
      onMinPriceChange(Math.min(newMin, value[1]));
    } else {
      setValue([value[0], Math.max(newMax, value[0])]);
      onMaxPriceChange(Math.max(newMax, value[0]));
    }
  };

  return (
    <div className="">
      <h6 className="text-xl font-medium text-primary2 pb-2">Price Range</h6>

      <Box sx={{ width: 300 }}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          min={0}
          max={2500} // Adjust the min and max values as per your requirement
          sx={{
            color: theme.palette.primary.main, // Use main color from the theme
            "& .MuiSlider-thumb": {
              backgroundColor: theme.palette.secondary.main, // Thumb color from the theme
            },
            "& .MuiSlider-rail": {
              backgroundColor: theme.palette.grey[400], // Rail color
            },
            "& .MuiSlider-track": {
              backgroundColor: theme.palette.primary.dark, // Track color
            },
          }}
        />
      </Box>
    </div>
  );
};

export default PriceFilter;
