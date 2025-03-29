import React from 'react'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          <div className="btn-group mx-5" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" value="#404143" name="btnradio" id="btnradio1"  onClick={props.changeModeColor}  />
            <label className="btn dark1" htmlFor="btnradio1">#404143</label>

            <input type="radio" className="btn-check" value="#838b9d" name="btnradio" id="btnradio2"  onClick={props.changeModeColor} />
            <label className="btn dark2" htmlFor="btnradio2">#838b9d</label>

            <input type="radio" className="btn-check" value="#121c33" name="btnradio" id="btnradio3"  onClick={props.changeModeColor} />
            <label className="btn dark3" htmlFor="btnradio3">#121c33</label>
          </div>
          <div className={`form-check form-switch text-${props.mode == 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={props.changeViewMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
