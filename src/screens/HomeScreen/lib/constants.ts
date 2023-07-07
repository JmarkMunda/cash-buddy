export const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const data = [
  {
    name: "Incomes",
    amount: 5550,
    color: "#00b30f",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Expenses",
    amount: 3300,
    color: "#e72828",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

export const recentHistory = [
  {
    id: 1,
    description: "Sample",
    amount: 200,
    type: "income" as const,
  },
  {
    id: 2,
    description: "Bought a new book",
    amount: -200,
    type: "expense" as const,
  },
  {
    id: 3,
    description: "Received money from mom",
    amount: 4500,
    type: "income" as const,
  },
  {
    id: 4,
    description: "Received money from mom",
    amount: 4500,
    type: "income" as const,
  },
  {
    id: 5,
    description: "Received money from mom",
    amount: 4500,
    type: "income" as const,
  },
  {
    id: 6,
    description: "Received money from mom",
    amount: 4500,
    type: "expense" as const,
  },
  {
    id: 7,
    description: "Received money from mom",
    amount: 4500,
    type: "income" as const,
  },
  {
    id: 8,
    description: "Received money from mom",
    amount: 4500,
    type: "expense" as const,
  },
  {
    id: 9,
    description: "Received money from mom",
    amount: 4500,
    type: "expense" as const,
  },
];
