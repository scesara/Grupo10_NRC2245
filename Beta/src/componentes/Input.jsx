import React from "react";

export default function Input({tipo,holder ,nombre}) {
  return (
    <input
      type={tipo}
      className="datos"
      placeholder={holder}
      name={holder}
    />
  );
}
