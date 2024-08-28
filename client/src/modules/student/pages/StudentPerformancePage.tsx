import { useContextStudent } from "../hooks";
import { Performance, PerformanceSkeleton } from "../../../components";

export default function StudentPerformancePage() {
  const { overviewData } = useContextStudent();

  if (overviewData === null) return <PerformanceSkeleton />;

  return (
    <Performance
      evaluations={overviewData.evaluationsByPeriod[0].evaluations}
    />
  );
}
