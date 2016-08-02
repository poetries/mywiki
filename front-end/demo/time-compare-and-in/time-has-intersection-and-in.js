(function(gloable, moment) {
    /*
    * 有若干个时间集合，判断时间集合是否有交集
    * @arguments {start: 时间戳或时间字符串,end: 时间戳或时间字符串, type: "day", value: 2 }, ...
    * type
    	* all：从开始到时间的所有时间
    	* day：时间间隔为固定的天数, value 为间隔的天数的值
    	* week: 时间间隔为固定的天数, value的值为一个数组，其值的 0-6对应为周日，周一,...周六
    * @return
    * {
    	hasIntersection: Boolean 是否有交集
    	intersection: [index1, index2] 有交集的两个时间集合的下标
    * }
    */
    function timesHasIntersection() {
    	var returnInfo = {
    		hasIntersection: false,
    		intersection: false
    	};
        var times;
        if(Array.isArray(arguments[0])){
            times = arguments[0];
        } else {
            times = [].splice.call(arguments, 0);
        }
        var timeRanges = getTimeRanges(times);
        // console.log(timeRanges);

        timeRanges.forEach(function(currRange, currIndex){
        	// 还未找到交集 或 是最后一个元素
        	if(!returnInfo.intersection && currIndex !== timeRanges.length - 1){
        		timeRanges.slice(currIndex + 1).forEach(function(compareRange, compareRangeIndex){
        			if(timeRangesHasIntersection(currRange, compareRange)){
        				returnInfo.hasIntersection = true;
        				returnInfo.intersection = [currIndex, currIndex + 1 + compareRangeIndex];
        				return;
        			}
        		});
        	}
        });
        return returnInfo;
    }

    /*
    * 某个时间在那个时间区间中
    */
    function indexOfTimes(time, times){
    	var index = -1;
    	time = (new moment(time)).valueOf();
        if(times.length > 0){
	        var timeRanges = getTimeRanges(times);
	        timeRanges.forEach(function(currRange, currIndex){
	        	if(index == -1){
		        	currRange.forEach(function(item){
		        		if(time >= item[0] && time <= item[1]){
		        			index = currIndex;
		        			return;
		        		}
		        	});
	        	}
	        });
        }
        return index;
    }

	/*
    * range1, range2 均为 [[1443073109608, 1443073149608],...] 的东东,并且，数组的后面的数大于前面的
    * @return true 有交集，false 无交集
    */
    function timeRangesHasIntersection(range1, range2){
    	var result = false;
    	range1.forEach(function(range1Time){
    		// debugger;
    		if(!result){// 没有交集
	    		range2.forEach(function(range2Time){
	    			if(hasIntersection(range1Time, range2Time)){
	    				result = true;
	    				return;
	    			}
	    		});
    		}
    	});
    	return result;
    }

    /*
    * time1, time2 均为 [1443073109608, 1443073149608] 的东东,并且，数组的后面的数大于前面的
    * @return true 有交集，false 无交集
    */
    function hasIntersection(time1, time2){
    	var result = true;
    	if(time1[1] <= time2[0] || time1[0] >= time2[1]){
    		result = false;
    	}
    	return result;
    }

    function getTimeRanges(times){
    	var timeRanges = times.map(function(time) {
            return new TimeRange(time);
        });
        return timeRanges;
    }

    /*
    * @param timeObj
    * {
    	type: 'day',
    	value: 2,
    	start: 'YYYY-MM-DD  HH:mm:ss',
    	end: 'YYYY-MM-DD  HH:mm:ss'

    }
    * @return [[start, end],...] start,end 均为时间戳
    */
    function TimeRange(timeObj) {
        var timeRange = [];
        var start = new moment(timeObj.start);
        var end;
        var endDayInfo;
        var startDayInfo
        if (timeObj.type === 'all') {
            end = new moment(timeObj.end);
        } else {
            end = toDefaultEndTime(timeObj.end);
        }

        var validInfo = isTimeValid(start, end, timeObj.type, timeObj.value);

        if (!validInfo.isValid) {
            throw validInfo.errMsg;
            return;
        }


        endDayInfo = {
            hour: end.hour(),
            minute: end.minute(),
            second: end.second()
        };

        startDayInfo = {
            hour: start.hour(),
            minute: start.minute(),
            second: start.second()
        };
        // debugger;
        switch (timeObj.type) {
            case 'all':
                timeRange.push([start.valueOf(), end.valueOf()]);
                break;
            case 'day':
                var i = 0;
                while (start.valueOf() < end.valueOf() || i > 1000) { // 防止死循环
                    timeRange.push([start.valueOf(), toDayEndTime(start, endDayInfo).valueOf()]);
                    start.add(timeObj.value, 'day');
                    i++;
                }
                if (i > 1000) {
                    console.log(timeRange);
                }
                break;
            case 'week':
                var i = 0;
                while (start.valueOf() < end.valueOf() || i > 1000) { // 防止死循环
                    	// debugger;
                    timeObj.value.forEach(function(weekday) {
                    	weekday = parseInt(weekday, 10);
                        var time = getAfterWeekday(start, weekday);
                        if(time.valueOf() < end.valueOf()){
                        	timeRange.push([time.valueOf(), toDayEndTime(time, endDayInfo).valueOf()]);
                        }
                    });
                    start.add(1, 'week');
                    i++;
                }
                if (i > 1000) {
                    console.log(timeRange);
                }
                break;
             default:
             	throw 'unkown type';
        }
        return timeRange;

    }

    /*
     * 某日之后的，星期几
     */
    function getAfterWeekday(start, weekday) {
        var time = new moment(start); // 不改变原来的值
        var currWeekday = time.weekday();
        var addDay;
        if (currWeekday === 0) { // 周日
            currWeekday = 7;
        }
        if (weekday === 0) {
            weekday = 7;
        }
        addDay = weekday - currWeekday;
        if (addDay < 0) {
            addDay += 7;
        }

        time.add(addDay, 'day');
        return time;
    }


    /*
     * start，end 均为moment对象
     */
    function isTimeValid(start, end, type, value) {
        var validInfo = {
            isValid: true,
            errMsg: ''
        };
        // 开始时间要小于结束时间
        if (start.valueOf() >= end.valueOf()) {
            validInfo.isValid = false;
            validInfo.errMsg = 'end time shold bigger than start time';
        }

        if (type !== 'all') {
            if (value === undefined) {
                validInfo.isValid = false;
                validInfo.errMsg = 'value missing';
            } else {
                var startDayValue = parseInt(start.format('HHmmss'), 10);
                var endDayValue = parseInt(end.format('HHmmss'), 10);
                // 结束的日的信息是小于开始的
                if (startDayValue >= endDayValue) {
                    validInfo.isValid = false;
                    validInfo.errMsg = 'end time day info shold bigger than start time';
                }
            }
        }

        if (type === 'week') {
            // value 是数组
            if (!value.splice || !value.concat) {
                validInfo.isValid = false;
                validInfo.errMsg = 'value type should be array when type is week';
            } else {
                // 星期的值为 0-6
                validInfo.isValid = value.every(function(each) {
                    return each >= 0 && each < 7;
                });
                if (!validInfo.isValid) {
                    validInfo.errMsg = 'value should between and contain 0...6 array when type is week';
                }

            }
        }
        return validInfo;
    }


    /*
     * 如果结束时间未设置结束的时，分，秒（即时，分，秒均未0），则设置为当天的结束值
     */
    function toDefaultEndTime(time) {
        var end = new moment(time);
        if (end.hour() === 0 && end.minute() === 0 && end.second() === 0) {
            end.hour(23).minute(59).second(59);
            // end.endOf('day'); // 精度到毫米的，没必要
        }
        return end;
    }

    /*
     * 当天的日期，结束的时，分，秒 为 endDayInfo的值
     */
    function toDayEndTime(start, endDayInfo) {
        var end = new moment(start);
        end.startOf('day').hour(endDayInfo.hour).minute(endDayInfo.minute).second(endDayInfo.second);
        return end;
    }




    // http://momentjs.com/docs/
    // .format('YYYY-MM-DD')
    // .add('day', 1)
    // moment().endOf('day').valueOf()
    gloable.timesHasIntersection = timesHasIntersection;
    gloable.indexOfTimes = indexOfTimes;
    // http://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/
    // 私有方法，上线时删除,暴露出来用于测试
    gloable._toDefaultEndTime = toDefaultEndTime;
    gloable._toDayEndTime = toDayEndTime;
    gloable._TimeRange = TimeRange;
    gloable._isTimeValid = isTimeValid;
    gloable._hasIntersection = hasIntersection;
    gloable._timeRangesHasIntersection = timeRangesHasIntersection;
})(this, moment);
