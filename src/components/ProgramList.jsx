// ProgramList.js
import React from "react";
import { usePrograms } from "../providers/ProgramsContext";
import Program from "./Program";

const ProgramList = () => {
  const programs = usePrograms();

  return (
    <div>
      {programs.map((program) => (
        <Program key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramList;
