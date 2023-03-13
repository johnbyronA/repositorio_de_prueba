const Deployable = () => {

  return (
    <div class="btn-group">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Menu
      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
        <button class="dropdown-item" type="button">Action</button>
        <button class="dropdown-item" type="button">Another action</button>
        <button class="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  )
}

export default Deployable
