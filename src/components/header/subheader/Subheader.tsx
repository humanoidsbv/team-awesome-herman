import { useState } from "react";

import { Button } from "../../shared/Button";
import { Modal } from "../../modal/Modal";
import { Timesheets } from "./timesheets/Timesheets";

import * as Styled from "./Subheader.styled";

export const Subheader = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Styled.Subheader>
      <Timesheets />

      <Styled.Modal>
        <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
          <p>Hi viewers!</p>
        </Modal>
      </Styled.Modal>

      <Button
        icon={true}
        label="New time entry"
        onClick={() => setIsModalActive(true)}
        style="primary"
      />
    </Styled.Subheader>
  );
};
