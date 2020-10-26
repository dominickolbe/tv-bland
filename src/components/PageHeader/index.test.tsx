import { shallow } from "enzyme";
import React from "react";
import { PageHeader } from "./";

describe("<PageHeader />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<PageHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
