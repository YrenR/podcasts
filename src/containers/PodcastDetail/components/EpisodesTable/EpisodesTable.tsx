import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Episode } from "../../../../models/episode";
import "./episodesTable.css";
import { formatDateDDMMYYYY, normalizeMillisecondsToMinSec } from "../../../../tools/util";

interface Props {
  episodes?: Episode[];
  podcastId?: string;
}

const EpisodesTable = ({ episodes, podcastId }: Props) => {
  const podcastEpisode = episodes?.filter(({ kind }) => kind === "podcast-episode");

  return (
    <TableContainer>
      <Table className="episodes-table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {podcastEpisode?.map(({ trackId, trackName, releaseDate, trackTimeMillis, kind, wrapperType }) => (
            <TableRow key={trackId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Typography component={Link} to={`/podcast/${podcastId}/episode/${trackId}`} color="primary">
                  {trackName}
                </Typography>
              </TableCell>
              <TableCell align="center">{formatDateDDMMYYYY(new Date(releaseDate))}</TableCell>
              <TableCell align="center">{normalizeMillisecondsToMinSec(trackTimeMillis)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodesTable;
