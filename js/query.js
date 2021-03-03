$(document).ready(function () {
    
    /*
       .user_id >> 오잉아이디
       .user_name >> 이름
       .user_contact >> 연락처
       
    */

    // -------------------------------------------- MAIN ---------------------------------------------------//
    
    // 공유하기 버튼을 눌렀을 경우
    $(".button_share").click(function(e){
        
        console.log("공유하기페이지 띄워주세요.")
        
    });
    
    
    // 이벤트 버튼을 눌렀을 경우
    // 준비중 / 응모완료 / 응모기간 종료 / 이벤트종료 - 회색버튼 버튼글씨변경
    // 응모하기 / 당첨확인 - 빨간버튼 버튼 글씨변경
    $(".button_event").click(function(e){
      
        // 빨간 배경으로 보일때
        $(".button_event").addClass("on");
        // 회색 배경으로 보일떄
        $(".button_event").removeClass("on");
        
        /*
        
            응모하기 -  $("#popup_apply").show();
            당첨확인
            - 당첨성공 : $("#popup_apply_win").show();
            - 당첨실패 : $("#popup_apply_fail").show();
            
            준비중 - $("#popup_preparing").show();
            응모완료 - $("#popup_apply_end").show();
            응모기간 종료 - $("#popup_apply_close").show();
            
        */
        
        
        
        
    });
    
    
    
    // -------------------------------------------- POPUP ---------------------------------------------------//
    
    
    // 응모하기 팝업창 $("#popup_apply") 에서 다음 버튼 눌렀을 때 
    $(".button_next").click(function(e){
        
        $(this).parent().parent().parent().hide(); // 현재보이는창(응모하기 팝업창) 닫고,
        $("#popup_apply_end").show(); //  응모완료 팝업창 띄워라
        
    });    
    
    //  당첨확인-당첨 팝업창 $("#popup_apply_win") 에서 지금 주문하기 버튼 눌렀을 때 
    $(".button_order").click(function(e){
        
        $(this).parent().parent().parent().hide(); // 현재보이는창(응모하기 팝업창) 닫고,
        $("#popup_order").show(); //  주문하기 팝업창 띄워라
        
    });
    
    //  주문하기 팝업창 $("#popup_order") 에서 개인정보 수집 동의(필수) 버튼 눌렀을 때 
    $(".button_personal_info_agree").click(function(e){

        $("#popup_personal_info").show(); //  개인정보 수집 동의 팝업 띄워라
        
    });
        
    //  주문하기 팝업창 $("#popup_order") 에서 결제하기 눌렀을 때
    $(".button_payment").click(function(e){
        
        var check = $("#personal_info_aree").prop("checked");
        
        if(check == true){
            
            console.log("페이앱 결제창을 띄워주세요.");
            
            
        }else{
            
            console.log("개인정보 수집 동의에 체크를 해주세요.");
            // 앱에서 다이얼로그로 체크해달라고 띄워주세요.
        }
      
    });
    
    // 이름 입력창이 포커스 되었을 때
    $("#input_user_name").focusin(function(){
        console.log("이름 입력창 활성화");
    });    
    
    // 연락처 입력창이 포커스 되었을 때
    $("#input_user_contact").focusin(function(){
        console.log("연락처 입력창 활성화");
    });   
    
    // 주소 입력창이 포커스 되었을 때
    $("#input_user_address").focusin(function(){
        console.log("주소 입력창 활성화");
    });
    
    //  개인정보 수집 동의(필수) 버튼 눌렀을 때 
    $(".button_personal_info_agree").click(function(e){

        $("#personal_info_aree").prop("checked", true); // 체크박스에 체크해라
        $("#popup_personal_info").show(); //  개인정보 수집 동의 팝업 띄워라
        
    });
    
    
    
    
    // 팝업창 우측 상단 X 버튼 눌렀을때
    $(".button_x").click(function(e){
        
        $(this).parent().parent().hide();
        
    });
    
    
    // 팝업창 취소/나중에/닫기 버튼 눌렀을때
    $(".button_close").click(function(e){
        
        $(this).parent().parent().parent().hide();
        
    });
    
    
    
    
    
    
    
});
