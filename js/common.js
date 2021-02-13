(() => {
    const leaflet = document.querySelector('.leaflet');
    const pageElems = document.querySelectorAll('.page');
    let pageCount = 0; 
    
    // 여러군데에 사용하기 위해
    function getTarget(elem, className){
        while(!elem.classList.contains(className)) {
            elem = elem.parentNode;

            if (elem.nodeName == 'BODY'){
                elem = null;
                return;
            }
        }
        return elem;
    }

    // 리플릿 클릭시 화면이 열리고 다열렸을시 leaflet-opened으로 클레스 바꾸기
    leaflet.addEventListener('click', e =>{
        let pageElem = getTarget(e.target, 'page');
        if(pageElem) {
            pageElem.classList.add('page-flipped');
            pageCount++;

            if(pageCount == 2) {
                document.body.classList.add('leaflet-opened')
            }
        }// 여기까지
        
        // 여기부터 Close버튼 누르면 페이지 카운트 초기화 하고
        // 0.5s 동안 모든 페이지가 닫히며 클레스 초기화
        let closeBtnElem = getTarget(e.target, 'close-btn');
        if(closeBtnElem) {
            pageCount = 0; //값 초기화
            document.body.classList.remove('leaflet-opened');
            pageElems[2].classList.remove('page-flipped');
            setTimeout(() =>{
                pageElems[0].classList.remove('page-flipped');
            }, 500);
        }// 여기까지
    })
})();