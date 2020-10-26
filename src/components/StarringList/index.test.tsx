import { shallow } from "enzyme";
import React from "react";
import castJSON from "../../__mock__/cast.json";
import { ListItemStarring, StarringList } from "./";

describe("<ListItemStarring />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<ListItemStarring cast={castJSON[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<StarringList />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<StarringList cast={castJSON} />);
    expect(wrapper).toMatchSnapshot();
  });
});
