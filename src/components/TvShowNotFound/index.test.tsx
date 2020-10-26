import { shallow } from "enzyme";
import React from "react";
import { TvShowNotFound } from "./";

describe("<TvShowNotFound />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<TvShowNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
