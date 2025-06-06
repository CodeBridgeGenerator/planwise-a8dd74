import React from "react";
import { render, screen } from "@testing-library/react";

import AiFinancialAdvicePage from "../AiFinancialAdvicePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders aiFinancialAdvice page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AiFinancialAdvicePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("aiFinancialAdvice-datatable")).toBeInTheDocument();
    expect(screen.getByRole("aiFinancialAdvice-add-button")).toBeInTheDocument();
});
