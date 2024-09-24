import React from "react";
import { render, screen } from "@testing-library/react";

import EinvoiceTypesPage from "../EinvoiceTypesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders einvoiceTypes page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EinvoiceTypesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("einvoiceTypes-datatable")).toBeInTheDocument();
    expect(screen.getByRole("einvoiceTypes-add-button")).toBeInTheDocument();
});
