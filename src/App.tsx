import { useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { Weather, useWeathers } from "./hooks/useWeathers";

function App() {
  const [activeWeather, setActiveWeather] = useState<Weather | null>(null);
  const { data, isLoading, isError } = useWeathers();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        px: 5,
        pb: 3,
        m: 2,
      }}
    >
      <Typography variant="h1" py={2}>
        Check the weather
      </Typography>

      {isError && (
        <Typography variant="body1" color="#8b0000" pb={1}>
          Unfortunately we couldn't get the weather information. Try again
          later!
        </Typography>
      )}

      {isLoading && !data && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}

      {data?.length && (
        <>
          <Typography variant="body1" pb={1}>
            We have these options available:
          </Typography>

          <Box display="flex" justifyContent="center" sx={{ flexWrap: "wrap" }}>
            {data.map((weather) => (
              <Chip
                key={weather.id}
                color="primary"
                variant={
                  activeWeather?.address !== weather.address
                    ? "outlined"
                    : undefined
                }
                label={weather.address.toLowerCase()}
                onClick={() => setActiveWeather(weather)}
                sx={{ m: "4px", textTransform: "capitalize" }}
              />
            ))}
          </Box>
        </>
      )}

      {activeWeather && (
        <Box pt={3}>
          <Typography>Temperature: {activeWeather.temp} °C</Typography>
          <Typography>Feels like: {activeWeather.feelslike} °C</Typography>
        </Box>
      )}
    </Box>
  );
}

export default App;
