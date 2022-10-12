//input에 값을 입력하고 버튼을 누른다.
//시계가 돌아가고 결과값이 출력된다
//훈련하러가기, 공유하기 버튼이 생성

const startButton = document.querySelector('.start_btn')
const openButton = document.querySelector('.modal_btn')
const closeButton = document.querySelector('.close_btn')
const shareButton = document.querySelector('.share_btn')
const result = document.querySelector('.result')
const modal = document.querySelector('#modal')
const loading = document.querySelector('.result_loading')

function calculator () {
  const fieldValue = document.querySelector("#field_value");
  let timeValue = document.querySelector('#time_value');
  let timeValue_int = Number(timeValue.value);

  const fieldResult = document.querySelector('.field_result');
  const timeResult = document.querySelector('.time_result');
  
  if(fieldValue.value == ''){
    alert('입력되지 않았습니다.');
    fieldValue.focus();
    return false;
  }else if (timeValue_int.value == '') {
    alert('입력되지 않았습니다.');
    timeValue.focus();
    return false;
  } else if (timeValue_int >24) {
    alert('24이하의 값을 입력해 주세요.');
    return false;
  }
  result.style.display = 'none';
  loading.style.display = 'flex';

  setTimeout(function(){
    loading.style.display = 'none'
    result.style.display = 'flex';
    fieldResult.innerText = fieldValue.value;
    timeResult.innerText = parseInt((10000/timeValue_int), 10);
  },1800);
}

function openModal () {
  modal.style.display = 'flex'
}

function closeModal () {
  modal.style.display = 'none';
}
//화면을 클릭했을 때 모달이 닫히도록
window.onclick = function(event) {
  if(event.target == modal) {
    closeModal();
  }
}

function copyUrl () {
  let url = window.location.href;
  let tmp = document.createElement('input');

  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);

  alert('URL이 복사되었습니다.')
}

//버튼을 클릭했을 때 이벤트
shareButton.addEventListener('click',copyUrl)
openButton.addEventListener('click',openModal)
closeButton.addEventListener('click',closeModal)
startButton.addEventListener('click',calculator)

