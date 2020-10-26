import { shallow } from "enzyme";
import React from "react";
import tvshowJSON from "../../__mock__/tvshow.json";
import { ListItemRich, ShowInfoList } from "./";

describe("<ListItemRich />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(
      <ListItemRich primary="Primary text" secondary="Secondary text" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<ShowInfoList />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<ShowInfoList tvshow={tvshowJSON} />);
    expect(wrapper).toMatchSnapshot();
  });
});
