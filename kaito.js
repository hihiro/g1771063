var results = "";

function serif1() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"bg_school.jpg\" width=\"500px\"><br><p>（レオ）俺は聖友希学園に通う一年生で名前は「鉄 レオ」だ。</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif2();\">";
	document.getElementById('result').innerHTML = "";
}

function serif2() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"bg_school.jpg\" width=\"500px\"><br><p>（レオ）俺には幼馴染がいるのだが、二人とも可愛い。<br>毎日仲良くしてくれるのはいいのだが...</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif3();\">";
}

function serif3() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_s\.jpg\" width=\"500px\"><br><p class=\"sora\">（宙）レオ〜　おっはよーう！今日もよろしく〜</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif4();\">";
}

function serif4() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_s\.jpg\" width=\"500px\"><br><p>（レオ）おはよう。元気だな。</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif5();\">";
}

function serif5() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_s\.jpg\" width=\"500px\"><br><p class=\"mind\">（レオ）（こいつは星庭 宙。さっきの幼馴染の一人だ。<br>天真爛漫で人懐っこい。）</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif6();\">";
}

function serif6() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_m\.jpg\" width=\"500px\"><br><p class=\"miyabi\">（雅）レオくん…　おはよう…　宙ちゃんも…</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif7();\">";
}

function serif7() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_m.jpg\" width=\"500px\"><br><p>（レオ）おっす。雅。</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"serif8();\">";
}

function serif8() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"intro_m.jpg\" width=\"500px\"><br><p class=\"mind\">（レオ）（もう一人の幼馴染の伊吹 雅。<br>かなりの恥ずかしがり屋なのだが、鬼の子なので力が強い。）</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"event1();\">";
}

function event1() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"both\">（宙・雅）レオ…　今日、二人で遊ばない？</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"event2();\">";
}

function event2() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"mind\">（レオ）さて、どっちを選ぶ？</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"宙とデート\" onClick=\"event3(1);\"><input type=\"button\" value=\"雅とデート\" onClick=\"event3(2);\"><input type=\"button\" value=\"二人を選ぶ\" onClick=\"event3(3);\">";
}

function event3(answer) {
	"use strict";
	if (answer === 1) {
		document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"sora\">（宙）私を選んでくれてありがと！<br>じゃあ映画でも観に行こっか。</p>";
		document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"END\" onClick=\"last(1);\">";
	} else
	if (answer === 2) {
		document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"miyabi\">（雅）レオくん…　選んでくれてありがと！<br>食べ歩きでもしてゆっくりしたいな…<br>一条橋にいこ…</p>";
		document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"END\" onClick=\"last(2);\">";
	} else {
		document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"sora\">（宙）二人とも？　なんかずるい気もするけど<br>雅のことも大好きだしいっか！</p>";
		document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"both1();\">";
	}
}

function both1() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p class=\"miyabi\">（雅）そうだね。　みんなでご飯でも食べたいな。</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"▼\" onClick=\"both2();\">";
}

function both2() {
	"use strict";
	document.getElementById('screen').innerHTML = "<img src=\"event\.jpg\" width=\"500px\"><br><p>（レオ）何かわかんないけど二人が幸せならいいや。</p>";
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"END\" onClick=\"last(3);\">";
}

function last(end) {
	"use strict";
	var route = "";
	if (end === 1) {
		document.getElementById('screen').innerHTML = "<img src=\"last_s\.jpg\" width=\"500px\"><br><h1>HAPPY END!!!</h1>";
		route = "3";
	} else if (end === 2) {
		document.getElementById('screen').innerHTML = "<img src=\"last_m\.jpg\" width=\"500px\"><br><h1>HAPPY END!!!</h1>";
		route = "5";
	} else {
		document.getElementById('screen').innerHTML = "<img src=\"last_b\.jpg\" width=\"500px\"><br><h1>HAPPY\(?\) END!!!</h1>";
		route = "4";
	}
	document.getElementById('selector').innerHTML = "<input type=\"button\" value=\"もういちどスタート\" onClick=\"serif1();\">";
	result = result + "<img src=\"check" + route + ".png\" width=\"50px\">";
	for (var i = 1; i <= results; i++) {
		document.getElementById('result').innerHTML = result;
	}
}
