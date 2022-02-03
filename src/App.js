function App() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center">
        <h1 className="mt-4">FORM</h1>
      </header>

      <main>
        <section className="d-flex align-items-center justify-content-center">
          <form action="" className="row g-3 w-50 p-3 ">
            <div className="col-md-6 ">
              <label forhtml="inputEmail3" className="form-label">
                Name:
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
              <label forhtml="inputEmail3" className="form-label">
                Last name:
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
              <label forhtml="inputEmail3" className="form-label">
                Birthdate:
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-6">
              <label forhtml="inputEmail3" className="form-label">
                Email:
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="d-flex align-items-center justify-content-around">
              <button className="btn btn-primary">Anterior</button>
              <button className="btn btn-primary">Siguiente</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
