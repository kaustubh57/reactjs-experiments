import React from 'react';

export class SVGExample2 extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div className="bx--row example-grid-row">
        <div className="bx--col-xs-3">
          SVG Example 2
        </div>
        <div className="bx--col-xs-9">
          <h2>Experiments with shapes</h2>

          <svg>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect className="cls-3" x="0.5" y="0.5" width="168.6" height="349.42" rx="24.43" ry="24.43"/>
                <circle className="cls-3" cx="308.58" cy="507.31" r="13.24"
                        transform="translate(-508.65 308.39) rotate(-56.75)"/>
                <circle className="cls-3" cx="308.58" cy="190.57" r="2.25"
                        transform="translate(-272.69 72.95) rotate(-41.41)"/>
                <path className="cls-3"
                      d="M295,201.86h0a1.43,1.43,0,0,0,1.55,1.28h24.09a1.43,1.43,0,0,0,1.55-1.28h0a1.43,1.43,0,0,0-1.55-1.28H296.54A1.43,1.43,0,0,0,295,201.86Z"
                      transform="translate(-223.78 -178.83)"/>
                <circle className="cls-3" cx="328.96" cy="201.86" r="2.84"
                        transform="translate(-275.05 89.3) rotate(-41.42)"/>
                <foreignObject className="ios" x="9.46" y="42.75" width="150.68" height="266.69"
                               style={{border: "1px solid #ccc", backgroundColor: "#777677"}}>
                  <div>
                    <div className="device-preview_message">
                      <div className="device-preview_alert">
                        <div className="notification_header">
                          <div id="element1">
                            <span className="device-preview_app-icon"/>
                          </div>
                          <div id="element2"> Your App Name</div>
                          <div id="element3"> now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </foreignObject>
              </g>
            </g>
          </svg>

          <svg>
            <g>
              <foreignObject className="android" x="9" y="41.2" width="160.7" height="266.9"
                             style={{border: "1px solid #ccc", backgroundColor: "#777677"}}>
                <div className="device-preview_message">
                  <div className="device-preview_alert">
                    <div id="element1" style={{display: "inline-table", verticalAlign: "top", float: "left"}}>
                      <span className="device-preview_app-icon"/>
                    </div>
                    <div id="element2" style={{
                      display: "table-cell",
                      fontSize: 6,
                      margin: "1px 0 0 0",
                      float: "left",
                      overflow: "hidden",
                      textAlign: "left",
                      textOverflow: "ellipsis",
                      textTransform: "none",
                      verticalAlign: "top",
                      letterSpacing: .2,
                      color: "#000"
                    }}> aaa
                      <span className="detail" style={{
                        display: "block",
                        fontSize: 5,
                        overflow: "hidden",
                        textAlign: "left",
                        textOverflow: "ellipsis",
                        textTransform: "none",
                        verticalAlign: "top",
                        color: "#8f8f8f",
                        marginTop: 1
                      }}>  vvv </span>
                    </div>
                    <div id="element3" style={{
                      display: "table-cell",
                      letterSpacing: 0.2,
                      float: "right",
                      fontWeight: "300",
                      fontSize: 5,
                      lineHeight: 7,
                      margin: 0,
                      verticalAlign: "text-top",
                      color: "#6d6d6d"
                    }}><span style={{whiteSpace: "pre"}}>4:22 PM</span></div>
                  </div>
                  <div className="notification-image">
                    <span className="lg-image"/>
                  </div>
                </div>
              </foreignObject>
              <g>
                <path className="st1"
                      d="M89.3,1c22.5,0,44.9,1,66.6,3.1c10.2,1,18.5,10,18.5,20v301.2c0,10.1-8.3,19-18.5,20
                  c-21.7,2.1-44.1,3.1-66.6,3.1c-22.5,0-44.9-1-66.6-3.1c-10.2-1-18.5-10-18.5-20V24.1c0-10.1,8.3-19,18.5-20C44.4,2,66.8,1,89.3,1
                   M89.3,0C66.9,0,44.5,1,22.6,3.1c-10.7,1-19.4,10.6-19.4,21c0,100.4,0,200.8,0,301.2c0,10.4,8.7,20,19.4,21
                  c21.8,2.1,44.3,3.1,66.7,3.1c22.4,0,44.8-1,66.7-3.1c10.7-1,19.4-10.6,19.4-21c0-100.4,0-200.8,0-301.2c0-10.4-8.7-20-19.4-21
                  C134.1,1,111.7,0,89.3,0L89.3,0z"/>
              </g>
              <path className="st2"
                    d="M103.7,334.4H74.9c-2.4,0-4.3-1.9-4.3-4.3v-3.8c0-2.4,1.9-4.3,4.3-4.3h28.8c2.4,0,4.3,1.9,4.3,4.3v3.8
                C108,332.5,106,334.4,103.7,334.4z"/>
              <path className="st2" d="M105.5,20.3H73.1c-1,0-1.8-0.8-1.8-1.8v0c0-1,0.8-1.8,1.8-1.8h32.5c1,0,1.8,0.8,1.8,1.8v0
                C107.4,19.5,106.5,20.3,105.5,20.3z"/>
            </g>
          </svg>

          <svg version="1.0"
               xmlns="http://www.w3.org/2000/svg"
               width="696px"
               height="1432px"
               viewBox="0 0 828 1792"
               preserveAspectRatio="xMidYMid meet"
               style={{'zoom': 0.5}}>
            <g transform="translate(0.000000,1454.000000) scale(0.100000,-0.100000)"
               fill="#3453" stroke="none">
              <path d="M921 14415 c-92 -20 -156 -43 -236 -83 -247 -123 -417 -325 -502
                      -599 l-28 -88 0 -6375 0 -6375 28 -88 c103 -331 333 -561 664 -664 l88 -28
                      2695 0 2695 0 88 28 c331 103 561 333 664 664 l28 88 0 6375 0 6375 -28 88
                      c-103 331 -333 561 -664 664 l-88 28 -2670 2 c-2248 1 -2680 -1 -2734 -12z
                      m896 -328 c42 -22 49 -38 57 -124 16 -182 114 -307 272 -348 54 -14 227 -15
                      1510 -13 l1449 3 56 23 c139 56 229 193 229 351 0 47 4 57 33 86 29 29 42 34
                      102 41 39 4 210 2 380 -4 350 -12 424 -24 549 -89 100 -52 202 -155 249 -253
                      61 -125 68 -166 78 -470 5 -161 8 -2769 7 -6280 l-3 -6005 -22 -81 c-70 -258
                      -202 -391 -462 -462 l-96 -27 -2570 0 -2570 0 -90 23 c-256 67 -407 212 -470
                      452 -11 44 -19 134 -25 285 -11 296 -11 11839 0 12125 7 172 13 243 29 303 61
                      232 217 386 456 448 94 24 335 38 630 35 160 -1 195 -4 222 -19z"/>

            </g>
            <text
              id="sample_text_element2"
              x="348px"
              y="716px"
              fontFamily="Helvetica"
              fontSize="30px"
              fill="red"
              textAnchor="middle"
              textRendering="geometricPrecision"
              transform=""
              style={{outlineStyle: 'none'}}>
              Sample Text Element
            </text>
          </svg>


          <svg width="260px" height="526px" viewBox="0 0 260 526" version="1.1">
            <defs>
              <rect id="path-1" x="0" y="0" width="254" height="520" rx="35.0896552"/>
              <filter x="-1.8%" y="-0.9%" width="103.5%" height="101.7%" filterUnits="objectBoundingBox" id="filter-2">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"/>
                <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0" type="matrix"
                               in="shadowBlurOuter1"/>
              </filter>
            </defs>
            <g id="Omni-Channel-Research" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Management-page/grab-and-go-Copy-25" transform="translate(-1007.000000, -231.000000)">
                <g id="Group-6" transform="translate(1010.000000, 234.000000)">
                  <g id="Rectangle" fillRule="nonzero">
                    <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"/>
                    <rect stroke="#D7D7D7" strokeWidth="14.6206897" strokeLinejoin="square" fill="#FCFCFC"
                          fillRule="evenodd" x="7.31034483" y="7.31034483" width="239.37931" height="505.37931"
                          rx="35.0896552"/>
                    <rect stroke="#0068FF" strokeWidth="1" x="-0.5" y="-0.5" width="255" height="521" rx="35.0896552"/>
                  </g>
                  <path
                    d="M192.689655,14.6067416 L189.774713,14.6067416 C188.159756,14.6067416 186.850575,15.9159227 186.850575,17.5308795 L186.850575,22.6369624 L186.850575,24.8244866 C186.850575,28.8618786 183.577622,32.1348315 179.54023,32.1348315 L70.0804598,32.1348315 C66.0430678,32.1348315 62.7701149,28.8618786 62.7701149,24.8244866 L62.7701149,20.4494382 L62.7701149,17.5308795 C62.7701149,15.9159227 61.4609338,14.6067416 59.845977,14.6067416 L56.9310345,14.6067416 L56.9310345,8.76404494 L64.2337449,8.76404494 C65.5675816,6.99002686 67.690034,5.84269663 70.0804598,5.84269663 L179.54023,5.84269663 C181.930656,5.84269663 184.053108,6.99002686 185.386945,8.76404494 L192.689655,8.76404494 L192.689655,14.6067416 Z"
                    id="Combined-Shape" fill="#D7D7D7" fillRule="nonzero"/>
                  <g id="Group-2" transform="translate(43.793103, 14.606742)"/>
                </g>
              </g>
            </g>
          </svg>

          <svg width="436px" height="792px" viewBox="0 0 436 792" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="96.9743497%" id="linearGradient-1">
                <stop stopColor="#000000" offset="0%" />
                <stop stopColor="#323232" offset="100%" />
              </linearGradient>
              <rect id="path-2" x="0" y="0" width="424" height="867" rx="108.4827586" />
              <filter x="-2.1%" y="-1.0%" width="104.2%" height="102.1%" filterUnits="objectBoundingBox" id="filter-3">
                <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                             result="shadowBlurOuter1" />
                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix"
                               in="shadowBlurOuter1" />
              </filter>
              <pattern id="pattern-4" patternUnits="objectBoundingBox" x="-18.1603774%" width="118.160377%"
                       height="100%">
                <use xlinkHref="#image-5" transform="scale(0.535185185,0.535185185)" />
              </pattern>
            </defs>
            <g id="Omni-Channel-Research" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Management-page/grab-and-go-Copy-10" transform="translate(-642.000000, -163.000000)">
                <g id="Group-6" transform="translate(648.000000, 169.000000)">
                  <g id="Rectangle" fillRule="nonzero">
                    <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2" />
                    <rect stroke="#000000" strokeWidth="24.3678161" strokeLinejoin="square" fill="url(#pattern-4)"
                          fillRule="evenodd" x="12.183908" y="12.183908" width="399.632184" height="842.632184"
                          rx="58.4827586" />
                    <rect stroke="url(#linearGradient-1)" strokeWidth="1" x="-0.5" y="-0.5" width="425" height="868"
                          rx="108.4827586" />
                  </g>
                  <path
                    d="M321.655172,24.3539326 L316.781609,24.3539326 C314.090015,24.3539326 311.908046,26.5359012 311.908046,29.2274958 L311.908046,37.7451246 L311.908046,41.3947436 C311.908046,48.1237302 306.453125,53.5786517 299.724138,53.5786517 L116.965517,53.5786517 C110.236531,53.5786517 104.781609,48.1237302 104.781609,41.3947436 L104.781609,34.0955056 L104.781609,29.2274958 C104.781609,26.5359012 102.599641,24.3539326 99.908046,24.3539326 L95.0344828,24.3539326 L95.0344828,14.6123596 L107.219585,14.6123596 C109.44256,11.6545975 112.980633,9.74157303 116.965517,9.74157303 L299.724138,9.74157303 C303.709022,9.74157303 307.247095,11.6545975 309.47007,14.6123596 L321.655172,14.6123596 L321.655172,24.3539326 Z"
                    id="Combined-Shape" fill="#000000" fillRule="nonzero" />
                  <g id="Group-2" transform="translate(73.103448, 24.353933)" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}