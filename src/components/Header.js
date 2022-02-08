import classes from './Header.module.css'

function Header() {
    return ( 
        <div >
            <h1>To do List</h1>

            <button className={classes.btn}>Add</button>
        </div>
     );
}

export default Header;