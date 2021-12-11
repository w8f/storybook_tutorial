import Task from "./Task";

// Storybook にコンポーネントを認識させるには、以下の内容を含む default export を記述します:
// component -- コンポーネント自体
// title -- Storybook のサイドバーにあるコンポーネントを参照する方法
export default {
  component: Task,
  title: "task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});

Pinned.args = {
  ...Default.args,
  state: "TASK_PINNED",
};

export const Achieved = Template.bind({});

Achieved.args = {
  ...Default.args,
  state: "TASK_ARCHIVED",
};
