package org.iplantc.de.diskResource.client.views.sharing;

import org.iplantc.de.client.models.diskResources.DiskResource;
import org.iplantc.de.client.util.DiskResourceUtil;
import org.iplantc.de.commons.client.views.sharing.SharingAppearance;
import org.iplantc.de.diskResource.client.DataSharingView;
import org.iplantc.de.diskResource.client.model.DiskResourceModelKeyProvider;
import org.iplantc.de.diskResource.client.model.DiskResourceNameComparator;
import org.iplantc.de.diskResource.client.views.grid.cells.DiskResourceNameCell;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiFactory;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiTemplate;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;

import com.sencha.gxt.core.client.IdentityValueProvider;
import com.sencha.gxt.data.shared.ListStore;
import com.sencha.gxt.widget.core.client.FramedPanel;
import com.sencha.gxt.widget.core.client.container.VerticalLayoutContainer;
import com.sencha.gxt.widget.core.client.grid.ColumnConfig;
import com.sencha.gxt.widget.core.client.grid.ColumnModel;
import com.sencha.gxt.widget.core.client.grid.Grid;

import java.util.ArrayList;
import java.util.List;

/**
 * @author jstroot
 */
public class DataSharingViewImpl implements DataSharingView {

    @UiTemplate("DataSharingView.ui.xml")
    interface MyUiBinder extends UiBinder<Widget, DataSharingViewImpl> {
    }

    private static final MyUiBinder uiBinder = GWT.create(MyUiBinder.class);

    @UiField(provided = true) SharingAppearance appearance;
    private DiskResourceUtil diskResourceUtil;
    @UiField ColumnModel<DiskResource> diskResourcesColumnModel;
    @UiField ListStore<DiskResource> diskResourcesListStore;
    final Widget widget;
    @UiField VerticalLayoutContainer container;
    @UiField FramedPanel diskResourceListPnl;
    @UiField Grid<DiskResource> diskResourcesGrid;

    @Inject
    public DataSharingViewImpl(SharingAppearance appearance,
                               DiskResourceUtil diskResourceUtil) {
        this.appearance = appearance;
        this.diskResourceUtil = diskResourceUtil;

        widget = uiBinder.createAndBindUi(this);
    }

    @Override
    public void addShareWidget(Widget widget) {
        container.add(widget);
    }

    @Override
    public Widget asWidget() {
        return widget;
    }

    @Override
    public void setSelectedDiskResources(List<DiskResource> models) {
        if (models != null && models.size() > 0) {
            diskResourcesListStore.clear();
            diskResourcesListStore.addAll(models);
        }

    }

    @UiFactory
    ListStore<DiskResource> createListStore() {
        return new ListStore<>(new DiskResourceModelKeyProvider());
    }

    @UiFactory
    ColumnModel<DiskResource> createColumnModel() {
        List<ColumnConfig<DiskResource, ?>> list = new ArrayList<>();

        ColumnConfig<DiskResource, DiskResource> name = new ColumnConfig<>(new IdentityValueProvider<DiskResource>("name"),
                                                                           appearance.dataSharingDlgNameColumnWidth(),
                                                                           appearance.nameColumnLabel());
        name.setCell(new DiskResourceNameCell(diskResourceUtil));
        name.setComparator(new DiskResourceNameComparator());
        list.add(name);

        return new ColumnModel<>(list);
    }

}
