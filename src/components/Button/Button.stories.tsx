import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["primary", "secondary"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "투표하기"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "투표하기"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    label: "투표하기"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "secondary",
    label: "투표하기"
  }
};
