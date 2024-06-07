export interface ITask {
  id?: string;
  title: string;
  description: string;
  started?: boolean;
  startTime?: Date;
  endTime?: Date;
  completed?: boolean;
  deferred?: boolean;
  discarded?: boolean;
}
