package org.iplantc.de.diskResource.client.presenters.toolbar;

import org.iplantc.de.client.events.EventBus;
import org.iplantc.de.client.events.diskResources.OpenFolderEvent;
import org.iplantc.de.client.gin.ServicesInjector;
import org.iplantc.de.client.models.UserInfo;
import org.iplantc.de.client.models.diskResources.DiskResource;
import org.iplantc.de.client.models.diskResources.DiskResourceAutoBeanFactory;
import org.iplantc.de.client.models.diskResources.File;
import org.iplantc.de.client.models.diskResources.Folder;
import org.iplantc.de.client.models.diskResources.PathListRequest;
import org.iplantc.de.client.models.errors.diskResources.DiskResourceErrorAutoBeanFactory;
import org.iplantc.de.client.models.identifiers.PermanentIdRequestType;
import org.iplantc.de.client.models.sharing.PermissionValue;
import org.iplantc.de.client.models.viewer.InfoType;
import org.iplantc.de.client.models.viewer.MimeType;
import org.iplantc.de.client.services.DiskResourceServiceFacade;
import org.iplantc.de.client.services.PermIdRequestUserServiceFacade;
import org.iplantc.de.client.util.DiskResourceUtil;
import org.iplantc.de.commons.client.ErrorHandler;
import org.iplantc.de.commons.client.info.ErrorAnnouncementConfig;
import org.iplantc.de.commons.client.info.IplantAnnouncer;
import org.iplantc.de.commons.client.info.SuccessAnnouncementConfig;
import org.iplantc.de.commons.client.views.window.configs.ConfigFactory;
import org.iplantc.de.commons.client.views.window.configs.FileViewerWindowConfig;
import org.iplantc.de.commons.client.views.window.configs.HTPathListWindowConfig;
import org.iplantc.de.commons.client.views.window.configs.MultiInputPathListWindowConfig;
import org.iplantc.de.commons.client.views.window.configs.TabularFileViewerWindowConfig;
import org.iplantc.de.diskResource.client.PathListAutomationView;
import org.iplantc.de.diskResource.client.ToolbarView;
import org.iplantc.de.diskResource.client.events.CreateNewFileEvent;
import org.iplantc.de.diskResource.client.events.RequestSimpleDownloadEvent;
import org.iplantc.de.diskResource.client.events.ShowFilePreviewEvent;
import org.iplantc.de.diskResource.client.events.selection.AutomatePathListSelected;
import org.iplantc.de.diskResource.client.events.selection.CreateNcbiFolderStructureSelected;
import org.iplantc.de.diskResource.client.events.selection.CreateNcbiSraFolderStructureSubmitted;
import org.iplantc.de.diskResource.client.events.selection.CreateNewDelimitedFileSelected;
import org.iplantc.de.diskResource.client.events.selection.CreateNewFileSelected;
import org.iplantc.de.diskResource.client.events.selection.CreateNewFolderConfirmed;
import org.iplantc.de.diskResource.client.events.selection.CreateNewFolderSelected;
import org.iplantc.de.diskResource.client.events.selection.NewMultiInputPathListFileSelected;
import org.iplantc.de.diskResource.client.events.selection.CreateNewPathListSelected;
import org.iplantc.de.diskResource.client.events.selection.CreatePublicLinkSelected;
import org.iplantc.de.diskResource.client.events.selection.EditFileSelected;
import org.iplantc.de.diskResource.client.events.selection.ImportFromCogeBtnSelected;
import org.iplantc.de.diskResource.client.events.selection.OpenNewWindowAtLocationSelected;
import org.iplantc.de.diskResource.client.events.selection.OpenNewWindowSelected;
import org.iplantc.de.diskResource.client.events.selection.RequestDOISelected;
import org.iplantc.de.diskResource.client.events.selection.SimpleDownloadSelected;
import org.iplantc.de.diskResource.client.events.selection.SimpleDownloadSelected.SimpleDownloadSelectedHandler;
import org.iplantc.de.diskResource.client.gin.factory.DiskResourceSelectorFieldFactory;
import org.iplantc.de.diskResource.client.views.dialogs.CreateFolderDialog;
import org.iplantc.de.diskResource.client.views.dialogs.CreateNcbiSraFolderStructureDialog;
import org.iplantc.de.diskResource.client.views.dialogs.CreatePublicLinkDialog;
import org.iplantc.de.diskResource.client.views.dialogs.GenomeSearchDialog;
import org.iplantc.de.diskResource.client.views.toolbar.dialogs.PathListAutomationDialog;
import org.iplantc.de.diskResource.client.views.toolbar.dialogs.DOIAgreementDialog;
import org.iplantc.de.diskResource.client.views.toolbar.dialogs.TabFileConfigDialog;
import org.iplantc.de.shared.AsyncProviderWrapper;
import org.iplantc.de.shared.DataCallback;

import com.google.common.base.Preconditions;
import com.google.gwt.event.shared.HandlerManager;
import com.google.gwt.event.shared.HandlerRegistration;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;

import com.sencha.gxt.widget.core.client.box.AlertMessageBox;

import java.util.List;
import java.util.logging.Logger;

/**
 * @author jstroot
 */
public class ToolbarViewPresenterImpl implements ToolbarView.Presenter,
                                                 SimpleDownloadSelectedHandler,
                                                 AutomatePathListSelected.AutomatePathListSelectedHandler,
                                                 NewMultiInputPathListFileSelected.NewMultiInputPathListFileSelectedHandler,
                                                 EditFileSelected.EditFileSelectedHandler,
                                                 CreatePublicLinkSelected.CreatePublicLinkSelectedHandler,
                                                 CreateNewFolderSelected.CreateNewFolderSelectedHandler,
                                                 CreateNcbiFolderStructureSelected.CreateNcbiFolderStructureSelectedHandler,
                                                 CreateNewFileSelected.CreateNewFileSelectedHandler,
                                                 CreateNewPathListSelected.CreateNewPathListSelectedHandler,
                                                 CreateNewDelimitedFileSelected.CreateNewDelimitedFileSelectedHandler,
                                                 OpenNewWindowAtLocationSelected.OpenNewWindowAtLocationSelectedHandler,
                                                 OpenNewWindowSelected.OpenNewWindowSelectedHandler,
                                                 ImportFromCogeBtnSelected.ImportFromCogeBtnSelectedHandler,
                                                 RequestDOISelected.RequestDOISelectedHandler {

    @Inject ToolbarView.Presenter.Appearance appearance;
    @Inject DiskResourceSelectorFieldFactory drSelectorFactory;
    @Inject EventBus eventBus;
    @Inject DiskResourceServiceFacade drFacade;
    @Inject UserInfo userInfo;

    @Inject DiskResourceAutoBeanFactory drAbFactory;

    @Inject
    PathListAutomationView.PathListAutomationAppearance htAppearance;
    @Inject DiskResourceUtil diskResourceUtil;

    PermIdRequestUserServiceFacade prFacade =
            ServicesInjector.INSTANCE.getPermIdRequestUserServiceFacade();

    @Inject DiskResourceErrorAutoBeanFactory drFactory;

    @Inject IplantAnnouncer announcer;
    @Inject AsyncProviderWrapper<TabFileConfigDialog> tabFileConfigDlgProvider;
    @Inject AsyncProviderWrapper<CreateFolderDialog> createFolderDlgProvider;
    @Inject AsyncProviderWrapper<CreateNcbiSraFolderStructureDialog> createNcbiSraDlgProvider;
    @Inject AsyncProviderWrapper<CreatePublicLinkDialog> createPublicLinkDlgProvider;
    @Inject AsyncProviderWrapper<GenomeSearchDialog> genomeSearchDlgProvider;
    @Inject AsyncProviderWrapper<PathListAutomationDialog> pathAutomationDlgProvider;
    @Inject AsyncProviderWrapper<DOIAgreementDialog> agreementDialogWrapper;

    private final ToolbarView view;
    private HandlerManager handlerManager;


    Logger LOG = Logger.getLogger(ToolbarViewPresenterImpl.class.getSimpleName());

    @Inject
    ToolbarViewPresenterImpl(final ToolbarView view) {
        this.view = view;
        view.addSimpleDownloadSelectedHandler(this);
        view.addAutomatePathListSelectedHandler(this);
        view.addNewMultiInputPathListFileSelectedHandler(this);
        view.addEditFileSelectedHandler(this);
        view.addCreatePublicLinkSelectedHandler(this);
        view.addCreateNewFolderSelectedHandler(this);
        view.addCreateNcbiFolderStructureSelectedHandler(this);
        view.addCreateNewFileSelectedHandler(this);
        view.addCreateNewPathListSelectedHandler(this);
        view.addCreateNewDelimitedFileSelectedHandler(this);
        view.addOpenNewWindowAtLocationSelectedHandler(this);
        view.addOpenNewWindowSelectedHandler(this);
        view.addImportFromCogeBtnSelectedHandler(this);
        view.addRequestDOISelectedHandler(this);
    }

    @Override
    public ToolbarView getView() {
        return view;
    }

    @Override
    public void onCreateNewDelimitedFileSelected(CreateNewDelimitedFileSelected event) {
        tabFileConfigDlgProvider.get(new AsyncCallback<TabFileConfigDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(TabFileConfigDialog dialog) {
                dialog.addOkButtonSelectHandler(selectEvent -> {
                    TabularFileViewerWindowConfig config = getTabFileViewerWindowConfig();
                    config.setEditing(true);
                    config.setVizTabFirst(true);
                    config.setSeparator(dialog.getSeparator());
                    config.setColumns(dialog.getNumberOfColumns());
                    config.setContentType(MimeType.PLAIN);
                    eventBus.fireEvent(new CreateNewFileEvent(config));
                });

                dialog.show();
            }
        });
    }

    @Override
    public void onCreateNewFileSelected(CreateNewFileSelected event) {
        final Folder selectedFolder = event.getSelectedFolder();
        final MimeType mimeType = event.getMimeType();
        FileViewerWindowConfig config = ConfigFactory.fileViewerWindowConfig(null);
        config.setEditing(true);
        config.setParentFolder(selectedFolder);
        config.setContentType(mimeType);
        eventBus.fireEvent(new CreateNewFileEvent(config));
    }

    @Override
    public void onCreateNewFolderSelected(CreateNewFolderSelected event) {
        Folder selectedFolder = event.getSelectedFolder();
        if(selectedFolder == null) {
            Folder parent = drAbFactory.folder().as();
            parent.setPath(userInfo.getHomePath());
            selectedFolder = parent;
        }
        Folder finalSelectedFolder = selectedFolder;
        createFolderDlgProvider.get(new AsyncCallback<CreateFolderDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(CreateFolderDialog dialog) {
                dialog.show(finalSelectedFolder);
                dialog.addOkButtonSelectHandler(selectEvent -> ensureHandlers().fireEvent(new CreateNewFolderConfirmed(finalSelectedFolder, dialog.getFolderName())));
            }
        });
    }

    @Override
    public void onCreateNcbiFolderStructureSelected(CreateNcbiFolderStructureSelected event) {
        final Folder selectedFolder = event.getSelectedFolder();
        createNcbiSraDlgProvider.get(new AsyncCallback<CreateNcbiSraFolderStructureDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(CreateNcbiSraFolderStructureDialog dialog) {
                dialog.addOkButtonSelectHandler(selectEvent -> {
                    if (dialog.isValid()) {
                        ensureHandlers().fireEvent(new CreateNcbiSraFolderStructureSubmitted(selectedFolder,
                                                                                             dialog.getProjectTxt(),
                                                                                             dialog.getBioSampNum(),
                                                                                             dialog.getLibNum()));
                        dialog.hide();
                    }
                });
                dialog.addCancelButtonSelectHandler(selectEvent -> dialog.hide());
                dialog.show(selectedFolder);
            }
        });
    }

    @Override
    public void onCreateNewPathListSelected(CreateNewPathListSelected event) {
        HTPathListWindowConfig config = ConfigFactory.newHTPathListWindowConfig();
        config.setEditing(true);
        eventBus.fireEvent(new CreateNewFileEvent(config));
    }

    @Override
    public void onCreatePublicLinkSelected(CreatePublicLinkSelected event) {
        final List<DiskResource> selectedDiskResources = event.getSelectedDiskResources();
        createPublicLinkDlgProvider.get(new AsyncCallback<CreatePublicLinkDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(CreatePublicLinkDialog dialog) {
                dialog.show(selectedDiskResources);
            }
        });
    }

    @Override
    public void onEditFileSelected(EditFileSelected event) {
        final List<DiskResource> selectedDiskResources = event.getSelectedDiskResources();
        Preconditions.checkState(selectedDiskResources.size() == 1,
                                 "Only one file should be selected, but there are %i",
                                 selectedDiskResources.size());
        final DiskResource next = selectedDiskResources.iterator().next();
        Preconditions.checkState(next instanceof File, "Selected item should be a file, but is not.");
        Preconditions.checkState(PermissionValue.own.equals(next.getPermission())
                                 || PermissionValue.write.equals(next.getPermission()),
                                 "User should have either own or write permissions for the selected item");

        eventBus.fireEvent(new ShowFilePreviewEvent((File)next, null));
    }

    @Override
    public void onOpenNewWindowAtLocationSelected(OpenNewWindowAtLocationSelected event) {
        final Folder selectedFolder = event.getSelectedFolder();
        final String selectedFolderPath = selectedFolder == null ? null : selectedFolder.getPath();
        OpenFolderEvent openFolderEvent = new OpenFolderEvent(selectedFolderPath, true);
        eventBus.fireEvent(openFolderEvent);
    }

    @Override
    public void onOpenNewWindowSelected(OpenNewWindowSelected event) {
        OpenFolderEvent openFolderEvent = new OpenFolderEvent(null, true);
        eventBus.fireEvent(openFolderEvent);
    }

    @Override
    public void onSimpleDownloadSelected(SimpleDownloadSelected event) {
        eventBus.fireEvent(new RequestSimpleDownloadEvent(event.getSelectedDiskResources(),
                                                          event.getSelectedFolder()));
    }

    @Override
    public void onImportFromCogeBtnSelected(ImportFromCogeBtnSelected event) {
        genomeSearchDlgProvider.get(new AsyncCallback<GenomeSearchDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(GenomeSearchDialog dialog) {
                dialog.show();
            }
        });
    }

    @Override
    public void onRequestDOISelected(RequestDOISelected event) {
        String uuid = event.getResourceId();
        agreementDialogWrapper.get(new AsyncCallback<DOIAgreementDialog>() {
            @Override
            public void onFailure(Throwable throwable) {
                //do nothing
            }

            @Override
            public void onSuccess(DOIAgreementDialog  dialog) {
                dialog.addOkButtonSelectHandler(selectEvent -> requestDoi(uuid));
                dialog.show();
            }
        });
    }

    void requestDoi(String uuid) {
        prFacade.requestPermId(uuid, PermanentIdRequestType.DOI, new DataCallback<String>() {

            @Override
            public void onFailure(Integer statusCode, Throwable caught) {
                announcer.schedule(new ErrorAnnouncementConfig(appearance.doiRequestFail()));
                ErrorHandler.post(appearance.doiRequestFail(),caught);
            }

            @Override
            public void onSuccess(String result) {
                announcer.schedule(new SuccessAnnouncementConfig(appearance.doiRequestSuccess()));
            }
        });
    }

    @Override
    public void onAutomatePathListSelected(AutomatePathListSelected event) {
        drFacade.getInfoTypes(new DataCallback<List<InfoType>>() {

            @Override
            public void onFailure(Integer statusCode, Throwable arg0) {
                ErrorHandler.post(arg0);
            }

            @Override
            public void onSuccess(List<InfoType> infoTypes) {
                showPathAutomationDialog(infoTypes, event.getPathListInfoType());
            }
        });
    }

    void showPathAutomationDialog(List<InfoType> infoTypes, InfoType pathListInfoType) {
        pathAutomationDlgProvider.get(new AsyncCallback<PathListAutomationDialog>() {
            @Override
            public void onFailure(Throwable caught) {}

            @Override
            public void onSuccess(PathListAutomationDialog dialog) {
                dialog.addOkButtonSelectHandler(event -> {
                    if (dialog.isValid()) {
                        PathListRequest request = dialog.getRequest();
                        requestHTPathListCreation(dialog, request);
                    } else {
                        showHTProcessingError(dialog.getHeading().asString());
                    }
                });
                dialog.addCancelButtonSelectHandler(event -> {
                    dialog.hide();
                });
                dialog.show(infoTypes, pathListInfoType);
            }
        });
    }

    protected void showHTProcessingError(String heading) {
        AlertMessageBox amb =
                new AlertMessageBox(heading, htAppearance.validationMessage());
        amb.show();
    }

    protected void requestHTPathListCreation(PathListAutomationDialog dialog,
                                             PathListRequest request) {
        dialog.mask(htAppearance.processing());
        drFacade.requestPathListFile(request, new DataCallback<File>() {
            @Override
            public void onFailure(Integer statusCode, Throwable exception) {
                ErrorHandler.post(htAppearance.requestFailed(), exception);
                dialog.unmask();
            }

            @Override
            public void onSuccess(File result) {
                dialog.hide();
                announcer.schedule(new SuccessAnnouncementConfig(htAppearance.requestSuccess()));
                eventBus.fireEvent(new ShowFilePreviewEvent(result, null));
            }
        });
    }

    TabularFileViewerWindowConfig getTabFileViewerWindowConfig() {
        return ConfigFactory.newTabularFileViewerWindowConfig();
    }

    HandlerManager ensureHandlers() {
        return handlerManager == null ? handlerManager = createHandlerManager() : handlerManager;
    }

    HandlerManager createHandlerManager() {
        return new HandlerManager(this);
    }

    @Override
    public HandlerRegistration addCreateNewFolderConfirmedHandler(CreateNewFolderConfirmed.CreateNewFolderConfirmedHandler handler) {
        return ensureHandlers().addHandler(CreateNewFolderConfirmed.TYPE, handler);
    }

    @Override
    public HandlerRegistration addCreateNcbiSraFolderStructureSubmittedHandler(
            CreateNcbiSraFolderStructureSubmitted.CreateNcbiSraFolderStructureSubmittedHandler handler) {
        return ensureHandlers().addHandler(CreateNcbiSraFolderStructureSubmitted.TYPE, handler);
    }

    @Override
    public void onNewMultiInputPathListFileSelected(NewMultiInputPathListFileSelected event) {
        MultiInputPathListWindowConfig config = ConfigFactory.newMultiInputPathListWindowConfig();
        config.setEditing(true);
        eventBus.fireEvent(new CreateNewFileEvent(config));
    }
}
