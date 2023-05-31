import { useState } from 'react';
import './Customer.css';
import Header from './header';
import TopButton from './TopButton';
import emailjs from 'emailjs-com';

export default function Customer() {
  const [emailDomain, setEmailDomain] = useState('');

  const handleDomainChange = (event) => {
    setEmailDomain(event.target.value);
  };
  const [wordCount, setWordCount] = useState(0);

  function handleChange(event) {
    const content = event.target.value;
    const contentLength = content.length;
    const maxByte = 4000;
    let byteCount = 0;
    let subStringIndex = 0;
    let oneChar = '';
    let subString = '';

    for (let i = 0; i < contentLength; i++) {
      oneChar = content.charAt(i);
      if (escape(oneChar).length > 4) {
        // 한글인 경우
        byteCount += 2;
      } else {
        // 그 외의 경우
        byteCount++;
      }

      if (byteCount <= maxByte) {
        subStringIndex = i + 1;
      }
    }

    if (byteCount > maxByte) {
      alert('최대 ' + maxByte + ' byte 이상 입력할 수 없습니다.');
      subString = content.substring(0, subStringIndex);
      event.target.value = subString;
      byteCount = maxByte;
    }

    setWordCount(byteCount);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.currentTarget; // 변경된 부분

    const templateParams = {
      form_type1: form.form_type1.value,
      visit_day: form.visit_day.value,
      pay_time: form.pay_time.value,
      order_menu: form.order_menu.value,
      form_answer: form.form_answer.value,
      form_name: form.form_name.value,
      to_name: '고객문의',
      request_cellphone1: form.request_cellphone1.value,
      request_cellphone2: form.request_cellphone2.value,
      request_cellphone3: form.request_cellphone3.value,
      form_email: form.form_email.value,
      form_email_domain: form.form_email_domain2.value,
      form_title: form.form_title.value,
      form_content: form.form_content.value,
    };

    emailjs
      .send(
        'service_cfecwow',
        'template_scl928n',
        templateParams,
        'ANyB8NebXtDaB2dpR'
      )
      .then((response) => {
        alert('문의 등록 완료 되었습니다.');
        console.log('Email sent successfully!', response.status, response.text);
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleCancel = () => {
    document.getElementById('form_type1').value = '';
    document.getElementById('visit_day').value = '';
    document.getElementById('pay_time').value = '';
    document.getElementById('order_menu').value = '';
    document.getElementById('form_answer').value = '';
    document.getElementById('form_name').value = '';
    document.getElementById('request_cellphone1').value = '';
    document.getElementById('request_cellphone2').value = '';
    document.getElementById('request_cellphone3').value = '';
    document.getElementById('form_email').value = '';
    document.getElementById('form_email_domain2').value = '';
    document.getElementById('form_title').value = '';
    document.getElementById('form_content').value = '';
  };

  return (
    <div>
      <Header />
      <div className='Customer' style={{ backgroundColor: '#EEEEEE' }}>
        <div className='empty'></div>
        <div
          className='div_color'
          style={{ backgroundColor: '#FFFFFF', width: '1400px' }}
        >
          <div className='div_border'>
            <p style={{ fontSize: '150px' }}></p>
          </div>
          <div
            className='div_border'
            style={{
              height: '107px',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                marginTop: '16px',
                fontSize: '32px',
              }}
            >
              고객의 마음
            </h2>
            <h4 className='h4_style'>
              고객님의 소중한 의견을 들려주세요! 더 나은 서비스를 제공하기 위해
              노력하고 있습니다.
            </h4>
          </div>

          <div
            style={{
              width: '1200px',
              marginLeft: '100px',
            }}
          >
            <form onSubmit={sendEmail}>
              <div
                style={{
                  blockSize: '750px',
                  marginBottom: '10px',
                  width: '800px',
                }}
              >
                <div className='div_style'>
                  <label htmlFor='form_type1' className='label_style'>
                    문의유형<span style={{ color: 'red' }}> * </span>
                  </label>
                  <select
                    name='form_type1'
                    id='form_type1'
                    style={{
                      marginBottom: '10px',
                      marginTop: '10px',
                      marginLeft: '50px',
                      width: '100px',
                      height: '25px',
                    }}
                  >
                    <option value=''>--분류--</option>
                    <option value='칭찬'>칭찬</option>
                    <option value='불만'>불만</option>
                    <option value='문의'>문의</option>
                    <option value='제안'>제안</option>
                  </select>
                </div>
                <div className='div_style'>
                  <label htmlFor='visit_day' className='label_style'>
                    방문일
                    <span style={{ color: 'red' }}> * </span>
                  </label>
                  <input
                    className='input_style'
                    name='visit_day'
                    id='visit_day'
                    type='text'
                    placeholder='연도-월-일'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </div>
                <div className='div_style'>
                  <label htmlFor='pay_time' className='label_style'>
                    결제시간
                    <span style={{ color: 'red' }}> * </span>
                  </label>
                  <input
                    type='text'
                    name='pay_time'
                    id='pay_time'
                    className='input_style'
                    style={{ marginRight: 'px' }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                  <select
                    className='none-css'
                    id='pay_time'
                    name='pay_time'
                    style={{
                      marginLeft: '10px',
                      width: '100px',
                      height: '25px',
                    }}
                  >
                    <option value=''>직접입력</option>
                    <option value='11시'>11시</option>
                    <option value='12시'>12시</option>
                    <option value='13시'>13시</option>
                    <option value='14시'>14시</option>
                    <option value='15시'>15시</option>
                    <option value='16시'>16시</option>
                    <option value='17시'>17시</option>
                    <option value='18시'>18시</option>
                    <option value='19시'>19시</option>
                    <option value='20시'>20시</option>
                  </select>
                </div>

                <div className='div_style'>
                  <label htmlFor='order_menu' className='label_style'>
                    주문메뉴
                  </label>
                  <input
                    type='text'
                    name='order_menu'
                    id='order_menu'
                    className='input_style'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </div>

                <div style={{ marginTop: '10px' }}>
                  <label htmlFor='' className='label_style'>
                    답변 알림 서비스<span style={{ color: 'red' }}> * </span>
                  </label>
                </div>
                <div>
                  <div className='div_style'>
                    <label
                      htmlFor='no_answer'
                      className='label_style'
                      style={{ marginLeft: '150px' }}
                    >
                      <input
                        name='form_answer'
                        value='받지않음'
                        type='radio'
                        id='no_answer'
                      />
                      <span>받지않음</span>
                    </label>
                    <label htmlFor='sms_answer' className='label_style'>
                      <input
                        name='form_answer'
                        value='문자 답변'
                        type='radio'
                        id='sms_answer'
                      />
                      <span>문자 답변</span>
                    </label>
                    <label htmlFor='em_answer' className='label_style'>
                      <input
                        name='form_answer'
                        value='이메일 답변'
                        type='radio'
                        id='em_answer'
                      />
                      <span>이메일 답변</span>
                    </label>
                  </div>
                </div>

                <div className='div_style'>
                  <label htmlFor='form_name' className='label_style'>
                    성함<span style={{ color: 'red' }}> * </span>
                  </label>
                  <input
                    type='text'
                    name='form_name'
                    id='form_name'
                    required=''
                    className='input_style'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </div>

                <div className='phone_border'>
                  <tr id='form_cellphpone1'>
                    <label className='label_style'>
                      휴대폰<b style={{ color: 'red' }}> *</b>
                    </label>
                    <td>
                      <div>
                        <select
                          style={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            marginLeft: '80px',
                            height: '25px',
                            width: '70px',
                          }}
                          name='request_cellphone1'
                          id='request_cellphone1'
                        >
                          <option value='' disabled=''>
                            선택
                          </option>
                          <option value='010' selected=''>
                            010
                          </option>
                          <option value='011'>011</option>
                          <option value='016'>016</option>
                          <option value='016'>017</option>
                          <option value='016'>018</option>
                          <option value='019'>019</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <input
                        style={{ height: '20px', width: '70px' }}
                        type='text'
                        id='request_cellphone2'
                        name='request_cellphone2'
                        required=''
                        maxlength='4'
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                      />
                    </td>
                    <td>
                      <input
                        style={{ height: '20px', width: '70px' }}
                        type='text'
                        id='request_cellphone3'
                        name='request_cellphone3'
                        required=''
                        maxlength='4'
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') e.preventDefault();
                        }}
                      />
                    </td>
                  </tr>
                </div>
                <div className='div_style'>
                  <label htmlFor='form_email' className='label_style'>
                    이메일
                    <span className='required' style={{ color: 'red' }}>
                      {' '}
                      *{' '}
                    </span>
                  </label>
                  <input
                    type='text'
                    name='form_email'
                    id='form_email'
                    className='email_style'
                    style={{ marginLeft: '50px' }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                  <em className='at'>@</em>
                  <input
                    type='text'
                    name='form_email_domain'
                    id='form_email_domain2'
                    value={emailDomain}
                    className='email_style'
                    onChange={handleDomainChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />

                  <select
                    id='form_email_domain'
                    name=''
                    style={{ width: '100px', height: '25px' }}
                    onChange={handleDomainChange}
                  >
                    <option value=''>직접입력</option>
                    <option value='naver.com'>naver.com</option>
                    <option value='gmail.com'>gmail.com</option>
                    <option value='daum.net'>daum.net</option>
                    <option value='google.com'>google.com</option>
                  </select>
                </div>

                <div className='div_style'>
                  <label htmlFor='form_title' className='label_style'>
                    제목<span style={{ color: 'red' }}> * </span>
                  </label>
                  <input
                    type='text'
                    name='form_title'
                    id='form_title'
                    required=''
                    className='title_style'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </div>
                <div className='div_style'>
                  <label htmlFor='form_content' className='label_style'>
                    내용
                    <span style={{ color: 'red' }}> * </span>
                  </label>
                  <textarea
                    name='form_content'
                    id='form_content'
                    style={{
                      marginLeft: '50px',
                      marginTop: '10px',
                      width: '1000px',
                      height: '200px',
                    }}
                    onKeyUp={handleChange}
                  ></textarea>
                </div>
                <div className='span_style'>
                  현재 {wordCount}/ 최대 4000byte (한글 2000자, 영문 4000자)
                </div>
              </div>
              <div
                style={{
                  fontSize: '6px',
                  marginLeft: '100px',
                  marginRight: '100px',
                }}
              >
                {' '}
                <p>
                  - 고객이 동의한 개인정보처리 방침에 따라 고객의소리 민원
                  처리를 위해 작성자의 개인정보를 활용할 수 있습니다.
                </p>
                <p>
                  - 기재오류 및 계정문제가 발생한 경우에는 답변이 불가능 할 수
                  있음으로 연락처 및 메일 주소를 정확하게 기입해 주시길
                  바랍니다.
                </p>
                <p>
                  - 답변은 직접 선택해주신 방법으로 진행되며, 추가적인 확인이
                  필요한 경우에는 선택해주신 답변 외 별도의 방법으로 연락드릴 수
                  있는점 양해 바랍니다.
                </p>
                <p>
                  - 관련 법령에 저촉되거나 사회통념 등에 어긋나는 내용 (예:욕설
                  및 비속어, 비방어 등 부적절한 단어가 포함되는 경우,
                  개인정보보안, 불충분한 증거/귀책 사유에 대한 개인
                  음해성/음란성 비방, 의도적인 업무방해 등) 또는 광고성 게시물은
                  별도 사전 통보 없이 답변되지 않을 수 있으며, 등록된 의견은
                  수정이 불가하오니 이점 양지하여 주시기 바랍니다.
                </p>
                <p>
                  - 공정거래위원회에서 고지한 소비자분쟁해결 기준에 의거하여
                  소비자 피해에 대해 교환 또는 환불 처리 해드립니다.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{
                    background: '#085427',
                    fontSize: '15px',
                    marginTop: '20px',
                  }}
                  type='submit'
                >
                  보내기
                </button>
                <button
                  style={{
                    background: '#085427',
                    fontSize: '15px',
                    marginLeft: '20px',
                    marginTop: '20px',
                  }}
                  onClick={handleCancel}
                >
                  취소
                </button>
              </div>

              <div>
                <h1 style={{ fontSize: '100px' }}> </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TopButton />
      <div>
        <h1>
          {' '}
          <br />{' '}
        </h1>
      </div>
    </div>
  );
}
