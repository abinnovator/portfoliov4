import React from "react";

const Header = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  containerClassName,
}: {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={containerClassName}>
      <h1 className={titleClassName}>{title}</h1>
      <p className={descriptionClassName}>{description}</p>{" "}
    </div>
  );
};

export default Header;
