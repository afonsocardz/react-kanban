export interface CardReturnData {
  id: number;
  title: string;
  dueDate?: Date;
  commentsCount: number;
  assigneeUsers: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
  finishedAt: Date;
  formId: number;
  currentStepId: number;
  CardInput: CardInput[];
  CardTag?: CardTag[];
}

export interface CardInput {
  id?: number;
  value?: string;
  rawValues: string[];
  values: Option[];
  cardId: number;
  inputId: number;
  Input?: Input[];
}

export interface Option {
  label: string;
}

export enum InputTypesEnum {
  assigneeUser = "assigneeUser",
  shortText = "shortText",
  longText = "longText",
  currency = "currency",
  numeric = "numeric",
  checkList = "checkList",
  radioList = "radioList",
  dueDate = "dueDate",
  phone = "phone",
  bant = "bant",
  tag = "tag",
  connectPipe = "connectPipe",
  connectData = "connectData",
}

interface Input {
  id: number;
  label: string;
  options: Object[];
  isRequired: boolean;
  order: number;
  inputType: InputTypesEnum;
  formId: number;
}

export interface CardTag {
  id: number;
  cardId: number;
  tagId: number;
  Tag: Tag;
}

export interface Tag {
  id: number;
  name: string;
  color: string;
  pipeId: number;
}
