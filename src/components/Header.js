import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../components/Footer.module.css";

function Header() {
  var hour = new Date().getHours();
  let openHour = 20;
  let closeHour = 20;
  let isOpen = hour >= openHour && hour < closeHour;
  return (
    <div className="container d-flex flex-column align-items-center pt-5">
      <h2 className="menu-title w-150">Our Menu</h2>
      {/* Line break */}
      <div className={classes.center}>
        {isOpen ? (
          <div>
            <h4 className={classes.title}> Welcome, We Are Open!</h4>
          </div>
        ) : (
          <h4 className={classes.title}>We Are Closed!</h4>
        )}
      </div>
    </div>
  );
}

export default Header;
