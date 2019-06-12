export default {
    data: function() {
        return {
            topics: {
                'a-team': {
                    name: "Access Team",
                    icon: "fas fa-users",
                    show: true,
                    links: [
                        {
                            name: "Team Status Report",
                            url: "https://cscop.jhmi.edu/jira/secure/Dashboard.jspa?selectPageId=16702"
                        },
                        {
                            name: "Help Desk Dashboard",
                            url: "https://cscop.jhmi.edu/jira/secure/Dashboard.jspa?selectPageId=17126",
                        },
                        {
                            name: "Quarterly Upgrade",
                            url: "https://cscop.jhmi.edu/jira/secure/Dashboard.jspa?selectPageId=17100"
                        }
                    ]
                },
                adt: {
                    name: "ADT/Grand Central",
                    icon: "fas fa-wheelchair",
                    show: true,
                    links: [
                        {
                            name: "",
                            url: "",
                            copyText: "",
                        },
                    ]
                },
                cadence: {
                    name: "Cadence",
                    icon: "fas fa-calendar-check",
                    show: true,
                    links: [
                        {
                            name: "Adding & Removing Providers from Subgroups",
                            url:"https://cscop.jhmi.edu/jira/browse/EPICPROJ-173390",
                            copyText:"Requestor:\r\nExplanation:\r\nProvider Name and ID:\r\nDepartment Name and ID:\r\nSubgroup Name and ID:\r\nAction:\r\nRemedy Ticket #:"
                        },
                        {
                            name: "Create or Change a Visit Type Modifier",
                            url:"https://cscop.jhmi.edu/jira/browse/EPICPROJ-173392",
                            copyText:"Requestor:\r\nDepartment Name and ID:\r\nProvider Name and ID:\r\nVisit Type Name and ID:\r\nDescription:\r\nRemedy Ticket #"
                        },
                        {
                            name: "SmartSource & Televox Confluence Page",
                            url:"https://cscop.jhmi.edu/confluence/pages/viewpage.action?spaceKey=EPIC&title=Access+-+SmartSource+and+Televox"
                        },
                    ]
                },
                clearcut: {
                    name: "Clear Cut",
                    icon: "fas fa-laptop",
                    show: true,
                    links: [ 
                        {
                            name: "Clear Cut - Production",
                            url:"https://mrpccut1.hosts.jhmi.edu",
                        },
                        {
                            name: "Clear Cut - Sandbox",
                            url:"https://mrsccut1.hosts.jhmi.edu",
                        }
                    ]
                },
                facilitystructure: {
                    name: "Facility Structure",
                    icon: "fas fa-hospital",
                    show: true,
                    links: [
                        {
                            name: "Facility Structure Projects Tracker",
                            url:"https://livejohnshopkins.sharepoint.com/:x:/r/sites/HealthIT/Workgroups/IntegratedWGs/Facility/_layouts/15/Doc.aspx?sourcedoc=%7B73AFE274-E134-4848-8A24-A4F59854570C%7D&file=Facility%20Structure%20Projects%20Tracker.xlsx&action=default&mobileredirect=true"
                        },
                        {
                            name: "Department Demographic, Report Groupers, Session Maintenance",
                            url:"https://cscop.jhmi.edu/jira/browse/EPICPROJ-208777",
                            copyText:"Requestor:\r\nDepartment Name and ID:\r\nType of Update:\r\nNew Value for Update:\r\nRemedy Ticket:\r\n"
                        },
                        {
                            name: "Place of Service Updates - Address Information, Phone, Fax",
                            url:"https://cscop.jhmi.edu/jira/browse/EPICPROJ-173386",
                            copyText:"Requestor:\r\nPlace of Service ID:\r\nPlace of Service Name:\r\nType of Update:\r\nItem(s) Being Updated:\r\nNew Values for Update:"
                        }
                    ]
                },
                mychart: {
                    name: "MyChart",
                    icon: "fas fa-notes-medical",
                    show: true,
                    links: [
                        {
                            name: "MyChart - POC",
                            url: "http://esmepicmchtnp.esm.johnshopkins.edu/MyChartPOC/",
                            copyText: ""
                        },
                        {
                            name: "MyChart - TST",
                            url: "http://esmepicmchttst1.esm.johnshopkins.edu/MyCharttst/",
                            copyText: "",
                        },
                        {
                            name: "MyChart - SUP",
                            url: "http://esmepicmchtsup1.esm.johnshopkins.edu/MyChartsup/default.asp",
                            copyText: "",
                        },
                        {
                            name: "MyChart - Production",
                            url: "https://mychart.hopkinsmedicine.org/MyChart/",
                            copyText: "",
                        }
                    ]
                },
                prelude: {
                    name: "Prelude",
                    icon: "fas fa-keyboard",
                    show: true,
                    links: [

                    ]
                },
                ser: {
                    name: "SER",
                    icon: "fas fa-user-md",
                    show: true,
                    links: [ 
                        {
                            name: "App Team Logic",
                            url:"https://livejohnshopkins.sharepoint.com/:x:/s/HealthIT/Workgroups/EZJ7h2QiMIZHoneHxCjS0GYBkMWQti_NRGU5K-0wR_osDQ?e=vDjr9C",
                        },
                        {
                            name: "Master Crosswalks",
                            url:"https://livejohnshopkins.sharepoint.com/:x:/s/HealthIT/Workgroups/EZJ7h2QiMIZHoneHxCjS0GYBkMWQti_NRGU5K-0wR_osDQ?e=vDjr9C",
                        },
                        {
                            name: "Import Spreadsheet - Persons",
                            url:"https://livejohnshopkins.sharepoint.com/:x:/s/HealthIT/Workgroups/EZ963kWpWPBEom-F9M-rZeEB4UwMUDMZsg9j1RN2rNvwdg?e=qsbliZ",
                        },
                        {
                            name: "Import Spreadsheet - Resources",
                            url:"https://livejohnshopkins.sharepoint.com/:x:/s/HealthIT/Workgroups/EckdVa8g3cRMnpf-zKq2zCoBLQHF4mCj_AhByuInTZRT7g?e=ZnxJ2C",
                        }
                    ]
                },
            }
        }
    }
}