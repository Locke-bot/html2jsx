import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
          margin: "20px 20px 20px",
          textAlign: "left",
        }}>
      <div className="d-flex" style={{
        gap: "2%",
      }}>
        <div className="d-flex" style={{
          background: "#ECFEF4",
          columnGap: "10px",
          borderRadius: "4px",
          padding: "0 0 0 10px",
          alignItems: "center",
        }}
        >
          <div style={{width: "335px"}}>
            <img src="static/images/html2jsx.png" alt="html2jsx icon" style={{width: "100%"}} />
          </div>
          </div>
          <div  className="d-flex" style={{
              flexDirection: "column",
              background: "#08BD81",
              color: "white",
              borderRadius: "4px",
              padding: "45px",
            }}>
          <div style={{
          }}>
              <h2 className="font-small">HTML to JSX!</h2>
              <p>
                <span>
                      <br/>
                      HTML2JSX converts your html file to JSX with proper formatting<br/><br/>
                      Just paste your files and click convert!
                </span>
              </p>
          </div>
          </div>              
          <div  className="d-flex" style={{
                flexDirection: "column",
                background: "#005726",
                borderRadius: "4px",
                padding: "45px",
              }}>
              <div style={{
                color: "white",
              }}>
                  <h2  className="small-header">
                    We will add support for various formats.
                  </h2>
                  <br/>
                  <p>Track the changes through our git repository</p>
                </div>
                <button type="submit" className="btn btn-primary btn-green">
                  <a href="https://github.com/Locke-bot/html2jsx" class="btn">To Github</a>
                </button>
              </div>
      </div>
      <div>
        <form className="main-form" style={{
          boxShadow: "0px 5px 30px rgb(44 54 59 / 10%)",

        }}>
        <div className="two-box pl-3 pr-3" style={{
                    gap: "10px",
                  }}>
          <div className="w-100">
            <div>
              <input
                type="file"
                id="fileOriginal-Text"
                accept=""
                className="file-input"
              /><label
                title="Original Text"
                for="fileOriginal-Text"
                className="file-label"
                >Original Text<svg
                  style={{position: "absolute", right: "0.5rem", top: "7px"}}
                  height="11"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 6V4H6v2H4v1h2v2h1V7h2V6zM6 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"
                    fill="#8197a2"
                    fill-rule="evenodd"
                  ></path></svg
              ></label>
            </div>
            <div>
              <textarea  className="main-textarea"></textarea>
            </div>
          </div>
          <div  className="w-100">
            <div  className="diff-input-header">
              <input
                type="file"
                id="fileChanged-Text"
                accept=""
                className="file-input"
              /><label
                title="Changed Text"
                for="fileChanged-Text"
                className="file-label"
                >Changed Text<svg
                  style={{position: "absolute", right: "0.5rem", top: "7px"}}
                  height="11"
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 6V4H6v2H4v1h2v2h1V7h2V6zM6 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"
                    fill="#8197a2"
                    fill-rule="evenodd"
                  ></path></svg
              ></label>
            </div>
            <div>
              <textarea className="main-textarea"></textarea>
            </div>
          </div>
        </div>
        <span></span>
        <div>
          <button
            type="submit"
            name="Convert"
            style={{
              height: "42px",
              margin: "10px 10px",
              display: "inline-flex",
              alignItems: "center",
            }}
            className="btn btn-primary btn-green"
          >
            Convert
          </button>
        </div>
      </form>

    </div>
  </div>
  </div>
  );
}

export default App;
