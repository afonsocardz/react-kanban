import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Select, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { KanbanContext } from "../Kanban";
import { StepContext } from "./Step";

export default function StepHeader() {
  const { step, updateStep } = useContext(StepContext);
  const { steps } = useContext(KanbanContext);
  return (
    <>
      <HStack spacing={2}>
        <EditIcon onClick={() => updateStep({ name: "novo" })} />
        <DeleteIcon />
      </HStack>
      <Text>{step.name}</Text>
      <HStack spacing={3}>
        <Select defaultValue={step.order} w={"70px"}>
          {steps.map(({ order }) => (
            <option key={`step${order}`} value={order}>
              {order}
            </option>
          ))}
        </Select>
        <IconButton aria-label="Adicionar Card" icon={<AddIcon />} />
      </HStack>
    </>
  );
}
