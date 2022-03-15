import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { Button } from "../shared";
import { DialogHeader } from "./DialogHeader";

import * as Styled from "./DialogNewTimeEntry.styled";
import * as Types from "../../types/TimeEntry.types";
import { TimeEntryProps } from "../../types/TimeEntry.types";

interface DialogNewTimeEntryProps {
  dialogHeaderTitle: string;
  onClose: () => void;
  setTimeEntries: Dispatch<SetStateAction<TimeEntryProps[]>>;
  timeEntries: TimeEntryProps[];
}

interface inputValidityProps {
  activity: boolean;
  client: boolean;
  date: boolean;
  timeFrom: boolean;
  timeTo: boolean;
}

export const DialogNewTimeEntry = ({
  dialogHeaderTitle,
  onClose,
  timeEntries,
  setTimeEntries,
}: DialogNewTimeEntryProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntryProps>(
    {} as Types.TimeEntryProps,
  );

  const formRef = useRef<HTMLFormElement | null>(null);

  const [isFormValid, setIsFormValid] = useState<boolean>();
  const [inputValidity, setInputValidity] = useState<inputValidityProps>({} as inputValidityProps);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setInputValidity({ ...inputValidity, [target.name]: target.checkValidity() });
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  const [addTimeEntry] = useMutation(
    gql`
      mutation CreateTimeEntry(
        $activity: String!
        $client: String!
        $startTimestamp: String!
        $stopTimestamp: String!
      ) {
        createTimeEntry(
          activity: $activity
          client: $client
          startTimestamp: $startTimestamp
          stopTimestamp: $stopTimestamp
        ) {
          activity
          client
          startTimestamp
          stopTimestamp
        }
      }
    `,
    {
      onCompleted: (data) => setTimeEntries([...timeEntries, data.createTimeEntry]),
    },
  );

  const handleSubmit = async () => {
    const startTimestamp = new Date(`${newTimeEntry.timeFrom} ${newTimeEntry.date}`).toISOString();
    const stopTimestamp = new Date(`${newTimeEntry.timeTo} ${newTimeEntry.date}`).toISOString();

    const newTimeEntryFormatted = {
      ...newTimeEntry,
      startTimestamp,
      stopTimestamp,
    };

    delete newTimeEntryFormatted.timeFrom;
    delete newTimeEntryFormatted.timeTo;

    addTimeEntry({
      variables: {
        activity: newTimeEntryFormatted.activity,
        client: newTimeEntryFormatted.client,
        startTimestamp: newTimeEntryFormatted.startTimestamp,
        stopTimestamp: newTimeEntryFormatted.stopTimestamp,
      },
    });
  };

  return (
    <Styled.Dialog
      aria-labelledby="dialog"
      aria-modal="true"
      data-cy="dialog"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
    >
      <DialogHeader onClose={onClose} dialogHeaderTitle={dialogHeaderTitle} />

      <form ref={formRef}>
        <label htmlFor="client">
          Client
          <input
            data-cy="client-input"
            id="client"
            name="client"
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.client}
          />
        </label>

        {inputValidity.client === false && <span>Required field.</span>}
        <label htmlFor="activity">
          Activity
          <input
            data-cy="activity-input"
            id="activity"
            name="activity"
            onChange={handleChange}
            required
            type="text"
            value={newTimeEntry.activity}
          />
        </label>

        {inputValidity.activity === false && <span>Required field.</span>}
        <Styled.FormDateTime>
          <Styled.FormDate>
            <label htmlFor="date">
              Date
              <input
                data-cy="date-input"
                id="date"
                name="date"
                onChange={handleChange}
                required
                type="date"
                value={newTimeEntry.date}
              />
            </label>

            {inputValidity.date === false && <span>Required field.</span>}
          </Styled.FormDate>
          <Styled.FormTimeFrom>
            <label htmlFor="timefrom">
              From
              <input
                data-cy="timefrom-input"
                id="timefrom"
                name="timeFrom"
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.timeFrom}
              />
            </label>

            {inputValidity.timeFrom === false && <span>Required field.</span>}
          </Styled.FormTimeFrom>
          <Styled.FormTimeTo>
            <label htmlFor="timeto">
              To
              <input
                data-cy="timeto-input"
                id="timeto"
                name="timeTo"
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.timeTo}
              />
            </label>

            {inputValidity.timeTo === false && <span>Required field.</span>}
          </Styled.FormTimeTo>
        </Styled.FormDateTime>
      </form>

      <Styled.DialogButtons>
        <Button icon={false} label="Cancel" onClick={onClose} variety="secondary" />
        <Button
          icon={false}
          label="Add time entry"
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </Styled.DialogButtons>
    </Styled.Dialog>
  );
};
