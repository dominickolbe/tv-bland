import { shallow } from "enzyme";
import React from "react";
import scheduleJSON from "../../__mock__/schedule.json";
import { ScheduleList } from "./";

describe("<ScheduleList />", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(
      <ScheduleList
        // @ts-ignore
        schedule={scheduleJSON}
        onClickCard={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
