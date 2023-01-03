import List from "../components/List";
import Page from "../components/Page";
import { useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../contexts/movies-context";

const IndexPage = () => {
  const { movies, setFullName } = useContext(MoviesContext)
  const infoElemWrapperRef = useRef(null);

  useEffect(() => {
    console.log("elem width: ", infoElemWrapperRef.current.offsetWidth)
  }, []);

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto" ref={infoElemWrapperRef}>
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the
              creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it
              entirely.</p>
            <p>
              <a
                href="#"
                className="btn btn-primary my-2"
                onClick={() => setFullName("Ömer Öztürk")}
              >Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {movies?.map((movie, index) => (
              <List
                key={index}
                movie={movie}
              />
            ))}
          </div>
        </div>

        <Page />
      </div>
    </>
  );
}

export default IndexPage;
