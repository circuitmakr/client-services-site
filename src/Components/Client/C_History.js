import Header from "./C_Header";
import "./C_History.css";
import C_Header_mobile from './C_Header_mobile'
function History() {
  return (
    <div>
      <nav className='header_main'>
      <Header />
      </nav>
      <nav className='header_mobile'>
      <C_Header_mobile />
      </nav>

      <div className="hs_tiles_container">
        <div className="hs_greeting">
          <h1>Historical Health Perspective</h1>
        </div>
        <div className="hs_intro_text hs_tile">
          <div className="hs_text_tile">
            <div className="hs_body_text">
            <div className="hs_client_image"></div>
              <p>
              <h3>Synopsis of Treatment</h3>
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
        <div className="hs_tile">
          <div className="hs_body_text">
            <div className="hs_subtitle">
              <h3>Where you Started</h3>
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
export default History;
