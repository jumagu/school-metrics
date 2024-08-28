import { Box } from "@mui/material";

import { Bar } from "react-chartjs-2";

interface EvaluationsByCourseChartProps {
  data: any;
}

export const EvaluationsByCourseChart = ({
  data,
}: EvaluationsByCourseChartProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      mt={2}
    >
      <Bar data={data} style={{ maxHeight: "200px" }} />
    </Box>
  );
};
