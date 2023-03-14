const Deployable = () => {

  return (
    <div className="btn-group">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
        <button className="dropdown-item" type="button">Main</button>
        <button className="dropdown-item" type="button">Profile</button>
        <button className="dropdown-item" type="button">Lists</button>
      </div>
    </div>
  )
}

export default Deployable 
