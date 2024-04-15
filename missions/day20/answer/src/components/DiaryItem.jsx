import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  /* 1. DiaryDispatchContext로 부터 일기를 삭제하는 onDelete 공급받기 */
  const { onDelete } = useContext(DiaryDispatchContext);

  const nav = useNavigate();

  const goDiaryPage = () => {
    nav(`/diary/${id}`);
  };

  const goEditPage = () => {
    nav(`/edit/${id}`);
  };

  /* 2. "삭제하기" 버튼이 클릭되면 실행할 이벤트 핸들러 함수 */
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={goDiaryPage} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={goEditPage} text={"수정하기"} />
        {/* 3. NEGATIVE 타입의 삭제하기 버튼 추가하기 (스타일은 DiaryItem.css에 추가함) */}
        <Button
          type={"NEGATIVE"}
          onClick={onClickDelete}
          text={"삭제하기"}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
