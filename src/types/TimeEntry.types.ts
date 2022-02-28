export interface TimeEntryProps {
  activity?: string;
  date?: string;
  timeTo?: string;
  timeFrom?: string;
  client: string;
  id: number;
  startTimestamp: string;
  stopTimestamp: string;
}
