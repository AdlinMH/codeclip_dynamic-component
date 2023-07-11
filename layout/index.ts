import { fetchApi, CallbackResult } from '@/Utils/api'
import * as proto from './_types'

export const postScreen = (data: proto.PostScreenReq, signal?: AbortSignal, callback?: (result: CallbackResult<proto.PostScreenRes>)=> void) => {
  // fetch api layout screen
  return fetchApi<proto.PostScreenReq, proto.PostScreenRes>({
    label: data.screen_name,
    url: 'v3/layout/info',
    method: 'POST',
    data,
    signal,
    callback,
  })
}

// response sample
export const response = {
  "layout": {
    "LAYOUT_POSITION_GENERIC_TOP": [
      {
        "type": "Image",
        "props": {
          "source": "https://cdn.rushowl.app/rushtrail-app/ssr/referral.jpg",
          "width": 0,
          "height": 0,
          "disabled": false,
          "on_press": {
            "action_type": "in_app_navigation",
            "screen": "Referral",
            "screen_args": null,
            "link": "",
            "open_app_store": null
          }
        }
      },
      {
        "type": "FrequentRoutesComponent",
        "props": {
          "title": "Frequent Routes",
          "items": [
            {
              "title": "R01",
              "active": true,
              "on_press": {
                "action_type": "in_app_navigation",
                "screen": "Routes",
                "screen_args": {
                  "route_code": "R01",
                  "route_id": 1,
                  "route_type": 2,
                  "route_session_mapping_id": 0,
                  "trip_id": 0,
                  "trip_mapping_id": 0,
                  "title": "",
                  "id": 0,
                  "payment_intent_client_secret": "",
                  "amt": 0,
                  "description": "",
                  "header_title": ""
                },
                "link": "",
                "open_app_store": null
              }
            },
            {
              "title": "G182",
              "active": true,
              "on_press": {
                "action_type": "in_app_navigation",
                "screen": "Routes",
                "screen_args": {
                  "route_code": "G182",
                  "route_id": 58,
                  "route_type": 2,
                  "route_session_mapping_id": 0,
                  "trip_id": 0,
                  "trip_mapping_id": 0,
                  "title": "",
                  "id": 0,
                  "payment_intent_client_secret": "",
                  "amt": 0,
                  "description": "",
                  "header_title": ""
                },
                "link": "",
                "open_app_store": null
              }
            },
          ]
        }
      },
      {
        "type": "Image",
        "props": {
          "source": "https://support.appsflyer.com/hc/article_attachments/360007210818/AppleBanner_en-us.jpg",
          "width": 0,
          "height": 0,
          "disabled": false,
          "on_press": {
            "action_type": "open_app_store",
            "screen": "",
            "screen_args": null,
            "link": "",
            "open_app_store": {
              "apple_app_store_url": "https://apps.apple.com/sg/app/rushtrail/id1476365823",
              "google_play_store_url": "https://play.google.com/store/apps/details?id=com.rush.rushtrail&hl=en_SG&gl=US"
            }
          }
        }
      },
    ]
  }
}
