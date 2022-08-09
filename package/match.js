function matchDate(begin,end){
    const day_start = new Date(begin)
    const day_end = new Date(end)
    return {day_start,day_end}
}

function matchDatePipelline(begin,end){
    const {day_start,day_end} = matchDate(begin,end)
    let pippeline_match_day = {
        $match: {"day" : {"$gte" : day_start, "$lte" :day_end}}
    }

    return pippeline_match_day
}

module.exports ={matchDatePipelline}