import Header from "./C_Header";
import "./C_Progress.css";
import C_HEADER_MOBILE from "./C_Header_mobile";

function Progress() {
  return (
    <div>
      <nav className="cp_header_mobile">
        <C_HEADER_MOBILE />
      </nav>
      <nav className="cp_header_main">
        <Header />
      </nav>

      <div className="cp_tiles_container">
        <div className="cp_greeting">
          <h1>Progression and Growth</h1>
        </div>
        <div className="cp_intro_text cp_tile">
          <div className="cp_left_sidebar">
            <div className="cp_subtitle">
              <h3>Previous Sessions</h3>
              <br />
            </div>
            <ul>
              <li>Dr. John Thompkins MSW, phD, psyD</li>
              <li> Dr. Carlet Jones MSW, LCSW, phD</li>
              <li>Ali Finley LPCC</li>
              <li> Dr. Willimina Hernandez LMFT, psyD</li>
              <li>Dr. Pepper Soda MSW, phD</li>
            </ul>
          </div>
          <div className="cp_text_tile">
            <h3>Synopsis of Treatment</h3>
            <div className="cp_body_text">
              <p>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                arcu risus, accumsan ac egestas vitae, semper nec tortor. Nam
                eget vehicula ex. Praesent in accumsan neque. Ut ultricies ante
                vitae lacus scelerisque, in vehicula nulla fringilla. Mauris
                laoreet sed nisl quis ultricies. Aenean molestie sit amet elit
                vitae rutrum. Integer porttitor rutrum semper. Nunc lobortis,
                justo eget tempor luctus, magna augue faucibus augue, in
                elementum augue ligula quis est. Sed facilisis rhoncus turpis,
                ut elementum tellus dapibus sed. Sed ultrices eleifend
                tincidunt. Cras mollis lectus vitae lorem mattis, ut molestie
                nulla condimentum.
              </p>
            </div>
          </div>
        </div>
        <div className="cp_tile">
          <div className="cp_body_text">
            <div className="cp_subtitle">
              <h2>Ipsum Dolor</h2>
              <br />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras arcu
              risus, accumsan ac egestas vitae, semper nec tortor. Nam eget
              vehicula ex. Praesent in accumsan neque. Ut ultricies ante vitae
              lacus scelerisque, in vehicula nulla fringilla. Mauris laoreet sed
              nisl quis ultricies. Aenean molestie sit amet elit vitae rutrum.
              Integer porttitor rutrum semper. Nunc lobortis, justo eget tempor
              luctus, magna augue faucibus augue, in elementum augue ligula quis
              est. Sed facilisis rhoncus turpis, ut elementum tellus dapibus
              sed. Sed ultrices eleifend tincidunt. Cras mollis lectus vitae
              lorem mattis, ut molestie nulla condimentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Progress;
