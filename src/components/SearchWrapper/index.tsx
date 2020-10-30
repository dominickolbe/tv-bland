/* eslint-disable react-hooks/exhaustive-deps */

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { TvShowsSearchType } from "../../models";
import { ApiController } from "../../utils/ApiController";
import { SearchBar } from "../SearchBar";
import { TvShowCard } from "../TvShowCard";

export const SearchWrapper = (props: { onClickCard: (id: number) => void }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [tvshows, setTvshows] = useState<TvShowsSearchType>([]);

  const abortCtrl = new AbortController();

  const onSubmitSearch = async () => {
    setLoading(true);
    const response = await ApiController.get.search(query);
    if (abortCtrl.signal.aborted) return;
    if (response.ok) setTvshows(response.val);
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      // Cleaning up API request
      abortCtrl.abort();
    };
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SearchBar
          query={query}
          onChangeQuery={(e) => setQuery(e)}
          onSubmit={() => onSubmitSearch()}
        />
      </Grid>
      {loading && (
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" component="div">
            <Box>Loading...</Box>
          </Typography>
        </Grid>
      )}
      {tvshows.length > 0 && (
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {tvshows.map((tvshow) => (
              <Grid item xs={6} sm={4} md={2} key={tvshow.show.id}>
                <TvShowCard
                  tvshow={tvshow.show}
                  onClick={() => props.onClickCard(tvshow.show.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
