import fav from "../resources/images/fav.png";
import favAdd from "../resources/images/fav_add.png";
import favRemove from "../resources/images/fav_remove.png";
import notFav from "../resources/images/not_fav.png";

export default (theme) => ({
    statFilterButton: {
        margin: 1,
    },
    statTable: {
        overflow: "auto",
        height: "70%",
    },
    statTableHead: {
        backgroundColor: "#e2e2e2",
        position: "sticky",
        top: 0,
    },
    statTablePager: {
        flexShrink: 0,
    },
    detailsLabel: {
        fontWeight: "bold",
        fontSize: 10,
        width: 90,
    },
    detailsValue: {
        fontSize: 10,
        paddingLeft: 2,
    },
    statContainer: {
        width: "100%",
        height: "100%",
        marginTop: theme.spacing(3),
        overflow: "auto",
    },
    statSearchTextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    favorite: {
        backgroundImage: `url(${fav})`,
        height: 16,
        width: 16,
        cursor: "pointer",
        "&:hover": {
            backgroundImage: `url(${favRemove})`,
        },
    },
    notFavorite: {
        backgroundImage: `url(${notFav})`,
        height: 16,
        width: 16,
        cursor: "pointer",
        "&:hover": {
            backgroundImage: `url(${favAdd})`,
        },
    },
    disableFavorite: {
        backgroundImage: `url(${notFav})`,
    },
    paper: {
        padding: "20px",
    },
    listingFont: {
        fontSize: "12px",
    },
});
