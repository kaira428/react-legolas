import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

export function InfoTooltip() {
  return (
    <Tooltip title="Tooltip Info" arrow placement="top-end">
      <InfoIcon />
    </Tooltip>
  );
}
