## Create Custom Template/theme

```
Usage: cec create-template <name> | cec ct <name>

Creates the template <name>. By default, it creates a StarterTemplate. Optionally specify -f <source> to create from different source.

Valid values for <source> are:
  CafeSupremoLite
  JETStarterTemplate
  StarterTemplate
  BlogTemplate
  KnowledgeTemplate
  VBCSSamplesTemplate
  search_template

 To create template based on a site on OCM server, specify -s <site> and specify the server with -r <server> or use the one specified in cec.properties file.

Options:
  --help, -h                Show Help
  --from, -f                Source to create from
  --site, -s                Site to create from
  --publishedversion, -b    Published site, theme and components
  --publishedassets, -p     Published assets only
  --referencedassets, -n    Assets added to the site's pages only
  --excludecontent, -x      Exclude content
  --excludetype, -t         Exclude content types
  --excludecomponents, -c   Exclude components
  --excludefolders, -d      The comma separated list of excluded folders for site and theme
  --enterprisetemplate, -e  Enterprise template
  --server, -r              The registered OCM server

Examples:
  cec create-template Temp1
  cec create-template Temp2 -f CafeSupremoLite
  cec create-template Temp1 -s Site1                       Create template Temp1 based on site Site1 on OCM server and include all assets in the site channel
  cec create-template Temp1 -s Site1 -b                    Create template Temp1 based on site Site1 on OCM server and include only the published site, theme and components
  cec create-template Temp1 -s Site1 -p                    Create template Temp1 based on site Site1 on OCM server and include only the published assets
  cec create-template Temp1 -s Site1 -n                    Create template Temp1 based on site Site1 on OCM server and include only the assets added to the site's pages
  cec create-template Temp1 -s Site1 -x                    Create template Temp1 based on site Site1 on OCM server and exclude the content in the site
  cec create-template Temp1 -s Site1 -x -t                 Create template Temp1 based on site Site1 on OCM server and exclude both content and content types in the site
  cec create-template Temp1 -s Site1 -c                    Create template Temp1 based on site Site1 on OCM server and exclude the components used in the site
  cec create-template Temp1 -s Site1 -d site:content       Create template Temp1 based on site Site1 on OCM server and exclude the content folder of the site
  cec create-template Temp1 -s Site1 -r SampleServer1      Create template Temp1 based on site Site1 on the registered server SampleServer1
  cec create-template EnterpriseTemp1 -s StandardSite1 -e  Create enterprise template EnterpriseTemp1 based on standard site StandardSite1 on OCM server

```

::: tip
The code above will create a new theme/template
:::

## Use local component

```bash
src/templates/CustomTemplate/
├── caas_contenttypemap.json
├── controller.html
├── _folder_icon.png
├── _folder.json
├── pages
│   ├── 100.json
│   ├── 10.json
│   ├── 110.json
│   ├── 120.json
│   ├── 130.json
│   ├── 140.json
│   ├── 150.json
│   ├── 160.json
│   └── 200.json
├── siteinfo.json
└── structure.json
```

::: info
pages dir contains structure of the page. Slots are predefined in the object
:::

```json
{
    "properties": {
        "title": null,
        "pageLayout": "index.html",
        "mobileLayout": "",
        "pageDescription": null,
        "keywords": null,
        "hideFromSearchEngines": false,
        "header": "",
        "footer": "",
        "noIndex": false,
        "noFollow": false,
        "noArchive": false,
        "noSnippet": false,
        "isCobrowseEnabled": false,
        "overrideWebAnalytics": false,
        "webAnalyticsScript": null
    },
    "slots": {
        "slot-content": {
            "components": [
                "81e3252e-0bc8-4d6f-a8f7-00c4a392ddb8",
                "5a5dd154-e7cd-4d36-a2ee-8e1bd1cdce9a"
            ],
            "grid": "<div class=\"scs-row\"><div class=\"scs-col\" style=\"width: 100%;\"><div id=\"81e3252e-0bc8-4d6f-a8f7-00c4a392ddb8\"></div><div id=\"5a5dd154-e7cd-4d36-a2ee-8e1bd1cdce9a\"></div></div></div>"
        },
        "footer": {
            "components": ["cfe1a606-7345-4fdf-97e2-150e078bea65"],
            "grid": "<div class=\"scs-row\"><div class=\"scs-col\" style=\"width: 100%;\"><div id=\"cfe1a606-7345-4fdf-97e2-150e078bea65\"></div></div></div>"
        },
        "logocontainer": {
            "components": ["bfb6facc-0643-425a-b501-f52b81a57d5d"],
            "grid": "<div class=\"scs-row\"><div class=\"scs-col\" style=\"width: 100%;\"><div id=\"bfb6facc-0643-425a-b501-f52b81a57d5d\"></div></div></div>"
        },
        "navMenu": {
            "components": ["d3aabf1b-013e-4caa-9f9a-3c33612a4ab5"],
            "grid": "<div class=\"scs-row\"><div class=\"scs-col\" style=\"width: 100%;\"><div id=\"d3aabf1b-013e-4caa-9f9a-3c33612a4ab5\"></div></div></div>"
        }
    },
    "componentInstances": {
        "81e3252e-0bc8-4d6f-a8f7-00c4a392ddb8": {
            "type": "scs-title",
            "id": "scs-title",
            "data": {
                "alignment": "fill",
                "backgroundColor": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "fontColor": "#333333",
                "fontFamily": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                "fontSize": 24,
                "innerHTML": "<div><!-- ko if: visible --><div class=\"scs-title  scs-component scs-title-default-style\" style=\"margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:5px;\"><div class=\"scs-component-content\" data-bind=\"scsCompSetupLightbox\" style=\"text-align:left;width:100%;\"><div class=\"scs-title-text\" style=\"\"><div>Welcome!</div></div></div></div><!-- /ko --></div>",
                "marginBottom": 5,
                "marginLeft": 5,
                "marginRight": 5,
                "marginTop": 5,
                "placeholderText": "",
                "styleClass": "",
                "styleClassName": "",
                "styleClassTag": "",
                "toolbarGroups": "",
                "useStyleClass": "true",
                "userText": "<div>Welcome!</div>",
                "visible": true,
                "width": 400
            }
        },
        "5a5dd154-e7cd-4d36-a2ee-8e1bd1cdce9a": {
            "type": "scs-paragraph",
            "id": "scs-paragraph",
            "data": {
                "alignment": "fill",
                "backgroundColor": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "fontColor": "#333333",
                "fontFamily": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                "fontSize": 16,
                "marginBottom": 5,
                "marginLeft": 5,
                "marginRight": 5,
                "marginTop": 5,
                "placeholderText": "",
                "styleClass": "",
                "styleClassName": "",
                "styleClassTag": "",
                "toolbarGroups": "",
                "useStyleClass": "true",
                "userText": "<div><div>The starter template provides simplified versions of a theme, site navigation, and a default site so you can more easily modify it to create your own template.</div><div>&nbsp;</div><div>The following pages in this site provide additional information:</div><div>&nbsp;</div><div><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]100[/!--$SCS_PAGE--]\">Developing Templates</a></div><ul><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]110[/!--$SCS_PAGE--]\">Themes</a></li><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]120[/!--$SCS_PAGE--]\">Pages</a></li><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]130[/!--$SCS_PAGE--]\">Navigation</a></li><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]140[/!--$SCS_PAGE--]\">Page Content</a></li><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]150[/!--$SCS_PAGE--]\">Components</a></li><li><a target=\"_self\" linktype=\"scs-link-sitepage\" href=\"[!--$SCS_PAGE--]160[/!--$SCS_PAGE--]\">Sign In</a></li></ul><div>For more information about developing templates, see <a linktype=\"scs-link-webpage\" target=\"_blank\" href=\"http://www.oracle.com/pls/topic/lookup?ctx=cloud&amp;id=CECSD-GUID-2752841B-D5DD-4017-8018-A4751B76215D\">Developing Templates</a> in <em>Developing for Oracle Content and Experience</em>.</div></div>",
                "visible": true,
                "visibleOnMobile": "",
                "width": 400
            }
        },
        "bca98e09-a67d-4e03-b7a3-a38e32b1a344": {
            "type": "scs-socialbar",
            "id": "scs-socialbar",
            "data": {
                "alignment": "left",
                "backgroundColor": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "iconSize": 28,
                "iconSpacing": 10,
                "images": [
                    {
                        "source": "",
                        "name": "COMP_ICON_FACEBOOK",
                        "class": "scs-facebook-icon",
                        "title": "",
                        "altText": "",
                        "description": "",
                        "link": "http://www.facebook.com",
                        "target": ["_blank"]
                    },
                    {
                        "source": "",
                        "name": "COMP_ICON_LINKEDIN",
                        "class": "scs-linkedin-icon",
                        "title": "",
                        "altText": "",
                        "description": "",
                        "link": "http://www.linkedin.com",
                        "target": ["_blank"]
                    },
                    {
                        "source": "",
                        "name": "COMP_ICON_TWITTER",
                        "class": "scs-twitter-icon",
                        "title": "",
                        "altText": "",
                        "description": "",
                        "link": "http://www.twitter.com",
                        "target": ["_blank"]
                    },
                    {
                        "source": "",
                        "name": "COMP_ICON_GOOGLEPLUS",
                        "class": "scs-googleplus-icon",
                        "title": "",
                        "altText": "",
                        "description": "",
                        "link": "http://plus.google.com",
                        "target": ["_blank"]
                    },
                    {
                        "source": "",
                        "name": "COMP_ICON_YOUTUBE",
                        "class": "scs-youtube-icon",
                        "title": "",
                        "altText": "",
                        "description": "",
                        "link": "http://www.youtube.com",
                        "target": ["_blank"]
                    }
                ],
                "layout": "horizontal",
                "marginBottom": 5,
                "marginLeft": 5,
                "marginRight": 5,
                "marginTop": 5,
                "styleClass": "",
                "useStyleClass": "true",
                "visible": true
            }
        },
        "f0282892-23c7-41d1-8ec7-725812c05cc4": {
            "type": "scs-title",
            "id": "scs-title",
            "data": {
                "alignment": "fill",
                "backgroundColor": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "fontColor": "#333333",
                "fontFamily": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                "fontSize": 24,
                "innerHTML": "<div><!-- ko if: visible --><div class=\"scs-title  scs-component scs-title-default-style\" style=\"margin-top:5px;margin-right:5px;margin-bottom:5px;margin-left:5px;\"><div class=\"scs-component-content\" data-bind=\"scsCompSetupLightbox\" style=\"text-align:left;width:100%;\"><div class=\"scs-title-text\" style=\"\"><div style=\"text-align:center\">COPYRIGHT © 2020</div></div></div></div><!-- /ko --></div>",
                "marginBottom": 5,
                "marginLeft": 5,
                "marginRight": 5,
                "marginTop": 5,
                "placeholderText": "",
                "styleClass": "",
                "styleClassName": "",
                "styleClassTag": "",
                "toolbarGroups": "",
                "useStyleClass": "true",
                "userText": "<div style=\"text-align:center\">COPYRIGHT © 2020</div>",
                "visible": true,
                "width": 400
            }
        },
        "cfe1a606-7345-4fdf-97e2-150e078bea65": {
            "type": "scs-componentgroup",
            "id": "StarterFooter",
            "data": {
                "className": "",
                "components": [
                    "bca98e09-a67d-4e03-b7a3-a38e32b1a344",
                    "f0282892-23c7-41d1-8ec7-725812c05cc4"
                ],
                "grid": "<div class=\"scs-row\"><div class=\"scs-col\" style=\"width: 33.33%;\"><div id=\"bca98e09-a67d-4e03-b7a3-a38e32b1a344\"></div></div><div class=\"scs-col\" style=\"width: 66.67%;\"><div id=\"f0282892-23c7-41d1-8ec7-725812c05cc4\"></div></div></div>"
            }
        },
        "d3aabf1b-013e-4caa-9f9a-3c33612a4ab5": {
            "type": "scs-component",
            "id": "NavMenu",
            "data": {
                "actions": "",
                "alignment": "right",
                "assets": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "componentId": "navMenu",
                "componentName": "NavMenu",
                "componentFactory": "",
                "componentLayout": "default",
                "contentId": "",
                "contentLayoutCategory": "",
                "contentPlaceholder": false,
                "contentTypes": [],
                "contentViewing": "",
                "customRenderComplete": false,
                "customSettingsData": {},
                "componentConfig": {
                    "id": "NavMenu-component",
                    "settingsData": {
                        "settingsHeight": 26,
                        "settingsRenderOption": "none",
                        "componentLayouts": [],
                        "actions": []
                    }
                },
                "description": "",
                "detailPageId": "",
                "height": "",
                "initialized": true,
                "isCaaSLayout": false,
                "linkType": "scs-link-action",
                "marginBottom": 0,
                "marginLeft": 0,
                "marginRight": 0,
                "marginTop": 0,
                "nestedComponents": [],
                "styleClass": "",
                "styleClassName": "",
                "seeded": false,
                "useStyleClass": "true",
                "visible": true,
                "visibleOnMobile": "",
                "visibleNestedComponents": [],
                "width": 0
            }
        },
        "bfb6facc-0643-425a-b501-f52b81a57d5d": {
            "type": "scs-title",
            "id": "scs-title",
            "data": {
                "alignment": "fill",
                "backgroundColor": "",
                "borderColor": "#808080",
                "borderRadius": 0,
                "borderStyle": "none",
                "borderWidth": 1,
                "fontColor": "#333333",
                "fontFamily": "'Helvetica Neue', Helvetica, Arial, sans-serif",
                "fontSize": 24,
                "marginBottom": 5,
                "marginLeft": 5,
                "marginRight": 5,
                "marginTop": 5,
                "placeholderText": "",
                "styleClass": "",
                "styleClassName": "",
                "styleClassTag": "",
                "toolbarGroups": "",
                "useStyleClass": "true",
                "userText": "<div>Starter Template</div>",
                "visible": true,
                "visibleOnMobile": "",
                "width": 400
            }
        }
    }
}
```
