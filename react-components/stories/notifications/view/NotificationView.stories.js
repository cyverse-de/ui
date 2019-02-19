/**
 *
 * @author sriram
 *
 */
import React, { Component } from "react";
import NotificationView from "../../../src/notifications/view/NotificationView";

class NotificationViewTest extends Component {

    render() {
        const logger = this.props.logger || ((Notification) => {
                console.log(Notification);
            });
        const notifications = {
            "total": "20",
            "unseen_total": "0",
            "messages": [{
                "type": "permanent id request",
                "user": "sriram",
                "subject": "DOI Request Submitted for Cut_Columns_analysis1-2018-03-28-22-16-03.5",
                "email": true,
                "email_template": "blank",
                "payload": {
                    "email_address": "sriram@iplantcollaborative.org",
                    "contents": null,
                    "uuid": "caef4bba-943e-11e8-a6c7-f64e9b87c109"
                },
                "message": {
                    "id": "567DBB14-508D-47B2-A8B2-3E1415582908",
                    "timestamp": "1532985820327",
                    "text": "DOI Request Submitted for Cut_Columns_analysis1-2018-03-28-22-16-03.5"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "Data",
                "user": "sriram",
                "subject": "Natalie.docx uploaded successfully.",
                "email": false,
                "email_template": null,
                "payload": {
                    "action": "UPLOAD_COMPLETE",
                    "data": {
                        "infoType": "",
                        "path": "/iplant/home/sriram/Natalie.docx",
                        "parentFolderId": "/iplant/home/sriram",
                        "date-created": "1532554866000",
                        "md5": "eeae49c6972c58b08e4d14a35607739c",
                        "permission": "own",
                        "date-modified": "1532554866000",
                        "file-size": "161293",
                        "label": "Natalie.docx",
                        "id": "7028e978-9053-11e8-a13e-1a5a300ff36f",
                        "content-type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        "sourceUrl": "C:fakepathNatalie.docx"
                    }
                },
                "message": {
                    "id": "3AFCB203-B63D-4D83-AF72-E4824463E721",
                    "timestamp": "1532554869656",
                    "text": "Natalie.docx uploaded successfully."
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "sriram",
                "subject": "Ipc Dev has requested to join team \"sriram: testsriram \"",
                "email": true,
                "email_template": "team_join_request",
                "payload": {
                    "email_address": "sriram@iplantcollaborative.org",
                    "requester_id": "ipcdev",
                    "requester_name": "Ipc Dev",
                    "requester_email": "core-sw@iplantcollaborative.org",
                    "requester_message": "i would like to join",
                    "team_name": "sriram:testsriram"
                },
                "message": {
                    "id": "CD811004-32B7-4BA0-A36D-619880B26F4E",
                    "timestamp": "1532547589758",
                    "text": "Ipc Dev has requested to join team \"sriram: testsriram \"",
                },
                "seen": true,
                "deleted": false
            },{
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Status Changed to Evaluation",
                "email": true,
                "email_template": "tool_request_evaluation",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "evaluation done...",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }, {
                        "status": "Pending",
                        "status_date": 1532546304911,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "this is a pending test"
                    }, {
                        "status": "Evaluation",
                        "status_date": 1532546322556,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "evaluation done..."
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "status": "Evaluation",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "40C98929-BD4E-479E-B6B4-15B20DE12BBC",
                    "timestamp": "1532546322787",
                    "text": "Tool Request test Status Changed to Evaluation"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Status Changed to Pending",
                "email": true,
                "email_template": "tool_request_pending",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "this is a pending test",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }, {
                        "status": "Pending",
                        "status_date": 1532546304911,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "this is a pending test"
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "status": "Pending",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "6DA49343-951A-47D1-8A8D-6236E8C51BF8",
                    "timestamp": "1532546305279",
                    "text": "Tool Request test Status Changed to Pending"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Submitted",
                "email": true,
                "email_template": "tool_request_submitted",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "C7CC4F11-C861-4630-B99B-D5DD05693578",
                    "timestamp": "1532546191251",
                    "text": "Tool Request test Submitted"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": true,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.425Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Failed",
                    "batch": false,
                    "enddate": "1531869251800",
                    "status": "Failed",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211425",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "649E45B0-4DBE-4B87-B5DB-D28C25FF7D4E",
                    "timestamp": "1531869252102",
                    "text": "Word_Count_analysis1 failed"
                },
                "seen": false,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.425Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Running",
                    "batch": false,
                    "enddate": "0",
                    "status": "Running",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211425",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "B807B0B4-20A8-4F86-935A-5AFC313AFAA9",
                    "timestamp": "1531869225761",
                    "text": "Word_Count_analysis1 running"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.720Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Submitted",
                    "batch": false,
                    "status": "Submitted",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211720",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "AFA9F05D-D97A-4DF0-93E8-B258E6F6145A",
                    "timestamp": "1531869212006",
                    "text": "Word_Count_analysis1 submitted"
                },
                "seen": false,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": true,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T22:54:37.360Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Failed",
                    "batch": false,
                    "enddate": "1531868438778",
                    "status": "Failed",
                    "id": "61b42f5a-8a14-11e8-8d01-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531868077360",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "8C251A6C-85F8-4636-B78A-4262CBF168D2",
                    "timestamp": "1531868439246",
                    "text": "Word_Count_analysis1 failed"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T22:54:37.360Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Running",
                    "batch": false,
                    "enddate": "0",
                    "status": "Running",
                    "id": "61b42f5a-8a14-11e8-8d01-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531868077360",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "12F95AF7-171E-43D1-8E57-5DAA34DECFBE",
                    "timestamp": "1531868087396",
                    "text": "Word_Count_analysis1 running"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "name": "Word_Count_analysis1",
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T22:54:37.638Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Submitted",
                    "batch": false,
                    "status": "Submitted",
                    "id": "61b42f5a-8a14-11e8-8d01-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531868077638",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "B6282176-9D49-4E15-B17C-C1CD20559FFE",
                    "timestamp": "1531868077995",
                    "text": "Word_Count_analysis1 submitted"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-16-20-44-21.2",
                    "name": "Word_Count_analysis1",
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-16T20:44:21.774Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Submitted",
                    "batch": false,
                    "status": "Submitted",
                    "id": "04aa9456-8939-11e8-b923-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531773861774",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-16-20-44-21.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "418029B5-ED7D-4431-B4A7-A791D645290A",
                    "timestamp": "1531773862097",
                    "text": "Word_Count_analysis1 submitted"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Team join request denied",
                "email": true,
                "email_template": "team_join_denial",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:testsriram",
                    "admin_message": "nope!"
                },
                "message": {
                    "id": "CA6A45F6-90AA-4F3F-879D-7B91B4223A75",
                    "timestamp": "1532539460070",
                    "text": "Team join request denied"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Team join request denied",
                "email": true,
                "email_template": "team_join_denial",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:sriramtest",
                    "admin_message": "you are not cool.."
                },
                "message": {
                    "id": "094DEB26-4DEF-4D85-98D1-033A7F137F74",
                    "timestamp": "1532454413679",
                    "text": "Team join request denied"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Added to team",
                "email": true,
                "email_template": "added_to_team",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:test123"
                },
                "message": {
                    "id": "7CF916A4-56AF-43E3-8151-8DD6A92F276B",
                    "timestamp": "1532454009332",
                    "text": "Added to team"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "data",
                "user": "ipcdev",
                "subject": "julianp has shared 1 file(s)/folder(s) with you.",
                "email": false,
                "email_template": null,
                "payload": {
                    "action": "share",
                    "paths": ["/iplant/home/julianp/atmosphere_user_videos"]
                },
                "message": {
                    "id": "F74B592F-AA8D-4C7B-8458-3AF1D34ED4A2",
                    "timestamp": "1528764376984",
                    "text": "julianp has shared the following file(s)/folder(s) with you: atmosphere_user_videos"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "community",
                "user": "aramsey",
                "subject": "Added as community admin to Mo Test",
                "email": true,
                "email_template": "blank",
                "payload": {
                    "action": "added_to_community",
                    "email_address": "asherz@email.arizona.edu",
                    "contents": null,
                    "team_name": "Mo Test"
                },
                "message": {
                    "id": "E1BBFE58-9191-4BA5-8D2A-CFCA6B6F9F8D",
                    "timestamp": "1550008416697",
                    "text": "Added as community admin to Mo Test"
                },
                "seen": true,
                "deleted": false
            }],
            "system-messages": []
        };


        const trimmed_notifications = {
            "total": "20",
            "unseen_total": "0",
            "messages": [{
                "type": "team",
                "user": "sriram",
                "subject": "Ipc Dev has requested to join team \"sriram: testsriram \"",
                "email": true,
                "email_template": "team_join_request",
                "payload": {
                    "email_address": "sriram@iplantcollaborative.org",
                    "requester_id": "ipcdev",
                    "requester_name": "Ipc Dev",
                    "requester_email": "core-sw@iplantcollaborative.org",
                    "requester_message": "i would like to join",
                    "team_name": "sriram:testsriram"
                },
                "message": {
                    "id": "CD811004-32B7-4BA0-A36D-619880B26F4E",
                    "timestamp": "1532547589758",
                    "text": "Ipc Dev has requested to join team \"sriram: testsriram \"",
                },
                "seen": true,
                "deleted": false
            },{
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Status Changed to Evaluation",
                "email": true,
                "email_template": "tool_request_evaluation",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "evaluation done...",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }, {
                        "status": "Pending",
                        "status_date": 1532546304911,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "this is a pending test"
                    }, {
                        "status": "Evaluation",
                        "status_date": 1532546322556,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "evaluation done..."
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "status": "Evaluation",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "40C98929-BD4E-479E-B6B4-15B20DE12BBC",
                    "timestamp": "1532546322787",
                    "text": "Tool Request test Status Changed to Evaluation"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Status Changed to Pending",
                "email": true,
                "email_template": "tool_request_pending",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "this is a pending test",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }, {
                        "status": "Pending",
                        "status_date": 1532546304911,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": "this is a pending test"
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "status": "Pending",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "6DA49343-951A-47D1-8A8D-6236E8C51BF8",
                    "timestamp": "1532546305279",
                    "text": "Tool Request test Status Changed to Pending"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "tool request",
                "user": "sriram",
                "subject": "Tool Request test Submitted",
                "email": true,
                "email_template": "tool_request_submitted",
                "payload": {
                    "description": "test tool request",
                    "documentation_url": "http://google.com",
                    "source_url": "http://google.com",
                    "architecture": "Others",
                    "name": "test",
                    "additional_data_file": "/iplant/home/sriram/foo.md",
                    "comments": "",
                    "test_data_path": "/iplant/home/sriram/colored-lines.bed",
                    "submitted_by": "sriram@iplantcollaborative.org",
                    "history": [{
                        "status": "Submitted",
                        "status_date": 1532546191001,
                        "updated_by": "sriram@iplantcollaborative.org",
                        "comments": ""
                    }],
                    "additional_info": "test",
                    "toolname": "test",
                    "cmd_line": "test -i",
                    "id": "8613d70a-5f99-40c8-a0b4-d02b696aced5",
                    "attribution": "Sriram",
                    "version": "1",
                    "email_address": "sriram@iplantcollaborative.org"
                },
                "message": {
                    "id": "C7CC4F11-C861-4630-B99B-D5DD05693578",
                    "timestamp": "1532546191251",
                    "text": "Tool Request test Submitted"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": true,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.425Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Failed",
                    "batch": false,
                    "enddate": "1531869251800",
                    "status": "Failed",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211425",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "649E45B0-4DBE-4B87-B5DB-D28C25FF7D4E",
                    "timestamp": "1531869252102",
                    "text": "Word_Count_analysis1 failed"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.425Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Running",
                    "batch": false,
                    "enddate": "0",
                    "status": "Running",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211425",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "B807B0B4-20A8-4F86-935A-5AFC313AFAA9",
                    "timestamp": "1531869225761",
                    "text": "Word_Count_analysis1 running"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "name": "Word_Count_analysis1",
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T23:13:31.720Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Submitted",
                    "batch": false,
                    "status": "Submitted",
                    "id": "05ab58ac-8a17-11e8-bfcf-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531869211720",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-23-13-31.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "AFA9F05D-D97A-4DF0-93E8-B258E6F6145A",
                    "timestamp": "1531869212006",
                    "text": "Word_Count_analysis1 submitted"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": true,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T22:54:37.360Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Failed",
                    "batch": false,
                    "enddate": "1531868438778",
                    "status": "Failed",
                    "id": "61b42f5a-8a14-11e8-8d01-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531868077360",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "8C251A6C-85F8-4636-B78A-4262CBF168D2",
                    "timestamp": "1531868439246",
                    "text": "Word_Count_analysis1 failed"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "analysis",
                "user": "sriram",
                "subject": "Word_Count_analysis1 status changed.",
                "email": false,
                "email_template": "analysis_status_change",
                "payload": {
                    "description": "",
                    "analysisresultsfolder": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "name": "Word_Count_analysis1",
                    "can_share": false,
                    "username": "sriram@iplantcollaborative.org",
                    "app_id": "c7f05682-23c8-4182-b9a2-e09650a5f49b",
                    "analysisstartdate": "2018-07-17T22:54:37.360Z",
                    "system_id": "de",
                    "app_disabled": false,
                    "analysisstatus": "Running",
                    "batch": false,
                    "enddate": "0",
                    "status": "Running",
                    "id": "61b42f5a-8a14-11e8-8d01-f64e9b87c109",
                    "analysisname": "Word_Count_analysis1",
                    "startdate": "1531868077360",
                    "app_description": "Counts and summarizes the number of lines, words, and bytes in a target file",
                    "user_id": "6be9b792-854a-11e4-b877-cb0cf45dbbb0",
                    "action": "job_status_change",
                    "analysisdescription": "",
                    "wiki_url": "https://pods.iplantcollaborative.org/wiki/display/DEapps/Word%20Count",
                    "notify": true,
                    "resultfolderid": "/iplant/home/sriram/analyses/Word_Count_analysis1-2018-07-17-22-54-37.2",
                    "email_address": "sriram@iplantcollaborative.org",
                    "user": "sriram",
                    "app_name": "Word Count"
                },
                "message": {
                    "id": "12F95AF7-171E-43D1-8E57-5DAA34DECFBE",
                    "timestamp": "1531868087396",
                    "text": "Word_Count_analysis1 running"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Team join request denied",
                "email": true,
                "email_template": "team_join_denial",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:testsriram",
                    "admin_message": "nope!"
                },
                "message": {
                    "id": "CA6A45F6-90AA-4F3F-879D-7B91B4223A75",
                    "timestamp": "1532539460070",
                    "text": "Team join request denied"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Team join request denied",
                "email": true,
                "email_template": "team_join_denial",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:sriramtest",
                    "admin_message": "you are not cool.."
                },
                "message": {
                    "id": "094DEB26-4DEF-4D85-98D1-033A7F137F74",
                    "timestamp": "1532454413679",
                    "text": "Team join request denied"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "team",
                "user": "ipcdev",
                "subject": "Added to team",
                "email": true,
                "email_template": "added_to_team",
                "payload": {
                    "email_address": "core-sw@iplantcollaborative.org",
                    "team_name": "sriram:test123"
                },
                "message": {
                    "id": "7CF916A4-56AF-43E3-8151-8DD6A92F276B",
                    "timestamp": "1532454009332",
                    "text": "Added to team"
                },
                "seen": true,
                "deleted": false
            }, {
                "type": "data",
                "user": "ipcdev",
                "subject": "julianp has shared 1 file(s)/folder(s) with you.",
                "email": false,
                "email_template": null,
                "payload": {
                    "action": "share",
                    "paths": ["/iplant/home/julianp/atmosphere_user_videos"]
                },
                "message": {
                    "id": "F74B592F-AA8D-4C7B-8458-3AF1D34ED4A2",
                    "timestamp": "1528764376984",
                    "text": "julianp has shared the following file(s)/folder(s) with you: atmosphere_user_videos"
                },
                "seen": true,
                "deleted": false
            }],
            "system-messages": []
        };
        const presenter = {
            getNotifications: (limit, offset, filter, sortDir, resultCallback, errorCallback) => {
                resultCallback(notifications, 10)
            },
            deleteNotifications: (selected, rowsPerPage, resultCallback, errorCallback) => {
                resultCallback(trimmed_notifications, 8)
            },
            onNotificationToolbarMarkAsSeenClicked: () => logger("Mark As Seen"),
            onMessageClicked: () => logger("MessageClicked!"),

        };
        return (
            <NotificationView presenter={presenter} baseDebugId="notificationWindow"/>
        );
    }
}

export default NotificationViewTest;