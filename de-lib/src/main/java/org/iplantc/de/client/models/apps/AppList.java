package org.iplantc.de.client.models.apps;

import com.google.web.bindery.autobean.shared.AutoBean.PropertyName;

import java.util.List;

/**
 * This is a convenience class for retrieving JSON arrays of apps
 * 
 * @author jstroot
 * 
 */
public interface AppList {
    @PropertyName("apps")
    List<App> getApps();

    int getTotal();

    @PropertyName("apps")
    void setApps(List<App> newAppList);
}
