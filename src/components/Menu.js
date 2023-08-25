import "bootstrap/dist/css/bootstrap.min.css";

function Menu(props) {
  return (
    <div>
      <div>
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src={props.photoName}
              className="card-img-top img-fluid card-img-custom"
              alt={props.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <div className="card-content custom-card-content">
                <header className="header">
                  <h5 className="card-title card-title">{props.name}</h5>
                  <p className="card-price">${props.price}</p>
                </header>

                <p className="card-text">{props.description}</p>
              </div>
              <div className="flex-grow-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
