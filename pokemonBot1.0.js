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
 
 
// ------------ 이 위로는 신경쓰지 않아도 됩니다. ----------------

// ver 1.5
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    let input = msg;
    let reMessage = "";
  
    // 여기서 기본 호출어 바꿀 수 있습니다.
    if(input.indexOf("태식아~") == 0) {
        if(input.indexOf("월") != -1) {
            let idx1 = input.indexOf("월");
            let idx2 = input.indexOf("~") + 1;

            let temp = input.slice(idx2, idx1).trim();
            let targetMonth = Number(temp);

            if(typeof(targetMonth) != Number) {
                reMessage += "정확한 월을 입력해주세요. ";
            }

            else {
                let target = total.find(event => event.month == targetMonth);

                if(target == undefined) {
                    reMessage += "해당 월의 정보가 없습니다.";
                }
                else {
                    reMessage += target.contents + " ";
                }
            }
        }

        // 여기 단에서 else if 쓰고 추가하시면 됩니다.
        else {
            if(input.indexOf("레이드") != -1) { reMessage += raidText + " "; }

            else if(input.indexOf("커뮤니티데이") != -1) { reMessage += communityDayText + " "; }

            else if(input.indexOf("이벤트") != -1) { reMessage += eventText + " "; }

            else if(input.indexOf("배틀") != -1) { reMessage += battleWeekText + " "; }

            else if(input.indexOf("날씨") != -1) {
                let idx = input.indexOf("날씨");
                let location = input.slice(4, idx);
            
                if (isNaN(location))  {
            
                    try {
            
                        let url = org.jsoup.Jsoup.connect("https://www.google.com/search?q=" + location + " 날씨").get();
            
                        let resultDC = url.select("#wob_dc").text(); //상태?
            
                        let resultPP = url.select("#wob_pp").text(); //강수확률
            
                        let resultTM = url.select("#wob_tm").text(); //온도
            
                        let resultWS = url.select("#wob_ws").text(); //풍속
            
                        let resultHM = url.select("#wob_hm").text(); //습도
            
                        if(resultDC=="")  {
            
                            reMessage += "지금 현재 " + location + "의 날씨를 불러올 수 없습니다.";
            
                            return;
            
                        }
            
                        reMessage += "지금 현재 "+ location +"의 날씨는 \""+ resultDC + "\"입니다. 온도는 "+resultTM+"°C 입니다.\n\n강수확률: " + resultPP + "\n풍속: " + resultWS + "\n습도: " + resultHM;
            
                    }catch(e)  {
            
                        reMessage += "불러올 수 없는 지역이거나 지원되지 않는 지역입니다.";
            
                        return;
            
                    }
            
                } else {
            
                    reMessage += "지역을 잘못 나타냈어요(EX. 태식아~ 오늘 (지역) 날씨";
            
                    return;
            
                }
                
                    
                
            
            }

            else { 
                let ranNum = Math.floor(Math.random() * 2);
                if(ranNum == 0) {
                    reMessage += "정확한 키워드를 입력해주세요. "; 
                }
                else if(ranNum == 1) {
                    reMessage += "제대로 쳐 병신아 ";
                }
            }
        }
        
        reMessage = reMessage.slice(0, -1);
        replier.reply(reMessage);
    }
}

// 객체 생성 메서드
function Event(month, contents) {
    this.month = month;
    this.contents = contents;
}


var total = [];

// 밑에 줄 형식으로 새로운 월 이벤트를 추가하시면 됩니다.
var event1 = new Event(1, "1/1 10시 ~ 1/3 20시 2024년 새해 이벤트\n\n1/6 14 ~ 17시   나몰빼미 커뮤니티데이\n\n1/6 10시 ~ 1/10 20시 LustrousOdyssey 이벤트\n\n1/14 14 ~ 17시 히스이 블레이범 레이드 데이\n\n1/13 10시 ~ 1/16 20시   Dazzling Dream 이벤트\n\n1/20 14 ~ 17시 커뮤니티데이 클래식\n\n1/19 10시 ~ 1/24 20시 GO 배틀 위크 : 시간을 초월한 여행\n\n1/27 ~ 2/1 (종일) Taken Treasures 이벤트\n\n1/27 6시 ~ 1/28 22시 그림자 칠색조 레이드 위켄드 ");
var event2 = new Event(2, "")

// 키워드만 입력했을 때 제공할 텍스트
var raidText = "오늘은 꼭 레이드를 할거야!";
var communityDayText = "오늘은 커뮤니티 데이야!";
var battleWeekText = "오늘은 배틀을 할거야!";
var eventText = "오늘은 무슨 이벤트일까?";
var additionalText = "";

// total.push(이벤트 이름) 입력해주시면 끝입니다.
total.push(event1);
total.push(event2);


total.sort((e1, e2) => (e1.month > e2.month) ? 1 : (e1.month < e2.month) ? -1 : 0);


// ------------ 이밑으론 신경쓰지 않아도 됩니다. ----------------

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