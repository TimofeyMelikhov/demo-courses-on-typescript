import React from "react";
import classes from "./CustomInput.module.css";
import {getCoursesFromApi} from '../Catalog/Catalog'
interface forCustomInputProps {
  setValue (arg: string): void,
  filterCourses: getCoursesFromApi[],
  inputValue: string
}

const CustomInput: React.FC<forCustomInputProps> = ({ setValue, filterCourses, inputValue }: forCustomInputProps) => {
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