import { it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Button from "./";

const testText = "Press Me!"

it('renders correctly', async () => {
    const onChange = vi.fn();
    const {container, getByRole} = render(
        <Button
            onClick={onChange}
        >
            {testText}
        </Button>
    );
    getByRole('button').click();
    expect(container).toMatchSnapshot();
    expect(onChange).toHaveBeenCalledOnce();
});
