import { shallow } from "enzyme";
import React from "react";
import { Rating } from "./";

describe("<Rating />", () => {
  it("renders snapshots, value 5", () => {
    const wrapper = shallow(<Rating value={5} withText={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders snapshots, value 7.9", () => {
    const wrapper = shallow(<Rating value={7.9} withText={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders snapshots, value undefined", () => {
    const wrapper = shallow(<Rating value={undefined} withText={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders snapshots, withText false", () => {
    const wrapper = shallow(<Rating value={3.33} withText={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
