part_req_1 <- '[
    { "$match" : {  "day": { "$gte" : {"$date": "'
part_req_2 <- '"}, "$lte" : { "$date" : "'
part_req_3 <- '"}},
                    "billing_type" : "Prepaid" }},
    { "$project" : { "_id" : 0, "day" : 1,"party_id" : 1, "loc_name" : 1,
                     "semaine" : { "$concat": ["S", { "$substr": [ { "$sum": [ {"$isoWeek" : "$day"}, 0 ]  }, 0, -1 ]}, "-",{ "$dateToString":  { "format" : "%Y", "date": "$day"} }]},
                    "voice_o_tot_vol" : "$total.voice_o_tot_vol","voice_i_tot_vol" : "$total.voice_i_tot_vol",
                     "sms_o_tot_vol":"$total.sms_o_tot_vol","sms_i_tot_vol":"$total.sms_i_tot_vol","data_o_total_vol":"$total.data_o_total_vol", "rec_tot_amnt" : "$total.rec_tot_amnt" }},
    { "$group" : {  "_id" : { "semaine" : "$semaine", "party_id" : "$party_id", "loc_name" : "$loc_name" },
                    "voice_o_tot_vol" : { "$sum" : "$voice_o_tot_vol" },"voice_i_tot_vol" : { "$sum" : "$voice_i_tot_vol" },"sms_o_tot_vol":{ "$sum" : "$sms_o_tot_vol" },
                    "sms_i_tot_vol":{ "$sum" : "$sms_i_tot_vol" },"data_o_total_vol":{ "$sum" : "$data_o_total_vol" }, "rec_tot_amnt" : { "$sum" : "$rec_tot_amnt" }
    }}]'
gc()
req_usage <- paste0(part_req_1,jour_init,part_req_2,jour_fin,part_req_3)
jsonlite::validate(req_usage)        
gc()
usage_kpi <- as.data.frame.list(conDaily_usage$aggregate(pipeline=req_usage, options = '{"allowDiskUse":true }'))
gc()
