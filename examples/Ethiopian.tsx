import React from "react";

import { DayPicker } from "react-day-picker";

import { EthiopianDateLib } from "./EthiopianDateLib";

export function Ethiopian() {
  return (
    <DayPicker mode="single" dateLib={new EthiopianDateLib()} ISOWeek={false} />
  );
}
