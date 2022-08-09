{
    "$match": {
     "pur_name" : "bundle", 
     "pur_group" : "Mixte",
     "pur_bndle_longname" : { "$in" : [
        "Stay IN",
        "Stay In Touch",
        "Akama Full",
        "Akama1 Renouvellement",
        "Akama 1",
        "Akama Go",
        "Akama Go+",
        "Akama 7",
        "Akama7 Renouvellement",
        "Akama Plus",
        "Akama 3",
        "Akama3 Renouvellement",
        "Akama Up"    
    ]}
        
    }
},

{
    "$project": {
       "_id" : 0,
       "day" : { "$dateToString" : { "format" : "%d/%m/%Y" ,"date" : "$day"}},
       "party_id" : 1, 
       "pur_bndle_longname" : 1,
       "pur_group" : 1,
       "pur_amnt" : { "$divide" : [ "$pur_amnt", 1.2 ]},
       "pur_bndle" : 1,
    }
},

{
    "$group": {
    "_id" : { 
      "day" : "$day" ,
      "party_id" : "$party_id" ,
      "pur_bndle_longname" : "$pur_bndle_longname" ,
      "pur_group" : "$pur_group" },
      "pur_amnt" : { "$sum" : "$pur_amnt" },
      "nb_achat" : { "$sum" : 1 },
    }
},
{
    "$group": {
    "_id" : { 
      "day" : "$_id.day" ,
      "pur_bndle_longname" : "$_id.pur_bndle_longname" ,
      "pur_group" : "$_id.pur_group" },
      "pur_amnt" : { "$sum" : "$pur_amnt" },
      "nb_client" : { "$sum" : 1 },
      "nb_achat" : { "$sum" : "$nb_achat" },
    }
}