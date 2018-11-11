* {
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

/*--- FONTS ---*/
@font-face {
    font-family: verdeModerna;
    src: url(resources/imgs/verdemoderna.woff);
}

@font-face {
    font-family: juliusSansOneV6;
    src: url(http://fonts.gstatic.com/s/juliussansone/v6/iU65JP9acQHPDLkdalCF7pbhOpL-vLTkIjCTuVYsuO0.woff2);
}

@font-face {
    font-family: juliusSansOneV5;
    src: url(http://fonts.gstatic.com/s/librebaskerville/v5/pR0sBQVcY0JZc_ciXjFsK8j0T1k_tV7QYhgnOhA2764.woff2);
}

@font-face {
    font-family: juliusSansOneV5Italic;
    src: url(http://fonts.gstatic.com/s/librebaskerville/v5/QHIOz1iKF3bIEzRdDFaf5fbsUggLxuOzHNuXcSFlTaY.woff2);
}

/*==================*/
/* ==== HEADER ==== */

header {
    background: url(resources/imgs/huntington.jpg) no-repeat;
    background-size: cover;
}

.topTrim {
    background-color: rgba(19, 67, 71, 1);
    padding-top: 10px;
    width: 100%;
}

.headerDiv {
    position: relative;
    background: url(resources/imgs/noise.png) fixed,
                url(resources/imgs/gridlines.png) 0px 60px fixed,
                url(resources/imgs/contours@2x.png) fixed;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.fullScreenHeader {
    position: relative;
    grid-column: 2;
    display: flex;
    align-items: center;
    text-align: center;
    height: 240px;
    width: 100%;
}


.glyph {
    width: 50px;
    margin-top: 20px;
    opacity: .6;
}

.titleSpan {
    text-decoration: underline rgba(204, 204, 204, 0.7) dashed;
    font-size: 16px;
}

header h1 {
    color: white;
    margin-top: 10px;
    font-family: juliusSansOneV6, serif;
    font-weight: lighter;
    font-size: 29px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

header h2 {
    color: white;
    font-family: juliusSansOneV5Italic;
    font-size: 18px;
    padding-top: 5px;
    color: rgba(250, 250, 250, .6);
}

.bannerRow {
    width: 100%;
    height: 70px;;
    bottom: 0;
    background-color: rgba(204, 204, 204, 0.25);
    position: absolute;
    display: grid;
    grid-template-columns: 75px auto 75px;
    font-family: juliusSansOneV6;
    font-size: 18px;
}

.bannerBtn1 {
    height: 70px;
    grid-column: 1;
}

.bannerBtnText {
    font-family: verdeModerna;
    font-size: 45px;
    color: rgba(245, 245, 245, 0.68);
    position: relative;
    top: 10px;
}

.banner {
    grid-column: 2;
    height: 70px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
}

div.banner span {
    color: rgba(250, 250, 250, .6);
    text-transform: uppercase;
    font-size: 18px;
    padding-top: 3px;
}

.bannerBtn2 {
    grid-column: 3;
    height: 70px;
}

.bannerBtn1:hover,
.bannerBtn2:hover,
.banner:hover {
    background-color: rgba(204, 204, 204, 0.4);
    cursor: pointer;
}



/*--------------------*/
/*====== MAIN ========*/


.whiteContainer1,
.whiteContainer2 {
    display: grid;
    grid-template-columns: 10% 1fr 10%;
}

.introDiv {
    grid-column: 2;
    margin-top: 35px;
    line-height: 1.9;
    font-family: juliusSansOneV5;
    font-size: 13.5px;
    color: rgba(1, 1, 1, 0.8);
}

.downloadDiv {
    font-size: 0;
}

.article1,
.article2,
.article3,
.article4,
.article5 {
    grid-column: 2;
}

article.article1 p,
article.article2 p,
article.article3 p,
article.article4 p,
article.article5 p {
    margin-top: 10px;
    line-height: 1.9;
    font-family: juliusSansOneV5;
    font-size: 13.5px;
    color: rgba(1, 1, 1, 0.8);
}

.article1Head,
.article2Head,
.article3Head,
.article4Head,
.article5Head {
    font-family: juliusSansOneV6;
    margin-top: 42px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: lighter;
}

.article2,
.article4,
.article5 {
    margin-bottom: 20px;
}

.article3Head {
    margin-top: 30px;
}

.greenSection {
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    background: url(resources/imgs/contours@2x.png)fixed,
                url(resources/imgs/gridlines-opaque.png) fixed,
                url(resources/imgs/bamboo.png) fixed no-repeat;
    background-size: cover;
}

.bamboo {
    background-color: rgba(138,188,159,0.5);
}


span.em {
    font-size: 0.9em;
    border-bottom: 1px #172d2694 dotted
}



/*-----------------*/
/*-----FOOTER------*/
/*-----------------*/


.footerDiv {
    height: 225px;
    position: relative;
    background: url(resources/imgs/koi.jpg) no-repeat;
    background-size: cover;
    text-align: center;
}

.footerOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 225px;
    background: url(resources/imgs/gridlines.png) fixed,
                url(resources/imgs/contours@2x.png) fixed;
}

.footerTextDiv {
    font-size: 23px;
    margin: 0 7%;
    line-height: 1.8;
    color: rgba(232, 232, 232, 0.42);
    font-family: juliusSansOneV5Italic;
}

a.footerText1 {
    text-decoration: none;
    font-family: juliusSansOneV5;
}

a.footerText1:hover {
    text-decoration: underline;
}

.footerText1 {
    color: rgba(232, 232, 232, 0.76);
}

.footerIconDiv {
    font-family: verdeModerna;
    font-size: 35px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #134347;
    width: 100%;
    height: 110px;
    color: #d8d8d88f;
}

.icons {
    border: 1px solid #13434700;
    border-radius: 50%;
    transition: .3s ease-out;
    margin: 0 5px;
}

.icons:hover {
    background-color: #d8d8d88f;
    color: #134347;
    border: 1px solid #134347;
    cursor: pointer;
}




    /*----------------*/
    /*-----TILES------*/
    /*----------------*/

.tilesContainer1,
.tilesContainer2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.tilesContainer1 {
    background-color: #edf4f0;
}

.greenOverlay {
    background: url(resources/imgs/contours@2x.png) fixed,
                url(resources/imgs/gridlines-opaque.png)fixed,
                url(resources/imgs/bamboo.png) fixed;
    background-color: rgba(138,188,159,0.5);
}

.tilesContainer2 {

}

.tileType1,
.tileType2 {
    width: 100%;
    height: 75px;
    display: flex;
    padding-top: 10px;
    border-bottom: 1px solid #758e8536;
    line-height: 1.3;
}

.tileType2 {
    font-family: juliusSansOneV6;
    font-size: 17px;
    color: rgba(0, 20, 10, .7);
}

.col1 {
    grid-column: 1;
    margin-left: 10%;
}

.col2 {
    grid-column: 2;
    margin-left: 10%;
}

.tileTitle {
    font-family: juliusSansOneV6;
    color: rgba(0, 20, 10, .7);
    transition: color .3s;
}

.byTile {
    font-family: juliusSansOneV5Italic;
    font-size: 13px;
    color: rgba(20, 20, 20, 0.28);
}

.tileName {
    font-family: juliusSansOneV5;
    font-size: 12px;
    color: rgba(0, 20, 10, .7);
    transition: color .3s;
}

.type2Text {
    transition: color .3s;
}

div.tileType2 p {
    margin-top: 5px;
}

.tileTitle:hover,
.tileName:hover,
.type2Text:hover {
    color: #49968e;
    cursor: pointer;
}

.gFirstRow {
    height: 80px;
}

.gSecondRow {
    height: 75px;
}

.gThirdRow {
    height: 70px;
}

.gBottomRow {
    height: 88px;
}

.ggFirstRow {
    height: 63px;
}

.ggSecondRow {
    height: 50px;
}

.ggLastRow {
    height: 45px;
}