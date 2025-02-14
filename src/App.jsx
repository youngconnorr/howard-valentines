import { useState, useEffect } from "react";
import howard from "./assets/howard.png";
import howard_sneezing from "./assets/howard-sneeze.png";
import "./App.css";

const App = () => {
  const SNEEZE_CONDITION = 70;
  const [sneeze, setSneeze] = useState(0);

  useEffect(() => {
    const nose = document.querySelector(".nose"); // Select single element

    if (nose) {
      const increaseSneeze = () => {
        setSneeze((prev) => prev + 1);

        if (sneeze >= SNEEZE_CONDITION - 1) {
          document.body.style.backgroundColor = "#f5d2d8";
        }

        console.log("Sneeze count:", sneeze + 1);
      };

      nose.addEventListener("mouseenter", increaseSneeze);

      // Cleanup function to remove event listener
      return () => {
        nose.removeEventListener("mouseenter", increaseSneeze);
      };
    }
  }, [sneeze]); // Re-run effect when `sneeze` changes

  return (
    <>
      <p>Nose rub count: {sneeze}</p>

      <section className="dog-phrase">
        {sneeze >= SNEEZE_CONDITION ? (
          <div className="after-sneeze">
            <br></br>
            <h1 style={{ marginRight: "10px" }}>
              <div style={{ marginTop: "-77px" }}>
                <h1>ACHOOOOOOOOOOO!</h1>
              </div>
              Thanks chelby, for scratching Howard's nose, I got Howard sick, I
              think I’m coming down with a case of loving you ❤️
              <br></br>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>Happy Valentines day! :)</p>
              </div>
            </h1>
          </div>
        ) : sneeze >= SNEEZE_CONDITION / 2 ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>
                {"A".repeat(sneeze)}
                <br />
                <p style={{ fontWeight: "100" }}>
                  Dog translation: I am about to sneeze
                </p>
              </h1>
            </div>
          </>
        ) : sneeze >= 20 ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>
                RUff rUFF RUFF <br />
                <p style={{ fontWeight: "100" }}>
                  Dog translation: Just like that on the nose
                </p>
              </h1>
            </div>
          </>
        ) : sneeze >= 10 ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>
                BARK BARK BARK <br />
                <p style={{ fontWeight: "100" }}>
                  Dog translation: That is good, right there
                </p>
              </h1>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>
                BARK BARK RUFF URFF <br />
                <p style={{ fontWeight: "100", backgroundColor: "#e19bd067" }}>
                  Dog translation: Oh no I think Howard is gonna sneeze! Can you
                  itch his nose to help him?
                </p>
              </h1>
            </div>
          </>
        )}
      </section>
      <section className="howard">
        {sneeze >= SNEEZE_CONDITION ? (
          <img
            src={howard_sneezing}
            alt=""
            className="sneezing-size"
            style={{ marginTop: "-100px" }}
          />
        ) : (
          <img src={howard} alt="" className="howard-size" />
        )}
        <section className="nose">
          <div></div>
        </section>
      </section>
      <section className="reset-section">
        {sneeze >= SNEEZE_CONDITION ? (
          <button className="reset" onClick={() => location.reload()}>
            <p>
              Uh oh I think Howard might sneeze again quick, click this button
              to help him!!
            </p>
          </button>
        ) : null}
      </section>
    </>
  );
};

export default App;
