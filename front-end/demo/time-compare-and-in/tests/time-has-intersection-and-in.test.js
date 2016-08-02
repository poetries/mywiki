chai.Should();
// http://chaijs.com/api/bdd/
describe('timesHasIntersection 有若干个时间集合，判断时间集合是否有交集', function() {
    describe('#toDefaultEndTime 默认的结束时间', function() {
        it('should not change time if set day info', function() {
            var time = '2015-04-03 15:03:01';
            _toDefaultEndTime(time).valueOf().should.equal((new Date(time)).valueOf());
        });

        it('should be end of the day if not set day info', function() {
            var time = '2015-04-03';
            _toDefaultEndTime(time).valueOf().should.equal((new Date('2015-04-03 23:59:59')).valueOf());
        });
    });

    describe('#toDayEndTime', function() {
        it('should return end of day info', function() {
            var time = '2015-04-03 10:03:01';
            var endDayInfo = {
                hour: 16,
                minute: 15,
                second: 18
            };
            var endTimeStr = [time.slice(0, '2015-04-03'.length), ' ', [endDayInfo.hour, endDayInfo.minute, endDayInfo.second].join(':')].join('');
            _toDayEndTime(time, endDayInfo).valueOf().should.equal((new Date(endTimeStr)).valueOf());
        });
    });

    describe('#isTimeValid 时间验证', function() {
        it('should end time smaller than start time should be invalid', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-04-03 15:03:01'), 'all').isValid.should.be.false;
        });
        it('should end time time info smaller than start time should be valid when type is all', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-12-03 0:03:01'), 'all', 3).isValid.should.be.true;
        });
        it('should end time time info smaller than start time should be invalid when type if not all', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-12-03 0:03:01'), 'day', 3).isValid.should.be.false;
        });
        it('should end time smaller than start time should be invalid', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-04-03 15:03:01'), 'all').isValid.should.be.false;
        });

        it('should value type be array when type is week', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-08-05 20:03:01'), 'week', 3).isValid.should.be.false;
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-08-05 20:03:01'), 'week', [1]).isValid.should.be.true;
        });

        it('should value between and contain 0...6  when type is week', function() {
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-08-05 20:03:01'), 'week', [12, 1, 5]).isValid.should.be.false;
            _isTimeValid(new moment('2015-08-03 15:03:01'), new moment('2015-08-05 20:03:01'), 'week', [0, 1, 2, 3, 4, 5, 6]).isValid.should.be.true;
        });
    });
    describe('#TimeRange 生成时间区间', function() {
        describe('type is all', function() {
            var timeObj = {
                start: '2015-04-03 15:03:01',
                end: '2015-04-05 15:03:01',
                type: 'all'
            };
            it('should return length equal 1', function() {
                var timeRange = new _TimeRange(timeObj);
                timeRange.length.should.equal(1);
            });
            it('should return value start,end exact equal start,end', function() {
                var timeRange = new _TimeRange(timeObj);
                timeRange[0][0].should.equal((new Date(timeObj.start)).valueOf());
                timeRange[0][1].should.equal((new Date(timeObj.end)).valueOf());
            });
        });

        describe('type is day', function() {
            var timeObjNormal = {
                start: '2015-3-1 15:03:01',
                end: '2015-3-3 18:05:06',
                type: 'day',
                value: 1
            };

            var timeObjRepeat2 = {
                start: '2015-3-1 15:03:01',
                end: '2015-3-5 18:05:06',
                type: 'day',
                value: 2
            };

            var timeObjRepeat2Even = {
                start: '2015-3-1 15:03:01',
                end: '2015-3-4 18:05:06',
                type: 'day',
                value: 2
            };

            it('should value is given time', function() {
                var timeRange = new _TimeRange(timeObjNormal);
                timeRange.length.should.equal(3);
                timeRange[0][0].should.equal((new Date('2015-3-1 15:03:01')).valueOf());
                timeRange[0][1].should.equal((new Date('2015-3-1 18:05:06')).valueOf());
                timeRange[1][0].should.equal((new Date('2015-3-2 15:03:01')).valueOf());
                timeRange[1][1].should.equal((new Date('2015-3-2 18:05:06')).valueOf());
                timeRange[2][0].should.equal((new Date('2015-3-3 15:03:01')).valueOf());
                timeRange[2][1].should.equal((new Date('2015-3-3 18:05:06')).valueOf());


                var timeRangeRepeat2 = new _TimeRange(timeObjRepeat2);
                timeRangeRepeat2.length.should.equal(3);
                timeRangeRepeat2[0][0].should.equal((new Date('2015-3-1 15:03:01')).valueOf());
                timeRangeRepeat2[0][1].should.equal((new Date('2015-3-1 18:05:06')).valueOf());
                timeRangeRepeat2[1][0].should.equal((new Date('2015-3-3 15:03:01')).valueOf());
                timeRangeRepeat2[1][1].should.equal((new Date('2015-3-3 18:05:06')).valueOf());
                timeRangeRepeat2[2][0].should.equal((new Date('2015-3-5 15:03:01')).valueOf());
                timeRangeRepeat2[2][1].should.equal((new Date('2015-3-5 18:05:06')).valueOf());

                var timeRangeRepeat2Even = new _TimeRange(timeObjRepeat2Even);
                timeRangeRepeat2Even.length.should.equal(2);
                timeRangeRepeat2Even[0][0].should.equal((new Date('2015-3-1 15:03:01')).valueOf());
                timeRangeRepeat2Even[0][1].should.equal((new Date('2015-3-1 18:05:06')).valueOf());
                timeRangeRepeat2Even[1][0].should.equal((new Date('2015-3-3 15:03:01')).valueOf());
                timeRangeRepeat2Even[1][1].should.equal((new Date('2015-3-3 18:05:06')).valueOf());

            });
        });

        describe('type is weekday', function() {
            var timeObjNormal = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [1]
            };

            var timeObjNormal2 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [3, 5, 6, 0]
            };


            it('should value is given time', function() {
                var timeRange = new _TimeRange(timeObjNormal);
                timeRange.length.should.equal(3);
                timeRange[0][0].should.equal((new Date('2015-3-2 15:03:01')).valueOf());
                timeRange[0][1].should.equal((new Date('2015-3-2 18:05:06')).valueOf());
                timeRange[1][0].should.equal((new Date('2015-3-9 15:03:01')).valueOf());
                timeRange[1][1].should.equal((new Date('2015-3-9 18:05:06')).valueOf());
                timeRange[2][0].should.equal((new Date('2015-3-16 15:03:01')).valueOf());
                timeRange[2][1].should.equal((new Date('2015-3-16 18:05:06')).valueOf());

                var timeRange = new _TimeRange(timeObjNormal2);
                timeRange.length.should.equal(10);

                timeRange[0][0].should.equal((new Date('2015-3-4 15:03:01')).valueOf());
                timeRange[0][1].should.equal((new Date('2015-3-4 18:05:06')).valueOf());
                timeRange[1][0].should.equal((new Date('2015-3-6 15:03:01')).valueOf());
                timeRange[1][1].should.equal((new Date('2015-3-6 18:05:06')).valueOf());
                timeRange[2][0].should.equal((new Date('2015-3-7 15:03:01')).valueOf());
                timeRange[2][1].should.equal((new Date('2015-3-7 18:05:06')).valueOf());
                timeRange[3][0].should.equal((new Date('2015-3-8 15:03:01')).valueOf());
                timeRange[3][1].should.equal((new Date('2015-3-8 18:05:06')).valueOf());

                timeRange[4][0].should.equal((new Date('2015-3-11 15:03:01')).valueOf());
                timeRange[4][1].should.equal((new Date('2015-3-11 18:05:06')).valueOf());
                timeRange[5][0].should.equal((new Date('2015-3-13 15:03:01')).valueOf());
                timeRange[5][1].should.equal((new Date('2015-3-13 18:05:06')).valueOf());
                timeRange[6][0].should.equal((new Date('2015-3-14 15:03:01')).valueOf());
                timeRange[6][1].should.equal((new Date('2015-3-14 18:05:06')).valueOf());
                timeRange[7][0].should.equal((new Date('2015-3-15 15:03:01')).valueOf());
                timeRange[7][1].should.equal((new Date('2015-3-15 18:05:06')).valueOf());

                timeRange[8][0].should.equal((new Date('2015-3-18 15:03:01')).valueOf());
                timeRange[8][1].should.equal((new Date('2015-3-18 18:05:06')).valueOf());
                timeRange[9][0].should.equal((new Date('2015-3-20 15:03:01')).valueOf());
                timeRange[9][1].should.equal((new Date('2015-3-20 18:05:06')).valueOf());
            });
        });
    });

    describe('#hasIntersection 两个区间是否有交集', function() {
        it('should as it describe', function() {
            _hasIntersection([1, 2], [5, 6]).should.to.be.false;
            _hasIntersection([5, 6], [1, 2]).should.to.be.false;
            _hasIntersection([1, 5], [3, 6]).should.to.be.true;
            _hasIntersection([1, 10], [3, 6]).should.to.be.true;
        });
    });

    describe('#timeRangesHasIntersection 两个区间数组否有交集', function() {
        it('should as it describe', function() {
            var arr1 = [
                [1, 2]
            ];
            var arr2 = [
                [5, 6]
            ];
            _timeRangesHasIntersection(arr1, arr2).should.to.be.false;

            var arr1 = [
                [1, 2],
                [3, 4]
            ];
            var arr2 = [
                [5, 6],
                [8, 9],
                [20, 100]
            ];
            _timeRangesHasIntersection(arr1, arr2).should.to.be.false;

            var arr1 = [
                [1, 2],
                [3, 8]
            ];
            var arr2 = [
                [5, 6]
            ];
            _timeRangesHasIntersection(arr1, arr2).should.to.be.true;

            var arr1 = [
                [1, 4]
            ];
            var arr2 = [
                [5, 6],
                [3, 5],
                [20, 50]
            ];
            _timeRangesHasIntersection(arr1, arr2).should.to.be.true;
        });
    });

    describe('#timesHasIntersection 有若干个时间集合，判断时间集合是否有交集', function() {
        it('should accept time stamp and time str', function() {
            var time1 = {
                start: '2014-5-4',
                end: '2014/6/04',
                type: 'all'
            };
            var time2 = {
                start: Date.now() - 1000,
                end: Date.now(),
                type: 'all'
            };
            timesHasIntersection(time1, time2).hasIntersection.should.to.be.false;;
        });

        it('should as describe when type is all', function() {
            var time1 = {
                start: '2014-5-4',
                end: '2014-6-6',
                type: 'all'
            };
            var time2 = {
                start: '2014-6-8',
                end: '2014-6-9 10:0:3',
                type: 'all'
            };
            var time3 = {
                start: '2014-7-9',
                end: '2014-8-10',
                type: 'all'
            };
            var time4 = {
                start: '2014-11-4',
                end: '2014-11-6',
                type: 'all'
            };
            timesHasIntersection(time1, time2, time3, time4).hasIntersection.should.to.be.false;;
            var time5 = {
                start: '2014-3-4',
                end: '2014-5-6',
                type: 'all'
            };
            timesHasIntersection(time1, time2, time3, time4, time5).hasIntersection.should.to.be.true;;
            var time6 = {
                start: '2014-11-5',
                end: '2015-5-6',
                type: 'all'
            };
            timesHasIntersection(time1, time2, time3, time4, time6).hasIntersection.should.to.be.true;;
        });

        it('should as describe when type is day', function() {
            var time1 = {
                start: '2014-5-4',
                end: '2014-6-6',
                type: 'day',
                value: 1
            };
            var time2 = {
                start: '2014-6-8 5:0:0',
                end: '2014-6-15 10:0:0',
                type: 'day',
                value: 2
            };

            timesHasIntersection(time1, time2).hasIntersection.should.to.be.false;

            var time3 = {
                start: '2014-6-8 12:0:0',
                end: '2014-6-15 14:0:0',
                type: 'day',
                value: 2
            };
            timesHasIntersection(time1, time2, time3).hasIntersection.should.to.be.false;
            var time4 = {
                start: '2014-6-8 13:0:0',
                end: '2014-6-15 13:20:0',
                type: 'day',
                value: 2
            };
            timesHasIntersection(time1, time2, time3, time4).hasIntersection.should.to.be.true;
            timesHasIntersection(time1, time2, time3, time4).intersection.should.deep.equal([2, 3]);
        });

        it('should as describe when type is week', function() {
            var time1 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [1]
            };

            var time2 = {
                start: '2015-6-2 15:03:01', // 周一
                end: '2015-8-20 18:05:06', // 周五
                type: 'week',
                value: [2, 3, 4]
            };

            timesHasIntersection(time1, time2).hasIntersection.should.to.be.false;

            var time3 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [2, 3, 4, 5, 6, 0]
            };
            timesHasIntersection(time1, time2, time3).hasIntersection.should.to.be.false;

            var time4 = {
                start: '2015-2-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [1]
            };
            timesHasIntersection(time1, time2, time3, time4).hasIntersection.should.to.be.true;
            timesHasIntersection(time1, time2, time3, time4).intersection.should.deep.equal([0, 3]);

            // week是字符串的情况
            var time1 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: ['1']
            };

            var time2 = {
                start: '2015-6-2 15:03:01', // 周一
                end: '2015-8-20 18:05:06', // 周五
                type: 'week',
                value: ['2', '3', '4']
            };

            timesHasIntersection(time1, time2).hasIntersection.should.to.be.false;

            var time3 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: ['2', '3', '4', '5', '6', '0']
            };
            timesHasIntersection(time1, time2, time3).hasIntersection.should.to.be.false;

            var time4 = {
                start: '2015-2-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: ['1']
            };
            timesHasIntersection(time1, time2, time3, time4).hasIntersection.should.to.be.true;
            timesHasIntersection(time1, time2, time3, time4).intersection.should.deep.equal([0, 3]);

        });

        it('should as describe whaterve', function() {
            var time1 = {
                start: '2015-3-1 15:03:01', // 周一
                end: '2015-3-1 18:05:06', // 周五
                type: 'all'
            };

            var time2 = {
                start: '2015-3-3 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'day',
                value: 8
            };

            var time3 = {
                start: '2015-3-2 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'week',
                value: [1]
            };

            timesHasIntersection(time1, time2, time3).hasIntersection.should.to.be.false;

            var time4 = {
                start: '2015-3-3 15:03:01', // 周一
                end: '2015-3-20 18:05:06', // 周五
                type: 'day',
                value: 2
            };
            timesHasIntersection(time1, time4, time3).hasIntersection.should.to.be.true;
            timesHasIntersection(time1, time4, time3).intersection.should.deep.equal([1, 2]);

        });
    });
});

describe('indexOfTimes 具体时间在哪个时间区间内', function() {
    it('should return index if find', function() {
        var time1 = {
            start: '2015-3-1 15:03:01', // 周一
            end: '2015-3-10 18:05:06', // 周五
            type: 'all'
        };
        indexOfTimes('2015-3-2', [time1]).should.equal(0);
        indexOfTimes('2015-3-1 15:03:01', [time1]).should.equal(0);

        var time2 = {
            start: '2015-8-1 15:03:01', // 周一
            end: '2015-8-10 18:05:06', // 周五
            type: 'all'
        };


        indexOfTimes('2015-8-3', [time1, time2]).should.equal(1);

        var time3 = {
            start: '2015-8-12 15:03:01', // 周一
            end: '2015-8-20 18:05:06', // 周五
            type: 'day',
            value: 2
        };
        indexOfTimes('2015-8-16 16:20:01', [time1, time2, time3]).should.equal(2);

        var time4 = {
            start: '2015-8-12 15:03:01', // 周一
            end: '2015-8-20 18:05:06', // 周五
            type: 'week',
            value: [2]
        };
        indexOfTimes('2015-8-14 16:20:01', [time1, time2, time3, time4]).should.equal(2);

    });

    it('should return -1 if not find', function() {
    	var time1 = {
            start: '2015-3-1 15:03:01',
            end: '2015-3-10 18:05:06',
            type: 'all'
        };
        indexOfTimes('2015-1-2', [time1]).should.equal(-1);
        indexOfTimes('2015-1-2', [time1]).should.equal(-1);
        indexOfTimes('2015-3-1 15:03:00', [time1]).should.equal(-1);
        indexOfTimes('2015-3-10 18:05:08', [time1]).should.equal(-1);


        var time2 = {
            start: '2015-3-10 15:03:01',
            end: '2015-3-12 18:05:06',
            type: 'day',
            value: 2
        };
        indexOfTimes('2015-3-11 16:20:01', [time1, time2]).should.equal(-1);

        var time3 = {
            start: '2015-8-12 15:03:01', // 周三
            end: '2015-8-20 18:05:06', // 周四
            type: 'week',
            value: [1,2,3,4,5,6]
        };
        // 周日
        indexOfTimes('2015-8-16 16:20:01', [time3]).should.equal(-1);

    });
});
