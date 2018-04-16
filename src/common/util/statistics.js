/**
 * Created by jiaaobo on 16/7/27.
 */


var Statistics = {

    /**
     * 数据打点统计
     * @param eventId
     */
    mobEvent : function(eventId,map,tag){
        HybridJS.statistic.RBI.mobEvent(eventId,map,tag);
    }
};

export default  Statistics;
