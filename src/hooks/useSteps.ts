import { useMutation, useQuery } from "react-query";
import { IStepsData } from "../interfaces/stepInterfaces";
import { getSteps } from "../services/api/stepRequests";

export function useSteps() {
  const { data: steps, refetch: refetchSteps } = useQuery<IStepsData[]>({
    queryKey: "steps",
    queryFn: getSteps,
  });

  const {mutate: updateStepsOrder} = useMutation({})

  return {
    steps,
  };
}
