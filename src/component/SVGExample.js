import React from 'react';

export class SVGExample extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div className="bx--row example-grid-row">
        <div className="bx--col-xs-3">
          SVG Example
        </div>
        <div className="bx--col-xs-9">
        http://pushnotificationpreview.com/
          <svg
            version="1.1"
            baseProfile="full"
            width="828px"
            height="1792px"
            viewBox="0 0 828 1792"
            preserveAspectRatio="xMidYMid meet"
            id="phone-preview"
            style={{'zoom' : 0.5}}>
            <title id="svg_document_title">
              SVG Title
            </title>
            <defs id="svg_document_defs" />
            <g id="main_group">
              <rect
                id="phone-bg-display"
                fill="#000000"
                x="0px"
                y="0px"
                rx="100"
                ry="100"
                width="828px"
                height="1792px" />
              <rect
                id="phone-display-panel"
                fill="#ffffff"
                x="50px"
                y="50px"
                rx="50"
                ry="50"
                width="728px"
                height="1692px" />
              <rect
                id="phone-center-top"
                fill="#000000"
                x="200px"
                y="0px"
                rx="25"
                ry="25"
                width="400px"
                height="100px" />
              <text
                id="sample_text_element"
                x="414px"
                y="896px"
                fontFamily="Helvetica"
                fontSize="30px"
                fill="red"
                textAnchor="middle"
                textRendering="geometricPrecision"
                transform=""
                style={{outlineStyle: 'none'}}>
                Sample Text Element
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}