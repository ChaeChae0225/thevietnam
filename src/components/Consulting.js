import { useState } from 'react';
import './Consulting.css';
import TopButton from './TopButton';
import emailjs from 'emailjs-com';

export default function Consulting() {
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

  const sendEmail = (event) => {
    event.preventDefault();

    const form = event.target;

    const templateParams = {
      form_name: form.form_name.value,
      to_name: '가맹문의',
      request_cellphone1: form.request_cellphone1.value,
      request_cellphone2: form.request_cellphone2.value,
      request_cellphone3: form.request_cellphone3.value,
      form_email: form.form_email.value,
      form_email_domain: form.form_email_domain2.value,
      form_content: form.form_content.value,
      person_field: form.person_field.value,
      person_field2: form.person_field2.value,
    };

    emailjs
      .send(
        'service_cfecwow',
        'template_2e2ft4t',
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
    // 이 함수에서는 각 입력 필드를 초기화합니다.
    document.getElementById('form_name').value = '';
    document.getElementById('request_cellphone1').value = '';
    document.getElementById('request_cellphone2').value = '';
    document.getElementById('request_cellphone3').value = '';
    document.getElementById('form_email').value = '';
    document.getElementById('form_email_domain2').value = '';
    document.getElementById('form_content').value = '';
    // 동의 라디오 버튼도 초기화합니다.
    document.getElementById('person_y').checked = false;
    document.getElementById('person_n').checked = false;
    document.getElementById('person_y2').checked = false;
    document.getElementById('person_n2').checked = false;
  };

  return (
    <div>
      <div
        className='Consulting'
        style={{
          backgroundColor: '#EEEEEE',
        }}
      >
        <div
          className='div_color1'
          style={{
            backgroundColor: '#FFFFFF',
            width: '1400px',
          }}
        >
          <div className='div_border'>
            <p style={{ fontSize: '50px' }}></p>
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
                fontSize: '32px',
                marginTop: '16px',
              }}
            >
              창업 문의
            </h2>
            <h4
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
              }}
            >
              간편하고 확실한 프렌차이즈 창업으로 성공의 문을 열어보세요!
              함께하는 우리의 지원으로 더 큰 성공을 이루어봅시다!
            </h4>
          </div>

          <div
            style={{
              blockSize: '1000px',
              width: '1200px',
              marginLeft: '100px',
            }}
          >
            <form onSubmit={sendEmail}>
              <div
                style={{
                  marginBottom: '20px',
                  width: '1000px',
                }}
              >
                <div className='div_style'>
                  <label htmlFor='form_name' className='label_style'>
                    성 함<span style={{ color: 'red' }}> * </span>
                  </label>
                  <input
                    type='text'
                    name='form_name'
                    id='form_name'
                    className='input_style'
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                  />
                </div>
                <div className='div_style'>
                  <tr id='form_cellphpone1'>
                    <label className='label_style'>
                      휴대폰<b style={{ color: 'red' }}> *</b>
                    </label>

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
                  </tr>
                </div>

                <div className='div_style'>
                  <label htmlFor='form_email' className='label_style'>
                    이메일
                    <span className='required' style={{ color: 'red' }}>
                      {' '}
                      *
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
                  <label htmlFor='form_content' className='label_style'>
                    추가 내용<span> </span>
                  </label>
                  <textarea
                    name='form_content'
                    id='form_content'
                    placeholder=' 추가문의 사항이 있는 경우 남겨주세요.'
                    style={{
                      marginLeft: '50px',
                      marginTop: '10px',
                      width: '1000px',
                      height: '100px',
                      marginBottom: '10px',
                    }}
                    onKeyUp={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className='span_style'>
                현재 {wordCount} / 최대 4000byte (한글 2000자, 영문 4000자)
              </div>
              <div
                style={{
                  marginLeft: '100px',
                  marginTop: '20px',
                }}
              >
                <label>
                  더빛남 창업문의 신청 관련 개인정보 수집동의
                  <span style={{ color: 'red' }}> (필수)</span>
                </label>
                <div
                  style={{
                    backgroundColor: '#EEEEEE',
                    width: '800px',
                    marginLeft: '150px',
                    padding: '10px',
                    marginTop: '10px',
                  }}
                >
                  1. 개인정보의 수집 및 이용 목적 - 브랜드 창업 문의에 대한
                  원활한 상담 - 더빛남 창업 관련 정보 안내 <br></br> 2. 수집하는
                  개인정보의 항목 - 이름, 휴대폰번호, 이메일<br></br> 3.
                  개인정보 보유 및 이용기간 - 이용 목적 달성 후, 내부규정에 따라
                  보관 및 지체없이 파기 ※귀하께서는 위 개인정보 수집, 이용에
                  대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 창업상담
                  서비스 이용에 제한이 될 수 있습니다.
                </div>
                <input
                  style={{ marginTop: '15px' }}
                  type='radio'
                  value='동의합니다.'
                  name='person_field'
                  id='person_y'
                />
                <label htmlFor='person_y'>&nbsp;</label>
                <label htmlFor='person_y'>동의합니다.</label>
                <input
                  type='radio'
                  value='동의하지 않습니다.'
                  name='person_field'
                  id='person_n'
                />
                <label htmlFor='person_n'>&nbsp;</label>
                <label htmlFor='person_n'>동의하지 않습니다.</label>
              </div>
              <div
                style={{
                  marginLeft: '100px',
                  marginTop: '20px',
                }}
              >
                <label>마케팅 정보제공 용도로의 이용 동의</label>
                <span style={{ color: 'red' }}> (선택)</span>
                <div
                  style={{
                    backgroundColor: '#EEEEEE',
                    width: '800px',
                    marginLeft: '150px',
                    padding: '10px',
                    marginTop: '10px',
                  }}
                >
                  수집한 위 개인정보를 더빛남에서 제공하는 창업관련 자료 및
                  정보수신에 동의합니다. ※선택 사항 미 동의에 따른 상담서비스
                  이용 제한, 불이익은 없습니다. 다만, 더빛남에서 제공하는
                  창업자료 및 제안정보 등은 제공받으실 수 없습니다.
                </div>
                <input
                  style={{ marginTop: '15px' }}
                  type='radio'
                  value='동의합니다.'
                  name='person_field2'
                  id='person_y2'
                />
                <label htmlFor='person_y2'>&nbsp;</label>
                <label htmlFor='person_y2'>동의합니다.</label>
                <input
                  type='radio'
                  value='동의하지 않습니다.'
                  name='person_field2'
                  id='person_n2'
                />
                <label htmlFor='person_n2'>&nbsp;</label>
                <label htmlFor='person_n2'>동의하지 않습니다.</label>
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
                  문의 등록
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
            </form>
            <div>
              <h1 style={{ fontSize: '100px' }}> </h1>
            </div>
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
