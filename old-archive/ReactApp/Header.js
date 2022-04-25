const Link = ReactRouterDOM.Link;

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { };
    }

    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#111211"}}>
            <div className="container-fluid">
                <Link className="navbar-brand active" to="/">
                    Local Logan
                    <img src="/images/white.png" alt="Home" />
                </Link>
                {/* <a className="navbar-brand active" href="/index.html">Local Logan
                    <img src="/images/white.png" alt="Home" />
                </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            {/* <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                                Activies
                            </Link> */}
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Activies</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/Activies/indoor-activities" className="dropdown-item text-center">
                                        Indoor
                                    </Link>
                                    {/* <a className="dropdown-item text-center" href="/Activies/indoorActivities.html">Indoor</a> */}
                                </li>
                                <li>
                                    <Link to="/Activies/outdoor-activities" className="dropdown-item text-center">
                                        Outdoors
                                    </Link>
                                    {/* <a className="dropdown-item text-center" href="/Activies/outdoorActivities.html">Outdoors</a> */}
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link to="/activies/special-events" className="dropdown-item text-center">
                                        Special Events Calendar
                                    </Link>
                                    {/* <a className="dropdown-item text-center" href="/Activies/specialEvents.html">Speical Events Calendar</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true" to="/restaurant-picker">Restaurant Picker</Link>
                            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Restaurant Picker</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabIndex="-1" aria-disabled="true" to="/local-links">Local Links</Link>
                            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Local Links</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabIndex="-1" aria-disabled="true" to="/politics">Politics</Link>
                            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Politics</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabIndex="-1" aria-disabled="true" to="/housing">Housing</Link>
                            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Housing</a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" tabIndex="-1" aria-disabled="true" to="/date-ideas">Date Ideas</Link>
                            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Date Ideas</a> */}
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mr-auto">
                            <Link className="nav-link active" aria-disabled="false" aria-current="page" to="/creators">Creators</Link>
                            {/* <a className="nav-link active" href="/creators.html" aria-disabled="false" aria-current="page">Creators</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      );
    }
  }