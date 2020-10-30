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
  network: rt
    .Record({
      id: rt.Number,
      name: rt.String,
    })
    .Or(rt.Null)
    .Or(rt.Undefined),
  schedule: rt
    .Record({
      days: rt.Array(rt.String),
      time: rt.String,
    })
    .Or(rt.Null)
    .Or(rt.Undefined),
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
  _embedded: rt
    .Record({
      cast: rt.Array(RtCast),
    })
    .Or(rt.Undefined),
});
export type TvShowType = rt.Static<typeof RtTvShow>;

export const RtScheduleItem = rt.Record({
  airdate: rt.String,
  airtime: rt.String,
  id: rt.Number,
  name: rt.String,
  number: rt.Number.Or(rt.Null).Or(rt.Undefined),
  runtype: rt.Number.Or(rt.Null).Or(rt.Undefined),
  season: rt.Number.Or(rt.Null).Or(rt.Undefined),
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
      _embedded: rt.Undefined,
    }),
  })
);
export type TvShowsSearchType = rt.Static<typeof RtTvShowsSearch>;
