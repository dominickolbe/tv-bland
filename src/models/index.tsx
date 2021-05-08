import * as rt from "runtypes";

export const RtPeople = rt.Record({
  id: rt.Number,
  name: rt.String,
  birthday: rt.String.Or(rt.Null),
  gender: rt.String.Or(rt.Null),
  deathday: rt.String.Or(rt.Null),
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
  country: rt
    .Record({
      name: rt.String,
    })
    .Or(rt.Null),
});
export type PeopleType = rt.Static<typeof RtPeople>;

export const RtSeason = rt.Record({
  id: rt.Number,
  name: rt.String,
  number: rt.Number,
  summary: rt.String.Or(rt.Null),
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
});

export const RtCastPerson = rt.Record({
  id: rt.Number,
  name: rt.String,
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
});

export const RtCastCharacter = rt.Record({
  id: rt.Number,
  name: rt.String,
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
});

export const RtCast = rt.Record({
  person: RtCastPerson,
  character: RtCastCharacter,
});
export type CastType = rt.Static<typeof RtCast>;

export const RtTvShow = rt.Record({
  id: rt.Number,
  name: rt.String,
  summary: rt.String.Or(rt.Null),
  language: rt.String.Or(rt.Null),
  type: rt.String.Or(rt.Null),
  genres: rt.Array(rt.String),
  network: rt.Optional(
    rt
      .Record({
        id: rt.Number,
        name: rt.String,
      })
      .Or(rt.Null)
  ),
  schedule: rt.Optional(
    rt
      .Record({
        days: rt.Array(rt.String),
        time: rt.String,
      })
      .Or(rt.Null)
  ),
  status: rt.String,
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
  rating: rt
    .Record({
      average: rt.Number.Or(rt.Null),
    })
    .Or(rt.Null),
  _embedded: rt.Optional(
    rt.Record({
      cast: rt.Array(RtCast),
    })
  ),
});
export type TvShowType = rt.Static<typeof RtTvShow>;

export const RtScheduleItem = rt.Record({
  airdate: rt.String,
  airtime: rt.String,
  id: rt.Number,
  name: rt.String,
  number: rt.Optional(rt.Number.Or(rt.Null)),
  runtype: rt.Optional(rt.Number.Or(rt.Null)),
  season: rt.Optional(rt.Number.Or(rt.Null)),
  summary: rt.String.Or(rt.Null),
  type: rt.String,
  show: RtTvShow,
  image: rt
    .Record({
      medium: rt.String,
      original: rt.String,
    })
    .Or(rt.Null),
});
export type ScheduleItemType = rt.Static<typeof RtScheduleItem>;

export const RtSchedule = rt.Array(RtScheduleItem);
export type ScheduleType = rt.Static<typeof RtSchedule>;

export const RtTvShowsSearch = rt.Array(
  rt.Record({
    score: rt.Number,
    show: rt.Record({
      ...RtTvShow.fields,
      _embedded: rt.Optional(rt.Undefined),
    }),
  })
);
export type TvShowsSearchType = rt.Static<typeof RtTvShowsSearch>;
