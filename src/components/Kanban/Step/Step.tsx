import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Select,
  StackProps,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { createContext } from "react";
import useStep from "../../../hooks/useStep";
import {
  IStepsData,
  UpdateStepMutateFunction,
} from "../../../interfaces/stepInterfaces";
import Card from "../Card/Card";
import StepHeader from "./StepHeader";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface StepContextValues {
  step: IStepsData;
  updateStep: UpdateStepMutateFunction;
}

interface IStepProps {
  step: IStepsData;
}

export const StepContext = createContext({} as StepContextValues);

export default function Step({ step }: IStepProps) {
  const { step: updatedStep, updateStep } = useStep(step.id);
  step = updatedStep !== undefined ? updatedStep : step;
  return (
    <StepContext.Provider value={{ step, updateStep }}>
      <Draggable draggableId={String(step.id)} index={step.order - 1}>
        {(provided) => (
          <VStack
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <StepHeader />
            <Droppable droppableId={String(step.id)} type="card">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ gap: 3 }}
                >
                  <VStack spacing={3} {...StepStyle}>
                    {step.Card.map((card) => (
                      <Card key={String(card.id)} card={card} />
                    ))}
                    {provided.placeholder}
                  </VStack>
                </div>
              )}
            </Droppable>
          </VStack>
        )}
      </Draggable>
    </StepContext.Provider>
  );
}

const StepStyle: StackProps = {
  direction: "column",
  w: "300px",
  h: "max",
  spacing: 3,
  bgColor: "gray.300",
  borderRadius: "md",
  p: "15px",
};
