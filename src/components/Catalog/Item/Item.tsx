import classes from './Item.module.css';
import { useState } from 'react';
import {getCoursesFromApi} from '../Catalog'

const Item = ({title, dataSection}: getCoursesFromApi) => {

	const [visible, setVisible] = useState(false);

  const handleClick = (): void => {
    setVisible(!visible)
  }

	return (
    <>
      <div className={classes.title} onClick={handleClick}>
        {title}
        <div className={classes.line} />
        <div className={classes.showed}> 
          {visible ? 'скрыть' : 'показать'} 
        </div>
      </div>
      {visible ? dataSection.map(({key, section, url}) => 
        <div className={classes.content} key={key}> 
          <a href={url} target='blanck'> {section} </a>
        </div>) : null}
    </>
	)
}

export default Item;