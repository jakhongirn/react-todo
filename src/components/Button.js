import classes from './Button.module.css';
function Button(props) {
  const clickHandler = () => {
    console.log('click')
  }
  return (
    <button className={classes.btn} onClick={clickHandler}>
        Add   
     </button>
  )
}


export default Button

