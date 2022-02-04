import { useContext } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import UserDataContext from "./contexts/UserDataContext";

function App() {
  const { inputOnChange } = useContext(UserDataContext);
  const { nextPage } = useContext(UserDataContext);
  const { previousPage } = useContext(UserDataContext);
  const { currentPage } = useContext(UserDataContext);

  return (
    <>
      <header className="d-flex align-items-center justify-content-center">
        <h1 className="mt-4">FORM</h1>
      </header>

      <main>
        <section className="d-flex align-items-center justify-content-center">
          {currentPage === 0 && (
            <form action="" className="row g-3 w-50 p-3">
              <h2>User Data</h2>
              <Input
                type={"text"}
                content={"Name"}
                name={"name"}
                placeholder={"Luis"}
                inputOnChange={inputOnChange}
              />
              <Input
                type={"text"}
                content={"Last name"}
                name={"lastname"}
                placeholder={"Testeador"}
                inputOnChange={inputOnChange}
              />
              <Input
                type={"date"}
                content={"Birthday"}
                name={"birthday"}
                inputOnChange={inputOnChange}
              />
              <p className="mb-0">Age: </p>
              <Input
                type={"email"}
                content={"Email"}
                name={"email"}
                placeholder={"luistesteador@example.com"}
                inputOnChange={inputOnChange}
              />

              <div className="d-flex align-items-center justify-content-around">
                <Button text="Siguiente" actionOnClick={nextPage} />
              </div>
            </form>
          )}

          {currentPage === 1 && (
            <form action="" className="row g-3 w-50 p-3">
              <h2>Access Data</h2>
              <Input
                type={"text"}
                content={"Username"}
                name={"username"}
                placeholder={"Luis"}
                inputOnChange={inputOnChange}
              />
              <Input
                type={"password"}
                content={"Password"}
                name={"password"}
                placeholder={"password"}
                inputOnChange={inputOnChange}
              />
              <Input
                type={"password"}
                content={"Repeat password"}
                name={"password-repeat"}
                placeholder={"repeat password"}
                inputOnChange={inputOnChange}
              />
              <div className="d-flex align-items-center justify-content-around">
                <Button text="Anterior" actionOnClick={previousPage} />
                <Button text="Siguiente" actionOnClick={nextPage} />
              </div>
            </form>
          )}

          {currentPage === 2 && (
            <form action="">
              <h2>Login</h2>
              <Input
                type={"text"}
                content={"Username"}
                name={"username"}
                placeholder={"Luis"}
              />
              <Input
                type={"password"}
                content={"Password"}
                name={"password"}
                placeholder={"password"}
              />
              <input type="checkbox" className="mt-4" /> Remember Password
              <div className="d-flex align-items-center justify-content-around mt-4">
                <Button text="Anterior" actionOnClick={previousPage} />
                <Button text="Acceder" actionOnClick={nextPage} />
              </div>
            </form>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
