import './Process.css';
import { TfiMapAlt } from 'react-icons/tfi';
import { IoSchoolOutline } from 'react-icons/io5';
import { GiDiscussion } from 'react-icons/gi';
import { FaDoorOpen } from 'react-icons/fa';
import { BsShop, BsArrowRightShort } from 'react-icons/bs';
import { FiUserCheck } from 'react-icons/fi';

function Process() {
  return (
    <div className='first_box'>
      <div className='process_box'>
        <div className='process_box1'>
          <div className='process_title'>창업 안내</div>
          <div className='process_sub_title'>
            가맹점 창업을 위한 절차를 설명드리니 참고가 되시길 바랍니다.
          </div>
        </div>
        <div className='process_box2'>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.1</div>
              <div className='icon_box'>
                <TfiMapAlt size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>상권입지확인</div>
              <div className='step_process_subcontent'>
                상권 및 입지확인,
                <br />약 1-2주 소요
              </div>
            </div>
          </div>
          <div>
            <BsArrowRightShort size='40px' color='rgba(8, 84, 39, 1)' />
          </div>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.2</div>
              <div className='icon_box'>
                <FiUserCheck size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>본사 승인</div>
              <div className='step_process_subcontent'>
                더빛남 본사 검토 후,가맹점 개설 여부 결정
                <span>(정보공개서, 가맹계약서 메일로 발송/확인)</span>
              </div>
            </div>
          </div>
          <div>
            <BsArrowRightShort size='40px' color='rgba(8, 84, 39, 1)' />
          </div>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.3</div>
              <div className='icon_box'>
                <IoSchoolOutline size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>교육</div>
              <div className='step_process_subcontent'>
                점주 교육 기간 최소 14일<span>(교육 불성실 시 재교육)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='process_box2'>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.4</div>
              <div className='icon_box'>
                <GiDiscussion size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>
                매장 인테리어 및 시설공사 협의
              </div>
              <div className='step_process_subcontent'>
                약 3주 내외 소요,현장 상황에 따라 변동 가능
              </div>
            </div>
          </div>
          <div>
            <BsArrowRightShort size='40px' color='rgba(8, 84, 39, 1)' />
          </div>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.5</div>
              <div className='icon_box'>
                <FaDoorOpen size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>개점준비 및 가오픈</div>
              <div className='step_process_subcontent'>
                오픈 준비사항 최종 점검
              </div>
            </div>
          </div>
          <div>
            <BsArrowRightShort size='40px' color='rgba(8, 84, 39, 1)' />
          </div>
          <div className='process_box3'>
            <div className='step_box'>
              <div className='step'>STEP.6</div>
              <div className='icon_box'>
                <BsShop size='70px' color='rgba(8, 84, 39, 1)' />
              </div>
            </div>
            <div className='step_conent_box'>
              <div className='step_process_content'>개점</div>
              <div className='step_process_subcontent'>가맹점 정식 오픈</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
