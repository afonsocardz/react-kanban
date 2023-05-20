import { useMutation, useQuery } from "react-query";
import { IStepsData, StepBody } from "../interfaces/stepInterfaces";
import { getStepById, updateStepById } from "../services/api/stepRequests";

export default function useStep(stepId: number) {
  const { data: step, refetch: refetchStep } = useQuery<IStepsData>({
    queryKey: ["step", stepId],
    queryFn: () => getStepById(stepId),
    enabled: false,
  });

  const { mutate: updateStep } = useMutation({
    mutationFn: (body: StepBody) => updateStepById(stepId, body),
    onSuccess: async () => await refetchStep(),
  });

  return {
    step,
    updateStep,
  };
}
