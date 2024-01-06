const scriptName = "pokemonGoEventBot";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
 
 
// 이 위로도 신경쓰지 마세요.
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    let input = msg;
    let reMessage = "";
  
    // 여기서 기본 호출어 바꿀 수 있습니다.
    if(input.indexOf("태식아!") != -1) {
        if(input.indexOf("월") != -1) {
        let idx = input.indexOf("월") - 1;
        let targetMonth = input[idx];

            if(input.indexOf("레이드") != -1) {
                let targets = total.filter(event => event.month == targetMonth && event.eventType == "r");
                for (let target of targets) {
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 레이드 ☆\n";
                }
            }
            
            else if(input.indexOf("커뮤니티데이") != -1) {
                let targets = total.filter(event => event.month == targetMonth && event.eventType == "c");
                for(let target of targets) {
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 커뮤니티데이 ☆\n";
                }
            }

            else if(input.indexOf("이벤트") != -1) {
                let targets = total.filter(event => event.month == targetMonth && event.eventType == "e");
                for(let tartget of targets) {
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 이벤트 ☆\n";
                }
            }

            else if(input.indexOf("배틀") != -1) {
                let targets = total.filter(event => event.month == targetMonth && event.eventType == "b");
                for(let target of targets) {
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + "GO 배틀 위크 : " + target.name + " ☆\n";
                }
            }

            else {
                let targets = total.filter(event => event.month == targetMonth);
                for(let target of targets) {
                    if (target.eventType == "r") {
                        reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 레이드 ☆\n";
                    }
                    else if(target.eventType == "c") {
                        reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 커뮤니티데이 ☆\n";
                    }
                    else if(target.eventType == "e") {
                        reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 이벤트 ☆\n";
                    }
                }
            }
        }
        else {
            if(input.indexOf("레이드") != -1) {
                let targets = total.filter(event => event.eventType == "r");
                targets.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);

                let temp = targets[0].month;
                reMessage += "- " + temp + "월 -\n\n";

                for(target of targets) {
                    if (target.month != temp) {
                        temp = target.month;
                        reMessage += "\n- " + temp + "월 -\n\n";
                    }
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 레이드 ☆\n";
                }
            }

            else if(input.indexOf("커뮤니티데이") != -1) {
                let targets = total.filter(event => event.eventType == "c");
                targets.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);

                let temp = targets[0].month;
                reMessage += "- " + temp + "월 -\n\n";

                for(let target of targets) {
                    if (target.month != temp) {
                        temp = target.month;
                        reMessage += "\n- " + temp + "월 -\n\n";
                    }
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 커뮤니티데이 ☆\n";
                }
            }

            else if(input.indexOf("이벤트") != -1) {
                let targets = total.filter(event => event.eventType == "e");
                targets.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);

                let temp = targets[0].month;
                reMessage += "- " + temp + "월 -\n\n";

                for(let target of targets) {
                    if (target.month != temp) {
                        temp = target.month;
                        reMessage += "\n- " + temp + "월 -\n\n";
                    }
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + target.name + " 이벤트 ☆\n";
                }
            }

            else if(input.indexOf("배틀") != -1) {
                let targets = total.filter(event => event.eventType == "b");
                targets.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);

                let temp = targets[0].month;
                reMessage += "- " + temp + "월 -\n\n";

                for(let target of targets) {
                    if (target.month != temp) {
                        temp = target.month;
                        reMessage += "\n- " + temp + "월 -\n\n";
                    }
                    reMessage += "☆ " + target.startDate + "일 " + target.startTime + "시 ~ " + target.endDate + "일 " + target.endTime + "시 - " + "GO 배틀 위크 : " + target.name + " ☆\n";
                }
            }
        }
        
        reMessage = reMessage.slice(0, -1);
        replier.reply(reMessage);
    }
}

// 객체 생성 메서드
function Event(month, name, startDate, startTime, endDate, endTime, eventType) {
    this.month = month;
    this.name = name;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endDate = endDate;
    this.endTime = endTime;
    this.eventType = eventType;
}


var total = [];
// 밑에 줄 형식으로 새로운 월 이벤트를 추가하시면 됩니다.
var event1 = new Event(1, "2024년 새해", 1, 10, 3, 20, "e");
var event2 = new Event(1, "나몰빼미", 3, 14, 6, 17, "c");
var event3 = new Event(1, "LustrousOdyssey", 6, 10, 10, 20, "e");
var event4 = new Event(1, "히스이 블레이범", 14, 14, 14, 17, "r");
var event5 = new Event(1, "Dazzling Dream", 13, 10, 16, 20, "e");
var event6 = new Event(1, "Classic(복각)", 20, 14, 20, 17, "c");
var event7 = new Event(1, "시간을 초월한 여행", 19, 10, 24, 20, "b");
var event8 = new Event(1, "Taken Treasures", 27, 0, 1, 24, "e");
var event9 = new Event(1, "그림자 칠색조", 27, 6, 28, 22, "r");
var event10 = new Event(2, "Bot 완성", 2, 10, 3, 10, "e");
var event11 = new Event(3, "알로라 식스테일", 2, 9, 2, 18, "r");



// total.push(이벤트 이름) 입력해주시면 끝입니다.
total.push(event1);
total.push(event2);
total.push(event3);
total.push(event4);
total.push(event5);
total.push(event6);
total.push(event7);
total.push(event8);
total.push(event9);
total.push(event10)

total.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);




// 이밑으론 신경쓰지 않아도 됩니다.

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
    var textView = new android.widget.TextView(activity);
    textView.setText("Hello, World!");
    textView.setTextColor(android.graphics.Color.DKGRAY);
    activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}