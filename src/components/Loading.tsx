import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="loading">
      <h4>Rooms data loading...</h4>
      <FontAwesomeIcon icon={faSpinner} spin={true} />
    </div>
  );
}
