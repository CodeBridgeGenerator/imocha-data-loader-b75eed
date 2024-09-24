import React from "react";
import { render, screen } from "@testing-library/react";

import EinvoiceTypesEditDialogComponent from "../EinvoiceTypesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders einvoiceTypes edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EinvoiceTypesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("einvoiceTypes-edit-dialog-component")).toBeInTheDocument();
});
