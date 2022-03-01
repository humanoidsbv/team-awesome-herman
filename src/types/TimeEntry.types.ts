export interface TimeEntryProps {
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
  activity?: string;
  date?: string;
  timeTo?: string;
  timeFrom?: string;
}
