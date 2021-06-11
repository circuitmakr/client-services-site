import React from "react";
import Header from "./P_Header";
import "./P_Review.css";
import Chart from "../Chart";
import P_Header_mobile from './P_Header_mobile'
function Review() {
  return (
    <div>
            <nav className='p_header_mobile'>
        <P_Header_mobile />
      </nav>
      <nav className='p_header_main'>
        <Header />
      </nav>

      <div className="p_CR_tiles_container">
        <div className="p_CR_greeting">
          <h1>{`Outcomes`}</h1>
        </div>
        <div className="p_CR_intro_text p_CR_tile">
          <h2>Long Term Progress</h2>
          <div className="chartAnalysis">
          <Chart />
          </div>
          <article className='chartTxtAnalysis'>
          <h4>Lorem ipsum </h4>
        dolor sit amet, consectetur adipiscing elit. Etiam non
            ex ipsum. In rhoncus lorem lorem, euismod iaculis eros molestie id.
            Morbi sem ligula, semper eget lorem quis, tincidunt interdum eros.
            Pellentesque ac leo in urna volutpat ullamcorper at eget neque.
            Donec vestibulum a mi nec elementum. Vivamus sit amet tristique
            ante, eu accumsan sem. Nulla vehicula mattis rhoncus.
          </article>
        </div>
        <div className="p_CR_tile">
          <h2>Treatment Modalities </h2><br/>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
            ex ipsum. In rhoncus lorem lorem, euismod iaculis eros molestie id.
            Morbi sem ligula, semper eget lorem quis, tincidunt interdum eros.
            Pellentesque ac leo in urna volutpat ullamcorper at eget neque.
            Donec vestibulum a mi nec elementum. Vivamus sit amet tristique
            ante, eu accumsan sem. Nulla vehicula mattis rhoncus. Ut ornare
            aliquet dui eget cursus. Aenean sed mi eu enim egestas dignissim. In
            non elit euismod, lobortis dolor a, tempor urna. Suspendisse nec
            maximus nulla, a mattis urna. In a ultrices augue. Praesent
            vulputate pulvinar dui eu tristique. Sed sit amet massa nisl.
            Suspendisse ut nisi sapien. Maecenas nunc nunc, ullamcorper a
            venenatis a, dignissim eget magna. Cras tempor ultricies odio, vel
            fringilla nisi tincidunt non. Pellentesque egestas dolor eleifend
            tortor aliquam, commodo finibus purus maximus. Nunc at tellus quis
            erat rhoncus consequat nec eget leo. Morbi vitae dolor vulputate,
            egestas mauris scelerisque, congue neque. Morbi facilisis justo quis
            dolor pellentesque, sollicitudin iaculis metus posuere. Maecenas et
            semper odio.
          </article>
        </div>
      </div>
    </div>
  );
}
export default Review;
