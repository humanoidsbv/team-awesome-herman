import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { StoreProvider } from "../../../providers/StoreProvider";
import { Button } from "../../shared/Button";

describe("Activate modal", () => {
  const setIsModalActive = jest.fn();
  const buttonLabel = "Add new time entry";

  it("Press button, setIsModalActive gets called", () => {
    render(
      <StoreProvider>
        <Button icon label={buttonLabel} onClick={() => setIsModalActive(true)} variety="primary" />
      </StoreProvider>,
    );

    const activateModalButton = screen.getByText("Add new time entry");
    fireEvent.click(activateModalButton);
    expect(setIsModalActive).toBeCalled();
  });
});
