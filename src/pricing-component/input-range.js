import React from "react";
import { Range } from "react-range";

const IRange = props => {
  const [values, setValues] = React.useState([props.startValue]);
  const { onChange } = props;
  return (
    <Range
      step={1}
      min={1}
      max={5}
      values={values}
      onChange={values => {
        setValues(values);
        onChange(values[0]);
      }}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "10px",
            width: "100%",
            borderRadius: "5px",
            background: "#a5f3eb"
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            borderRadius: "50%",
            outline: "none",
            backgroundColor: "#10d5c2"
          }}
        />
      )}
    />
  );
};
export default IRange;
