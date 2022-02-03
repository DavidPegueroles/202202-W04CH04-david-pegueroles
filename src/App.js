import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <header className="d-flex align-items-center justify-content-center">
        <h1 className="mt-4">FORM</h1>
      </header>

      <main>
        <section className="d-flex align-items-center justify-content-center">
          <form action="" className="row g-3 w-50 p-3 ">
            <Input
              type={"text"}
              content={"Name"}
              name={"name"}
              placeholder={"Luis"}
            />
            <Input
              type={"text"}
              content={"Last name"}
              name={"lastname"}
              placeholder={"Testeador"}
            />
            <Input type={"date"} content={"Birthday"} name={"birthday"} />
            <Input
              type={"email"}
              content={"Email"}
              name={"name"}
              placeholder={"luistesteador@example.com"}
            />

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
