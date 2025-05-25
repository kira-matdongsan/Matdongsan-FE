import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: "medium",
    img: "/src/assets/Icons/leftArrow.png"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    img: "/src/assets/Icons/closeCircle.png"
  }
};
