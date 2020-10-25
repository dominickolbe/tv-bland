import { shallow } from "enzyme";
import React from "react";
import { FullScreenLoader } from "./";

describe("<FullScreenLoader />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<FullScreenLoader />);
    expect(wrapper).toMatchSnapshot();
  });
});
