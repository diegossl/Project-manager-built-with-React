import React from 'react'
import './styles.css'

function Card () {
  return (
    <div className="card">
      <h5 className="card-header text-center">LOGIN</h5>
      <div className="card-body">
        <form>
          <div className="form-group row">
            <label className="col-sm col-form-label">Email</label>
            <div className="col-sm-12">
              <input type="email" class="form-control" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword" className="col-sm col-form-label">Senha</label>
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password"/>
            </div>
          </div>
        </form>
        <a href="#" className="btn btn-primary">Entrar</a>
      </div>
    </div>
  )
}

export default Card