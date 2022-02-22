import { useState } from "react";

import { Button } from "../../shared/Button";
import { Modal } from "../../modal/Modal";
import { Timesheets } from "./timesheets/Timesheets";

import * as Styled from "./Subheader.styled";

export const Subheader = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const handleClose = () => {
    setIsModalActive(false);
  };

  return (
    <Styled.Subheader>
      <Timesheets />

      <Styled.Modal>
        <Modal isActive={isModalActive} onClose={handleClose}>
          <p>Hi viewers!</p>
        </Modal>
      </Styled.Modal>

      <Button
        icon={true}
        label="New time entry"
        onClick={() => setIsModalActive(true)}
        variety="primary"
      />
    </Styled.Subheader>
  );
};
