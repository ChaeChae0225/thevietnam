import mainLogo from '../assets/image1.jpg';
import subLogo1 from '../assets/image2.png';
import subLogo2 from '../assets/image3.png';
import subLogo3 from '../assets/image4.png';
import './mainpage.css';
import Header from '../components/header';
import TopButton from '../components/TopButton';

function Mainpage() {
  return (
    <div>
      <Header></Header>
      <div className='content_box'>
        <img src={mainLogo} alt='mainLogo' id='mainLogo' />
        <div className='main_content1'>
          <div className='main_content1_text'>[Brand]</div>
          <div className='main_content1_text2'>
            정성과 진심을 담은 건강한 한그릇을 만들겠다는 마음으로 손님을
            맞이하겠습니다.
          </div>
        </div>
        <div className='main_content2'>
          더빛남(The Viet Nam)은
          <br />
          베트남(Vietnam)을 한국식으로 해석하여
          <br />
          더 빛나는 고유한 음식이라는 뜻을 더해
          <br />
          모두 즐길수 있는 메뉴를 선보이고자 합니다.
        </div>
        <img src={subLogo1} alt='subLogo1' id='subLogo1' />
        <div className='main_content3'>
          더빛남은 베트남식 쌀국수에 한국의 맛을 가미해 선보이고 있습니다.
          <br />
          고기와 한약재를 잔득 넣어 6시간 동안 직접 끓여낸 <br />
          정성스러운 육수로 맛있는 음식을 제공해드리겠습니다.
          <br />
          당일생산, 당일제공을 원칙으로 하며
          <br />
          고기를 잔뜩 넣은 더빛남의 독보적인 고기육수의 깊은맛에 초점을 맞춘
          <br />
          보양식같은 음식을 제공합니다.
        </div>
        <img src={subLogo2} alt='subLogo2' id='subLogo2' />
        <div className='main_content3'>
          대표적으로 쫄깃한 식감으로 씹을수록 육수의 맛이 세어나오는
          <br />
          도가니가 들어간 “차돌양지도가니쌀국수”가 있습니다.
          <br />
          이외의 다양한 쌀국수를 육수와 함께 먹는 방식 혹은
          <br />
          고기토핑, 숙주, 면, 그리고 육수에 소스를 취향껏 비벼먹는 방식 등<br />
          기호에 맞게 음식을 즐길 수 있는 방법을 모색하고 있습니다.
          <br />
        </div>
        <img src={subLogo3} alt='subLogo3' id='subLogo3' />
        <div className='main_content3'>
          더빛남은 모두가 훌륭한 식사를 더욱 풍성하게
          <br />
          즐길 수 있도록 빛나는 장소들을 연구 중입니다.
          <br />
          더불어 더욱 신선한 서비스와 제품, 성장하는 모습으로
          <br />
          모두가 만족할 수 있는 브랜드로 거듭나길 원합니다.
        </div>
      </div>
      <TopButton />
    </div>
  );
}

export default Mainpage;
