import { Box, HStack, Tag, TagLabel } from "@chakra-ui/react";
import { Draggable } from "@hello-pangea/dnd";
import { CardReturnData } from "../../../interfaces/cardInterfaces";

export default function Card({ card }: { card: CardReturnData }) {
  return (
    <Draggable draggableId={String(card.id)} index={card.order - 1}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Box
            bgColor={"gray.400"}
            w={"270px"}
            h={"270px"}
            borderRadius={"md"}
            p={"15px"}
          >
            <HStack gap={2} overflow={"scroll"}>
              <Tag colorScheme={"red"}>
                <TagLabel>HOT hot hot</TagLabel>
              </Tag>
            </HStack>
          </Box>
        </div>
      )}
    </Draggable>
  );
}
