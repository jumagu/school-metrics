import "chart.js/auto";
import { Pie } from "react-chartjs-2";

import { Box } from "@mui/material";
import { Evaluation } from "../../../interfaces";
import { generateRandomColor } from "../../../utils";

interface EvalutionResultsChartProps {
  evaluations: Evaluation[];
}

export const EvaluationResultsChart = ({
  evaluations,
}: EvalutionResultsChartProps) => {
  const data = {
    labels: evaluations.map((ev) => ev.nameEvaluation),
    datasets: [
      {
        data: evaluations.map((ev) => ev.evaluationResult.mark),
        backgroundColor: evaluations.map(() => generateRandomColor()),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="auto"
      mt={2}
      overflow="scroll"
    >
      <Pie data={data} style={{ height: "auto", maxHeight: "300px" }} />
    </Box>
  );
};
