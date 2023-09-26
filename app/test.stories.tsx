import type { Meta, StoryObj } from "@storybook/react";
import { Test } from "./test";

const meta: Meta<typeof Test> = {
  component: Test,
};
export default meta;

export const Primary: StoryObj<typeof Test> = {
  render: () => <Test />,
};
