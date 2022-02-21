import { DialogHeader } from "./DialogHeader";
import { Button } from "../shared";

import * as Styled from "./Modal.styled";

export const Dialog = (props) => {
  return (
    <Styled.Dialog
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-labelledby="dialog"
      aria-modal="true"
    >
      <DialogHeader />
      <form>
        <label>Client</label>
        <input type="text"></input>
        <label>Activity</label>
        <input type="text"></input>
        <label>Date</label>
        <input type="date"></input>
        <label>From</label>
        <input type="time"></input>
        <label>To</label>
        <input type="time"></input>
      </form>
      <span>Total</span>
      {/* <Button
        icon={false}
        label="Add time entry"
        onClick={() => setIsModalActive(false)}
        style="secondary"
      /> */}
    </Styled.Dialog>
  );
};
