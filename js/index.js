var bsdatas=[
  {id: "bs1", name: "不只是圖書館", intro: "藏在松菸裡，一個靜謐的一樓角落。100種以上國內外設計雜誌，3萬本平面、工業、建築、服裝、藝術書籍。各種工作室需要的工具、wifi、插座和討論空間，及私心喜愛的陽光和歌單。", addr: "台北市信義區光復南路133號1F", coords: {lat: 25.043849, lng: 121.559371}, open: "周二至周日10:00-18:00", fb: "https://www.facebook.com/TDCDesignLibrary/", web: "http://60.251.119.120/webpac/", email: "notjust@tdc.org.tw", tel: "(02)2745-8199#322"},
  {id: "bs2", name: "Boven 雜誌圖書館", intro: "全球首座雜誌圖書館——boven雜誌圖書館，擁有二萬本來自世界各地，包括設計、藝術、時尚、生活、攝影等各類雜誌；在數位時代的今日反其道而行，大力推廣紙本閱讀的美好，是因為紙本閱讀具有數位媒體所無可取代的溫度和時代感。而翻閱紙本的動作，紙張的味道與厚度，那份存在感，這種直覺式的體驗，不會存在於電子媒介中。boven提供讀者一份美好的閱讀體驗，也希望大家能夠將這樣的經驗複製於自己的生活中。來一趟boven雜誌圖書館，閱讀，又不只是閱讀。", addr: "台北市大安區復興南路一段107巷5弄18號B1", coords: {lat: 25.044305, lng: 121.545247}, open: "每日12:00-22:00 ", fb: "https://www.facebook.com/boven437/", web: "-", email: "mag.boven@gmail.com", tel: "(02)2778-7526"},
  {id: "bs3", name: "真書軒 The Jen Library", intro: "真書軒於2014年開始營業，擁有真咖啡餐飲服務、閱讀森林選書企劃、學生藝術商店Everyday Art。", addr: "台北市大安區信義路三段59號2樓 ", coords: {lat: 25.034221, lng: 121.536013}, open: "每日10:00-19:00 (每月第一個周一休息)", fb: "https://www.facebook.com/thejenlibrary/", web: "http://thejenlibrary.tw/", email: "-", tel: "(02)2755-6906"},
  {id: "bs4", name: "益品書屋 EP - BOOKS", intro: "請跟我們一起收起電子產品，享受閱讀的美好。 ", addr: "台北市仁愛路二段69號", coords: {lat: 25.038855, lng: 121.530689}, open: "周一至周日12：00-20：00 (農曆春節除外) ", fb: "https://www.facebook.com/epbooks.com.tw/", web: "http://epbooks.com.tw/", email: "service@epbooks.com.tw", tel: "(02)2397-2998"},
  {id: "bs5", name: "櫞椛文庫", intro: "一間隱身於中山區巷弄內的「計時制」私設圖書館。枸櫞（又叫香櫞)果期為秋天，果實為橙黃色，果皮有佛手柑香氣，取其「櫞」字為引其香氣入書室，與文字結下善緣。「椛」為日本漢字，亦可寫成紅葉二字，樹木的葉子在秋天呈現黃色或紅色的，如同花一樣美麗的顏色，取此涵義，體驗閱讀之美。隱匿在巷弄內一處的私設圖書館，如同文庫存在的目的，是為了收藏並分享閱讀文字的樂趣。我們由衷地希望來到這裡的人們，都能夠閱讀各種形式的美。", addr: "台北市中山區中山北路一段56巷2之1號2樓", coords: {lat: 25.048555, lng: 121.520439}, open: "周一至周五10:00-18:00、周六日14:00-18:00、每周二公休", fb: "https://www.facebook.com/enkalibrary/", web: "https://goo.gl/6ADLzu", email: "enkabunko@gmail.com", tel: "(02)2522-1795"},
  {id: "bs6", name: "Lightbox攝影圖書室", intro: "一個以台灣為主體、面向公眾、自由開放的攝影圖書室。", addr: "台北市中正區金門街5-1號3F", coords: {lat: 25.022985, lng: 121.524453}, open: "周二至周六13:00-20:00", fb: "https://www.facebook.com/lightboxlib/", web: "https://www.lightboxlib.org/", email: "info@lightboxlib.org", tel: "(02)2367-8161"},
  {id: "bs7", name: "薄霧書店", intro: "收藏以設計、生活風格為主的絕版雜誌，提供茶、咖啡、啤酒在這裡工作或閱讀。", addr: "台北市中正區羅斯福路三段302號3樓", open: "周三至周日12:00-19:00", coords: {lat: 25.016563, lng: 121.532498}, fb: "https://www.facebook.com/mistybookstore/", web: "", email: "mrmistbook@gmail.com", tel: "-"},
  {id: "bs8", name: "小步Biblio", intro: "小步Biblio為收費制私人繪本圖書館，約有四千本國外繪本、圖錄、研究書籍，以及少量中文繪本收藏。我們收集世界各國藝術性高、有創意、或有特殊歷史意義的繪本們，並舉辦主題展覽及講座，期望能成為創作者、編輯、讀者們的靈感聚集地。", addr: "台北市大同區延平北路二段135巷20號", coords: {lat: 25.057696, lng: 121.512545}, open: "除課程講座之外，目前不對外一般開放。", fb: "https://www.facebook.com/LittleStepBiblio/", web: "", email: "biblioboo20@gmail.com", tel: "-"}];

var vm=new Vue({
  el: "#list_area",
  data: {
    items: bsdatas
  }
});

// 地圖
var map;
function initMap(){
  var options={
    center: {lat: 25.043185, lng: 121.532624},
    zoom: 13
  }

  var map=new google.maps.Map(document.getElementById('map'), options);

  var markers=bsdatas;

    for(var i=0;i<markers.length;i=i+1){
      addMarker(markers[i]);
    }

  function addMarker(props){
    var marker=new google.maps.Marker({
      position: props.coords,
      map: map
    });

    var infowindow=new google.maps.InfoWindow({
      content: '<h3>'+props.name+'</h3><p><strong>地址：</strong>'+props.addr+'<br><strong>營業時間：</strong>'+props.open+'</p>'
    });

    marker.addListener('mouseover', function(){
      infowindow.open(map, marker);
    });
    marker.addListener('mouseout', function(){
      infowindow.close(map, marker);
    });
  };
}

//滑動離開頂部時就取消at_top的class
$(".main_area").scroll(function(e){
  if ($(".main_area").scrollTop()>=3000)
    $(".dot").addClass("move_top");
  else
    $(".dot").removeClass("move_top");
});