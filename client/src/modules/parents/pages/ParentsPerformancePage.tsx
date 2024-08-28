import { useContextParent } from "../hooks";
import { Performance, PerformanceSkeleton } from "../../../components";

export default function ParentsPerformancePage() {
  const { overviewData } = useContextParent();

  if (overviewData === null) return <PerformanceSkeleton />;

  return (
    <Performance
      evaluations={overviewData.evaluationsByPeriod[0].evaluations}
    />
  );
}
