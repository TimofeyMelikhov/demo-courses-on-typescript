import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Catalog.module.css";
import CustomInput from '../CustomInput/CustomInput'
import Item from "./Item/Item";

export interface getCoursesFromApi {
  id: number,
  title: string,
  dataSection: [
    {
      key: number,
      section: string,
      url: string
    }
  ]
}

export type getCoursesFromApiWithoutId = Omit <getCoursesFromApi, 'id'>

const Catalog: React.FC = () => {
  const [courses, setCourses] = useState<getCoursesFromApi[]>([]);
  const [inputValue, setValue] = useState("");

  const getCourses = (): void => {
    axios
      .get<getCoursesFromApi[]>("http://localhost:3001/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCourses();
  }, []);

  const filterCourses = courses.filter(({ title }) => {
    return title.toLowerCase().includes(inputValue.toLocaleLowerCase());
  });

  const renderItem = () => {
    return filterCourses.map(({ id, title, dataSection }) => {
      return <Item key={id} title={title} dataSection={dataSection}/>;
    });
  };

  return (
    <div className={classes.catalog}>
      <CustomInput
        inputValue={inputValue}
        setValue={setValue}
        filterCourses={filterCourses}
      />
      {renderItem()}
    </div>
  );
};

export default Catalog;