import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";
import { COPY } from "../../copy";

it('renders correctly', async () => {
    const {container,getByText} = render(<NotFound />);
    expect(container).toMatchSnapshot();
    expect(getByText(COPY.pages.notFound.header)).toBeInTheDocument();
});
