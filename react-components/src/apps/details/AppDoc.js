/**
 *  @author sriram
 *
 **/

import React from 'react';
import showdown from "showdown";
import sanitizeHtml from "sanitize-html";
import { Paper, withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import style from "../style";
import withI18N, { getMessage } from "../../util/I18NWrapper";
import { injectIntl } from "react-intl";
import intlData from "../messages";
import DEHyperLink from "../../util/hyperlink/DEHyperLink";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { EDIT_MODE, VIEW_MODE } from "./AppInfoDialog";
import LoadingOverlay from 'react-loading-overlay'

function References(props) {
    const {references} = props;
    if (references) {
        return (
            <React.Fragment>
                <Typography variant="subtitle1">{getMessage("references")}</Typography>
                {
                    references.map((ref) => {
                        return <div key={ref}>{ref}</div>
                    })
                }
            </React.Fragment>

        );
    }

    return null;
}

function WikiUrl(props) {
    const {id, wiki_url, name} = props;
    return (
        <div id={id} style={{padding: 5}}>
            <Typography variant="subtitle1">{getMessage("documentation")}</Typography>
            <DEHyperLink text={name} onClick={() => window.open(wiki_url, "_blank")}/>
        </div>
    );
}

function AppDoc(props) {
    const {
        baseDebugId,
        appName,
        documentation,
        references,
        wiki_url,
        editable,
        saveDoc,
        onDocChange,
        loading,
        error,
        classes,
        mode,
        onModeChange,
    } = props;

    const markDownToHtml = () => {
        const converter = new showdown.Converter();
        converter.setFlavor('github');
        if (documentation) {
            return sanitizeHtml(converter.makeHtml(documentation));
        } else {
            return "";
        }
    };

    const docChange = (event) => {
        onDocChange(event.target.value);
    };


    if (wiki_url) {
        return (<WikiUrl id={baseDebugId} wiki_url={wiki_url} name={appName}/>);
    }

    if (error) {
        return (<div id={baseDebugId} >{getMessage("docFetchError")}</div>);
    }


    return (
        <Paper id={baseDebugId} style={{padding: 5, fontSize:12}}>
            <LoadingOverlay
                active={loading}
                spinner={<CircularProgress size={30} className={classes.loadingStyle} thickness={7}/>}
            >
            {mode === VIEW_MODE &&
            <React.Fragment>
                <div dangerouslySetInnerHTML={{__html: markDownToHtml()}}/>
                <References references={references}/>
            </React.Fragment>
            }
            {mode === EDIT_MODE &&
            <TextField id="docEditor"
                       multiline={true}
                       rows={20}
                       value={documentation}
                       fullWidth={true}
                       onChange={docChange}/>
            }
            {(editable && mode === VIEW_MODE) &&
            <Fab color="primary"
                 aria-label="Edit"
                 style={{float: 'right'}}
                 size="medium"
                 onClick={() => onModeChange(EDIT_MODE)}>
                <EditIcon/>
            </Fab>
            }
            {(editable && mode === EDIT_MODE) &&
            <Fab color="primary"
                 aria-label="Save"
                 style={{float: 'right'}}
                 size="medium"
                 onClick={saveDoc}>
                <SaveIcon/>
            </Fab>
            }
            </LoadingOverlay>
        </Paper>
    );
}

export default withStyles(style)((withI18N(injectIntl(AppDoc), intlData)));
