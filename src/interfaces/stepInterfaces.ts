import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseMutateFunction,
} from "react-query";
import { CardReturnData } from "./cardInterfaces";

export interface IStepsData {
  id: number;
  name: string;
  color: string;
  order: number;
  pipeId: number;
  stepId: number;
  Card: CardReturnData[];
}

export type StepBody = Partial<Omit<IStepsData, "id" | "Card">>;

export type UpdateStepMutateFunction = UseMutateFunction<
  void,
  unknown,
  Partial<Omit<IStepsData, "id" | "Card">>,
  unknown
>;
