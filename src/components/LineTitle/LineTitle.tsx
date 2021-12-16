import classes from './LineTitle.module.css';
import icon from '../../images/icon_mrc.png'

type titleProps = {
  title: string,
}

const LineTitle = ({title}: titleProps) => {
  return (
    <div className={classes.line}>
      <img src={icon} alt="icon company" />
      <span>{title}</span>
    </div>
  )
}

export default LineTitle;