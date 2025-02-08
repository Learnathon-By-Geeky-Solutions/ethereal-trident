import { render } from "@testing-library/react-native";

import Dashboard from "@/app/(tabs)/index";

describe("<Dashboard />", () => {
  it("Text renders correctly on Dashboard", () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText("Hello from Dashboard!!")).toBeTruthy();
  });
});
