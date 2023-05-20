import { request } from ".";
import { StepBody, IStepsData } from "../../interfaces/stepInterfaces";

export async function getSteps() {
  const { data } = await request.get<IStepsData[]>("/steps");
  return data;
}

export async function getStepById(stepId: number) {
  const { data } = await request.get<IStepsData>(`/steps/${stepId}`);
  return data;
}

export async function updateStepById(stepId: number, body: StepBody) {
  await request.put(`/steps/${stepId}`, body);
}
