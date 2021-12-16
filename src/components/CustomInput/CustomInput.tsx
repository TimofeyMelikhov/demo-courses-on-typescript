import React from "react";
import classes from "./CustomInput.module.css";

interface forCustomInputProps {
  setValue (arg: string): void,
  filterCourses: any[],
  inputValue: string
}

const CustomInput = ({ setValue, filterCourses, inputValue }: forCustomInputProps) => {
  let resultSearch = !filterCourses.length;

  let resetInput = (event:React.MouseEvent<HTMLInputElement>): void => {
    event.currentTarget.value = "";
    setValue("");
  };

  const setValueInp = (event: React.FormEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value)
  }

  return (
    <>
      <div className={classes.inputWrapper}>
        <div className={classes.loupe} />
        <input
          type="text"
          value={inputValue}
          placeholder="Поиск по курсам"
          onChange={setValueInp}
        />
        <div className={classes.resetInput} onClick={resetInput} />
      </div>
      <div className={classes.badSearch}>
        {resultSearch ? "По вашему запросу ничего не найдено!" : null}
      </div>
    </>
  );
};
export default CustomInput;
