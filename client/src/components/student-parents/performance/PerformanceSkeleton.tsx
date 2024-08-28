import { Box, Skeleton } from "@mui/material";

import { CustomCard } from "../../ui/CustomCard";

export const PerformanceSkeleton = () => {
  return (
    <Box height={{ md: "100%" }} display="flex" flexDirection="column" gap={2}>
      <Box
        height={{ sm: "50%" }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
      >
        <CustomCard
          heading="Grading Progress"
          headingVariant="h5"
          sx={{ width: "100%" }}
        >
          <Skeleton variant="rounded" height="100%" sx={{ mt: 2 }} />
        </CustomCard>

        <CustomCard
          heading=" Global Evaluation by Course"
          headingVariant="h5"
          sx={{ width: "100%" }}
        >
          <Skeleton variant="rounded" height="100%" sx={{ mt: 2 }} />
        </CustomCard>
      </Box>

      <Box
        height={{ sm: "50%" }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={2}
      >
        <CustomCard
          heading="Distribution of Grades by Evaluation"
          headingVariant="h5"
          sx={{ width: "100%" }}
        >
          <Skeleton variant="rounded" height="100%" sx={{ mt: 2 }} />
        </CustomCard>

        <CustomCard
          heading="Evalutions by Course"
          headingVariant="h5"
          sx={{ width: "100%" }}
        >
          <Skeleton variant="rounded" height="100%" sx={{ mt: 2 }} />
        </CustomCard>
      </Box>
    </Box>
  );
};
