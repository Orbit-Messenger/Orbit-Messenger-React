import 'fontsource-press-start-2p';
import 'fontsource-bangers';
import 'roboto-fontface';


const whiteColor = "#FFFFFF";
const color1 = "#01BAEF";
const color2 =  "#20BF55";
const color3 =  "#0B4F6C";
const color5 =  "#1c1d1f";

// const fontFamily1 = '"Press Start 2P"';
const fontFamily1 = '"Bangers"';
const fontFamily2 = '"Roboto"';

export let theme ={

        // Backgrounds
        background: "url('./res/img/organCoastRocky2.jpg') fixed no-repeat",
        backgroundSize: "100% 100%",
        mainPaperBackground: "url('./res/img/organSunset.jpg') no-repeat",
        paperBackground: color1,
        lightPaperBackground: color5,
        navBarBackground: color1,
        footerBackground: color3,
        textFieldBackground: color5,
        buttonBackground: color1,
        buttonSecondaryBackground: color2,
        buttonHoverBackground: color3,
        drawerBackground: color2,
        customCardBackground: "rgba(0, 0, 0, 0.55)",
        statusBarBackground: color2,
        error: "#FF0000",

        // Image Border
        imgBorderColor: color2,

        // Text
        titleFontFamily: fontFamily1,
        titleTextColor: color1,
        titleFontSize: "170%",

        headerFontFamily: fontFamily1,
        headerTextColor: color1,
        header2TextColor: color2,


        defaultTextColor: "black",
        defaultLightTextColor: whiteColor,
        defaultTextFontFamily: fontFamily2,

        drawerTextColor: whiteColor,
        drawerFontFamily: fontFamily1,

        // Divider color
        dividerColor: color3,

        // Icon Colors
        iconColor: whiteColor,

        fullPage: 11,
        mobileFullPage: 12,
        halfPage: 5,
        defaultHeight: "840px"



}
