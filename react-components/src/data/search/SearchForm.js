import ids from "./ids";
import messages from "./messages";
import { SaveSearchButton } from "../search";
import styles from "./styles";
import SearchFormTagPanel from "./SearchFormTagPanel";
import withI18N, { getMessage } from "../../util/I18NWrapper";
import withStoreProvider from "../../util/StoreProvider";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import {Field, Fields, reduxForm} from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { injectIntl } from "react-intl";
import injectSheet from "react-jss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleSaveSearch = this.handleSaveSearch.bind(this);
    }

    handleSaveSearch(values) {
        let initialValues = this.props.initialValues;
        let originalName = initialValues ? initialValues.label : null;
        this.props.presenter.onSaveSearch(values, originalName);
    }

    handleSubmitForm(values) {
        this.props.presenter.onSearchBtnClicked(values);
    }

    render() {
        let {
            classes,
            messages,
            intl,
            presenter,
            dateIntervals,
            suggestedTags,
        } = this.props;
        let dateIntervalChildren = dateIntervals.map(function (item, index) {
            return <MenuItem key={index} value={item}>{item.label}</MenuItem>
        });

        let originalName = this.props.initialValues ? this.props.initialValues : null;

        let sizesList = messages.fileSizes;
        let sizesListChildren = sizesList.map(function (item, index) {
            return <MenuItem key={index} value={item}>{item}</MenuItem>
        });

        // From redux
        let { handleSubmit, array } = this.props;

        return (
            <form id={ids.form}>
                <table className={classes.form}>
                    <tbody>
                    <tr>
                        <td>
                            <Field name='fileQuery'
                                   id={ids.nameHas}
                                   label={getMessage('nameHas')}
                                   component={renderTextField}/>
                        </td>
                        <td>
                            <Field name='createdWithin'
                                   id={ids.createdWithin}
                                   label={getMessage('createdWithin')}
                                   component={renderDropDown}>
                                {dateIntervalChildren}
                            </Field>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Field name='negatedFileQuery'
                                   id={ids.nameHasNot}
                                   label={getMessage('nameHasNot')}
                                   component={renderTextField}/>
                        </td>
                        <td>
                            <Field name='modifiedWithin'
                                   id={ids.modifiedWithin}
                                   label={getMessage('modifiedWithin')}
                                   component={renderDropDown}>
                                {dateIntervalChildren}
                            </Field>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Field name='metadataAttributeQuery'
                                   id={ids.metadataAttributeHas}
                                   label={getMessage('metadataAttributeHas')}
                                   component={renderTextField}/>
                        </td>
                        <td>
                            <Field name='ownedBy'
                                   id={ids.ownedBy}
                                   label={getMessage('ownedBy')}
                                   placeholder={intl.formatMessage({id: 'enterCyVerseUserName'})}
                                   component={renderTextField}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Field name='metadataValueQuery'
                                   id={ids.metadataValueHas}
                                   label={getMessage('metadataValueHas')}
                                   component={renderTextField}/>
                        </td>
                        <td>
                            <Field name='sharedWith'
                                   id={ids.sharedWith}
                                   label={getMessage('sharedWith')}
                                   placeholder={intl.formatMessage({id: 'enterCyVerseUserName'})}
                                   component={renderTextField}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                    <td className={classes.fullWidth}>
                                        <Field name='fileSizeRange.min'
                                               type='number'
                                               parse={value => value ? Number(value) : null}
                                               min='0'
                                               id={ids.fileSizeGreater}
                                               label={getMessage('fileSizeGreater')}
                                               component={renderTextField}/>
                                    </td>
                                    <td>
                                        <Field name='fileSizeRange.minUnit.label'
                                               id={ids.fileSizeGreaterUnit}
                                               label=' '
                                               component={renderDropDown}>
                                            {sizesListChildren}
                                        </Field>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                    <td className={classes.fullWidth}>
                                        <Field name='fileSizeRange.max'
                                               type='number'
                                               parse={value => value ? Number(value) : null}
                                               min='0'
                                               id={ids.fileSizeLessThan}
                                               label={getMessage('fileSizeLessThan')}
                                               component={renderTextField}/>
                                    </td>
                                    <td>
                                        <Field name='fileSizeRange.maxUnit.label'
                                               id={ids.fileSizeLessThanUnit}
                                               label=' '
                                               component={renderDropDown}>
                                            {sizesListChildren}
                                        </Field>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Fields names={['taggedWith', 'tagQuery']}
                                    parentId={ids.form}
                                    placeholder={getMessage('taggedWith')}
                                    dataSource={suggestedTags}
                                    array={array}
                                    presenter={presenter}
                                    component={renderTagSearchField}/>
                        </td>
                        <td>
                            <Field name='includeTrashItems'
                                   id={ids.includeTrash}
                                   label={getMessage('includeTrash')}
                                   component={renderCheckBox}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Field name='label'
                                   originalName={originalName}
                                   id={ids.saveSearchBtn}
                                   handleSave={handleSubmit(this.handleSaveSearch)}
                                   component={renderSaveSearchBtn}/>
                        </td>
                        <td>
                            <div className={classes.searchButton}>
                                <Button variant="raised"
                                        id={ids.searchBtn}
                                        onClick={handleSubmit(this.handleSubmitForm)}>
                                    {getMessage('searchBtn')}
                                </Button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

SearchForm.propTypes = {
    presenter: PropTypes.shape({
        onSearchBtnClicked: PropTypes.func.isRequired,
        onAddTagSelected: PropTypes.func.isRequired,
        onEditTagSelected: PropTypes.func.isRequired,
        onSaveSearch: PropTypes.func.isRequired,
        fetchTagSuggestions: PropTypes.func.isRequired
    }),
    dateIntervals: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            from: PropTypes.number,
            to: PropTypes.number
        })
    ),
    suggestedTags: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        description: PropTypes.string
    })),
    id: PropTypes.string.isRequired,
    initialValues: PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
            fileQuery: PropTypes.string,
            negatedFileQuery: PropTypes.string,
            createdWithin: PropTypes.number,
            modifiedWithin: PropTypes.number,
            metadataAttributeQuery: PropTypes.string,
            metadataValueQuery: PropTypes.string,
            ownedBy: PropTypes.string,
            sharedWith: PropTypes.string,
            fileSizeGreater: PropTypes.string,
            fileSizeGreaterUnit: PropTypes.string,
            fileSizeLessThan: PropTypes.string,
            fileSizeLessThanUnit: PropTypes.string,
            tagQuery: PropTypes.array,
            includeTrashItems: PropTypes.bool
        }
    )
};

function renderSaveSearchBtn(props) {
    let {
        input,
        disabled,
        ...custom
    } = props;
    return (
        <SaveSearchButton disabled={disabled}
                          {...input}
                          {...custom}
        />
    )
}

function renderTagSearchField(props) {
    let {
        taggedWith,
        tagQuery,
        array,
        parentId,
        placeholder,
        presenter,
        dataSource
    } = props;
    return (
        <SearchFormTagPanel parentId={parentId}
                            placeholder={placeholder}
                            presenter={presenter}
                            dataSource={dataSource}
                            array={array}
                            tagQuery={tagQuery}
                            taggedWith={taggedWith}/>
    )
}

function renderTextField(props) {
    let {
        input,
        label,
        meta: {error},
        ...custom
    } = props;
    return (
        <TextField
            label={error ? error : label}
            fullWidth={true}
            {...input}
            {...custom}
        />
    )
}

function renderDropDown(props) {
    let {
        input,
        label,
        children,
        id
    } = props;
    return (
        <FormControl fullWidth={true}>
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            <Select value={input.value ? input.value : ''}
                    onChange={(event) => input.onChange(event.target.value)}
                    id={id}>
                {children}
            </Select>
        </FormControl>
    )
}

function renderCheckBox(props) {
    let {
        input,
        label,
        ...custom
    } = props;
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={!!input.value}
                    onChange={input.onChange}
                    {...custom}
                />
            }
            label={label}
        />
    )
}

export default withStoreProvider(
    reduxForm(
    {
        form: 'searchForm',
        enableReinitialize: true
    }
)(injectSheet(styles)(withI18N(injectIntl(SearchForm), messages))));