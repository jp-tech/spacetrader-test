import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import AlertBanner from ".";

it('renders correctly', async () => {
    const {container} = render(
        <AlertBanner severity="error">
            Errror!!!
        </AlertBanner>
    );
    expect(container).toMatchSnapshot();
});
