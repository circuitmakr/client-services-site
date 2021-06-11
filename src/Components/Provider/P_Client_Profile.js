import LineChart from "../../Components/Chart";
import Header from "./P_Header";
import "./P_Client_Profile.css";
import P_HEADER_MOBILE from "./P_Header_mobile";
function Client_Profile(props) {
  return (
    <div>
      <div className="pc_header_mobile">
        <P_HEADER_MOBILE />
      </div>
      <div className="pc_header_main">
        <Header />
      </div>

      <div className="p_CP_tiles_container">
        <div className="p_CP_greeting">
          <h1>Historical Health Perspective</h1>
        </div>
        <div className="p_CP_intro_text p_CP_tile">
          <div className="p_CP_text_tile">
            <div className="p_CP_body_text">
              <div className="p_CP_client_image"></div>
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
        <div className="p_CP_tile">
          <div className="p_CP_body_text">
            <div className="p_CP_subtitle">
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
export default Client_Profile;
