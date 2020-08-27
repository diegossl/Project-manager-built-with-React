import React from 'react'
import Input from '../../components/common/form'
import './styles.css'

function Login () {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="card">
            <h5 className="card-header header-box text-center text-color">LOGIN</h5>
            <div className="card-body">
              <form>
                <div className="form-group row">
                  <label className="col-sm col-form-label">Email</label>
                  <div className="col-sm-12">
                    <Input 
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm col-form-label">Senha</label>
                  <div className="col-sm-12">
                    <Input 
                      type="password"
                      placeholder="Senha"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
              <a href="#" className="btn btn-primary">Entrar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
