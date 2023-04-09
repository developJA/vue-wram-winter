/**
 * 상수
 */
export default class Define {
    // 레이아웃
    static LAYOUT_TYPE = {
        DEFAULT: "DefaultLayout",
        EMPTY: "EmptyLayout",
    };

    static LAYOUT_NAME = {
        DEFAULT: "defaultLayout",
        EMPTY: "emptyLayout",
    };

    static DEVELOP_MODE = "DEV";
    static SERVER_NAME = this.DEVELOP_MODE == "DEV" ? "HTTP_DEV" : "HTTP_REAL";
}
