import { Button, Flex, FlexProps, HStack, Spinner } from "@chakra-ui/react";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { createContext } from "react";
import { useSteps } from "../../hooks/useSteps";
import { IStepsData } from "../../interfaces/stepInterfaces";
import Step from "./Step/Step";

let counter = 0;

interface KanbanContextValues {
  steps: IStepsData[];
}

export const KanbanContext = createContext({} as KanbanContextValues);

export default function Kanban() {
  const { steps } = useSteps();

  function onDragEndHandler(e: DropResult) {
    console.log(e.source.droppableId);
    console.log(e.destination?.droppableId);
  }

  return steps !== undefined ? (
    <KanbanContext.Provider value={{ steps }}>
      <DragDropContext onDragEnd={onDragEndHandler} >
        <Flex {...KanbanStyle}>
          {counter}
          <Flex gap={3}>
            <Button colorScheme={"blue"}>Criar Etapa</Button>
          </Flex>
          <Droppable droppableId="100" direction="horizontal" type="column">
            {(provided) => (
              <Flex
                {...provided.droppableProps}
                overflow={"scroll"}
                gap={4}
                h={"100%"}
                ref={provided.innerRef}
              >
                {steps.map((step) => (
                  <Step key={String(step.id)} step={step} />
                ))}
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </Flex>
      </DragDropContext>
    </KanbanContext.Provider>
  ) : (
    <Spinner />
  );
}

const KanbanStyle: FlexProps = {
  bgColor: "gray.100",
  w: "100%",
  h: "100%",
  direction: "column",
  gap: 4,
  p: "20px",
};
